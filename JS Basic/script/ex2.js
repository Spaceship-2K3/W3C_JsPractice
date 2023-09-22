/**
 *   ! JavaScript: Print the contents of the current window
 *   todo : Write a JavaScript program to print the current window contents
 */
const btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
    window.print();
});
