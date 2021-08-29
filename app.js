var dateOfBirth = document.querySelector("#date-of-birth");
var luckyNumber = document.querySelector("#lucky-number");
var outputEl = document.querySelector("#output");
var checkButton = document.querySelector("#btn-check");
var privacyMsg = document.querySelector("#privacy-msg");
var crossMark = document.querySelector("#privacy-msg-cross");

function checkBirthdayLucky() {
  var dob = dateOfBirth.value;
  var inputLuckyNumber = luckyNumber.value;
  var result = sumOfDate(dob);
  if (dob && inputLuckyNumber) {
    if(inputLuckyNumber>0){
      if (result % inputLuckyNumber === 0) {
        outputEl.innerText = "Yay!! your birthday is lucky";
      } else {
        outputEl.innerText = "OOpss!! your birthday is not lucky";
      }

    } else{
      outputEl.innerText = "Lucky number should be positive";
      }
    }else {
      output.innerText = "Please Enter Valid Details";
    }
}

function sumOfDate(dob) {
  dob = dob.replaceAll("-", "");
  var sum = 0;
  for (var i = 0; i < dob.length; i++) {
    sum = sum + Number(dob.charAt(i));
  }
  return sum;
}
function crossMarkHandler() {
  privacyMsg.style.display = "none";
}

checkButton.addEventListener("click", checkBirthdayLucky);
crossMark.addEventListener("click", crossMarkHandler);
