const admin = require('firebase-admin');
const serviceAccount = require('./fiap-challenge-5f3be-c6f04c0d0d34.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
const usersReference = db.collection('users');

async function getUserBySusId() {
  const snapshot = await usersReference.where('sus_id', '==', '123').get();

  if (snapshot.empty) {
    console.log('No matching documents.');
    return;
  }
  
  snapshot.forEach(doc => {
    console.log(doc.id, '=>', doc.data());
  });
}

getUserBySusId()
