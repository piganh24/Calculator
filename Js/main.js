function result(){
const firstNumber = document.getElementById("firstNumber").value;
const secoundNumber = document.getElementById("secoundNumber").value;
const digital = document.getElementById("digital").value;

switch(digital){
    case "plus":
    case "+":document.getElementById("showResult").value = firstNumber * 1 + secoundNumber * 1; break;
    case "minus":
    case "-":document.getElementById("showResult").value = firstNumber * 1 - secoundNumber * 1; break;
    case "multiply":
    case "*":document.getElementById("showResult").value = firstNumber * 1 * secoundNumber * 1; break;
    case "divide":
    case "/":
        if(secoundNumber * 1 == 0)
        {
            document.getElementById("showResult").value = "На 0 не ділиться"; break;
        } 
        else {document.getElementById("showResult").value = firstNumber * 1 / secoundNumber * 1; break;}}
}