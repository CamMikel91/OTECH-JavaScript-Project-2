let d1 = document.getElementById("div1");
let answer_link = document.getElementById("answer_link");

answer_link.onclick = function() {
    d1.innerHTML = "That is easy, the answer is <strong>4</strong>";
    return false;
};