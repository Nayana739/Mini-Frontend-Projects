#  Temperature Converter

A simple, beautiful, and responsive **Temperature Converter Web App** built using **HTML, CSS, and JavaScript**.
It supports conversions between **Celsius (°C)**, **Fahrenheit (°F)**, and **Kelvin (K)**, and includes a smooth **Light/Dark theme toggle**.

##  Features

###  Core Functionality

* Convert between **Celsius**, **Fahrenheit**, and **Kelvin**
* Instant real-time conversion (auto-calculates as you type)
* Clean UI with neat result layout
* Accurate scientific formulas

###  Light/Dark Mode

* One-click theme toggle
* Smooth transition
* Remembers user preference using CSS variables

###  Responsive Design

* Works perfectly on **desktop, tablet, and mobile**
* Scales beautifully on small screens

###  Modern UI

* Soft shadows
* Rounded cards
* Smooth fade-in animation
* Accessible font sizes
* Color-adaptive result box

##  Technologies Used

| Technology           | Purpose                                      |
| -------------------- | -------------------------------------------- |
| **HTML5**            | App structure                                |
| **CSS3**             | Styling, animation, responsive design        |
| **JavaScript (ES6)** | Live temperature calculations & theme toggle |

---

##  Project Structure

```
📁 Temperature Converter
│── index.html
│── style.css
│── script.js
│── README.md
```

##  How It Works

###  Conversion Formula Used

* **Celsius → Fahrenheit:** `F = (C × 9/5) + 32`
* **Celsius → Kelvin:** `K = C + 273.15`
* **Fahrenheit → Celsius:** `C = (F - 32) × 5/9`
* **Kelvin → Celsius:** `C = K - 273.15`
* All other conversions are derived from these formulas.

The logic automatically updates all three temperature units when the user:

* Enters a number
* Changes the selected input unit

##  Screenshots 

<img src="Mini front end projects\Temperature converter\temperature convert.png" width="400">

##  Usage

1. Open `index.html` in any browser.
2. Enter a temperature value.
3. Choose the unit (°C, °F, or K).
4. View real-time converted results.
5. Toggle between **🌙 dark mode** and **☀️ light mode** anytime.

##  Future Enhancements 

If you want to expand the project later, here are ideas:

* Add **Rankine** or **Réaumur** scale
* Add **copy-to-clipboard** buttons
* Add **temperature visual indicator** (e.g., color changes when temp is hot/cold)
* Add **history tracking**
* Deploy on **GitHub Pages**
