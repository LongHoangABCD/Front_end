var inputName = document.querySelector("#name");
var inputAge = document.querySelector("#age");
var inputAddress = document.querySelector("#address");
var inputClass = document.querySelector("#class");
var btnSendData = document.querySelector("#btn-send");
var arrStudent = [];
btnSendData.addEventListener("click", inputData);

function inputData() {
    var obj = {
        'name' : inputName.value,
        'age' : inputAge.value,
        'address' : inputAddress.value,
        'class' : inputClass.value,
    }
    checkAge(obj);
    checkKeyName(obj);
    arrStudent.push(obj);


    readData(arrStudent);
}

function checkAge(objectStudent) {
    if(objectStudent.age > 20)
        objectStudent.maturity  = true;
    else
        objectStudent.maturity  = false;
} 

function checkKeyName(objectStudent)  {
    var studentName = objectStudent.name;
    var checkFullName = false;
    for(var i = 0; i< studentName.length ; i++){
        if(studentName.charAt(i) == " "){
            checkFullName = !checkFullName;
            break;
        }
    }
    if(checkFullName){
        objectStudent['full-name'] = objectStudent.name;
        delete objectStudent.name;
    }
}


function readData(arrStudent) {
    var itemString = "";
    var blockData = document.querySelector(".block-data");
    arrStudent.forEach((item, index) => {
        var viewItem = `
            <div class="block-item">
                <p>
                    <span>Tên sinh viên: </span>
                    <span>${item.name != undefined ? item.name : item['full-name']}</span>
                </p>
                <p>
                    <span>Tuổi sinh viên: </span>
                    <span>${item.age}</span>
                </p>
                <p>
                    <span>Địa chỉ sinh viên: </span>
                    <span>${item.address}</span>
                </p>
                <p>
                    <span>Lớp sinh viên: </span>
                    <span>${item.class}</span>
                </p>
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal"
                data-id="${index}">
                    Sửa dữ liệu
                </button>

                <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#deleteModal"
                data-id="${index}">
                    Xóa dữ liệu
                </button>
                <hr>
            </div>
        `;
        itemString = itemString + viewItem;
    })
    blockData.innerHTML = itemString;
}


var btnUpdate = document.querySelector("#update-data");
btnUpdate.addEventListener("click", function() {
    var inputId = document.querySelector(".id-key");
    var nameUpdate =  document.querySelector("#nameUpdate");
    var ageUpdate =  document.querySelector("#ageUpdate");
    var addressUpdate =  document.querySelector("#addressUpdate");
    var classUpdate =  document.querySelector("#classUpdate");
    var objUpdate = {
        'name' : nameUpdate.value,
        'age' : ageUpdate.value,
        'address' : addressUpdate.value,
        'class' : classUpdate.value,
    }
    checkAge(objUpdate);
    checkKeyName(objUpdate);
    arrStudent.splice(inputId.value, 1, objUpdate);

    readData(arrStudent);
})

var deleteData = document.querySelector("#delete-data");
deleteData.addEventListener("click" , function() {
    var inputId = document.querySelector(".id-key-delete");
    arrStudent.splice(inputId.value, 1);
    readData(arrStudent);
})
