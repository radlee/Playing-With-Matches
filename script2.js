
  var getRandomNumber = function(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  // var updateHTML = function(id){
  //   document.getElementById(id).innerHTML = rand;
  // };
  var rand1 = getRandomNumber(1,9);

  var updateHTML = function(){
    document.getElementById("div1").innerHTML = rand1;
  };
  updateHTML("div1");

  var rand2 = getRandomNumber(1,9);
  var updateHTML = function(){
    document.getElementById("div2").innerHTML = rand2;
  };
  updateHTML("div2");

  var rand3 = getRandomNumber(1,9);
  var updateHTML = function(){
    document.getElementById("div3").innerHTML = rand3;
  };
  updateHTML("div3");
  //Row2------------------------------------------------------------------
//
//   var rand4 = getRandomNumber(1,9);
//
//   var updateHTML = function(){
//     document.getElementById("div4").innerHTML = rand4;
//   };
//   updateHTML("div4");
//
//   var rand5 = getRandomNumber(1,9);
//   var updateHTML = function(){
//     document.getElementById("div5").innerHTML = rand5;
//   };
//   updateHTML("div5");
//
//   var rand6 = getRandomNumber(1,9);
//   var updateHTML = function(){
//     document.getElementById("div6").innerHTML = rand6;
//   };
//   updateHTML("div6");
//
// //Row Last-----------------------------------------------------------
//   var rand7 = getRandomNumber(1,9);
//
//   var updateHTML = function(){
//     document.getElementById("div7").innerHTML = rand7;
//   };
//   updateHTML("div7");
//
//   var rand8 = getRandomNumber(1,9);
//   var updateHTML = function(){
//     document.getElementById("div8").innerHTML = rand8;
//   };
//   updateHTML("div8");
//
//   var rand9 = getRandomNumber(1,9);
//   var updateHTML = function(){
//     document.getElementById("div9").innerHTML = rand9;
//   };
//   updateHTML("div9");



// var getDiv1 = function(){
//   if(i === 0){
//     i = "div1"
//     return i;
//   }
//   else if(i === 1){
//     i = "div2"
//     return i;
//   }
//   else if(i === 2){
//     i = "div3"
//     return i;
//   }
// };


  var numbers = [rand1, rand2, rand3];

  for(i=0; i<numbers.length; i++){
    for(j=i+1; j<numbers.length; j++){
      if(numbers[i] === numbers[j]){

        var firstDiv = i+1;
        var secondDiv = j+1;

        alert(firstDiv);
        alert(secondDiv);
      }
    }
  }

  var addDiv = function(firstDiv){
    if(firstDiv === 1){
      return "div1";
    }
    else if(firstDiv === 2){
      return "div2";
    }
    else if(firstDiv === 3){
      return "div3";
    }
  };

  var addDiv2 = function(secondDiv){
    return "div"
  };
  document.getElementById(addDiv(firstDiv)).classList.add("highlight");
  document.getElementById(addDiv()).classList.add("highlight");
  //Row ----------------------------------------------------------CLASSLIST-----------------------------------------------------------------
  // if((rand1 === rand2) && (rand1 === rand3) ){
  //   document.getElementById("div1").classList.add("highlight");
  //   document.getElementById("div2").classList.add("highlight");
  //   document.getElementById("div3").classList.add("highlight");
  //   document.getElementById("rowMatch").style.color = "White";
  //   document.getElementById("rowMatch").style.background = "blue";
  //   document.getElementById("rowMatch").innerHTML = 3 + " [ " + rand1 + " ]"+ "s in the First Row Match";
  // }
  // else if(rand1 === rand2){
  //   document.getElementById("div1").classList.add("highlight");
  //   document.getElementById("div2").classList.add("highlight");
  //   document.getElementById("rowMatch").style.color = "White";
  //   document.getElementById("rowMatch").style.background = "blue";
  //   document.getElementById("rowMatch").innerHTML =  2 + " [ " + rand1 + " ]"+ "s in the First Row Match";
  // }
  // else if(rand2 === rand3){
  //   document.getElementById("div2").classList.add("highlight");
  //   document.getElementById("div3").classList.add("highlight");
  //   document.getElementById("rowMatch").style.color = "White";
  //   document.getElementById("rowMatch").style.background = "blue";
  //   document.getElementById("rowMatch").innerHTML = 2 + " [ " + rand2 + " ]"+ "s in the First Row Match";
  // }
  // else if(rand1 === rand3){
  //   document.getElementById("div1").classList.add("highlight");
  //   document.getElementById("div3").classList.add("highlight");
  //   document.getElementById("rowMatch").style.color = "White";
  //   document.getElementById("rowMatch").style.background = "blue";
  //   document.getElementById("rowMatch").innerHTML = 2 + " [ " + rand1 + " ]"+ "s in the First Row Match";
  // }
  // //Row2 ---------------------------------------------------------------------
  // else if((rand4 === rand5) && (rand4 === rand6) ){
  //   document.getElementById("div4").classList.add("highlight");
  //   document.getElementById("div5").classList.add("highlight");
  //   document.getElementById("div6").classList.add("highlight");
  //   document.getElementById("rowMatch").style.color = "White";
  //   document.getElementById("rowMatch").style.background = "blue";
  //   document.getElementById("rowMatch").innerHTML = 3 + " [ " + rand4 + " ]"+ "s in the Second Row Match";
  // }
  // else if(rand4 === rand5){
  //   document.getElementById("div4").classList.add("highlight");
  //   document.getElementById("div5").classList.add("highlight");
  //   document.getElementById("rowMatch").style.color = "White";
  //   document.getElementById("rowMatch").style.background = "blue";
  //   document.getElementById("rowMatch").innerHTML =  2 + " [ " + rand4 + " ]"+ "s in the Second Row Match";
  // }
  // else if(rand5 === rand6){
  //   document.getElementById("div5").classList.add("highlight");
  //   document.getElementById("div6").classList.add("highlight");
  //   document.getElementById("rowMatch").style.color = "White";
  //   document.getElementById("rowMatch").style.background = "blue";
  //   document.getElementById("rowMatch").innerHTML = 2 + " [ " + rand5 + " ]"+ "s in the Second Row Match";
  // }
  // else if(rand4 === rand6){
  //   document.getElementById("div4").classList.add("highlight");
  //   document.getElementById("div6").classList.add("highlight");
  //   document.getElementById("rowMatch").style.color = "White";
  //   document.getElementById("rowMatch").style.background = "blue";
  //   document.getElementById("rowMatch").innerHTML = 2 + " [ " + rand4 + " ]"+ "s in the Second Row Match";
  // }
  // //Row Last ----------------------------------------------------------------
  // else if((rand7 === rand8) && (rand7 === rand9) ){
  //   document.getElementById("div7").classList.add("highlight");
  //   document.getElementById("div8").classList.add("highlight");
  //   document.getElementById("div9").classList.add("highlight");
  //   document.getElementById("rowMatch").style.color = "White";
  //   document.getElementById("rowMatch").style.background = "blue";
  //   document.getElementById("rowMatch").innerHTML = 3 + " [ " + rand7 + " ]"+ "s in the Third Row Match";
  // }
  // else if(rand7 === rand8){
  //   document.getElementById("div7").classList.add("highlight");
  //   document.getElementById("div8").classList.add("highlight");
  //   document.getElementById("rowMatch").style.color = "White";
  //   document.getElementById("rowMatch").style.background = "blue";
  //   document.getElementById("rowMatch").innerHTML =  2 + " [ " + rand7 + " ]"+ "s in the Third Row Match";
  // }
  // else if(rand8 === rand9){
  //   document.getElementById("div8").classList.add("highlight");
  //   document.getElementById("div9").classList.add("highlight");
  //   document.getElementById("rowMatch").style.color = "White";
  //   document.getElementById("rowMatch").style.background = "blue";
  //   document.getElementById("rowMatch").innerHTML = 2 + " [ " + rand8 + " ]"+ "s in the Third Row Match";
  // }
  // else if(rand7 === rand9){
  //   document.getElementById("div7").classList.add("highlight");
  //   document.getElementById("div9").classList.add("highlight");
  //   document.getElementById("rowMatch").style.color = "White";
  //   document.getElementById("rowMatch").style.background = "blue";
  //   document.getElementById("rowMatch").innerHTML = 2 + " [ " + rand7 + " ]"+ "s in the Third Row Match";
  // }
//------------------------------------------------------END OF CLASSLIST---------------------------------------------------------------------------------
  //document.getElementById("div3").classList.add("highlight");

  // var match = function(){
  //   if((rand1 === rand2) && (rand1 === rand3) && (rand1 === rand4)){
  //     document.getElementById("ranMatch").innerHTML = "Div1, Div2, Div3 and Div4 Match!";
  //     document.getElementById("ranMatch").style.color = "white";
  //     document.getElementById("ranMatch").style.background = "purple";
  //     document.getElementById("div1").style.color = "black";
  //     document.getElementById("div2").style.color = "black";
  //     document.getElementById("div3").style.color = "black";
  //     document.getElementById("div4").style.color = "black";
  //
  //   }
  //   else if((rand1 === rand2) && (rand2 === rand3)){
  //     document.getElementById("rowMatch").innerHTML = "[ " + rand1 + " ] -> Row Match!";
  //     document.getElementById("rowMatch").style.color = "white";
  //     document.getElementById("rowMatch").style.background = "purple";
  //     document.getElementById("div1").style.color = "black";
  //     document.getElementById("div2").style.color = "black";
  //     document.getElementById("div3").style.color = "black";
  //   }
  //   else if((rand1 === rand3) && (rand3 === rand4)){
  //     document.getElementById("ranMatch").innerHTML = "[ " + rand1 + " ] Div1, Div3 and Div4 Match!";
  //     document.getElementById("ranMatch").style.color = "white";
  //     document.getElementById("ranMatch").style.background = "purple";
  //     document.getElementById("div1").style.color = "black";
  //     document.getElementById("div3").style.color = "black";
  //     document.getElementById("div4").style.color = "black";
  //
  //   }
  //   else if((rand2 === rand3) && (rand3 === rand4)){
  //     document.getElementById("ranMatch").innerHTML = "[ " + rand2 + " ] Div2, div3 and Div4 Match!";
  //     document.getElementById("ranMatch").style.color = "white";
  //     document.getElementById("ranMatch").style.background = "purple";
  //     document.getElementById("div2").style.color = "black";
  //     document.getElementById("div3").style.color = "black";
  //     document.getElementById("div4").style.color = "black";
  //   }
  //   else if(rand1 === rand2 ){
  //     document.getElementById("colMatch").innerHTML = "[ " + rand1 + " ] Matches in Div1 and Div2 !";
  //     document.getElementById("colMatch").style.color = "white";
  //     document.getElementById("colMatch").style.background = "purple";
  //     document.getElementById("div1").style.color = "black";
  //     document.getElementById("div2").style.color = "black";
  //   }
  //   else if(rand1 === rand3){
  //       document.getElementById("colMatch").innerHTML = "[ " + rand1 + " ] Matches in Div1 and Div3 !";
  //       document.getElementById("colMatch").style.color = "white";
  //       document.getElementById("colMatch").style.background = "purple";
  //       document.getElementById("div1").style.color = "black";
  //       document.getElementById("div3").style.color = "black";
  //   }
  //   else if(rand1 === rand4){
  //       document.getElementById("ranMatch").innerHTML = "[ " + rand1 + " ] Matches in Div1 and Div4 !";
  //       document.getElementById("ranMatch").style.color = "white";
  //       document.getElementById("ranMatch").style.background = "purple";
  //       document.getElementById("div1").style.color = "black";
  //       document.getElementById("div4").style.color = "black";
  //
  //   }
  //   else if(rand2 === rand3){
  //       document.getElementById("colMatch").innerHTML = "[ " + rand2 + " ] Matches in Div2 and Div3 !";
  //       document.getElementById("colMatch").style.color = "white";
  //       document.getElementById("colMatch").style.background = "purple";
  //       document.getElementById("div2").style.color = "black";
  //       document.getElementById("div3").style.color = "black";
  //
  //   }
  //   else if(rand2 === rand4){
  //     document.getElementById("ranMatch").innerHTML = "[ " + rand2 + " ] Match in Div2 and Div4 !";
  //     document.getElementById("ranMatch").style.color = "white";
  //     document.getElementById("ranMatch").style.background = "purple";
  //     document.getElementById("div2").style.color = "black";
  //     document.getElementById("div4").style.color = "black";
  //   }
  //   else if(rand3 === rand4){
  //     document.getElementById("ranMatch").innerHTML = "[ " + rand3 + " ] Match in Div3 and Div4 !";
  //     document.getElementById("ranMatch").style.color = "white";
  //     document.getElementById("ranMatch").style.background = "purple";
  //     document.getElementById("div3").style.color = "black";
  //     document.getElementById("div4").style.color = "black";
  //   }

  //};

  var getMessage = function(){
    document.getElementById("message").innerHTML = message;
  };
//match();
