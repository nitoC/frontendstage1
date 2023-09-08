let time = document.getElementById("time");
let dayElement = document.getElementById("day");

const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const date = new Date();
  let day = weekday[date.getDay()];
  dayElement.innerHTML= day

setInterval(()=>{
    time.innerHTML = (new Date().toISOString())
},10)