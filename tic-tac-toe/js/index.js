$(document).ready(function(){
  
  var winningCombo = [[0, 1, 2], [3, 4, 5], [6, 7, 8],
                        [0, 3, 6], [1, 4, 7], [2, 5, 8],
                        [0, 4, 8], [2, 4, 6]];
  
  var movesLeft = [0,1,2,3,4,5,6,7,8];
  var compMoves = [];
  var userMoves = [];
  var user;
  var comp; 
  
 
    var findWin=function() {

      //alert("findWin")
      for (var i = 0; i < winningCombo.length;i++) {
        var combo = winningCombo[i];
        var m1=combo[0];
        var m2=combo[1];
        var m3=combo[2];
        var winning=[];
        var tileLeft=[];
        if (compMoves.indexOf(m1)!==-1) {
          winning.push(m1);
        }  if (compMoves.indexOf(m1)==-1) {
          tileLeft.push(m1);
        }  if (compMoves.indexOf(m2)!==-1) {
          winning.push(m2);
        }  if (compMoves.indexOf(m2)==-1) {
          tileLeft.push(m2);
        }  if (compMoves.indexOf(m3)!==-1) {
          winning.push(m3);
        }  if (compMoves.indexOf(m3)==-1) {
          tileLeft.push(m3);
        }
        if (winning.length==2 & tileLeft.length==1) {        
          if (movesLeft.indexOf(tileLeft[0])!==-1) {
            $("#"+ tileLeft[0]).text("☑️");
            $("#"+ winning[0]).text("☑️");
            $("#"+ winning[1]).text("☑️");
            return true;
            
          }  
        }
      }
      return false; 
    }
    
    
    var block=function() {
     // alert("block");
      for (var i = 0; i < winningCombo.length;i++) {
        var combo = winningCombo[i];
        var m1=combo[0];
        var m2=combo[1];
        var m3=combo[2];
        var winning=[];
        var tileLeft=[];
        if (userMoves.indexOf(m1)!==-1) {
          winning.push(m1);
        }  if (userMoves.indexOf(m1)==-1) {
          tileLeft.push(m1);
        }  if (userMoves.indexOf(m2)!==-1) {
          winning.push(m2);
        }  if (userMoves.indexOf(m2)==-1) {
          tileLeft.push(m2);
        }  if (userMoves.indexOf(m3)!==-1) {
          winning.push(m3);
        }  if (userMoves.indexOf(m3)==-1) {
          tileLeft.push(m3);
        }
        if (winning.length==2 & tileLeft.length==1) {        
          if (movesLeft.indexOf(tileLeft[0])!==-1) {
            movesLeft[movesLeft.indexOf(tileLeft[0])]=null;
            $("#"+ tileLeft[0]).text(comp);
            compMoves.push(tileLeft[0]);
            return true;
          }  
        }
      }
      return false; 
    }
    
    
    
    var findFork=function() {
    //alert("findFork");


      var pairs=[];
      for (var i = 0; i < movesLeft.length; i++) {
        for (var j = 0; j < compMoves.length; j++) {
          for (var k = 0; k < winningCombo.length; k++) {
            if (winningCombo[k].indexOf(compMoves[j])!==-1 && winningCombo[k].indexOf(movesLeft[i])!==-1) {
              pairs.push(movesLeft[i]);
            }
          }
        }
      }
      for (var l = 0; l < pairs.length; l++) {
        if (pairs.lastIndexOf(pairs[l]) > l) {
          var move = pairs[l];
          $("#"+ move).text(comp);
          movesLeft[movesLeft.indexOf(move)]=null;
          compMoves.push(move);
          return true;
        }
      }
      return false; 
    }
    var findOppFork=function() {
      //alert("findOppFork");


      var pairs=[];
      for (var i = 0; i < movesLeft.length; i++) {
        for (var j = 0; j < userMoves.length; j++) {
          for (var k = 0; k < winningCombo.length; k++) {
            if (winningCombo[k].indexOf(userMoves[j])!==-1 && winningCombo[k].indexOf(movesLeft[i])!==-1) {
              pairs.push(movesLeft[i]);
            }
          }
        }
      }
      for (var l = 0; l < pairs.length; l++) {
        if (pairs.lastIndexOf(pairs[l]) > l) {
          var move = pairs[l];
          $("#"+ move).text(comp);
          movesLeft[movesLeft.indexOf(move)]=null;
          compMoves.push(move);
          return true;
        }
      }
      return false; 
    }
    
    var center=function() {
      if (movesLeft.indexOf(4)!==-1) {
        $("#4").text(comp);
        compMoves.push(4);
        movesLeft[movesLeft.indexOf(4)]=null;
        return true;
      }
      return false;
    }
    
    var oppCorner=function() {
        //alert("oppcorner");


      var lum = userMoves[userMoves.length-1] //lastusermove
      if (lum==0 && movesLeft.indexOf(8) !==-1) {
        $("#8").text(comp);
        compMoves.push(8);
        movesLeft[movesLeft.indexOf(8)]=null;
        return true;
      } else if (lum==2 && movesLeft.indexOf(6) !==-1) {
        $("#6").text(comp);
        compMoves.push(6);
        movesLeft[movesLeft.indexOf(6)]=null;
        return true;
      } else if (lum==6 && movesLeft.indexOf(2) !==-1) {
        $("#2").text(comp);
        compMoves.push(2);
        movesLeft[movesLeft.indexOf(2)]=null;
        return true;
      } else if (lum==8 && movesLeft.indexOf(0) !==-1) {
        $("#0").text(comp);
        compMoves.push(0);
        movesLeft[movesLeft.indexOf(0)]=null;
        return true;
      } else {return false;}
    }
    
    var emptyCorner=function() {
         //alert("emptycorner");


      if (movesLeft.indexOf(0) !==-1) {
        $("#0").text(comp);
        compMoves.push(0);
        movesLeft[movesLeft.indexOf(0)]=null;
        return true;
      } else if (movesLeft.indexOf(2) !==-1) {
        $("#2").text(comp);
        compMoves.push(2);
        movesLeft[movesLeft.indexOf(2)]=null;
        return true;
      } else if (movesLeft.indexOf(6) !==-1) {
        $("#6").text(comp);
        compMoves.push(6);
        movesLeft[movesLeft.indexOf(6)]=null;
        return true;
      } else if (movesLeft.indexOf(8) !==-1) {
        $("#8").text(comp);
        compMoves.push(8);
        movesLeft[movesLeft.indexOf(8)]=null;
        return true;
      } else{ return false; }
    }
    var emptySide=function() {
                  //alert("emptyside");


      if (movesLeft.indexOf(1) !==-1) {
        $("#1").text(comp);
        compMoves.push(1);
        movesLeft[movesLeft.indexOf(1)]=null;
        return true;
      } else if (movesLeft.indexOf(3) !==-1) {
        $("#3").text(comp);
        compMoves.push(3);
        movesLeft[movesLeft.indexOf(3)]=null;
        return true;
      } else if (movesLeft.indexOf(5) !==-1) {
        $("#5").text(comp);
        compMoves.push(5);
        movesLeft[movesLeft.indexOf(5)]=null;
        return true;
      } else if (movesLeft.indexOf(7) !==-1) {
        $("#7").text(comp);
        compMoves.push(7);
        movesLeft[movesLeft.indexOf(7)]=null;
        return true;
      } else{ return false; }


    }

 var compMove=function(){
   if (findWin()) {
      setTimeout(function(){
        //alert("game over! you lost, sorry"); 
        $(".tile").text("◻️");
        movesLeft = [0,1,2,3,4,5,6,7,8];
        compMoves = [];
        userMoves = [];
        //compMove();
        movesLeft=movesLeft.filter(function(item){return item!==null});
      }, 1500);
      return;
    } else if (block()) {
      return;
    } else if (findFork()) {
      return;
    } else if (findOppFork()) {
      return;
    } else if (center()) {
      return;
    } else if (oppCorner()) {
      return;
    } else if (emptyCorner()) {
      return;
    } else if (emptySide()) {
      return;
    }
  } 
 
  $("#o").click(function() {
    user = "⭕️";
    comp = "❌";
    $(".choose").css("visibility","hidden");
    $("#board").css("visibility","visible");
    compMove();
  });
  
  
  $("#x").click(function() {
    user = "❌";
    comp = "⭕️";
    $(".choose").css("visibility","hidden");
    $("#board").css("visibility","visible");
   compMove();
  })
  
  
  $(".tile").click(function() {
    var id = parseInt($(this).attr('id'));
    if (movesLeft.indexOf(id) !==-1) {
      $(this).text(user);
      userMoves.push(id);
      movesLeft[movesLeft.indexOf(id)]=null;
      movesLeft=movesLeft.filter(function(item){return item!==null});
      compMove();
      movesLeft=movesLeft.filter(function(item){return item!==null});
    }
    if (movesLeft.length==0) {
      setTimeout(function(){
        //alert("game over! you tied! resetting"); 
        $(".tile").text("⬜️");
        movesLeft = [0,1,2,3,4,5,6,7,8];
        compMoves = [];
        userMoves = [];
        compMove();
        movesLeft=movesLeft.filter(function(item){return item!==null});
      }, 1000);
    }
  })
  
  
  
})