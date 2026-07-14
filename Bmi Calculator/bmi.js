const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const height = Number(document.querySelector("#height").value);
    const weight = Number(document.querySelector("#weight").value);

    const result = document.querySelector("#result");

    if (height <= 0 || isNaN(height)) {
        result.style.color = "red";
        result.innerHTML = "❌ Please enter a valid height.";
        return;
    }

    if (weight <= 0 || isNaN(weight)) {
        result.style.color = "red";
        result.innerHTML = "❌ Please enter a valid weight.";
        return;
    }

    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if (bmi < 18.6) {
        result.style.color = "#1E88E5";
        result.innerHTML = `
            <h3>Your BMI is ${bmi}</h3>
            <p>🔵 You are <strong>Underweight</strong>.</p>
        `;
    }
    else if (bmi >= 18.6 && bmi <= 24.9) {
        result.style.color = "#2E7D32";
        result.innerHTML = `
            <h3>Your BMI is ${bmi}</h3>
            <p>🟢 You are in the <strong>Normal</strong> weight range.</p>
        `;
    }
    else if (bmi >= 25 && bmi <= 29.9) {
        result.style.color = "#F57C00";
        result.innerHTML = `
            <h3>Your BMI is ${bmi}</h3>
            <p>🟠 You are <strong>Overweight</strong>.</p>
        `;
    }
    else {
        result.style.color = "#D32F2F";
        result.innerHTML = `
            <h3>Your BMI is ${bmi}</h3>
            <p>🔴 You are <strong>Obese</strong>.</p>
        `;
    }
});