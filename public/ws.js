var ws;
var wsUri = "ws://127.0.0.1:1880/ws/simple";
var loc = window.location;
console.log(loc);
if (loc.protocol === "https:") { wsUri = "wss:"; }

function wsConnect() {
    console.log("connect",wsUri);
    ws = new WebSocket(wsUri);
    ws.onmessage = function(msg) {
        var data = JSON.parse(msg.data);
        document.getElementById('rfid').innerHTML = data["rfid"];
        document.getElementById('name').innerHTML = data["name"];
        document.getElementById('gender').innerHTML = data["gender"];
        document.getElementById('blood_type').innerHTML = data["blood_type"];
        generateHistoryTable(data["history"]);
        
    }
    ws.onopen = function() {
        // document.getElementById('status').innerHTML = "connected";
        console.log("connected");
    }
    ws.onclose = function() {
        // document.getElementById('status').innerHTML = "not connected";
        setTimeout(wsConnect,3000);
    }
}

function generateExamsTable(history){
  console.log(history);

  var body = document.getElementById("history_table");
  body.innerHTML = "";

  // create elements <table> and a <tbody>
  var tbl = document.createElement("table");
  tbl.classList.add("table");
  
  var tableHeader = document.createElement("thead");
  var headerRow = document.createElement("tr");

  var header = document.createElement("th");
  var headerText = document.createTextNode("Médico");
  header.appendChild(headerText);
  headerRow.appendChild(header);

  var header = document.createElement("th");
  var headerText = document.createTextNode("Especialidade");
  header.appendChild(headerText);
  headerRow.appendChild(header);

  var header = document.createElement("th");
  var headerText = document.createTextNode("Data");
  header.appendChild(headerText);
  headerRow.appendChild(header);

  tableHeader.appendChild(headerRow);
  tbl.appendChild(tableHeader);

  var header = document.createElement("th");
  var headerText = document.createTextNode("Hora");
  header.appendChild(headerText);
  headerRow.appendChild(header);


  var tblBody = document.createElement("tbody");
  
  for (var i = 0; i < history.length; i++) {
    // table row creation
    var row = document.createElement("tr");

      var cell = document.createElement("td");
      var cellText = document.createTextNode(history[i]["medic"]);
      cell.appendChild(cellText);
      row.appendChild(cell);

      var cell = document.createElement("td");
      var cellText = document.createTextNode(history[i]["specialty"]);
      cell.appendChild(cellText);
      row.appendChild(cell);

      var cell = document.createElement("td");
      var cellText = document.createTextNode(history[i]["date"]);
      cell.appendChild(cellText);
      row.appendChild(cell);

      var cell = document.createElement("td");
      var cellText = document.createTextNode(history[i]["time"]);
      cell.appendChild(cellText);
      row.appendChild(cell);

    //row added to end of table body
    tblBody.appendChild(row);
  }

  // append the <tbody> inside the <table>
  tbl.appendChild(tblBody);
  // put <table> in the <body>
  body.appendChild(tbl);
  // tbl border attribute to 
  tbl.setAttribute("border", "2");
}

function generateHistoryTable(history){
  console.log(history);

  var body = document.getElementById("history_table");
  body.innerHTML = "";

  // create elements <table> and a <tbody>
  var tbl = document.createElement("table");
  tbl.classList.add("table");
  
  var tableHeader = document.createElement("thead");
  var headerRow = document.createElement("tr");

  var header = document.createElement("th");
  var headerText = document.createTextNode("Médico");
  header.appendChild(headerText);
  headerRow.appendChild(header);

  var header = document.createElement("th");
  var headerText = document.createTextNode("Especialidade");
  header.appendChild(headerText);
  headerRow.appendChild(header);

  var header = document.createElement("th");
  var headerText = document.createTextNode("Data");
  header.appendChild(headerText);
  headerRow.appendChild(header);

  tableHeader.appendChild(headerRow);
  tbl.appendChild(tableHeader);

  var header = document.createElement("th");
  var headerText = document.createTextNode("Hora");
  header.appendChild(headerText);
  headerRow.appendChild(header);


  var tblBody = document.createElement("tbody");
  
  for (var i = 0; i < history.length; i++) {
    // table row creation
    var row = document.createElement("tr");

      var cell = document.createElement("td");
      var cellText = document.createTextNode(history[i]["medic"]);
      cell.appendChild(cellText);
      row.appendChild(cell);

      var cell = document.createElement("td");
      var cellText = document.createTextNode(history[i]["specialty"]);
      cell.appendChild(cellText);
      row.appendChild(cell);

      var cell = document.createElement("td");
      var cellText = document.createTextNode(history[i]["date"]);
      cell.appendChild(cellText);
      row.appendChild(cell);

      var cell = document.createElement("td");
      var cellText = document.createTextNode(history[i]["time"]);
      cell.appendChild(cellText);
      row.appendChild(cell);

    //row added to end of table body
    tblBody.appendChild(row);
  }

  // append the <tbody> inside the <table>
  tbl.appendChild(tblBody);
  // put <table> in the <body>
  body.appendChild(tbl);
  // tbl border attribute to 
  tbl.setAttribute("border", "2");
}