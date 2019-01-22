// Setup a simple application with just index.html and main.js (no browserify/grunt and no React).

// 1) This application should display the current date & time on the DOM
// 2) There should be a button that when clicked, updates the current date & time on the DOM
// 3) Push it up to Github 
// 4) Once you are finished, slack Emily or Leah your repo link

// *notes: this is a simple web application, so you will need to run the http server

let outputArticle = document.querySelector(".output")
let timeButton = document.createElement("button")
timeButton.textContent = "Current Time"

function myFunction() {
var d = new Date();
var n = d.getTime();
outputArticle.innerHTML = d;
console.log("n",n)
}
timeButton.addEventListener("click", () => {
    console.log("button clicked")
    
    
})
outputArticle.appendChild(timeButton)