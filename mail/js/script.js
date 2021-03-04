// controllo se e' un ekail
// if(){

  // function validaEmail(email) {
  //
  //   var regexp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //   return regexp.test(email);
  // }
  //
  //
  // function checkEmail(){
  //   risultato = document.getElementById("risultato");
  //   email = document.getElementById("email").value;
  //   risultato.innerHTML = "";
  //   if (validaEmail(email)) {
  //     risultato.innerHTML = email + " indirizzo valido";
  //     risultato.style.color = 'green';
  //   } else {
  //     risultato.innerHTML = email + " indirizzo non valido";
  //     risultato.style.color = 'red';
  //   }
  // }
// }

// controllo array
var email = ["cane@nero.com", "televisione@arancione.com", "andreainza@inza.com", "borotalco@libero.it"];

var utente = prompt("Benvenuto! Prima di inizare inserisci il tuo indirizzo email qui sotto");


console.log("La mail inserita dall'utente è " + utente);

var emailGiusta=0;

// 2. Confrontarla con le altre email

for (var i = 0; i < email.length; i++) {
  if (utente == email[i]) {
    console.log("Valido!")
    emailGiusta = 1;
  }
}

//3. Stampare un messaggio di sull'esito

if (emailGiusta == 1) {
  console.log("Puoi entrare");
  document.getElementById("messaggio").innerHTML = "Accesso Garantito"
  document.getElementById("disclaimer").innerHTML = "La tua mail è giusta e puoi proseguire con la navigazione."
} else {
  console.log("You shall not pass!");
  document.getElementById("messaggio").innerHTML = "You shall not pass!"
  document.getElementById("disclaimer").innerHTML = "La mail che hai inserito è errata, ricarica la pagina e prova con un altro indirizzo."
}
