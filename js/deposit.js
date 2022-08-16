//step-1
document.getElementById('btn-deposit').addEventListener('click',function(){
    //step-2 get thw deposit amount from deposit input field
    const depositField = document.getElementById('deposit-field');

    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    //step-3 get the current deposit
    const depositTotalElement = document.getElementById('deposit-total');
    const PreviousDepositTotalString = depositTotalElement.innerText; //for non-input tag it will be 'innerText' not value
    const PreviousDepositTotal = parseFloat(PreviousDepositTotalString);
    const currentDepositTotal = PreviousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = currentDepositTotal;



    //5: get balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const PreviousBalanceTotalString = balanceTotalElement.innerText;
    const PreviousBalanceTotal = parseFloat(PreviousBalanceTotalString);

    //6: calculate current total balance
    const currentBalanceTotal = PreviousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = currentBalanceTotal;

    //step-4: clear deposit field
    depositField.value='';
});