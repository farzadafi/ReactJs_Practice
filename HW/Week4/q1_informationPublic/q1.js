window.onload = () => {
    removeContent();
    document.getElementById('numberId').value = '1';
}

const removeContent = () => {
    document.getElementById('title').value = '';
    document.getElementById('details').value = '';
    document.getElementById('description').value = '';
}

const addRow = () => {
    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;
    let details = document.getElementById('details').value;

    if (title === '')
        removeAttribute('p-title', 'hidden');
    else if (details === '') {
        setAttribute('p-title', 'hidden', 'hidden')
        removeAttribute('p-details', 'hidden');
    } else {
        setAttribute('p-title', 'hidden', 'hidden')
        setAttribute('p-details', 'hidden', 'hidden')
        let informationDiv = createInformationDiv(title, description, details, '');

        document.getElementById('main-container').append(informationDiv);
        let numberId = document.getElementById('numberId').value;
        document.getElementById('numberId').value = Number(++numberId)
    }
}

const removeAttribute = (id, attribute) => {
    document.getElementById(id).removeAttribute(attribute);
}

const setAttribute = (id, attributeName, attributeValue) => {
    document.getElementById(id).setAttribute(attributeName, attributeValue);
}

const createInformationDiv = (title, description, details) => {
    let informationDiv = document.createElement('div');
    informationDiv.className = 'information';
    let numberId = document.getElementById('numberId').value;
    informationDiv.id = `information${numberId}`
    let strong = createStrong(title);
    let date = createSpanDate();
    let p = createH6Tag(description);
    let hiddenP = createHiddenP(details);
    let innerDiv = createInnerDiv(strong, p, date, hiddenP);
    let buttonDiv = createButtonDiv();
    informationDiv.append(innerDiv, buttonDiv);
    removeContent();
    return informationDiv;
}

const createStrong = (title) => {
    let strong = document.createElement('strong');
    strong.innerHTML = `${title}`;
    strong.setAttribute('margin-right', '10px');
    strong.className = 'no-wrap';
    return strong;
}

const createSpanDate = () => {
    let today = getNowDate();
    let date = document.createElement('span');
    date.innerHTML = String(today);
    date.setAttribute('margin-right', '10px');
    return date;
}

const createH6Tag = (description) => {
    let h6 = document.createElement('h6');
    h6.innerHTML = `${description}`
    h6.setAttribute('margin-right', '10px');
    h6.className = 'no-wrap';
    return h6;
}

const createHiddenP = (details) => {
    let p = document.createElement('p');
    p.innerHTML = `${details}`
    p.setAttribute('margin-right', '10px');
    p.setAttribute('hidden', 'hidden');
    return p;
}

const createInnerDiv = (strong, p, date, hiddenP) => {
    let innerDiv = document.createElement('div');
    innerDiv.className = 'small-color';
    innerDiv.append(strong)
    innerDiv.append(p);
    innerDiv.append(date);
    innerDiv.append(hiddenP);
    return innerDiv;
}

const createButtonDiv = () => {
    let buttonDiv = document.createElement('div');
    buttonDiv.className = 'button-div';

    let trashButton = createTrashButton();
    let eyeButton = createEyeButton();
    buttonDiv.append(eyeButton);
    buttonDiv.append(trashButton)
    return buttonDiv;
}

const createTrashButton = () => {
    let trashButton = document.createElement('button');
    let numberId = document.getElementById('numberId').value;
    trashButton.value = String(numberId);
    trashButton.setAttribute('onclick', `removeInformationDiv(${numberId})`)
    let buttonIcon = createTrashIcon();
    trashButton.append(buttonIcon);
    return trashButton;
}

const createTrashIcon = () => {
    let buttonIcon = document.createElement('ion-icon');
    buttonIcon.className = 'icon';
    buttonIcon.name = 'trash-outline';
    buttonIcon.size = 'large';
    return buttonIcon;
}

const createEyeButton = () => {
    let eyeButton = document.createElement('button');
    let numberId = document.getElementById('numberId').value;
    eyeButton.value = String(numberId);
    eyeButton.setAttribute('onclick', `viewInformation(${numberId})`)
    let eyeButtonIcon = createEyeIcon();
    eyeButton.append(eyeButtonIcon)
    return eyeButton;
}

const viewInformation = (rowId) => {
    let informationDiv = document.getElementById(`information${rowId}`)
    let title = informationDiv.getElementsByTagName('strong').item(0).innerHTML;
    let description = informationDiv.getElementsByTagName('h6').item(0).innerHTML;
    let date = informationDiv.getElementsByTagName('span').item(0).innerHTML;
    let details = informationDiv.getElementsByTagName('p').item(0).innerHTML;

    document.getElementById('modalTitle').innerHTML = title;
    document.getElementById('modalDescription').innerHTML = description;
    document.getElementById('modalDate').innerHTML = date;
    document.getElementById('modalDetails').innerHTML = details;

    document.getElementById('myModal').style.display = 'grid';
}

const closeModal = () => {
    document.getElementById('myModal').style.display = 'none';
}

const createEyeIcon = () => {
    let eyeButtonIcon = document.createElement('ion-icon');
    eyeButtonIcon.className = 'icon';
    eyeButtonIcon.name = 'eye-outline';
    eyeButtonIcon.size = 'large';
    return eyeButtonIcon;
}

const getNowDate = () => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    return today;
}

const removeInformationDiv = (numberId) => {
    document.getElementById(`information${numberId}`).remove();
}

const sortAlphabetic = () => {
    let numberId = document.getElementById('numberId').value - 1;
    let array = [];
    for (let i = 1; i <= numberId; i++) {
        if (document.getElementById(`information${i}`) !== null)
            array.push(document.getElementById(`information${i}`))
    }
    array.sort(function (a, b) {
        return a.getElementsByClassName('small-color')
            .item(0)
            .getElementsByTagName('strong')
            .item(0).innerHTML
            .localeCompare(b.getElementsByClassName('small-color')
                .item(0)
                .getElementsByTagName('strong')
                .item(0).innerHTML)
    });

    const myNode = document.getElementById("main-container");
    for (let i = 1; i < numberId; i++) {
        myNode.children.item(1)
    }

    for (let i = 0; i < numberId; i++) {
        if (typeof array[i] !== 'undefined')
            myNode.appendChild(array[i])
    }
}
