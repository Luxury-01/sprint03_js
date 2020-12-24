function transformation() {
    let hero = document.getElementById("hero");
    let back = document.getElementById("lab");

    if (hero.innerText === "Bruce Banner") {
        hero.innerText =  "Hulk";
        hero.style.fontSize = "130px";
        hero.style.letterSpacing = "6px";
        back.style.backgroundColor = "#70964b"
    }
    else if (hero.innerText === "Hulk") {
        hero.innerText = "Bruce Banner";
        hero.style.fontSize = "60px";
        hero.style.letterSpacing = "2px";
        back.style.backgroundColor = "#ffb300"
    }
}