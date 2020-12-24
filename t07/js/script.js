"use strict"

let addElem = (parent, child, value) => {
    child.classList.add("elem");
    child.classList.add(value);
    parent.append(child);
}

let render = () => {
    let getLi = document.querySelectorAll('li');

    for (let i = 0; getLi[i]; i++) {
        let nameAttr = getLi[i].getAttribute('data-element');
        let getClass = getLi[i].getAttribute("class");
        let br = document.createElement('br');
        getLi[i].append(br);
        if (nameAttr) {
            let getLiList = nameAttr.split(' ');
            for (let j = 0; getLiList[j]; j++) {
                let div = document.createElement('div');
                switch (getLiList[j]) {
                    case 'air':
                        addElem(getLi[i], div, "air");
                        break;
                    case 'water':
                        addElem(getLi[i], div, "water");
                        break;
                    case 'earth':
                        addElem(getLi[i], div, "earth");
                        break;
                    case 'fire':
                        addElem(getLi[i], div, "fire");
                        break;
                }
            }
        } else {
            let anotherDiv = document.createElement('div');
            let lineDiv = document.createElement('div');
            anotherDiv.classList.add("elem");
            lineDiv.classList.add("line");
            anotherDiv.classList.add("none");
            getLi[i].append(br);
            anotherDiv.append(lineDiv);
            getLi[i].append(anotherDiv);
        }

        if (!getClass || (getClass !== 'good' && getClass !== 'evil' && getClass !== 'unknown')) {
            getLi[i].setAttribute('class', 'unknown');
        }
    }
}

render();