function set_it() {
    let userName = prompt("Enter your name", ""),
        cookieText = `userName=` + encodeURIComponent(userName),
        expDate = ";expires=Jan, 1 2025 12:00:00 UTC";
    cookieText += expDate;
    document.cookie = cookieText;
}

function read_it() {
    let theCookie = document.cookie,
        greeting = document.getElementById("greeting"),
        namePair = theCookie.split("="),
        name = namePair[1];
    if (theCookie) {
        greeting.innerHTML = "Welcome, " + decodeURIComponent(name) + "!"; 
    }
    else {
        set_it();
        read_it();
    } 
}
read_it();