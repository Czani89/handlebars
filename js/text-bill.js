// get a reference to the textbox where the bill type is to be entered
let textElement = document.querySelector(".billTypeText");
//get a reference to the add button
let addToBillBtnElement = document.querySelector(".addToBillBtn");

let callsTotalElememt = document.querySelector(".callTotalOne");
let smsTotalElement = document.querySelector(".smsTotalOne");
let totalCostElement = document.querySelector(".totalOne");

//create a variable that will keep track of the total bill
var callsTotal = 0;
var smsTotal = 0;

function textBillTotal() {
  var billTypeEntered = textElement.value.trim();
  // update the correct total
  if (billTypeEntered === "call") {
    callsTotal += 2.75;
  } else if (billTypeEntered === "sms") {
    smsTotal += 0.75;
  }

  //update the totals that is displayed on the screen.
  callsTotalElememt.innerHTML = compileTemp({
    callValue: callsTotal.toFixed(2)
  });
  smsTotalElement.innerHTML = compileTemp({
    smsValue: smsTotal.toFixed(2)
  });
  var totalCost = callsTotal + smsTotal;
  totalCostElement.innerHTML = compileTemp({
    totalValue: totalCost.toFixed(2)
  });

  if (totalCost >= 50) {
    totalCostElement.classList.add("danger");
  }
  else if (totalCost >= 30) {
    totalCostElement.classList.add("warning");
  }

}
//add an event listener for when the add button is pressed
addToBillBtnElement.addEventListener("click", textBillTotal);

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
