// appCurr.js

const fromSelect = document.querySelector(".from-select");
const toSelect = document.querySelector(".to-select");
const fromFlag = document.querySelector(".from-flag");
const toFlag = document.querySelector(".to-flag");
const amountInput = document.querySelector("input");
const msg = document.querySelector(".msg");
const convertBtn = document.querySelector("#convert");

// Populate dropdowns
for (let currency in countryList) {
  let option1 = document.createElement("option");
  let option2 = document.createElement("option");

  option1.value = option2.value = currency;
  option1.text = option2.text = currency;

  fromSelect.appendChild(option1);
  toSelect.appendChild(option2);
}

fromSelect.value = "USD";
toSelect.value = "INR";

// Update flag images
function updateFlag(selectElement, flagImage) {
  const countryCode = countryList[selectElement.value];
  flagImage.src = `https://flagsapi.com/${countryCode}/flat/64.png`;
}

fromSelect.addEventListener("change", () => updateFlag(fromSelect, fromFlag));
toSelect.addEventListener("change", () => updateFlag(toSelect, toFlag));

// Convert on button click
convertBtn.addEventListener("click", async (e) => {
  e.preventDefault();

  const amount = parseFloat(amountInput.value);
  const from = fromSelect.value;
  const to = toSelect.value;

  if (isNaN(amount) || amount <= 0) {
    msg.innerText = "Please enter a valid amount.";
    return;
  }

  msg.innerText = "Fetching rate...";

  try {
    const res = await fetch(`https://api.exchangerate-api.com/v4/latest/${from}`);
    const data = await res.json();
    const rate = data.rates[to];
    const converted = (amount * rate).toFixed(2);

    msg.innerText = `${amount} ${from} = ${converted} ${to}`;
  } catch (error) {
    msg.innerText = "Error fetching exchange rate.";
  }
});
