// Number
// String 
// undefined
// null
// Boolean

// Object (Array) 
// Function

function ngTo(a) {
    var check = true;
    for(var i = 2; i < a ; i++){
        if(a % i == 0){
            check = !check;
            break;
        }
    }
    if(check){
        console.log(`${a} la so nto`);
    }else{
        console.log(`${a} k la so nto`);
    }
}
