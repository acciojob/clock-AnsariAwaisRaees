//your JS code here. If required.
const clockTimer = document.getElementById("timer");
const d = new Date();

var date = d.getDate();
var month = d.getMonth();
var year = d.getFullYear();
var hour = d.getMonth();
var min = d.getMinutes();
var sec = d.getSeconds();

date = date < 10 ? "0"+date : date ;
month = month < 10 ? "0"+ month : month ;
min = min < 10 ? "0"+ min : min ;

clockTimer.innerHTML = date+"/"+month+"/"+year+", "+hour+":"+min+":"+sec ;
console.log(clockTimer.innerHtml);