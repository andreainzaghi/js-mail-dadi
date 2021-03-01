var nomeUtente = prompt("Inserisci il tuo nome utente per giocare: ");

var dadoUtente =prompt("Inserisci il tuo numero fortunato ");
var dadoComputer = Math.floor(Math.random() * 6);


if (dadoUtente > dadoComputer) {
  document.getElementById('estrazione').innerHTML = "Hai vinto " + nomeUtente + ". Complimenti!";
} else if(dadoUtente < dadoComputer){
  document.getElementById('estrazione').innerHTML = "Hai perso. Ritenta!";
} else if(dadoUtente = dadoComputer){
    document.getElementById('estrazione').innerHTML = "parimerito! Ritenta!";
}

document.getElementById('numeriEstratti').innerHTML = "Bene caro: " + nomeUtente + "il tuo numero e'  " + dadoUtente + " e il numero  del computer e' "  + ": " + dadoComputer + ".";
