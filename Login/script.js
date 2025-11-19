const email = document.getElementById("email");
const password = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");
const errorMsg = document.getElementById("errorMsg");
const togglePass = document.getElementById("togglePass");

// Show/hide password
togglePass.onclick = () => {
    if (password.type === "password") {
        password.type = "text";
        togglePass.textContent = "🙈";
    } else {
        password.type = "password";
        togglePass.textContent = "👁️";
    }
};

// Login validation
loginBtn.onclick = () => {
    const emailVal = email.value.trim();
    const passVal = password.value.trim();

    if (emailVal === "" || passVal === "") {
        errorMsg.textContent = "Please enter both email and password.";
        return;
    }

    if (!emailVal.includes("@")) {
        errorMsg.textContent = "Please enter a valid email.";
        return;
    }

    if (passVal.length < 6) {
        errorMsg.textContent = "Password must be at least 6 characters.";
        return;
    }

    errorMsg.style.color = "green";
    errorMsg.textContent = "Login successful!";
};
