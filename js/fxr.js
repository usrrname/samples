
//proof i know how to use an API or something
// fixer.io
let convert = () => {
  let rate = fx(1).from("CAD").to("USD");
  document.getElementById('xchange').innerHTML(" Today $1 CAD = $" + rate.toFixed(4) + "USD");
};

fetch('https://api.fixer.io/latest?base=CAD')
  .then((resp) => resp.json())
  .then((data) => fx.rates = data.rates)
  .then(convert);