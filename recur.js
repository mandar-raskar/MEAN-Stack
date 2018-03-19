function execu()
{
// factorial of no.

    /*function fact(n)  
    {  
        
        if (n == 0) 
        {  
            return 1;  
        }  
        else                                 
        {  
            return (n * fact(n - 1));
        }
    }

    var ip = document.getElementById('ip').value;
    var num = parseInt(ip);
    alert(fact(num));
*/
 /*var a = [];
   function fibona(n) {
   
        if (n == 1 || n == 0)
        {
            return n;
        }
        else
        {
            
            var b =[(a.length -1) + (a.length - 2)];
            return b;

        }

    var ip = document.getElementById('ip').value;
    var num = parseInt(ip);
    alert(fibona(num));
    }
}*/

//var i = 0;
//fibonacci with recursion

var el = [];
 function fib(n){
    var x ;
    if(n <= 1){
        x = n;
    }
    else{
        if (el [n-1] == null)
        el[n-1] = fib(n-1);
        if(el[n-2] == null)
        
        el[n -2] = fib(n-2);

        y = el[n-1];
        z = el[n-2];
        x = y + z;
    }
    return x;
};

    /* var ip = document.getElementById('ip').value;
    var num = parseInt(ip);
    alert(fib(num));*/
   
 //}
 //fibonacci with memoization
  function fib2(m){
    var a;
    var b;
    if (m in el){
        a = el[m] ;
    }
    if(m <= 1){
        a = m;
    }
    else{
        if (el [m-1] == null)
        el[m-1] = fib(n-1);
        if(el[m-2] == null)
        
        el[m -2] = fib(m-2);

        y = el[m-1];
        z = el[m-2];
        a = y + z;
    }
    return a;
}
      var ip = document.getElementById('ip').value;
    var num = parseInt(ip);
    alert(fib(num));
  }
