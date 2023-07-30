let convert = function () {
  let result = document.querySelector(".result");
  let amount = parseInt(document.querySelector(".amount-input").value);
  let operator1 = document.querySelector(".currencyI").value;
  let operator2 = document.querySelector(".currency2").value;
  let converter;

  if (operator1 == operator2) {
    converter = amount;
  } else if (operator1 == "NGN" && operator2 == "USD") {
    converter = amount / 775.78;
  } else if (operator1 == "NGN" && operator2 == "GBP") {
    converter = amount / 997.47;
  } else if (operator1 == "NGN" && operator2 == "EUR") {
    converter = amount / 855.82;
  } else if (operator1 == "USD" && operator2 == "NGN") {
    converter = amount * 775.78;
  } else if (operator1 == "USD" && operator2 == "GBP") {
    converter = amount * 0.78;
  } else if (operator1 == "USD" && operator2 == "EUR") {
    converter = amount * 0.91;
  } else if (operator1 == "GBP" && operator2 == "NGN") {
    converter = amount * 997.47;
  } else if (operator1 == "GBP" && operator2 == "USD") {
    converter = amount / 0.78;
  } else if (operator1 == "GBP" && operator2 == "EUR") {
    converter = amount * 1.17;
  } else if (operator1 == "EUR" && operator2 == "NGN") {
    converter = amount * 855.82;
  } else if (operator1 == "EUR" && operator2 == "USD") {
    converter = amount / 0.91;
  } else if (operator1 == "EUR" && operator2 == "GBP") {
    converter = amount / 1.17;
  }
  result.innerHTML =
    amount + " " + operator1 + " = " + converter + " " + operator2;
};
