const timeDiv = document.getElementById("clock");
const todayDiv = document.getElementById("today");
const dayList = ["일", "월", "화", "수", "목", "금", "토"];

String.prototype.format = function() {
    var formatted = this;
    for( var arg in arguments ) {
        formatted = formatted.replace("{" + arg + "}", arguments[arg]);
    }
    return formatted;
};

function getTime() 
{let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth();
    let day = now.getDate();
    let dayNumber = now.getDay();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    let noon = "오전";
    if (hour > 11) {noon ="오후";hour =hour- 12;if (hour ==0) {hour =12;}}
    todayDiv.textContent = "{0}년 {1}월 {2}일 {3}요일".format(year, month+1, day, dayList[dayNumber]);
    timeDiv.textContent = noon + " " + formatNumber(hour) + ":" + formatNumber(minute) + ":" + formatNumber(second);}

getTime();
setInterval(getTime, 1000);

function formatNumber(num){if (num < 10){return "0"+ num;} return num;}