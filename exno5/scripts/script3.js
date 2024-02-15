function convertCurrency() {
    var amount = document.getElementById('user-inp').value;
    var rates = {
        "USD": {"INR": 75, "EUR": 0.85, "CAD": 1.25,"USD":amount},
        "INR": {"USD": 0.013, "EUR": 0.011, "CAD": 0.017,"INR":amount},
        "EUR": {"USD": 1.18, "INR": 88.6, "CAD": 1.47,"EUR": amount},
        "CAD": {"USD": 0.80, "INR": 60.2, "EUR": 0.68,"CAD":amount}
    };
    var from = document.getElementById('from').value;
    var to = document.getElementById('to').value;
    var result = document.getElementById('exchange');
    if(from === to){
        result.innerHTML = amount + " " + from + " = " + amount + " " + to;
    }
    else{
        var convertedAmount = amount * rates[from][to];
        result.innerHTML = amount + " " + from + " = " + convertedAmount + " " + to;
    }
}