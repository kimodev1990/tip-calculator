const fivePercentBtn = document.getElementById("5-percent");
const tenPercentBtn = document.getElementById("10-percent");
const fifteenPercentBtn = document.getElementById("15-percent");
const twentyFivePercentBtn = document.getElementById("25-percent");
const fiftyPercentBtn = document.getElementById("50-percent");
const priceBill = document.getElementById("price-bill");
const tipResult = document.getElementById("tip-result");
const numberPeople = document.getElementById("no-of-people");
const totalTipResult = document.getElementById("total-tip-result");
const customPercentBtn = document.getElementById("custom-percent");
const labelError = document.getElementById("label-error");
const borderError = document.getElementById("no-of-people-border");
const resetBtn = document.getElementById("reset-button");

resetBtn.addEventListener("click", () => {
  priceBill.value = 0;
  numberPeople.value = 0;
  tipResult.innerHTML = 0;
  totalTipResult.innerHTML = 0;
});

customPercentBtn.addEventListener("click", () => {
  if (numberPeople.value !== "") {
    showResultCustomPercentTip();
  } else if (numberPeople.value === "") {
    tipResult.innerHTML = 0;
    totalTipResult.innerHTML = 0;
    labelError.classList.remove("hidden");
    borderError.classList.add("show-error-border");
  }
});

fivePercentBtn.addEventListener("click", () => {
  if (numberPeople.value !== "") {
    showResultFivePercentTip();
  } else if (numberPeople.value === "") {
    tipResult.innerHTML = 0;
    totalTipResult.innerHTML = 0;
    labelError.classList.remove("hidden");
    borderError.classList.add("show-error-border");
  }
});

tenPercentBtn.addEventListener("click", () => {
  if (numberPeople.value !== "") {
    showResultTenPercentTip();
  } else if (numberPeople.value === "") {
    tipResult.innerHTML = 0;
    totalTipResult.innerHTML = 0;
    labelError.classList.remove("hidden");
    borderError.classList.add("show-error-border");
  }
});

fifteenPercentBtn.addEventListener("click", () => {
  if (numberPeople.value !== "") {
    showResultFifteenPercentTip();
  } else if (numberPeople.value === "") {
    tipResult.innerHTML = 0;
    totalTipResult.innerHTML = 0;
    labelError.classList.remove("hidden");
    borderError.classList.add("show-error-border");
  }
});

twentyFivePercentBtn.addEventListener("click", () => {
  if (numberPeople.value !== "") {
    showResultTwentyFivePercentTip();
  } else if (numberPeople.value === "") {
    tipResult.innerHTML = 0;
    totalTipResult.innerHTML = 0;
    labelError.classList.remove("hidden");
    borderError.classList.add("show-error-border");
  }
});

fiftyPercentBtn.addEventListener("click", () => {
  if (numberPeople.value !== "") {
    showResultFiftyPercentTip();
  } else if (numberPeople.value === "") {
    tipResult.innerHTML = 0;
    totalTipResult.innerHTML = 0;
    labelError.classList.remove("hidden");
    borderError.classList.add("show-error-border");
  }
});

function showResultCustomPercentTip() {
  if (numberPeople.value === "0") {
    tipResult.innerHTML = 0;
    totalTipResult.innerHTML = 0;
    labelError.classList.remove("hidden");
    borderError.classList.add("show-error-border");
  } else {
    labelError.classList.add("hidden");
    borderError.classList.remove("show-error-border");
    customPercentBtn.oninput = () => {
      tipResult.innerHTML =
        (priceBill.value / numberPeople.value) * (customPercentBtn.value / 100);
      totalTipResult.innerHTML =
        priceBill.value / numberPeople.value + parseFloat(tipResult.innerHTML);
    };
  }
}

function showResultFivePercentTip() {
  if (numberPeople.value === "0") {
    tipResult.innerHTML = 0;
    totalTipResult.innerHTML = 0;
    labelError.classList.remove("hidden");
    borderError.classList.add("show-error-border");
  } else {
    labelError.classList.add("hidden");
    borderError.classList.remove("show-error-border");
    tipResult.innerHTML = (priceBill.value / numberPeople.value) * 0.05;
    totalTipResult.innerHTML =
      priceBill.value / numberPeople.value + parseFloat(tipResult.innerHTML);
  }
}

function showResultTenPercentTip() {
  if (numberPeople.value === "0") {
    tipResult.innerHTML = 0;
    totalTipResult.innerHTML = 0;
    labelError.classList.remove("hidden");
    borderError.classList.add("show-error-border");
  } else {
    labelError.classList.add("hidden");
    borderError.classList.remove("show-error-border");
    tipResult.innerHTML = (priceBill.value / numberPeople.value) * 0.1;
    totalTipResult.innerHTML =
      priceBill.value / numberPeople.value + parseFloat(tipResult.innerHTML);
  }
}

function showResultFifteenPercentTip() {
  if (numberPeople.value === "0") {
    tipResult.innerHTML = 0;
    totalTipResult.innerHTML = 0;
    labelError.classList.remove("hidden");
    borderError.classList.add("show-error-border");
  } else {
    labelError.classList.add("hidden");
    borderError.classList.remove("show-error-border");
    tipResult.innerHTML = (priceBill.value / numberPeople.value) * 0.15;
    totalTipResult.innerHTML =
      priceBill.value / numberPeople.value + parseFloat(tipResult.innerHTML);
  }
}

function showResultTwentyFivePercentTip() {
  if (numberPeople.value === "0") {
    tipResult.innerHTML = 0;
    totalTipResult.innerHTML = 0;
    labelError.classList.remove("hidden");
    borderError.classList.add("show-error-border");
  } else {
    labelError.classList.add("hidden");
    borderError.classList.remove("show-error-border");
    tipResult.innerHTML = (priceBill.value / numberPeople.value) * 0.25;
    totalTipResult.innerHTML =
      priceBill.value / numberPeople.value + parseFloat(tipResult.innerHTML);
  }
}

function showResultFiftyPercentTip() {
  if (numberPeople.value === "0") {
    tipResult.innerHTML = 0;
    totalTipResult.innerHTML = 0;
    labelError.classList.remove("hidden");
    borderError.classList.add("show-error-border");
  } else {
    labelError.classList.add("hidden");
    borderError.classList.remove("show-error-border");
    tipResult.innerHTML = (priceBill.value / numberPeople.value) * 0.5;
    totalTipResult.innerHTML =
      priceBill.value / numberPeople.value + parseFloat(tipResult.innerHTML);
  }
}
