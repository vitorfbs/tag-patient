const SerialPort = require('serialport')
const Readline = require('@serialport/parser-readline');

const port = new SerialPort('/dev/cu.usbmodem143201', { autoOpen: false })
const parser = port.pipe(new Readline({ delimiter: '\r\n' })); 

const admin = require('firebase-admin');
const serviceAccount = require('./fiap-challenge-5f3be-c6f04c0d0d34.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

var latesSusIdtUsed = null;

port.open(function (err) {
  if (err) {
    return console.log('Error opening port: ', err.message)
  }

  // Because there's no callback to write, write errors will be emitted on the port:
  port.write('main screen turn on')
})
// Switches the port into "flowing mode"
parser.on('data', function (data) {
    console.log('Data:', data.toString('utf8'));

    var newSusId = data.toString('utf8');

    if(newSusId != latesSusIdtUsed) {
      getUserBySusId(newSusId)
    }

    latesSusIdtUsed = data.toString('utf8');

  });

// The open event is always emitted
port.on('open', function() {
  // open logic
})

const db = admin.firestore();
const usersReference = db.collection('users');

async function getUserBySusId(susId) {
  const snapshot = await usersReference.where('sus_id', '==', susId).get();

  if (snapshot.empty) {
    console.log('No matching documents.');
    return;
  }
  
  snapshot.forEach(doc => {
    console.log(doc.id, '=>', doc.data());
  });
}



