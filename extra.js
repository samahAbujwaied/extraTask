alert('Welcome you in my task');
// First task
alert('Lets go to the First task ');
var input = prompt(' Please Enter  any number to let you know its positive or negative');

if (input == ' ')
{
 alert('sorry your input is empty ');
}
else if (input >=0)
{
alert(input + ' is positive');
document.write('First task input is ' + input + ' the output is positive </br></br>');
}
else if ( input < 0)
{
alert(input + ' is negative');
document.write('First task input is ' + input + ' the output is negative </br></br>');
}
else{
  alert('Sorry you entered text or somthing wrong ');
}
// second task

alert('Lets go to the second task that show you Maximum number between 3 numbers ');

var inp1= parseInt(prompt('Enter first num '));
var inp2= parseInt(prompt('Enter second num '));
var inp3= parseInt(prompt('Enter third num '));

if (inp1 == ' ' && inp2 == ' ' && inp3 == ' ')
{
  alert('Sorry your input is empty ');
  document.write('Second task inputs ' + inp1 + '  '+ inp2 + '  ' + inp3+ ' </br></br>');
}
else if ((inp1 > inp2) && (inp1 > inp3) )
{
  alert('Max num is ' + inp1);
  document.write('Second task inputs ( ' + inp1 + '  '+ inp2 + '  ' + inp3+ ' ) Maximum is </br>'+ inp1 + '</br></br>');
}
else if ( (inp2 > inp3) && (inp2 >inp1))
{
  alert('Max num is ' + inp2);
  document.write('Second task inputs  ( ' + inp1 + '       '+ inp2 + '      ' + inp3+ ' ) Maximum is </br>' + inp2 +'</br></br>');
} 
else if ((inp3 > inp1) && (inp3 > inp2))
{
  alert('Max num is ' + inp3);
  document.write('Second task inputs ( ' + inp1 + '  '+ inp2 + '  ' + inp3+ ' ) Maximum is </br>' + inp3+'</br></br>');
}
else if( inp1 == inp2 == inp3)
{
  alert('Your inputs are equals');
  document.write('Second task inputs () ' + inp1 + '  '+ inp2 + '  ' + inp3+ ' ) </br></br>');
}
else
{
  alert('Sorry your input somthing error or text');
  document.write('Second task inputs (' + inp1 + '  '+ inp2 + '  ' + inp3+ ' ) there is somthing wrong </br></br>');
}

// third task 
alert('Lets go to the third task you should Enter 20 number to show you if it even or odd'); 

for( var i=1 ; i<=20 ; i++)
{
  var evod = prompt( 'Enter  '  + i + ' number');
  
  if (evod == ' ')
   {
    alert('Sorry your input is empty ');
    document.write('('+i+ ' )Third task input ' + evod + ' </br>');
   }
  else if(evod % 2 ==0)
  {
    alert('(' +i +  ' ) Number  ' + evod +  ' number is even');
    document.write('('+i +') Third task input ' + evod + ' Output is even </br> ');
  }
  else if( evod % 2 != 0 )
  {
    alert('(' +i +  ' ) Number  ' + evod +  ' number is odd');
    document.write('('+i +') Third task input ' + evod + ' Output is odd </br> ');
  }
  else
  {
    alert('sorry your input is not number or threre is somthing wrong');
   document.write('('+i+ ' )Third task input ' + evod + ' </br>');
  }

}
  // task 4 
alert('Lets go to the fourth task that show you summation even numbers between 1 to 100 ');
document.write(' fourth task </br>' );
var sum =0;
for( var j=2; j<=100 ; j+=2)
{
  sum=sum+j;
  document.write(' </br >' + j+ ' operator is ' + sum );
}
alert('The sumation even number between 1 to 100 is    ' + sum );

//task 5
alert('Lets go to the fifth task that show you sum & multiplation between 2 numbers ');

var numm1 = parseInt(prompt('Pleases Enter First Number '));
document.write('</br> </br>fifth task input is' + numm1 + ' </br>');
var numm2 = parseInt(prompt( 'Please Enter Second Number'));
document.write('fifth task input is' + numm2 + ' </br>'); 
var sum0 ;
sum0 = numm1 + numm2;
alert ( ' sumation is ' + sum0 );
document.write('fifth output summation is ' + sum0 + '</br>');
mul= numm1 * numm2;
alert( 'multiplation is = ' + mul );
document.write('fifth output multiplation is ' + mul + ' </br>');



