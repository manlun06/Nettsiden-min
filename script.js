javascript
let antall = 0;

function endreTekst() {
    document.getElementById("gamingTekst").innerHTML =
        "Når man spiller sammen med andre må man ofte samarbeide og kommunisere. Derfor kan gaming også lære oss ting som kan brukes utenfor spill.";
}

function leggTil() {
    antall = antall + 1;
    document.getElementById("teller").innerHTML = antall;
}

function trekkFra() {
    if (antall > 0) {
        antall = antall - 1;
    }

    document.getElementById("teller").innerHTML = antall;
}

function nullstill() {
    antall = 0;
    document.getElementById("teller").innerHTML = antall;
}

console.log("Nettsiden er lastet inn.");
