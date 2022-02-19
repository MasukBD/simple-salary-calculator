// function for get input value 
function getInput(inputId) {
    const enteredInput = document.getElementById(inputId);
    const enteredInputText = enteredInput.value;
    const enteredInputValue = parseFloat(enteredInputText);
    // clearing value 
    // enteredInput.value = "";
    return enteredInputValue;
}


// calculate button event handler 
document.getElementById('calculate-button').addEventListener('click', function () {
    const incomeInput = getInput('income-input');
    const foodInput = getInput('food-input');
    const rentInput = getInput('rent-input');
    const clothesInput = getInput('clothes-input');
    const expenses = foodInput + rentInput + clothesInput;
    if (incomeInput < 0 || foodInput < 0 || rentInput < 0 || clothesInput < 0) {
        document.getElementById('warning4').style.display = 'block';
    }
    else if (isNaN(incomeInput) || isNaN(foodInput) || isNaN(rentInput) || isNaN(clothesInput)) {
        document.getElementById('warning2').style.display = 'block';
    }
    else if (incomeInput < expenses) {
        document.getElementById('warning').style.display = 'block';
    }
    else {
        const totalExpenses = document.getElementById('total-expenses');
        totalExpenses.innerText = expenses;
        const balanceRemain = incomeInput - expenses;
        document.getElementById('balance').innerText = balanceRemain;
    }
});

// function for get innertext
function getInnerValue(inputAId) {
    const previousBalance = document.getElementById(inputAId);
    const previousBalanceText = previousBalance.innerText;
    const exitsBalance = parseFloat(previousBalanceText);
    return exitsBalance;
};

// save button click handler
document.getElementById('save-button').addEventListener('click', function () {
    // savings amount calculation 
    const incomeInput = getInput('income-input');
    const save = getInput('save-input');
    const saving = save / 100;
    const savingCalculation = incomeInput * saving;
    document.getElementById('saving').innerText = savingCalculation;
    // remaing balance calculation 
    const balance = getInnerValue('balance');
    const savings = getInnerValue('saving');
    if (balance > savings) {
        const differenceOfBalanceSaving = balance - savings;
        document.getElementById('remain-balance').innerText = differenceOfBalanceSaving;
    }
    else {
        document.getElementById('warning3').style.display = 'block';
    }

});