var btn = document.querySelector("#btn_add");
var input = document.querySelector("#goods");
var arr = [];

btn.onclick = function() {
    if(input.value != null && input.value != undefined && input.value != ''){
        arr.push(input.value);
        input.value = "";
    }
    console.log(arr)
}