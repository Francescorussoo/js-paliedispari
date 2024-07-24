document.addEventListener('DOMContentLoaded', () => {
    const scelta = document.getElementById('scegli');
    const numeroUtenteInput = document.getElementById('numeroUtente');
    const bottonegioco = document.querySelector('button');
    const risultatoDiv = document.getElementById('esito');

    function generaNumeroCasuale() {
        return Math.floor(Math.random() * 5) + 1;
    }

    function èPari(numero) {
        return numero % 2 === 0;
    }

    function avviaSGioco() {
        const sceltaGiocatore = scelta.value;
        const numeroGiocatore = parseInt(numeroUtenteInput.value);
        if (isNaN(numeroGiocatore) || numeroGiocatore < 1 || numeroGiocatore > 5) {
            alert('Per favore, inserisci un numero valido tra 1 e 5.');
            return;
        }
        const numeroPC = generaNumeroCasuale();
        const somma = numeroGiocatore + numeroPC;
        const sommaPari = èPari(somma);

        let messaggioRisultato = `Hai scelto ${sceltaGiocatore} e il numero ${numeroGiocatore}.<br>`;
        messaggioRisultato += `Il computer ha generato il numero ${numeroPC}.<br>`;
        messaggioRisultato += `La somma dei numeri è ${somma} ed è ${sommaPari ? "pari" : "dispari"}.<br>`;

        if ((sceltaGiocatore === "pari" && sommaPari) || (sceltaGiocatore === "dispari" && !sommaPari)) {
            messaggioRisultato += "Hai vinto!";
        } else {
            messaggioRisultato += "Hai perso!";
        }

        risultatoDiv.innerHTML = messaggioRisultato;
    }

    bottonegioco.addEventListener('click', avviaGioco);
});