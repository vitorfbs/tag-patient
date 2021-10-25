const current_date = new Date();

formated_date = `${current_date.getDay()}/${current_date.getMonth()}/${current_date.getFullYear()}`;
document.getElementById("date").innerHTML = formated_date;

formated_time = `${current_date.getHours()}:${current_date.getMinutes()}`;
document.getElementById("time").innerHTML = formated_time;