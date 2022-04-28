var inputText = document.querySelector("#input-text");
var buttonOne = document.querySelector("#btn-one");
// ý 1
buttonOne.addEventListener("click", function() {
    var text = inputText.value;
    text = text.trim();
    var copyString = "";

    for(var i = 0; i < text.length; i++){
        if(text.charAt(i) != " ")
            copyString = copyString + text.charAt(i);
        else{
            if(text.charAt(i + 1) != " ")
                copyString = copyString + text.charAt(i);
        }
    }
    inputText.focus();
    inputText.value = copyString;
})

// y2
var buttonTwo = document.querySelector("#btn-two");
buttonTwo.onclick = function() {
    var text = inputText.value;
    if(text.length > 10){
        var arr = text.split(" ");
        var copy = "";
        arr.forEach((item, index) => {
            if(index == 0)
                copy = copy + item.toUpperCase();
            else    
                copy = copy + item;
            if(index != arr.length - 1)
                copy = copy + " ";
        })
        inputText.value = copy;
    }else if(text.length < 10){
        var arr = text.split(" ");
        var copy = "";
        arr.forEach((item, index) => {
            if(index == arr.length - 1)
                copy = copy + item.toUpperCase();
            else    
                copy = copy + item;
            if(index != arr.length - 1)
                copy = copy + " ";
        })
        inputText.value = copy;
    }
}

// ý 3