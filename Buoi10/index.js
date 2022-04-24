var students = [
    {
        name: "Long",
        age: 23, 
        address: "VN"
    },{
        name: "Hung",
        age: 18, 
        address: "VN"
    },{
        name: "Quyết",
        age: 24, 
        address: "Campuchia"
    }
]
students.forEach(student => {
    if(student.age >= 20){
        console.log(student.name)
    }
})

var obj1 =  {
    name: "Long",
    age: 23, 
    address: "VN"
};
var obj2 =  {
    name2: "Hung",
    age2: 18, 
    address2: "VN"
};

console.log({
    ...obj1,
    ...obj2
})