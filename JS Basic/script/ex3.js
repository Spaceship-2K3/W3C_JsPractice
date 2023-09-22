/**
 * !Write a JavaScript program to get the current date.
 *   todo : Expected Output :
 *   todo : mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
 */
let creDay = new Date().getDay();
let creMonth = new Date().getMonth();
let creYear = new Date().getFullYear();
let day = creDay > 10 ? creDay : `0${creDay}`;
let month = creMonth > 10 ? creMonth : `0${creMonth}`;

let today1 = `${month} - ${day} - ${creYear} \n`;
let today2 = `${month} / ${day}  ${creYear} \n`;
let today3 = `${day} - ${month} - ${creYear} \n`;
let today4 = `${day} / ${month} / ${creYear} \n`;

console.log(today1, today2, today3, today4);
