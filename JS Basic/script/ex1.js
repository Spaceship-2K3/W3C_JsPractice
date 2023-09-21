/*
    ! JavaScript: Display the current day and time in a specific format
    Write a JavaScript program to display the current day and time in the following format.
    Today is : Tuesday.
    Current time is : 10 PM : 30 : 38
*/

const dayEle = document.querySelector(".day");
const hoursEle = document.querySelector(".hour");
const minutesEle = document.querySelector(".minutes");
const secondEle = document.querySelector(".second");
const ampmEle = document.querySelector(".AMPM");
const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

function getDate() {
    let day = weekdays[new Date().getDay()];

    let hour = new Date().getHours();
    let minutes = new Date().getMinutes();
    let second = new Date().getSeconds();
    let ampm = hour > 12 ? "PM" : "AM";
    dayEle.innerHTML = day;
    hoursEle.innerHTML = hour;
    minutesEle.innerHTML = minutes;
    secondEle.innerHTML = second;
    ampmEle.innerHTML = ampm;
    setTimeout(() => {
        getDate();
    }, 1000);
}
getDate();
