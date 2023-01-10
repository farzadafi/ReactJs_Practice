window.onload = () => {
    document.getElementById("rowId").value = Number(1);
    document.getElementById("tempRowNumber").value = Number(-1);
    let value = ['', '', '', '',];
    setFormValue(value);
}

const getInformation = () => {
    let tempRowNumber = Number(document.getElementById('tempRowNumber').value);
    let id;
    let isTemp = 1;
    if (tempRowNumber === -1)
        id = document.getElementById('rowId').value;
    else {
        id = document.getElementById('tempRowNumber').value;
        isTemp = 0;
    }
    let firstname = document.getElementById('firstname').value;
    let lastname = document.getElementById('lastname').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;

    let information = [id, firstname, lastname, email, phone];
    setInformation(information, isTemp);
}

const setInformation = (information, isTemp) => {
    if (isTemp === 0)
        editRow(information);
    else
        addRow(information);

    let value = ['', '', '', '',];
    setFormValue(value);
}

const editRow = (information) => {
    let row = document.getElementById(`tr${information[0]}`);
    let td = row.getElementsByTagName('td');

    td[1].innerHTML = information[1];
    td[2].innerHTML = information[2];
    td[3].innerHTML = information[3];
    td[4].innerHTML = information[4];
    document.getElementById('tempRowNumber').value = -1;
}

const addRow = (information) => {
    let tableRow = document.getElementById('table');
    let row = document.createElement("tr");

    let idTd = createIdTd(information[0])
    let firstnameTd = createFirstnameTd(information[1])
    let lastnameTd = createLastnameTd(information[2])
    let emailTd = createEmailTd(information[3])
    let phoneTd = createPhoneTd(information[4])
    let removeTd = createRemoveButton(information[0]);
    let editTd = createEditButton(information[0])

    row.append(idTd, firstnameTd, lastnameTd, emailTd, phoneTd, editTd, removeTd);
    row.setAttribute('id', `tr${information[0]}`);
    tableRow.appendChild(row);
    document.getElementById('tempRowNumber').value = -1;

    // if (Number(isTemp) !== 0)
    increaseIdValue(information[0])
}

const createIdTd = (idValue) => {
    let id = document.createElement("td");
    id.innerHTML = idValue;
    return id;
}

const createFirstnameTd = (firstnameValue) => {
    let firstname = document.createElement("td");
    firstname.innerHTML = firstnameValue;
    return firstname;
}

const createLastnameTd = (lastnameValue) => {
    let lastname = document.createElement("td");
    lastname.innerHTML = lastnameValue;
    return lastname;
}

const createEmailTd = (emailValue) => {
    let email = document.createElement("td");
    email.innerHTML = emailValue;
    return email;
}

const createPhoneTd = (phoneValue) => {
    let phone = document.createElement("td");
    phone.innerHTML = phoneValue;
    return phone;
}

const createRemoveButton = (numberRow) => {
    let removeButton = document.createElement("button");
    let removeTd = document.createElement("td");
    removeButton.innerHTML = 'حذف';
    removeButton.setAttribute('onclick', `deleteSpecificRows(${numberRow})`);
    removeButton.className = "remove-btn";
    removeTd.append(removeButton);
    return removeTd;
}

const createEditButton = (numberRow) => {
    let editButton = document.createElement("button");
    let editTd = document.createElement("td");
    editButton.innerHTML = 'ویرایش';
    editButton.className = "edit-btn";
    editTd.append(editButton);
    editButton.setAttribute('onclick', `editSpecificRows(${numberRow})`);
    return editTd;
}


const setFormValue = (information) => {
    document.getElementById('firstname').value = information[0];
    document.getElementById('lastname').value = information[1];
    document.getElementById('email').value = information[2];
    document.getElementById('phone').value = information[3];
}

const increaseIdValue = (numberId) => {
    document.getElementById("rowId").value = Number(++numberId);
}

const deleteSpecificRows = (rowId) => {
    let row = document.getElementById(`tr${rowId}`);
    row.remove();
}

const editSpecificRows = (rowId) => {
    let row = document.getElementById(`tr${rowId}`);
    let td = row.getElementsByTagName('td');

    let rowNumber = td[0].innerHTML;
    let firstname = td[1].innerHTML;
    let lastname = td[2].innerHTML;
    let email = td[3].innerHTML;
    let phone = td[4].innerHTML;

    let value = [firstname, lastname, email, phone];
    setFormValue(value);
    document.getElementById('tempRowNumber').value = rowNumber;
}