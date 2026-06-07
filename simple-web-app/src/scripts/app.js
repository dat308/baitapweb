// This file contains the JavaScript code for the web application.
// It handles interactivity and dynamic behavior on the web page.

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('myButton');
    const output = document.getElementById('output');

    button.addEventListener('click', () => {
        output.textContent = 'Button was clicked!';
    });
});