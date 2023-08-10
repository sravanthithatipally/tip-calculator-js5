function calculateclicked() {
    let billamountinput = document.getElementById("billAmount");
    let billamount = billamountinput.value;
    let percentagetipinput = document.getElementById("percentageTip");
    let percentageTip = percentagetipinput.value;
    if (billamount === "") {
        document.getElementById("errorMessage").textContent = "Please Enter a Valid Input";
    } else if (percentageTip === "") {
        document.getElementById("errorMessage").textContent = "Please Enter a Valid Input";
    } else {
        document.getElementById("errorMessage").textContent = "";
        let billAmount = parseInt(billamount);
        let calculatedTip = parseInt(percentageTip);
        let tip = ((calculatedTip) / 100) * (billAmount);
        let tipamount = document.getElementById("tipAmount");
        tipamount.value = tip;
        let total = (billAmount) + (tip);
        let totalamount = document.getElementById("totalAmount");
        totalamount.value = total;
    }
}