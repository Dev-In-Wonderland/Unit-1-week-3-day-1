/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/



/* function area (x,y){ 
    return x * y

}

let risultato = area (10, 15)
console.log ("L'area del rettangolo è: ", risultato)
 */

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/



/* function crazySum(g,z) {
    if(g === z){
        return (g + z) * 3
    }else{
        return g + z
    }
}

let risultato3 = crazySum(g,z)

console.log ("Il risultato è: ", risultato3) */

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/


/* function crazyDiff(a) {
    
    if(a > 19){
        return Math.abs((a - 19) * 3)
    }
    else{
        return Math.abs(a - 19)
    }
}

let risultato2 = crazyDiff(5)
console.log("Il risultato è", risultato2 )
 */

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/


/* function boundary(b) {
    if(20 < b <= 100 || b === 400)
    {return true}else{
        return false
    }
}

let verificaFunzione = boundary(400)

console.log("Verifica della funzione: ", verificaFunzione)
 */

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/


/*function epify (text){
    typeof text !== "string" || true
    if (text.startsWith("EPICODE")){
        return text
    }else{
        return "EPICODE" +  text
    }
}

let epicode = epify("EPICODE epicode")
console.log(epicode)
 */


/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
/*
 function check3and7(a){
    if(a<=0 || typeof a !== "number") {
    let check = "Il valore inserito non è un numero o è un numero negativo"
}else{
    switch (0) {
        case a % 7:
            check = "Il valore inserito è un multiplo di 7";
            break;
        case a % 3:
            check = "Il valore inserito è un multiplo di 3";
            break;
            default: 
            check = "Il valore inserito non è multiplo di 3 o di 7";
            break;
    }
return check
}
 }

console.log("Verifica della funzione: ",  check3and7(9))
*/


    

 

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/


/* const mioNome = `Tommaso`
function reverseString(myName) {
    let revStringa
    return (revStringa = myName.split(``).reverse().join(``))
}
const risultatoEser7 = reverseString(mioNome)

console.log(risultatoEser7)
*/

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/



/* function upperFirst (string1) {
    const splitString = string1.split(" ")
    for (let i = 0; i< splitString.length; i++){
        splitString[i] = splitString[i].charAt(0).toUpperCase() + splitString[i].substring(1)
    }
    return splitString.join(" ")
}
let upperedwords = upperFirst("Stringa di diverse parole")
console.log(upperedwords)
 */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/*function cutString(cut){
    if(typeof cut === "string"){
        let inTheMiddleoftheString = cut.slice(1, -1)
        console.log(inTheMiddleoftheString)

    }else{
        console.log ("Non è una stringa")

    }

}
cutString("dromedario")*/


/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/



/*  function giveMeRandom (num){
    if(typeof num !== "number") {
        return "Non è stata inserito un numero"
    }else{
        let arrayNum = []
        for(let i = 0; i < num; i++) {
            arrayNum.push(Math.floor(Math.random() * 11))
        }
        return arrayNum
    }
} 
const risultatoEser10 = giveMeRandom(25)

console.log(risultatoEser10)
   */
