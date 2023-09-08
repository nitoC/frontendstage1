let time = document.getElementById("time");

setInterval(()=>{
    time.innerHTML= ((new Date().toISOString()).slice(0, -5))+"Z"
},1000)