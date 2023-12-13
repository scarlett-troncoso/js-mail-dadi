/* INDICAZIONI
Mail
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.

Tools:
- const array - per creare una lista di email che possono accedere
- for/let  - per avere una lista di email che possono accedere
- console.log - per stampare in console la lista di email e anche la risposta del utente
- prompt - per chiedere al utente la sua mail
- if - se la mail é nella lista puo accedere
- else - altrimente fa un alert di errore
        -alert

*/

//creare array con una lista di email che possono accedere
const email_list = ['aaa@gmail.com','bbb@gmail.com', 'ccc@gmail.com', 'ddd@gmail.com']
console.log(email_list)

const inserire_email = (prompt('Inserisci la tua e-mail'));
console.log(inserire_email, 'inserito dall utente');

const mesaggio_verifica = document.querySelector('.corretto')

//avere una lista di email che possono accedere e stampare in console
for (let i = 0; i < email_list.length; i++) {
    const element = email_list [i];

    //controlla che sia nella lista di chi può accedere
    if (inserire_email === element) {

        //stampa un messaggio appropriato sull’esito del controllo
        console.log('CORRETTO');
        mesaggio_verifica.innerHTML = 'E-MAIL VERIFICATA CORRETTAMENTE';

        } 
} 

//Generare un numero random da 1 a 6
const generatorBtn = document.getElementById('genera_numero')

generatorBtn.addEventListener('click', function(){
    generatorBtn.innerHTML = Math.floor(Math.random() * 7);
    const numero_gioco = generatorBtn.innerHTML = Math.floor(Math.random() * 7);
    console.log('NUMERO GIOCO: ', numero_gioco );

    //Stabilire il vincitore, in base a chi fa il punteggio più alto
    if (numero_gioco > 5) {
        document.querySelector('.number').innerHTML = 'HAI VINTO !!!!!!'
        console.log('VINCE: ', numero_gioco );
    }
}) 











 