document.getElementById('depositSubmit').addEventListener('click', function(){
    var depositInput = document.getElementById('depositInput');
    var depositInputText = depositInput.value;
    var deposit = parseFloat(depositInputText);
    
    var depositOld = document.getElementById('deposit');
    var depositUpdate = parseFloat(depositOld.innerText);
    var lastDeposit = depositUpdate + deposit;
    depositOld.innerText = lastDeposit;
    depositInput.value = "";

    //balance update 
    var balanceOutput = document.getElementById('balance');
    var balanceOutputUpdate = parseFloat(balanceOutput.innerText);
    var lastBalance = balanceOutputUpdate + deposit;
    balanceOutput.innerText = lastBalance;
});


//handler withdraw
document.getElementById('withdrawSubmit').addEventListener('click', function(){
    var withdrawInput = document.getElementById('withdrawInput');
    var withdrawInputText = withdrawInput.value;
    var withdraw = parseFloat(withdrawInputText);
    var withdrawOld = document.getElementById('withdraw');
    var withdrawUpdate = parseFloat(withdrawOld.innerText);
    console.log(typeof withdrawUpdate)
    var lastWithdraw =  withdrawUpdate + withdraw;
    withdrawOld.innerText = lastWithdraw;
    withdrawInput.value = "";


    //balance update 
    var balanceLast = document.getElementById('balance');
    var balanceLastUpate = parseFloat(balanceLast.innerText);

    var updateBalance = balanceLastUpate - withdraw; 
    balanceLast.innerText = updateBalance;
    

});