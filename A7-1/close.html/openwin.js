let nw_win = document.getElementById("nwin"),
    cs_win = document.getElementById("cwin"),
    my_win = "";
nw_win.addEventListener("click", function(event) {
    event.preventDefault();
    my_win = window.open("newpage.html","cool","width=400,height=300,status=yes");
}, false);
cs_win.addEventListener("click", function(event) {
    event.preventDefault();
    my_win.close();
}, false);