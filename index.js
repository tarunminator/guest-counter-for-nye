let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
let timeCountEl = document.getElementById("time-count-el")
var date = new Date();
var current_date = (date.getMonth()+1)+"/"+ date.getDate()+"\n";
var current_mins = String(date.getMinutes()).padStart(2, "0");
var current_time = date.getHours()+":" + current_mins;

var date_time = current_date+" "+current_time + "\n";	

function init(){
    saveEl.style.whiteSpace = "pre";
    saveEl.textContent += current_date;
}

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
//	document.getElementById("p1").innerHTML = date_time;
    timeCountEl.style.whiteSpace = "pre";
    let countStr = current_time+"  -  "+count + "\n"
    timeCountEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

