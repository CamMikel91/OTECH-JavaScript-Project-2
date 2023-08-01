let myDiv = document.getElementById("div1");
let myTitle = myDiv.title;
window.alert(myTitle);

let newDiv = document.createElement("div");
newDiv.title = "Lucky!";
let newDivText = document.createTextNode("See you!");
newDiv.appendChild(newDivText);
myDiv.appendChild(newDiv);