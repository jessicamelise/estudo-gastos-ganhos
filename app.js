var enterValue = parseInt (prompt ("Qual o valor de entrada?"));
var outValue = parseInt (prompt ("Qual o valor de saída?"));
var taxValue = parseInt (prompt ("Qual a porcentagem do imposto?"));

var enterMinusOut = enterValue - outValue;
var taxResult = (enterMinusOut * taxValue) / 100;
var liquidValue = enterMinusOut - taxResult;

document.write("Seu ganho liquído é de $" + liquidValue);