// ----------- SELECT ELEMENTS -----------
const textarea = document.getElementById("textarea");
const charCount = document.getElementById("charCount");
const remaining = document.getElementById("remaining");
const progressBar = document.getElementById("progressBar");
const themeToggle = document.getElementById("themeToggle");

// Max length from HTML attribute
const maxLength = textarea.getAttribute("maxlength");

// ----------- CHARACTER COUNT UPDATE -----------
textarea.addEventListener("input", () => {
    const currentLength = textarea.value.length;

    // Update counts
    charCount.textContent = currentLength;
    remaining.textContent = maxLength - currentLength;

    // Update progress bar
    const progress = (currentLength / maxLength) * 100;
    progressBar.style.width = progress + "%";

    // Change progress color when near limit
    if (progress > 80) {
        progressBar.style.background = "#e53935"; // red
    } else if (progress > 50) {
        progressBar.style.background = "#fb8c00"; // orange
    } else {
        progressBar.style.background = "var(--accent)";
    }
});

// ----------- THEME TOGGLE -----------
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    // Change icon
    if (document.body.classList.contains("dark")) {
        themeToggle.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    } else {
        themeToggle.textContent = "🌙";
        localStorage.setItem("theme", "light");
    }
});

// ----------- LOAD SAVED THEME -----------
window.onload = () => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark");
        themeToggle.textContent = "☀️";
    } else {
        themeToggle.textContent = "🌙";
    }
};
