// element
var block = document.getElementById("block"); 
var h1 = document.getElementsByClassName("h1");
var tagName = document.getElementsByTagName("h1");
var query1 = document.querySelector(".h1");
var query2 = document.querySelectorAll(".h1");
console.log([query2])

var h2InBlock = block.querySelector("h2");
console.log([h2InBlock])
// attribute
h2InBlock.getAttribute("id");
h2InBlock.setAttribute("id", "123");
h2InBlock.setAttribute("style", "width: 120px; background: blue");

var parent = document.querySelector(".block2");
var btn = parent.querySelector("button");
var text = parent.querySelector("h1");
btn.onclick = function() {
    if(text.getAttribute("check") == "checked"){
        text.setAttribute("class", "change");
        text.setAttribute("check", "none");
    }else {
        text.setAttribute("class", "default");
        text.setAttribute("check", "checked");
    }
}
// text
// innerText textContent
// innerHTML, outerHTML
text.innerHTML = "<a href='abc.html'>Hello abc</a>";
console.log(text.innerHTML);
var input = document.querySelector("#nhap");
var textInput = document.querySelector(".text-input");

input.onclick = function(e) {
    textInput.innerText = e.target.value;
}

// sự kiện trong js
input.addEventListener('click' , function() {
    console.log("avc")
})



document.querySelector(".check").addEventListener('click' , viec1);
document.querySelector(".check").addEventListener('click' , viec2);
function viec1() {
    console.log("1")
}
function viec2() {
    console.log("2")
}
setTimeout(function() {
    document.querySelector(".check").removeEventListener('click' , viec2);
}, 3000)