const tempInput = document.getElementById("tempInput");
const unitSelect = document.getElementById("unitSelect");

const cValue = document.getElementById("cValue");
const fValue = document.getElementById("fValue");
const kValue = document.getElementById("kValue");

const themeToggle = document.getElementById("themeToggle");

// Function to convert
function convert() {
    let value = parseFloat(tempInput.value);
    let unit = unitSelect.value;

    if (isNaN(value)) {
        cValue.textContent = "-";
        fValue.textContent = "-";
        kValue.textContent = "-";
        return;
    }

    let c, f, k;

    if (unit === "c") {
        c = value;
        f = (value * 9/5) + 32;
        k = value + 273.15;
    } 
    else if (unit === "f") {
        c = (value - 32) * 5/9;
        f = value;
        k = c + 273.15;
    } 
    else if (unit === "k") {
        k = value;
        c = value - 273.15;
        f = (c * 9/5) + 32;
    }

    cValue.textContent = c.toFixed(2);
    fValue.textContent = f.toFixed(2);
    kValue.textContent = k.toFixed(2);
}

// Event listeners
tempInput.addEventListener("input", convert);
unitSelect.addEventListener("change", convert);

// Theme toggle
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    themeToggle.textContent =
        document.body.classList.contains("dark") ? "☀️" : "🌙";
});
