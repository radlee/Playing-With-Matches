var random = function(max){
    return Math.floor(Math.random() * max) + 1;
};
//get all the number div's
var numbers = document.querySelectorAll(".number");
//loop through all the div's and allocate a random number
for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    number.innerHTML = random(3);
}
//checking for matched
if (numbers[0].innerHTML === numbers[1].innerHTML){

    numbers[0].classList.add("highlight");
    numbers[1].classList.add("highlight");
    document.getElementById("parent").classList.add("highlightParent")
}
//The pattern is that you add 3's here
if (numbers[1].innerHTML === numbers[2].innerHTML){

    numbers[1].classList.add("highlight");
    numbers[2].classList.add("highlight");
}
if (numbers[0].innerHTML === numbers[2].innerHTML){
    numbers[0].classList.add("highlight");
    numbers[2].classList.add("highlight");
}
//Row2 ----
if (numbers[3].innerHTML === numbers[4].innerHTML){

    numbers[3].classList.add("highlight");
    numbers[4].classList.add("highlight");
    document.getElementById("parent").classList.add("highlightParent1")
}
if (numbers[4].innerHTML === numbers[5].innerHTML){ //  (1+3) = 4, (2+3) = 5

    numbers[4].classList.add("highlight");
    numbers[5].classList.add("highlight");
}
if (numbers[3].innerHTML === numbers[5].innerHTML){
    numbers[3].classList.add("highlight");
    numbers[5].classList.add("highlight");
}
//Row3 ----
if (numbers[6].innerHTML === numbers[7].innerHTML){

    numbers[6].classList.add("highlight");
    numbers[7].classList.add("highlight");
    document.getElementById("parent").classList.add("highlightParent2")
}
if (numbers[7].innerHTML === numbers[8].innerHTML){ //  +3

    numbers[7].classList.add("highlight");
    numbers[8].classList.add("highlight");
}
if (numbers[6].innerHTML === numbers[8].innerHTML){
    numbers[6].classList.add("highlight");
    numbers[8].classList.add("highlight");
}
//Collumn ----
if (numbers[0].innerHTML === numbers[3].innerHTML){

    numbers[0].classList.add("highlight");
    numbers[3].classList.add("highlight");
}
if (numbers[0].innerHTML === numbers[6].innerHTML){ //  +3

    numbers[0].classList.add("highlight");
    numbers[6].classList.add("highlight");
}
if (numbers[3].innerHTML === numbers[6].innerHTML){
    numbers[3].classList.add("highlight");
    numbers[6].classList.add("highlight");
}
//Collumn 2 ----
if (numbers[1].innerHTML === numbers[4].innerHTML){

    numbers[1].classList.add("highlight");
    numbers[4].classList.add("highlight");
}
if (numbers[1].innerHTML === numbers[7].innerHTML){ //  +3

    numbers[1].classList.add("highlight");
    numbers[7].classList.add("highlight");
}
if (numbers[4].innerHTML === numbers[7].innerHTML){
    numbers[4].classList.add("highlight");
    numbers[7].classList.add("highlight");
}
//Collumn 3 ----
if (numbers[2].innerHTML === numbers[5].innerHTML){

    numbers[2].classList.add("highlight");
    numbers[5].classList.add("highlight");
}
if (numbers[2].innerHTML === numbers[8].innerHTML){ //  +3

    numbers[2].classList.add("highlight");
    numbers[8].classList.add("highlight");
}
if (numbers[5].innerHTML === numbers[8].innerHTML){
    numbers[5].classList.add("highlight");
    numbers[8].classList.add("highlight");
}

// var match = function(start){
//
// }
