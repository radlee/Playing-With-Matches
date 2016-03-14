var random = function(max){
    return Math.floor(Math.random() * max) + 1;
};
//get all the number div's
var numbers = document.querySelectorAll(".number");
//loop through all the div's and allocate a random number
for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    number.innerHTML = random(15);
}


//Row Matches function
var rowMatch = function(base){
  var matchCounter =0;
  if (numbers[base].innerHTML === numbers[base + 2].innerHTML){
      numbers[base].classList.add("highlightRow");
      numbers[base + 2].classList.add("highlightRow");
      document.getElementById("parent").classList.add("highlightParent");
      document.getElementById("rowText").style.color = "green";
      document.getElementById("rowText").style.background = "black";
      document.getElementById("row1Match").innerHTML =
      " | " + numbers[base].innerHTML + " | " + "in Row 3";
      matchCounter++;
  }

  if (numbers[base].innerHTML === numbers[base + 1].innerHTML){
      numbers[base].classList.add("highlightRow");
      numbers[base + 1].classList.add("highlightRow");
      document.getElementById("parent").classList.add("highlightParent1");
      document.getElementById("rowText").style.color = "green";
      document.getElementById("rowText").style.background = "black";
      document.getElementById("row2Match").innerHTML =
      " | " + numbers[base].innerHTML + " | " + "in Row 2";
      matchCounter++;
  }

  if (numbers[base + 1].innerHTML === numbers[base + 2].innerHTML){
      numbers[base + 1].classList.add("highlightRow");
      numbers[base + 2].classList.add("highlightRow");
      document.getElementById("parent").classList.add("highlightParent2");
      document.getElementById("rowText").style.color = "green";
      document.getElementById("rowText").style.background = "black";
      document.getElementById("row3Match").innerHTML =
      " | " + numbers[base + 1].innerHTML + " | " + "in Row 1";
      matchCounter++;
  }
  return matchCounter;

};
//Collumn Match function

var colMatch = function(base){
  var matchCounter =0;
  if (numbers[base].innerHTML === numbers[ base + 3].innerHTML){
      numbers[base].classList.add("highlightCol");
      numbers[base + 3].classList.add("highlightCol");
      document.getElementById("colText").style.color = "#b6a504"; //#00d5ff
      document.getElementById("colText").style.background = "black";
      document.getElementById("col1Match").innerHTML =
      " | " + numbers[base].innerHTML + " | " + "in Collumn 1";
      matchCounter++;

  }
  if (numbers[base].innerHTML === numbers[base + 6].innerHTML){ //  +3
      numbers[base].classList.add("highlightCol");
      numbers[base+ 6].classList.add("highlightCol");
      document.getElementById("colText").style.color = "#b6a504";
      document.getElementById("colText").style.background = "black";
      document.getElementById("col2Match").innerHTML =
      " | " + numbers[base].innerHTML + " | " + "in Collumn 2";
      matchCounter++;
  }
  if (numbers[base + 3].innerHTML === numbers[base + 6].innerHTML){
      numbers[base + 3].classList.add("highlightCol");
      numbers[base + 6].classList.add("highlightCol");
      countCols++;
      document.getElementById("colText").style.color = "#b6a504";
      document.getElementById("colText").style.background = "black";
      document.getElementById("col3Match").innerHTML =
      " | " + numbers[base + 3].innerHTML + " | " + "in Collumn 3";
      matchCounter++;
  }

  return matchCounter;
};

var matches = colMatch(0);
var matches = colMatch(1);
var matches = colMatch(2);

var matches = rowMatch(0);
var matches = rowMatch(3);
var matches = rowMatch(6);

//diagonalMatch---

var diagonalMatch = function(){
  var matchCounter =0;
  if(numbers[0].innerHTML === numbers[4].innerHTML){
    numbers[0].classList.add("highlightDia");
    numbers[4].classList.add("highlightDia");
    document.getElementById("parent").classList.add("highlightParentDia");
    document.getElementById("diaText").style.color = "#f00941";
    document.getElementById("diaText").style.background = "black";
    document.getElementById("dia2Match").innerHTML =
    " | " + numbers[0].innerHTML + " | " + "in Right Diagonal ";
    matchCounter++;

  }
  if(numbers[0].innerHTML === numbers[8].innerHTML){
    numbers[0].classList.add("highlightDia");
    numbers[8].classList.add("highlightDia");
    document.getElementById("parent").classList.add("highlightParentDia");
    document.getElementById("diaText").style.color = "#f00941";
    document.getElementById("diaText").style.background = "black";
    document.getElementById("dia2Match").innerHTML =
    " | " + numbers[0].innerHTML + " | " + "in Right Diagonal ";
    matchCounter++;
  }
  if(numbers[4].innerHTML === numbers[8].innerHTML){
    numbers[4].classList.add("highlightDia");
    numbers[8].classList.add("highlightDia");
    document.getElementById("parent").classList.add("highlightParentDia");
    document.getElementById("diaText").style.color = "#f00941";
    document.getElementById("diaText").style.background = "black";
    document.getElementById("dia2Match").innerHTML =
    " | " + numbers[4].innerHTML + " | " + "in Right Diagonal ";
    matchCounter++;
  }
  return matchCounter;
};

//Diagona
var diagonal2Match = function(){
  var matchCounter =0;
  if(numbers[2].innerHTML === numbers[4].innerHTML){
    numbers[2].classList.add("highlightDia2");
    numbers[4].classList.add("highlightDia2");
    document.getElementById("parent").classList.add("highlightParentDia2");
    document.getElementById("diaText").style.color = "#0066ff";
    document.getElementById("diaText").style.background = "black";
    document.getElementById("dia1Match").innerHTML =
    " | " + numbers[2].innerHTML + " | " + "in Left Diagonal ";
    matchCounter++;
  }
  if(numbers[2].innerHTML === numbers[6].innerHTML){
    numbers[2].classList.add("highlightDia2");
    numbers[6].classList.add("highlightDia2");
    document.getElementById("parent").classList.add("highlightParentDia2");
    document.getElementById("diaText").style.color = "#0066ff";
    document.getElementById("diaText").style.background = "black";
    document.getElementById("dia1Match").innerHTML =
    " | " + numbers[2].innerHTML + " | " + "in Left Diagonal ";
    matchCounter++;
  }
  if(numbers[4].innerHTML === numbers[6].innerHTML){
    numbers[4].classList.add("highlightDia2");
    numbers[6].classList.add("highlightDia2");
    document.getElementById("parent").classList.add("highlightParentDia2");
    document.getElementById("diaText").style.color = "#0066ff";
    document.getElementById("diaText").style.background = "black";
    document.getElementById("dia1Match").innerHTML =
    " | " + numbers[4].innerHTML + " | " + "in Left Diagonal ";
    matchCounter++

  }
  return matchCounter++;



};
document.getElementById("matchCounter").innerHTML = matchCounter;


var matches = diagonal2Match();
var matches = diagonalMatch();


                              //----------------\\
//----------------------------|   [O]   ^   [O]  |---------------------------//
                         //   \\----------------//
