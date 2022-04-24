var arr = ["111", "222", "333", "444"];
// var arr = [111, 222, 333, 444];

function showArr(array) {
    array.forEach(item => {
        console.log(item);
    })
}
// ý 1
var copyArr = [];
for(var i = 0; i < arr.length; i++){
    if(arr[i] != 222){
        copyArr.push(arr[i]);
    }
}
if(copyArr.length == 0){
    console.log("mảng không có ptu 222");
}else{
    arr = copyArr;
    //showArr(arr);
}

// ý 2
for(var i = 0; i < arr.length; i++){
    if(arr[i] === 444){
        arr.splice(i, 1, '555')
    }
}
//showArr(arr);

// ý 3
arr.forEach((item, index) => {
    if(typeof(item) == 'string'){
        var number = parseInt(item);
        arr.splice(index, 1, number);
    }   
})
showArr(arr);