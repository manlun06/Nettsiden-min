let antall = 0;
let poeng = 0;
let svarteSpørsmål = [];

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

function svarQuiz(spørsmål, svar) {
    let riktigeSvar = {
        1: "PC",
        2: "Minecraft",
        3: "Mus og tastatur",
        4: "Frames per second",
        5: "Minecraft"
    };

    let resultat = document.getElementById("resultat" + spørsmål);

    if (svarteSpørsmål.includes(spørsmål)) {
        resultat.textContent = "Du har allerede svart.";
        return;
    }

    svarteSpørsmål.push(spørsmål);

    if (svar === riktigeSvar[spørsmål]) {
        resultat.textContent = "Riktig svar!";
        poeng = poeng + 1;
    } else {
        resultat.textContent = "Feil svar.";
    }

    document.getElementById("poeng").textContent =
        "Poeng: " + poeng + " / 5";
}

function startQuizPåNytt() {
    poeng = 0;
    svarteSpørsmål = [];

    document.getElementById("poeng").textContent = "Poeng: 0 / 5";

    for (let i = 1; i <= 5; i++) {
        document.getElementById("resultat" + i).textContent = "";
    }
}

function visProfil() {
    let navn = document.getElementById("navn").value;
    let alder = document.getElementById("alder").value;

    if (navn === "" || alder === "") {
        document.getElementById("profilResultat").textContent =
            "Fyll ut navn og alder.";
        return;
    }

    document.getElementById("profilResultat").textContent =
        "Hei " + navn + ", du er " + alder + " år gammel.";
}

function regnUt(tegn) {
    let tall1 = Number(document.getElementById("tall1").value);
    let tall2 = Number(document.getElementById("tall2").value);
    let resultat;

    if (tegn === "+") {
        resultat = tall1 + tall2;
    } else if (tegn === "-") {
        resultat = tall1 - tall2;
    } else if (tegn === "*") {
        resultat = tall1 * tall2;
    } else if (tegn === "/") {
        if (tall2 === 0) {
            document.getElementById("regneResultat").textContent =
                "Du kan ikke dele på 0.";
            return;
        }

        resultat = tall1 / tall2;
    }

    document.getElementById("regneResultat").textContent =
        "Resultat: " + resultat;
}

function sjekkAlder() {
    let alder = Number(document.getElementById("alderSjekk").value);

    if (alder >= 18) {
        document.getElementById("alderResultat").textContent =
            "Du er gammel nok til å ta førerkort.";
    } else {
        document.getElementById("alderResultat").textContent =
            "Du er ikke gammel nok til å ta førerkort.";
    }
}

function leggTilTing() {
    let nyTing = document.getElementById("nyTing").value;

    if (nyTing !== "") {
        let liste = document.getElementById("likerListe");
        let nyttElement = document.createElement("li");

        nyttElement.textContent = nyTing;
        liste.appendChild(nyttElement);

        document.getElementById("nyTing").value = "";
    }
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

console.log("Gaming-nettsiden fungerer!");