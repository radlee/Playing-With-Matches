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

//Row Matches function
var rowMatch = function(base){
  var matchCounter =0;
  if (numbers[base].innerHTML === numbers[base + 2].innerHTML){
      numbers[base].classList.add("highlight");
      numbers[base + 2].classList.add("highlight");
      document.getElementById("parent").classList.add("highlightParent")
      matchCounter++;
  }

  if (numbers[base].innerHTML === numbers[base + 1].innerHTML){
      numbers[base].classList.add("highlight");
      numbers[base + 1].classList.add("highlight");
      document.getElementById("parent").classList.add("highlightParent1");
      matchCounter++;
  }

  if (numbers[base + 1].innerHTML === numbers[base + 2].innerHTML){
      numbers[base + 1].classList.add("highlight");
      numbers[base + 2].classList.add("highlight");
      document.getElementById("parent").classList.add("highlightParent2");
      matchCounter++;
  }

  return matchCounter;

};
//Collumn Match function

var colMatch = function(base){
  var countCols =0;
  if (numbers[base].innerHTML === numbers[ base + 3].innerHTML){

      numbers[base].classList.add("highlight");
      numbers[base + 3].classList.add("highlight");
  }
  if (numbers[base].innerHTML === numbers[base + 6].innerHTML){ //  +3

      numbers[base].classList.add("highlight");
      numbers[base+ 6].classList.add("highlight");
  }
  if (numbers[base + 3].innerHTML === numbers[base + 6].innerHTML){
      numbers[base + 3].classList.add("highlight");
      numbers[base + 6].classList.add("highlight");
  }
  countCols++;

};

//highlighting the diagonalMatch  here and it is not working!!!!!!
if(numbers[0].innerHTML === numbers[4]){
  numbers[0].classList.add("highlight");
  numbers[4].classList.add("highlight");
}
if(numbers[4].innerHTML === numbers[8]){
  numbers[4].classList.add("highlight");
  numbers[8].classList.add("highlight");
}
if(numbers[0].innerHTML === numbers[8]){
  numbers[0].classList.add("highlight");
  numbers[8].classList.add("highlight");
}



// var diagonalMatch = function(base){
//
//
// };
// var diagonal2Match = function(base){
//
//   if(numbers[base + 2].innerHTML === numbers[base+ 4]){
//     numbers[base + 2].classList.add("highlightDia2");
//     numbers[base + 4].classList.add("highlightDia2");
//   }
//
//
//   if(numbers[base + 2].innerHTML === numbers[base + 6]){
//     numbers[base + 2].classList.add("highlightDia2");
//     numbers[base + 6].classList.add("highlightDia2");
//   }
//
// };


var matches = colMatch(0);
var matches = colMatch(1);
var matches = colMatch(2);

var matches = rowMatch(0);
var matches = rowMatch(3);
var matches = rowMatch(6);

// var matches = diagonalMatch(0);
// var matches = diagonal2Match(2);
//

// //Row2 ----
// if ((numbers[3].innerHTML === numbers[4].innerHTML) && (numbers[4].innerHTML === numbers[5].innerHTML)){
//
//     numbers[3].classList.add("highlight");
//     numbers[4].classList.add("highlight5");
//
// }
// if (numbers[4].innerHTML === numbers[5].innerHTML){ //  (1+3) = 4, (2+3) = 5
//
//     numbers[4].classList.add("highlight");
//     numbers[5].classList.add("highlight");
// }
// if (numbers[3].innerHTML === numbers[5].innerHTML){
//     numbers[3].classList.add("highlight");
//     numbers[5].classList.add("highlight");
// }
// //Row3 ----
// if (numbers[6].innerHTML === numbers[7].innerHTML){
//
//     numbers[6].classList.add("highlight");
//     numbers[7].classList.add("highlight");
//     document.getElementById("parent").classList.add("highlightParent2")
// }
// if (numbers[7].innerHTML === numbers[8].innerHTML){ //  +3
//
//     numbers[7].classList.add("highlight");
//     numbers[8].classList.add("highlight");
// }
// if (numbers[6].innerHTML === numbers[8].innerHTML){
//     numbers[6].classList.add("highlight");
//     numbers[8].classList.add("highlight");
// }
// //Collumn ----
// if (numbers[0].innerHTML === numbers[3].innerHTML){
//
//     numbers[0].classList.add("highlight");
//     numbers[3].classList.add("highlight");
// }
// if (numbers[0].innerHTML === numbers[6].innerHTML){ //  +3
//
//     numbers[0].classList.add("highlight");
//     numbers[6].classList.add("highlight");
// }
// if (numbers[3].innerHTML === numbers[6].innerHTML){
//     numbers[3].classList.add("highlight");
//     numbers[6].classList.add("highlight");
// }
// //Collumn 2 ----
// if ((numbers[1].innerHTML === numbers[4].innerHTML) && (numbers[1].innerHTML === numbers[7].innerHTML)){
//
//     numbers[1].classList.add("highlight");
//     numbers[4].classList.add("highlight5");
// }
// if (numbers[1].innerHTML === numbers[7].innerHTML){ //  +3
//
//     numbers[1].classList.add("highlight");
//     numbers[7].classList.add("highlight");
// }
// if (numbers[4].innerHTML === numbers[7].innerHTML){
//     numbers[4].classList.add("highlight");
//     numbers[7].classList.add("highlight");
// }
// //Collumn 3 ----
// if (numbers[2].innerHTML === numbers[5].innerHTML){
//
//     numbers[2].classList.add("highlight");
//     numbers[5].classList.add("highlight");
// }
// if (numbers[2].innerHTML === numbers[8].innerHTML){ //  +3
//
//     numbers[2].classList.add("highlight");
//     numbers[8].classList.add("highlight");
// }
// if (numbers[5].innerHTML === numbers[8].innerHTML){
//     numbers[5].classList.add("highlight");
//     numbers[8].classList.add("highlight");
// }
//
// // var match = function(start){
// //
// // }
