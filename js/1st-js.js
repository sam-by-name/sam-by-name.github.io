function myChess()  {
  var x = document.getElementById("chessBtn").value;
  document.getElementById("chessBtn").innerHTML = x;  {
    var user = prompt("enter a number between 0-20") ;
    if (user == 0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20)  {
      var size = user;
      var chess = "";
      for (let i = 0; i < size; i++)  {
        for (let x = 0; x < size; x++)  {
          if ((i + x) % 2 == 0) {
            chess += " ";
          } else {
            chess += "#";
          }
        }
        chess += "\n";
      }
    alert(chess);
    }
  }
}

function myPyramid()  {
  var x = document.getElementById("pyramid").value;
  document.getElementById("pyramid1").innerHTML = triangle;{
    var triangle = x;                             
    for (let i = 0; i < x; i++) {
      (triangle += "#") +  "\n";
    }
  alert(triangle);
  }
}
                     
