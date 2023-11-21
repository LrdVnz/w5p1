/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* function crazySum(num1, num2){
    let sum = num1 + num2;
    if (num1 === num2 ) {
        return sum * 3; 
    }
    return sum; 
}

result = crazySum(2,2);  */

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* function boundary(num) {
    if ((num > 20 && num <= 100) || num === 400 ) {
        return true 
    } 
}

result = boundary(40);
console.log(result)
 */

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* function reverseString(string){
  let invertedString = []; 
 
  for (i = string.length - 1; i >= 0 ; i--){
    invertedString.push(string[i]);
  }
  return invertedString.join(""); 

}

result = reverseString("ebreo");
console.log(result);
 */

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* function upperFirst(string){
    let resultString = []; 

    for(i = 0; i < string.length; i++){
        
        if (i === 0){
            let convertedFirst = string[i].toUpperCase();
            resultString.push(convertedFirst);
        } else if (string[i - 1] === " "){
            let convertedChar = string[i].toUpperCase();
            resultString.push(convertedChar);
        } else {
            resultString.push(string[i]);
        }
    }
    return resultString.join("")
}

result = upperFirst("ciao belli fratelli ");
console.log(result); */


/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* function giveMeRandom(n){
    resultArr = [];

    for(i = 0; i < n; i++){
        let randNum = Math.floor(Math.random() * 11);
        resultArr.push(randNum);
    } 
    return resultArr; 
}

result = giveMeRandom(15);
console.log(result); */

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* function area(l1, l2) {
   return l1 * l2; 
}

result = area(10, 16); 
console.log(result); */

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* function crazyDiff(num){
   let diff = num - 19;
   let absDiff = Math.abs(diff);

   if (absDiff > 19){
    return absDiff * 3; 
   }

   return absDiff;
}

result = crazyDiff(70);
console.log(result); */

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* function codify(string) {
    if(string.includes("code") && string.indexOf("code") === 0){
        return string;
    } else {
        let resultString = string; 
        resultString = "code " + resultString; 
        return resultString; 
    }
}

result = codify("code fratello");
console.log(result); */

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* function check3and7(num){
    if(num < 0){
        console.log("accetto solo numeri positivi");
        return; 
    } else if(num % 3 === 0 || num % 7 === 0){
        return true;
    } else {
        return false;
    }
}

result = check3and7(9);
console.log(result); */

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* function cutString(string) {
    let resultString = string
    resultString = string.slice(1, string.length-1); 
    return resultString; 
}

result = cutString("ciao frate");
console.log(result); */