function myChess()  {
  var x = document.getElementById("chessBtn").value;
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

function myPyramid(x) {
  x = document.getElementById("pyramid").value;
  var result = "";                                 
  for (var i = 1; i <= x; i++) {
    for (var j = 1; j <= i; j++) {
      result += "# ";
    }                      
    result += "\n";               
  }
  alert(result);
}

function fizzBuzz() {
  var sumTot ="";
  for (var i = 1; i <= 100; i++) {                   // loop to iterate 100 times
    for (var j = 1; j <= 1; j++) {                  
      let straight = "";                           // declare empty variable to be assigned "Fizz" for all divisible by 3
      let flush = "";                              // declare empty variable to be assigned "Buzz" for all divisible by 5
      let fullHouse = "" ;                         // declare empty variable to be assigned straight+flush for all divisible by 3+5                           
      if (i %3 == 0)  {                            // if the loops "i" variable is divisible by 3
        straight ="Fizz";                          // This variable gets the value Fizz
      } if (i %5 == 0) {                           // if the loops "i" variable is divisible by 3
        flush ="Buzz";                             // This variable gets the value Buzz
      } if (i %3 == 0 && i %5 == 0) {              // if the loops "i" variable is divisible by 3+5
        fullHouse = straight + flush;              // This variable gets the value of both straight+flush
      } 
      sumTot += (fullHouse ||flush ||straight||i); // sumTot stores 1-100  with "Fizz"for all / 3's, 
    }                                              // "Buzz" for all / 5's and "FizzBuzz" for all numbers divisible by both
  sumTot += '\n';
  }
  alert(sumTot);
}

function palindrome() {
  str = document.getElementById("eye").value;
  var isIt = str.replace(/[\W_]/g, '').toLowerCase() ===
             str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('');
  if (isIt === true) {
  alert("That is a Palindrome");
  }  else  {alert("That is not a Palindrome")};
}
