function handleSubmit() {
    event.preventDefault()
    document.querySelector("#firstname").value = ""
    document.querySelector("#lastname").value = ""
    document.querySelector("#designation").value = ""
    document.querySelector("#phone").value = ""
    var formShow = document.querySelector("#form_div")

    formShow.style.display = "block";
}
const handleCancle = () => {
    event.preventDefault()
    var formShow = document.querySelector("#form_div")
    formShow.style.display = "none";
}

function user_input_details() {
    event.preventDefault()
    var firstname = document.querySelector("#firstname").value
    var lastname = document.querySelector("#lastname").value
    var designation = document.querySelector("#designation").value
    var phone = document.querySelector("#phone").value
    // console.log(firstname,lastname,designation,phone)
    var one = document.querySelector("#one")
    var two = document.querySelector("#two")
    var three = document.querySelector("#three")
    var four = document.querySelector("#four")
    if (firstname == "" || firstname == null) {
        one.innerHTML = "First Name is Required"
    }
    if (lastname == "" || lastname == null) {
        two.innerHTML = "Last Name is Required"
    }
    if (designation == "" || designation == null) {
        three.innerHTML = "Designation is Required"
    }
    if (phone == "" || phone.length !== 10) {
        four.innerHTML = "Contact is Required"
    } else if (firstname.length > 0 && lastname.length > 0 && designation.length > 0 && phone.length == 10) {
        one.innerHTML = ""
        two.innerHTML = ""
        three.innerHTML = ""
        four.innerHTML = ""
        var empty = document.querySelector("#empty")
        empty.style.display = "none"
        var tr = document.createElement("tr")
        tr.style.border = "1px solid #888888";
        var td1 = document.createElement("td")
        td1.innerHTML = firstname;
        var td2 = document.createElement("td")
        td2.innerHTML = lastname;
        var td3 = document.createElement("td")
        td3.innerHTML = designation;
        var td4 = document.createElement("td")
        td4.innerHTML = phone;
        var td5 = document.createElement("td")
        var edit = document.createElement("button")
        edit.innerHTML = "Edit"
        edit.id = "edit"
        edit.addEventListener("click", (e) => edit_tr(e))
        var remove = document.createElement("button")
        remove.innerHTML = "Remove"
        remove.id = "remove"
        remove.addEventListener("click", (e) => remove_tr(e))
        td5.append(edit, remove)
        tr.append(td1, td2, td3, td4, td5)
        document.querySelector("#tbody").append(tr)
        handleCancle()
        document.querySelector("#firstname").value = ""
        document.querySelector("#lastname").value = ""
        document.querySelector("#designation").value = ""
        document.querySelector("#phone").value = ""
    }
}

function remove_tr(e) {
    document.getElementById("tbody").deleteRow(e)
}

function edit_tr(e) {
    handleSubmit(e)
    document.getElementById("tbody").deleteRow(e)
}