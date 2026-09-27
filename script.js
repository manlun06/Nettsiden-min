javascript
let antall = 0;
let poeng = 0;

// Teller
function leggTil() {
    antall++;
    document.getElementById("teller").textContent = antall;
}

function trekkFra() {
    if (antall > 0) {
        antall--;
    }

    document.getElementById("teller").textContent = antall;
}

function nullstill() {
    antall = 0;
    document.getElementById("teller").textContent = antall;
}

// Vis mer tekst
function visMer() {
    let tekst = document.getElementById("ekstraTekst");

    if (tekst.style.display === "none" || tekst.style.display === "") {
        tekst.style.display = "block";
    } else {
        tekst.style.display = "none";
    }
}

// Quiz
function svar(valgtSvar) {
    let resultat = document.getElementById("resultat");

    if (valgtSvar === "PC") {
        resultat.textContent = "Riktig svar!";
        poeng++;
    } else {
        resultat.textContent = "Det var feil svar.";
    }

    document.getElementById("poeng").textContent = "Poeng: " + poeng;
}

// Søk etter spill
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

// Bytt tema
function byttTema() {
    document.body.classList.toggle("lyst");
}

console.log("Gaming-nettsiden fungerer!");
