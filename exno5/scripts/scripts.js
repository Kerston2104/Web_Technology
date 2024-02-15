

function calculatebmi() {
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    document.getElementById('bminum').textContent = bmi.toFixed(2);
    document.getElementById('bmicomment').innerHTML = getBMIResult(bmi);
}
function getBMIResult(bmi) {

        if (bmi < 18) return 'UNDERWEIGHT <br> <h5>Tip:</h5> <br> Eat more Foods 🍕 ';
        if (bmi >= 18 && bmi < 25) return 'NORMALWEIGHT <br> <h5>Tip:</h5> <br> Just perfect 😉';
        if (bmi >= 25 && bmi<=30)return 'OVERWEIGHT <br> <h5>Tip:</h5> <br> go cycling 🚴🏻 ';
        if(bmi >30) return 'OBESE <br> <h5>Tip:</h5> <br> do something';
        else{
            document.getElementById('bminum').textContent = '0.0';
            return 'Provide Details';
        }
}
