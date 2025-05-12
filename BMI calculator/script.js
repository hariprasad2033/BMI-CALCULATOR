function calculateBMI() {
  const height = parseFloat(document.getElementById("height").value);
  const weight = parseFloat(document.getElementById("weight").value);
  const result = document.getElementById("result");

  if (!height || !weight || height <= 0 || weight <= 0) {
    result.innerHTML = `<span style="color: red;">Please enter valid height and weight.</span>`;
    return;
  }

  const heightInMeters = height / 100;
  const bmi = (weight / (heightInMeters ** 2)).toFixed(1);

  let category = "";
  let className = "";

  if (bmi < 18.5) {
    category = "Underweight";
    className = "underweight";
  } else if (bmi < 24.9) {
    category = "Normal weight";
    className = "normal";
  } else if (bmi < 29.9) {
    category = "Overweight";
    className = "overweight";
  } else {
    category = "Obese";
    className = "obese";
  }

  result.innerHTML = `Your BMI is <span class="${className}">${bmi}</span> (${category})`;
}
