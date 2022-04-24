var countRat = 0, countTiger = 0;
var animals = [
    'Fish', 'Fish', 'Rat', 'Tiger', 'Dog','Rat' ,'Duck', 'Cat', 'Tiger', 'Fish', 'Cat'
];
function showAnimals (animals) {
    animals.forEach(item => {
        console.log(item);
    });
}


// ý 1
animals.forEach(item => {
    if(item == 'Rat')
        countRat++;
    if(item == 'Tiger')
        countTiger += 1;
});

if(countRat == 0 && countTiger == 0){
    console.log("Mảng không có con chuột hay hổ nào");
}else{
    console.log("Số con chuột: " + countRat);
    console.log("Số con hổ: " + countTiger);
}
// ý 2
var checkDog = false;
animals.forEach(item => {
    if(item == 'Dog'){
        checkDog = true;
    }  
});
if(checkDog) {
    animals.push('Bird', 'Spider');
}
//showAnimals(animals);

// ý 3
var indexCat = [];
var checkCat = false;
animals.forEach((item, index) => {
    if(item == 'Cat'){
        indexCat.push(index);
        checkCat = true;
    }  
});
indexCat.forEach(item => {
    animals.splice(item, 1, 'Elephant');
})
if(!checkCat) {
    console.log("Không có con mèo nào trong mảng")
}
//showAnimals(animals);

// ý 4
var copyAnimals = [];
animals.forEach(item => {
    if(item != 'Fish'){
        copyAnimals.push(item)
    }  
});
animals = copyAnimals;
showAnimals(animals);
