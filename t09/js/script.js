let playerOne = document.getElementsByClassName('playerOne')[0];
let playerTwo = document.getElementsByClassName('playerTwo')[0];
let cross = document.getElementsByClassName('cross');
let circle = document.getElementsByClassName('circle');
let currentPlayer = true;
let countTurns = 0;
let arrCell = Array(9);
let flagEnd = false;

let checkWinPosition = () => {
    if ((arrCell[0] === 1 && arrCell[1] === 1 && arrCell[2] === 1) ||
        (arrCell[3] === 1 && arrCell[4] === 1 && arrCell[5] === 1) ||
        (arrCell[6] === 1 && arrCell[7] === 1 && arrCell[8] === 1) ||
        (arrCell[0] === 1 && arrCell[3] === 1 && arrCell[6] === 1) ||
        (arrCell[1] === 1 && arrCell[4] === 1 && arrCell[7] === 1) ||
        (arrCell[2] === 1 && arrCell[5] === 1 && arrCell[8] === 1) ||
        (arrCell[0] === 1 && arrCell[4] === 1 && arrCell[8] === 1) ||
        (arrCell[2] === 1 && arrCell[4] === 1 && arrCell[6] === 1)) return 1;
    if ((arrCell[0] === 2 && arrCell[2] === 2 && arrCell[2] === 2) ||
        (arrCell[3] === 2 && arrCell[4] === 2 && arrCell[5] === 2) ||
        (arrCell[6] === 2 && arrCell[7] === 2 && arrCell[8] === 2) ||
        (arrCell[0] === 2 && arrCell[3] === 2 && arrCell[6] === 2) ||
        (arrCell[1] === 2 && arrCell[4] === 2 && arrCell[7] === 2) ||
        (arrCell[2] === 2 && arrCell[5] === 2 && arrCell[8] === 2) ||
        (arrCell[0] === 2 && arrCell[4] === 2 && arrCell[8] === 2) ||
        (arrCell[2] === 2 && arrCell[4] === 2 && arrCell[6] === 2)) return 2;
    else
        return false;
}

let gameResult = () => {
    let result = document.getElementsByClassName('result')[0];
    let bord = document.getElementsByClassName('board')[0];

    if (checkWinPosition() === 1) {
        bord.style.background = '#037829';
        playerOne.style.background = "#D3D3D3";
        playerTwo.style.background = "#D3D3D3";
        result.innerHTML = `${playerOne.innerHTML} won!`;
        flagEnd = true;
    }

    if (checkWinPosition() === 2) {
        bord.style.background = '#037829';
        playerOne.style.background = "#D3D3D3";
        playerTwo.style.background = "#D3D3D3";
        result.innerHTML = `${playerTwo.innerHTML} won!`;
        flagEnd = true;
    }
    if (countTurns === 9 && !checkWinPosition()) {
        bord.style.background = '#D98D21';
        playerOne.style.background = "#D3D3D3";
        playerTwo.style.background = "#D3D3D3";
        result.innerHTML = `It's a draw`;
    }
}

let reloadGame = () => {
    let buttonReset = document.getElementsByClassName('buttonReset')[0];
    buttonReset.addEventListener('click', function () {
        document.location.reload();
    } );
}

let getEvent = (Event) => {
    if (Event.target.getAttribute("class") === "cell"
    && Event.target.getAttribute("visited") !== "true" && !flagEnd) {
        let click = Event.target;
        click.setAttribute("visited", "true");
        let result = document.createElement('div');
        if (currentPlayer) {
            playerOne.style.background = "#D3D3D3";
            playerTwo.style.background = "#D98D21";
            result.className = 'cross';
            currentPlayer = false;
            arrCell[+click.getAttribute('id')] = 1;
        }
        else {
            playerOne.style.background = "#D98D21";
            playerTwo.style.background = "#D3D3D3";
            result.className = 'circle';
            currentPlayer = true;
            arrCell[+click.getAttribute('id')] = 2;
        }
        click.append(result);
        countTurns++;
        document.getElementsByClassName('countNumber')[0].innerHTML = "" + countTurns;

    }
    gameResult();
}

let ifClick = () => {
    let container = document.getElementsByClassName('container')[0];
    container.addEventListener('click', getEvent);
}

ifClick();
reloadGame();