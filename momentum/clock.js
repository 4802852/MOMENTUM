const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");
const clockDay = clockContainer.querySelector("h3");

function getDayName(number) {
    week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return week[number];
}

function getTime() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const dates = date.getDate();
    const day = getDayName(date.getDay());
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    clockDay.innerText = `${year}.${month < 10 ? `0${month}` : month}.${dates < 10 ? `0${dates}` : dates}. ${day}`;
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}

init()