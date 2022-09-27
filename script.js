
let initialBudget = 0;
let newBudget = initialBudget;

function setBudget(){
    initialBudget += Number(document.getElementById('initialBudget').value);
    console.log(initialBudget);
}



let breakPoint1 = (initialBudget / 2)
let breakPoint2 = (initialBudget * 0.05)
let i=0;

while(newBudget > breakPoint1 && i<5){
    showNew();
    i++;
}



function showNew() {
    let taken = Number(document.getElementById('take').value);
    newBudget = newBudget - taken;
    document.getElementById('still').innerHTML = newBudget
    let clicked = true
    return clicked
}






























