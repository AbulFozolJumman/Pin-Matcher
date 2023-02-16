// Generate pin by function
function getPin() {
    const numbers = Math.round(Math.random()*10000);
    // console.log(numbers);
    const numbersString = numbers + "";
    if(numbersString.length === 4){
        return numbers;
    }
    else{
        return getPin();
    }
}

// addEventListener to generate pin
document.getElementById("get-pin").addEventListener('click', function () {
    const pinInputField = document.getElementById('pin');
    pinInputField.value = getPin();
});

// addEventListener to matching pin input
document.getElementById('calculator').addEventListener('click', function (event) {
    const calcBtn = event.target.innerText;
    const matchingInputField = document.getElementById('matching-input');
    const matchingInput = matchingInputField.value;
    if (isNaN(calcBtn)) {
        if (event.target.innerText === "C") {
            matchingInputField.value = "";
        }
        else if (event.target.innerText === "<") {
            const digits = matchingInput.split("");
            digits.pop();
            const remainingDigits = digits.join("");
            matchingInputField.value = remainingDigits;
        }
    }
    else{
        const newMatchingInput = matchingInput + calcBtn;
        matchingInputField.value = newMatchingInput;
    }
});

// Matching input submit btn handler
document.getElementById('pin-matcher-btn').addEventListener('click', function () {
    const pinInputField = document.getElementById('pin');
    const matchingInputField = document.getElementById('matching-input');
    const successText = document.getElementById('success');
    const failureText = document.getElementById('failure');
    if (pinInputField.value === matchingInputField.value && pinInputField.value !== "") {
        successText.style.display = 'block';
        failureText.style.display = 'none';
    }
    else{
        failureText.style.display = 'block';
        successText.style.display = 'none';
    }
});