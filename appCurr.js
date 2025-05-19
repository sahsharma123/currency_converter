async function getExchangeRate(fromCurrency, toCurrency) {
    try {
        const response = await fetch(`https://open.er-api.com/v6/latest/${fromCurrency}`);
        const data = await response.json();
        if (data.result !== 'success') throw new Error('Failed to fetch exchange rate');
        return data.rates[toCurrency];
    } catch (error) {
        console.error('Error:', error.message);
        return null;
    }
}

async function convertCurrency() {
    const amount = parseFloat(document.querySelector('.amount input').value);
    const fromCurrency = document.querySelector('.from select').value;
    const toCurrency = document.querySelector('.to select').value;
    const exchangeRate = await getExchangeRate(fromCurrency, toCurrency);

    if (exchangeRate) {
        const convertedAmount = (amount * exchangeRate).toFixed(2);
        const message = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
        document.querySelector('.msg').textContent = message;
    } else {
        document.querySelector('.msg').textContent = 'Error: Unable to fetch conversion rate';
    }
}

// Event listener for the convert button
const convertBtn = document.querySelector('button');
convertBtn.addEventListener('click', (e) => {
    e.preventDefault();
    convertCurrency();
});
