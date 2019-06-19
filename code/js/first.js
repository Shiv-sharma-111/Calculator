//alert("Hii Welcome To my calculator");
/*function trigonometry(x) {
  var box = document.getElementById('display1');
  //declaring the values of sin cos Tan
  var sin = "Math.abs(Math.sin(";
  var cos = "Math.abs(Math.cos(";
  var tan = "Math.abs(Math.tan(";
  if(x=='sin')
  {
    box.value +=sin
  }

}*/
function fact()
{
  var box = document.getElementById('display1');
  var num = prompt("number");
  var a=1;
  while (num!=0) {
    a*=num;
    num-=1
  }
  box.value+=a;
}
function square()
{
  var box = document.getElementById('display1');
  var num = prompt("number");
  var x=num*num;
  box.value+=x;
}
function sqrt()
{
  var box = document.getElementById('display1');
  var num = prompt("number");
  var x=Math.sqrt(num);
  box.value+=x;
}
function power(x)
{
  var box = document.getElementById('display1');
  if(box.value.length>0)
  {
    box.value+=x;
  }

}
