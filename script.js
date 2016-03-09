
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

  if((rand1 === rand2) && (rand1 === rand3)){
    document.getElementById("div1").classList.add("highlight");
    document.getElementById("div2").classList.add("highlight");
    document.getElementById("div3").classList.add("highlight");
  }
  var rand4 = getRandomNumber(1,9);
  var updateHTML = function(){
    document.getElementById("div4").innerHTML = rand4;
  };
  updateHTML("div4");

  var rand5 = getRandomNumber(1,9);
  var updateHTML = function(){
    document.getElementById("div_5").innerHTML = rand5;
  };
  updateHTML("div_5");

  var rand6 = getRandomNumber(1,9);
  var updateHTML = function(){
    document.getElementById("div6").innerHTML = rand6;
  };
  updateHTML("div6");

  var rand7 = getRandomNumber(1,9);
  var updateHTML = function(){
    document.getElementById("div7").innerHTML = rand7;
  };
  updateHTML("div7");

  var rand8 = getRandomNumber(1,9);
  var updateHTML = function(){
    document.getElementById("div8").innerHTML = rand8;
  };
  updateHTML("div8");

  var rand9 = getRandomNumber(1,9);
  var updateHTML = function(){
    document.getElementById("div9").innerHTML = rand9;
  };
  updateHTML("div9");



  var match = function(){
    if((rand1 === rand2) && (rand1 === rand3) && (rand1 === rand4)){
      document.getElementById("ranMatch").innerHTML = "Div1, Div2, Div3 and Div4 Match!";
      document.getElementById("ranMatch").style.color = "white";
      document.getElementById("ranMatch").style.background = "purple";
      document.getElementById("div1").style.color = "black";
      document.getElementById("div2").style.color = "black";
      document.getElementById("div3").style.color = "black";
      document.getElementById("div4").style.color = "black";
    }
//-----------Start of Collumn-------------------------------------------------------
    else if((rand1 === rand4) && (rand1 === rand7)){
      document.getElementById("colMatch").innerHTML = "Div1, Div4, and Div7 Match!";
      document.getElementById("colMatch").style.color = "white";
      document.getElementById("colMatch").style.background = "purple";
      document.getElementById("div1").style.color = "black";
      document.getElementById("div4").style.color = "black";
      document.getElementById("div7").style.color = "black";
    }

    else if(rand1 === rand7){
      document.getElementById("colMatch").innerHTML = "Div1 and Div7 Match!";
      document.getElementById("colMatch").style.color = "white";
      document.getElementById("colMatch").style.background = "purple";
      document.getElementById("div1").style.color = "black";
      document.getElementById("div7").style.color = "black";
    }

    else if(rand4 === rand7){
      document.getElementById("colMatch").innerHTML = "Div4 and Div7 Match!";
      document.getElementById("colMatch").style.color = "white";
      document.getElementById("colMatch").style.background = "purple";
      document.getElementById("div4").style.color = "black";
      document.getElementById("div7").style.color = "black";
    }

    //-----------star collum 2------------------------
    else if((rand2 === rand5) && (rand2 === rand8)){
      document.getElementById("colMatch").innerHTML = "Div2, Div5, and Div8 Match!";
      document.getElementById("colMatch").style.color = "white";
      document.getElementById("colMatch").style.background = "purple";
      document.getElementById("div2").style.color = "black";
      document.getElementById("div_5").style.color = "black";
      document.getElementById("div8").style.color = "black";
    }

    else if(rand2 === rand8){
      document.getElementById("colMatch").innerHTML = "Div2 and Div8 Match!";
      document.getElementById("colMatch").style.color = "white";
      document.getElementById("colMatch").style.background = "purple";
      document.getElementById("div2").style.color = "black";
      document.getElementById("div8").style.color = "black";
    }

    else if(rand5 === rand8){
      document.getElementById("colMatch").innerHTML = "Div5 and Div8 Match!";
      document.getElementById("colMatch").style.color = "white";
      document.getElementById("colMatch").style.background = "purple";
      document.getElementById("div_5").style.color = "black";
      document.getElementById("div8").style.color = "black";
    }
    else if(rand2 === rand5){
      document.getElementById("colMatch").innerHTML = "Div2 and Div5 Match!";
      document.getElementById("colMatch").style.color = "white";
      document.getElementById("colMatch").style.background = "purple";
      document.getElementById("div2").style.color = "black";
      document.getElementById("div_5").style.color = "black";
    }
    //--Start collum 3--

    else if((rand3 === rand6) && (rand3 === rand9)){
      document.getElementById("colMatch").innerHTML = "Div3, Div6, and Div9 Match!";
      document.getElementById("colMatch").style.color = "white";
      document.getElementById("colMatch").style.background = "purple";
      document.getElementById("div3").style.color = "black";
      document.getElementById("div6").style.color = "black";
      document.getElementById("div9").style.color = "black";
    }

    else if(rand3 === rand9){
      document.getElementById("colMatch").innerHTML = "Div3 and Div9 Match!";
      document.getElementById("colMatch").style.color = "white";
      document.getElementById("colMatch").style.background = "purple";
      document.getElementById("div3").style.color = "black";
      document.getElementById("div9").style.color = "black";
    }

    else if(rand6 === rand9){
      document.getElementById("colMatch").innerHTML = "Div6 and Div9 Match!";
      document.getElementById("colMatch").style.color = "white";
      document.getElementById("colMatch").style.background = "purple";
      document.getElementById("div6").style.color = "black";
      document.getElementById("div9").style.color = "black";
    }
    else if(rand3 === rand6){
      document.getElementById("colMatch").innerHTML = "Div3 and Div6 Match!";
      document.getElementById("colMatch").style.color = "white";
      document.getElementById("colMatch").style.background = "purple";
      document.getElementById("div3").style.color = "black";
      document.getElementById("div6").style.color = "black";
    }

    else if((rand1 === rand2) && (rand2 === rand3)){
      document.getElementById("rowMatch").innerHTML = "[ " + rand1 + " ] -> Row Match!";
      document.getElementById("rowMatch").style.color = "white";
      document.getElementById("rowMatch").style.background = "purple";
      document.getElementById("div1").style.color = "black";
      document.getElementById("div2").style.color = "black";
      document.getElementById("div3").style.color = "black";
    }
    else if((rand1 === rand3) && (rand3 === rand4)){
      document.getElementById("ranMatch").innerHTML = "[ " + rand1 + " ] Div1, Div3 and Div4 Match!";
      document.getElementById("ranMatch").style.color = "white";
      document.getElementById("ranMatch").style.background = "purple";
      document.getElementById("div1").style.color = "black";
      document.getElementById("div3").style.color = "black";
      document.getElementById("div4").style.color = "black";

    }
    else if((rand2 === rand3) && (rand3 === rand4)){
      document.getElementById("ranMatch").innerHTML = "[ " + rand2 + " ] Div2, div3 and Div4 Match!";
      document.getElementById("ranMatch").style.color = "white";
      document.getElementById("ranMatch").style.background = "purple";
      document.getElementById("div2").style.color = "black";
      document.getElementById("div3").style.color = "black";
      document.getElementById("div4").style.color = "black";
    }
    else if(rand1 === rand2 ){
      document.getElementById("colMatch").innerHTML = "[ " + rand1 + " ] Matches in Div1 and Div2 !";
      document.getElementById("colMatch").style.color = "white";
      document.getElementById("colMatch").style.background = "purple";
      document.getElementById("div1").style.color = "black";
      document.getElementById("div2").style.color = "black";
    }
    else if(rand1 === rand3){
        document.getElementById("colMatch").innerHTML = "[ " + rand1 + " ] Matches in Div1 and Div3 !";
        document.getElementById("colMatch").style.color = "white";
        document.getElementById("colMatch").style.background = "purple";
        document.getElementById("div1").style.color = "black";
        document.getElementById("div3").style.color = "black";
    }
    else if(rand1 === rand4){
        document.getElementById("ranMatch").innerHTML = "[ " + rand1 + " ] Matches in Div1 and Div4 !";
        document.getElementById("ranMatch").style.color = "white";
        document.getElementById("ranMatch").style.background = "purple";
        document.getElementById("div1").style.color = "black";
        document.getElementById("div4").style.color = "black";

    }
    else if(rand2 === rand3){
        document.getElementById("colMatch").innerHTML = "[ " + rand2 + " ] Matches in Div2 and Div3 !";
        document.getElementById("colMatch").style.color = "white";
        document.getElementById("colMatch").style.background = "purple";
        document.getElementById("div2").style.color = "black";
        document.getElementById("div3").style.color = "black";

    }
    else if(rand2 === rand4){
      document.getElementById("ranMatch").innerHTML = "[ " + rand2 + " ] Match in Div2 and Div4 !";
      document.getElementById("ranMatch").style.color = "white";
      document.getElementById("ranMatch").style.background = "purple";
      document.getElementById("div2").style.color = "black";
      document.getElementById("div4").style.color = "black";
    }
    else if(rand3 === rand4){
      document.getElementById("ranMatch").innerHTML = "[ " + rand3 + " ] Match in Div3 and Div4 !";
      document.getElementById("ranMatch").style.color = "white";
      document.getElementById("ranMatch").style.background = "purple";
      document.getElementById("div3").style.color = "black";
      document.getElementById("div4").style.color = "black";
    }

  };

  var getMessage = function(){
    document.getElementById("message").innerHTML = message;
  };
match();
