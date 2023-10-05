const calcForm = document.getElementById('calc-form');
const loanAmount = document.getElementById('loan-amount');
const interestRate = document.getElementById('interest-rate');
const noOfMonth = document.getElementById('no-of-month');
const calcBtn = document.getElementById('calc-btn');
const clearBtn = document.getElementById('clear-btn');
const paymentInfoList = document.querySelectorAll('.payment-info div span');

calcForm.addEventListener('submit', e => {
  e.preventDefault();
  showPaymentInfo();
});

clearBtn.addEventListener('click', clearInputAndResult);

// show payment info
function showPaymentInfo() {
  let monthlyPayment = calcMonthlyPayment(
    loanAmount.value,
    interestRate.value,
    noOfMonth.value
  );
  paymentInfoList[0].innerHTML = `$${loanAmount.value.toLocaleString()}`;
  paymentInfoList[1].innerHTML = `$${interestRate.value}%`;
  paymentInfoList[2].innerHTML = noOfMonth.value;
  paymentInfoList[3].innerHTML = `$${parseFloat(
    monthlyPayment
  ).toLocaleString()}`;
}

function calcMonthlyPayment(PV, i, n) {
  i = i / 100 / 12;
  let PMT = (PV * i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);
  return PMT.toFixed(2);
}

function clearInputAndResult() {
  calcForm.reset();
  paymentInfoList.forEach(item => {
    item.innerHTML = '&mdash;';
  });
}
