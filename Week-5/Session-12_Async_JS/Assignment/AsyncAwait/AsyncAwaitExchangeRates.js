// TO RUN : Open the index.html on browser and a prompt pops us.
// Enter the currency you want to fetch Rates for and see the output in the console.

async function getExchangeRate(currencyCode) {
  // Your code here
  var requestURL = `https://api.exchangerate.host/latest`;

  try {
    let response = await fetch(requestURL)
    if (response) {
      const responseJson = await response.json()
      return Math.round(responseJson.rates[currencyCode] * 10000) / 10000 ?? null
    } else {
      return null;
    }
  } catch {
    return null;
  }
}

var currencyCode = prompt("Enter the currency code :");

getExchangeRate(currencyCode)
  .then((rate) => {
    rate
      ? console.log(rate)
      : console.log("Error while fetching Rates, please try after sometime or with a different Input!");
  })
  .catch((error) => {
    console.error(error);
  });
