// ! Task-1
// ! Kreditə götürdüyümüz pul və aylıq(necə ay ödəməliyəm)verilir.
// ! Pul bərabər hissələrə bölünərək hər ay verilməlidir.
// ! Məs:1000 manat götürülür, 3 ayliq.
// ! Ekrana yazdirilmalidir: 1-ci ay 333manat, 2-ci ay 333manat, 3-cu ay 334 manat;


//  let pul=parseInt(prompt('Pulu yazzzz'))
// let ay=parseInt(prompt("Ayi daxil et"))

// const creditFunc=(pul,ay)=>{
//     let credit=pul/ay
//  for (let i = 1; i <= ay; i++) {
//     console.log(`${i} -ci ayda ${credit} odenilmelidir`);
    
//  }
// }

// creditFunc(pul,ay)



// ? Task-2
// ? Reqemlerden ibaret arrayda duplicate reqemi qaytarin (bir funksiya teyin edirik ve parameter kimi reqemlerden ibaret array qebul edir. Arrayde yalniz bir eded duplicate olacaq) : 
// ?  let myArr =  [1,3,4,2,2] // this is example. funksiya qaytarmalidir 2; Cunki 2 iki defe yazilib;
// ?  let myArr =  [1,3,4,4,]; funksiya qaytarmalidir 4; cunki 4 iki defe yazilib.

// let myArr =  [1,3,4,2,2]


// const duplicateFunc=(myArr)=>{
//     let eded=0;
//      for (let i = 0; i < myArr.length; i++) {
//         for (let j = 1; j < myArr.length; j++) {
//            if (myArr[i]==myArr[j]) {
//             eded=myArr[i]
//            }
            
//         }
        
//      }
//      return eded
// }

// console.log(duplicateFunc(myArr));



// * Task-3
// * Funksiya number fahrenheit parameter qebul eden funskiya yaziriq. Celsiusa convert edib return etsin.

function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}

let derece = toCelsius(parseInt(prompt("derece yazdaaaaa nolaarr")));
console.log(derece)
