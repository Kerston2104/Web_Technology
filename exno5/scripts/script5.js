const gst = 0.09;
const tipamt = 0;

function calculateTotalCost() {
    let subtotal = 0;
    let ogtotal = 0; // Initialize ogtotal

    const pizzaSize = document.querySelector('input[name="size"]:checked');
    if (pizzaSize) {
        subtotal += parseFloat(pizzaSize.value);
    }

    const toppings = document.getElementsByName('topping');
    for (let i = 0; i < toppings.length; i++) {
        if (toppings[i].checked) {
            subtotal += parseFloat(toppings[i].value);
        }
    }

    const checkboxes = document.getElementsByName('imgbtn');
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            ogtotal += parseFloat(checkboxes[i].value);
        }
    }

    const tipbox = prompt('Enter your tip amount (10-20% of the total cost after tax)', 0);
    const tipPercentage = parseFloat(tipbox) / 100;

    // Check if the entered tip percentage is within the range of 10-20%
    if (tipPercentage >= 0.1 && tipPercentage <= 0.2) {
        const tax = (subtotal + gst + tipPercentage) * ogtotal;
        const tipAmount = (tax) + ogtotal;
        const totalCost = tipAmount;
        alert('Original amount : ' + ogtotal + '\nTax amount : ' + tax.toFixed(2) + '\nTotal Amount : ' + totalCost.toFixed(2));
    } else {
        alert('Please enter a tip percentage between 10-20%.');
    }
}