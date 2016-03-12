var random = function(max){
    return Math.floor(Math.random() * max) + 1;
};
//get all the number div's
var numbers = document.querySelectorAll(".number");
//loop through all the div's and allocate a random number
for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    number.innerHTML = random(9);
}


//Row Matches function
var rowMatch = function(base){
  var matchCounter =0;
  if (numbers[base].innerHTML === numbers[base + 2].innerHTML){
      numbers[base].classList.add("highlightRow");
      numbers[base + 2].classList.add("highlightRow");
      document.getElementById("parent").classList.add("highlightParent");
      //document.getElementById("row1Match").classList.add("red");
      matchCounter++;
      document.getElementById("rowTex").style.color = "green";
  }

  if (numbers[base].innerHTML === numbers[base + 1].innerHTML){
      numbers[base].classList.add("highlightRow");
      numbers[base + 1].classList.add("highlightRow");
      document.getElementById("parent").classList.add("highlightParent1");
      matchCounter++;
      document.getElementById("rowTex").style.color = "green";
  }

  if (numbers[base + 1].innerHTML === numbers[base + 2].innerHTML){
      numbers[base + 1].classList.add("highlightRow");
      numbers[base + 2].classList.add("highlightRow");
      document.getElementById("parent").classList.add("highlightParent2");
      matchCounter++;
      document.getElementById("rowTex").style.color = "green";
  }
  return matchCounter;

};
//Collumn Match function

var colMatch = function(base){
  var countCols =0;
  if (numbers[base].innerHTML === numbers[ base + 3].innerHTML){
      numbers[base].classList.add("highlightCol");
      numbers[base + 3].classList.add("highlightCol");
      // document.getElementById("rowTex").style.color = "red";
      countCols++;

  }
  if (numbers[base].innerHTML === numbers[base + 6].innerHTML){ //  +3
      numbers[base].classList.add("highlightCol");
      numbers[base+ 6].classList.add("highlightCol");
      countCols++;
      // document.getElementById("colTex").style.color = #660033;;
  }
  if (numbers[base + 3].innerHTML === numbers[base + 6].innerHTML){
      numbers[base + 3].classList.add("highlightCol");
      numbers[base + 6].classList.add("highlightCol");
      countCols++;
      // document.getElementById("colTex").style.color = #660033;
  }

  return countCols;
};

var matches = colMatch(0);
var matches = colMatch(1);
var matches = colMatch(2);

var matches = rowMatch(0);
var matches = rowMatch(3);
var matches = rowMatch(6);

//diagonalMatch---

var diagonalMatch = function(){
  if(numbers[0].innerHTML === numbers[4].innerHTML){
    numbers[0].classList.add("highlightDia");
    numbers[4].classList.add("highlightDia");
    document.getElementById("parent").classList.add("highlightParentDia");
    // document.getElementById("diaTex").style.color = #f00941;

  }
  if(numbers[0].innerHTML === numbers[8].innerHTML){
    numbers[0].classList.add("highlightDia");
    numbers[8].classList.add("highlightDia");
    document.getElementById("parent").classList.add("highlightParentDia");
    // document.getElementById("diaTex").style.color = #f00941;
  }
  if(numbers[4].innerHTML === numbers[8].innerHTML){
    numbers[4].classList.add("highlightDia");
    numbers[8].classList.add("highlightDia");
    document.getElementById("parent").classList.add("highlightParentDia");
    // document.getElementById("diaTex").style.color = #f00941;
  }
};


var diagonal2Match = function(){
  var diaMatchCount =0;
  if(numbers[2].innerHTML === numbers[4].innerHTML){
    numbers[2].classList.add("highlightDia2");
    numbers[4].classList.add("highlightDia2");
    document.getElementById("parent").classList.add("highlightParentDia2");
    diaMatchCount++;
    // document.getElementById("diaText").classList.add("diaText");
  }
  if(numbers[2].innerHTML === numbers[6].innerHTML){
    numbers[2].classList.add("highlightDia2");
    numbers[6].classList.add("highlightDia2");
    document.getElementById("parent").classList.add("highlightParentDia2");
    diaMatchCount++;
    // document.getElementById("diaText").classList.add("diaText");
  }
  if(numbers[4].innerHTML === numbers[6].innerHTML){
    numbers[4].classList.add("highlightDia2");
    numbers[6].classList.add("highlightDia2");
    document.getElementById("parent").classList.add("highlightParentDia2");
    diaMatchCount++;
    // document.getElementById("diaText").classList.add("diaText");
  }
  return diaMatchCount;

};

var matches = diagonal2Match();
var matches = diagonalMatch();



                              //----------------\\
//----------------------------|     /      \     |------------------
                         //   \\----------------//
