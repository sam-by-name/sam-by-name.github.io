var user = prompt("enter a number between 0-10") ;
if (user == 1, 2, 3, 4, 5, 6, 7, 8, 9, 10)  {
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