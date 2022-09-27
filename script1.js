let initialBudget = Number(prompt('inserisci budget inziale'))
console.log(initialBudget)

let newBudget = initialBudget
// console.log(newBudget)

let breakPoint1 = (initialBudget / 2)
let breakPoint2 = (initialBudget * 0.05)

// console.log(breakPoint1)
// console.log(breakPoint2)

let taken = 0

while(newBudget > breakPoint1){
    taken = Number(prompt("inserisci quanto prelevi.."))
    newBudget = newBudget - taken 
    console.log(newBudget)
}

alert("Sei a metà del tuo budget")

while(newBudget > breakPoint2){
    taken = Number(prompt("inserisci quanto prelevi.."))
    newBudget = newBudget - taken 
    console.log(newBudget)
}

alert("se sotto il 5% del budget iniziale")


// TENTATIVO DI FARE LA STESSA COSA CON "FOR"

// for (let i=0; newBudget > breakPoint1&&i<5; i++){
//     taken = Number(prompt("inserisci quanto prelevi.."))
//     newBudget = initialBudget - taken 
//     console.log(newBudget)
// }








