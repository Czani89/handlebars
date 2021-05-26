// get a reference to the sms or call radio buttons

//get a reference to the add button
let checkedRadioBtn = document.querySelector(".radioBillAddBtn");

let radioCallsTotalElememt = document.querySelector(".callTotalTwo");
let radioSmsTotalElement = document.querySelector(".smsTotalTwo");
let radioTotalCostElement = document.querySelector(".totalTwo");

var textTemplate = document.querySelector(".textTemplate").innerHTML
//compile the template
var compileTemp = Handlebars.compile(textTemplate)

//create a variable that will keep track of the total bill
let radioCallsTotal = 0;
let radioSmsTotal = 0;
//add an event listener for when the add button is pressed
function radioBillTotal() {
  let radioBillType = document.querySelector(
    "input[name='billItemType']:checked"
  ).value;
  // update the correct total
  if (radioBillType === "call") {
    radioCallsTotal += 2.75;
  } else if (radioBillType === "sms") {
    radioSmsTotal += 0.75;
  }

  //update the totals that is displayed on the screen.
  radioCallsTotalElememt.innerHTML = compileTemp({ callValue: radioCallsTotal.toFixed(2) });
  radioSmsTotalElement.innerHTML = compileTemp({ smsValue: radioSmsTotal.toFixed(2) });
  var radioTotalCost = radioCallsTotal + radioSmsTotal;
  radioTotalCostElement.innerHTML = compileTemp({
    totalValue: radioTotalCost.toFixed(2)
  });

  if (radioTotalCost >= 50) {
    radioTotalCostElement.classList.add("danger");
  }
  else if (radioTotalCost >= 30) {
    radioTotalCostElement.classList.add("warning");
  }
}

checkedRadioBtn.addEventListener("click", radioBillTotal);

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
