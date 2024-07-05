const monthName = document.getElementById("month");
const dayName = document.getElementById("day");
const dayNum = document.getElementById("day-num");
const yearNum = document.getElementById("year");

const date = new Date ();
const month = date.getMonth();
monthName.innerText = date.toLocaleString("en", {month:"long"});

dayName.innerText = date.toLocaleString("en", {weekday:"long"});

dayNum.innerText = date.getDate();

yearNum.innerText = date.getFullYear()

