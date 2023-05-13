// TO RUN : Open the index.html on browser and a prompt pops us.
// Enter the currency you want to fetch Rates for and see the output in the console.

async function getExchangeRate(currencyCode) {
  // Your code here
  var requestURL = `https://api.exchangerate.host/latest`;

  return fetch(requestURL)
    .then((apiResponse) => apiResponse.json())
    .then(
      (response) =>
        Math.round(response.rates[currencyCode] * 10000) / 10000 ?? null
    );
}

var currencyCode = prompt("Enter the currency code :");

getExchangeRate(currencyCode)
  .then((rate) => {
    rate
      ? console.log(rate)
      : console.log("Error while fetching Rates, please check input!");
  })
  .catch((error) => {
    console.error(error);
  });
