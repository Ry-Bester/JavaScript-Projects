 My_First_function = () => { // defining a function  and naming it
    var str = "this text is green"; // defing a variable and giving it a string value
    var result = str.fontcolor ("Green");// using the fontcolor method on str variable
    document.getElementById("Green_Text").innerHTML= result;// putting the value of result into html elemnt with green_text id
}

var numbers = [45, 4, 9, 16, 25];
var someOver18 = numbers.some(myFunction2);

document.getElementById("demo").innerHTML = "Some over 18 is " + someOver18;

function myFunction2(value, index, array) {
  return value > 18;
}