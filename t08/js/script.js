let heroObj = [
    {name: 'Black Panther', strength: 66, age: 53},
    {name: 'Capitan America', strength: 79, age: 137},
    {name: 'Capitan Marvel', strength: 97, age: 26},
    {name: 'Hulk', strength: 80, age: 49},
    {name: 'Iron Man', strength: 88, age: 48},
    {name: 'Spider-Man', strength: 78, age: 16},
    {name: 'Thanos', strength: 99, age: 1000},
    {name: 'Thor', strength: 95, age: 1000},
    {name: 'Yon-Rogg', strength: 73, age: 52},
]

let nameFlag = 0;
let strengthFlag = 0;
let ageFlag = 0;

let getElement = () => {
    let tbody = document.getElementsByTagName("tbody");
    for (let i = 0; i < Object.keys(heroObj).length; i++) {
        tbody[0].rows[i].cells[0].textContent = heroObj[i].name;
        tbody[0].rows[i].cells[1].textContent = heroObj[i].strength;
        tbody[0].rows[i].cells[2].textContent = heroObj[i].age;
    }
}

function placeholder (param) {
    document.getElementById("placeholder").innerHTML = "";


    let divPlaceholder = document.getElementById(`placeholder`);
    let upDown = "";
    if (param) {
        if (param === `Name`)
            upDown = (nameFlag === 1 ? `ASC` : `DESC`);
        if (param === `Strength`)
            upDown = (strengthFlag === 1 ? `ASC` : `DESC`);
        if (param === `Age`)
            upDown = (ageFlag === 1 ? `ASC` : `DESC`);
        console.log(upDown);
        divPlaceholder.innerHTML = `Sort by ${param}, order: ${upDown}`;
    }
}


function tableCreate() {
    document.getElementById("notification").innerHTML = "";


    let notification = document.getElementById("notification");
    let tbl = document.createElement("table");
    tbl.style.margin = '50px auto';
    tbl.style.textAlign = 'center';
    tbl.style.fontSize = '1.6em';
    tbl.style.width  = '400px';
    tbl.style.height = '1000px';
    tbl.style.border = '4px solid black';
    notification.appendChild(tbl);

    let header = document.createElement("thead");
    for(let i = 0; i <= 0; i++) {
        let tr = header.insertRow();
        for (let j = 0; j <= 2; j++) {
            let td = tr.insertCell();
            td.style.background = '#D73322';
        }
    }
    tbl.appendChild(header);

    let arrVal= ["Name", "Strength", "Age"];
    let thead = document.getElementsByTagName("thead");
    for (let i = 0; i < 3; i++) {
        thead[0].children[0].children[i].innerHTML = arrVal[i];
    }

    let tBody = document.createElement("tbody");
    for(let i = 0; i <= 8; i++) {
        let tr = tBody.insertRow();
        for (let j = 0; j <= 2; j++) {
            let td = tr.insertCell();
            td.style.background = '#D3D3D3';
            td.style.width = '130px';
        }
    }
    tbl.appendChild(tBody);
    getElement();
}

placeholder ();
tableCreate();

function sorting (atr) {
    let atrName = atr.target
    if (atrName.innerHTML === `Age`) {
        if (ageFlag === 0 || ageFlag === 2) {
            ageFlag = 1;
            heroObj.sort((a, b) => a.age > b.age ? 1 : -1);
        } else {
            ageFlag = 2;
            heroObj.sort((a, b) => a.age > b.age ? -1 : 1);
        }
        nameFlag = 0;
        strengthFlag = 0;
    }
    if (atrName.innerHTML === `Strength`) {
        if (strengthFlag === 0 || strengthFlag === 2) {
            strengthFlag = 1;
            heroObj.sort((a, b) => a.strength > b.strength ? 1 : -1);
        } else {
            strengthFlag = 2;
            heroObj.sort((a, b) => a.strength> b.strength ? -1 : 1);
        }
        nameFlag = 0;
        ageFlag = 0;
    }
    if (atrName.innerHTML === `Name`) {
        if (nameFlag === 0 || nameFlag === 2) {
            nameFlag = 1;
            heroObj.sort((a, b) => a.name > b.name ? 1 : -1);
        } else {
            nameFlag = 2;
            heroObj.sort((a, b) => a.name > b.name ? -1 : 1);
        }
        strengthFlag = 0;
        ageFlag = 0;
    }
    placeholder(atrName.innerHTML);
    getElement();
}

function ifClick () {
    let header = document.getElementsByTagName("thead")[0];
    header.addEventListener("click", sorting);
}

ifClick();