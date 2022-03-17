const x = document.getElementById("main");
const y = x.getElementsByTagName("p");

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

btn1.addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("demo").innerHTML = y[0].innerHTML;
}

btn2.addEventListener("click", mySecondFunction);

function mySecondFunction() {
  document.getElementById("demo").innerHTML = y[1].innerHTML;
}
