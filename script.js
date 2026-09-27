let antall = 0;
let poeng = 0;

function leggTil() {
    antall = antall + 1;
    document.getElementById("teller").textContent = antall;
}

function trekkFra() {
    if (antall > 0) {
        antall = antall - 1;
    }

    document.getElementById("teller").textContent = antall;
}

function nullstill() {
    antall = 0;
    document.getElementById("teller").textContent = antall;
}

function visMer() {
    let tekst = document.getElementById("ekstraTekst");

    if (tekst.style.display === "block") {
        tekst.style.display = "none";
    } else {
        tekst.style.display = "block";
    }
}

function svar(valgtSvar) {
    let resultat = document.getElementById("resultat");

    if (valgtSvar === "PC") {
        resultat.textContent = "Riktig svar!";
        poeng = poeng + 1;
    } else {
        resultat.textContent = "Det var feil svar.";
    }

    document.getElementById("poeng").textContent = "Poeng: " + poeng;
}

function sokSpill() {
    let sok = document.getElementById("sok").value.toLowerCase();
    let kort = document.getElementsByClassName("kort");

    for (let i = 0; i < kort.length; i++) {
        let tekst = kort[i].textContent.toLowerCase();

        if (tekst.includes(sok)) {
            kort[i].style.display = "block";
        } else {
            kort[i].style.display = "none";
        }
    }
}

function byttTema() {
    document.body.classList.toggle("lyst");
}

function mobilMeny() {
    document.getElementById("mobilMeny").classList.toggle("vis");
}