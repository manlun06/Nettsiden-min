let antall = 0;

function leggTil() {
    antall = antall + 1;
    document.getElementById("teller").textContent = antall;
}

function trekkFra() {
    if (antall > 0) {
        antall = antall - 1;
        document.getElementById("teller").textContent = antall;
    }
}

function nullstill() {
    antall = 0;
    document.getElementById("teller").textContent = antall;
}

function endreTekst() {
    document.getElementById("gamingTekst").textContent =
        "Når man spiller sammen med andre må man ofte samarbeide og kommunisere. Derfor kan gaming også lære oss ting som kan brukes utenfor spill.";
}

console.log("Gaming-nettsiden fungerer!");