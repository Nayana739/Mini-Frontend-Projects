# Modern Calculator App

A clean, modern, and fully responsive calculator built using **HTML, CSS, and JavaScript**. It includes light/dark themes, history tracking, keyboard support, and enhanced math functions like square root, power, and percent.

##  Features

###  Core Features

* Basic arithmetic: `+`, `-`, `×`, `÷`
* Decimal and negative support
* Backspace and Clear
* Keyboard support
* Expression preview

###  Enhanced Math Functions

* Square root: `√` or `sqrt(x)`
* Power: `x ^ y`
* Percent: `x%` → auto converts to `(x/100)`

###  UI/UX Features

* Beautiful UI with gradients and smooth animations
* Responsive grid buttons
* Modern neumorphic button effects
* History panel with scroll
* Light/Dark theme toggle with localStorage memory
* Clean, minimal display layout

##  Project Structure

```
📁 project-folder
│── index.html
│── style.css
│── script.js
│── README.md
```
##  Technology Stack

* **HTML5** for structure
* **CSS3** for elegant, responsive design
* **Vanilla JavaScript** for functionality
* **LocalStorage** for:

  * Saving theme
  * Saving calculation history

##  Installation

1. Download or clone the repository:

```bash
git clone https://github.com/your-username/calculator-app.git
```

2. Open the folder.
3. Run `index.html` in your browser.

No dependencies. No build tools. Works out of the box.

##  How It Works

### Expression Handling

* Inputs are appended to an expression string `expr`.
* Custom parser handles:

  * `sqrt()` → `Math.sqrt()`
  * `^` → `Math.pow()`
  * `%` → convert to `(num/100)`
* Expression is sanitized before evaluation.
* Safe evaluation using:

```js
Function("'use strict'; return (expression)")();
```

### History

* Latest 20 calculations stored in `localStorage`.
* Auto-renders into collapsible list.

### Themes

* Theme toggle button switches:

  * `body.dark` class
  * Updates CSS variables
  * Saves preference to localStorage

##  Keyboard Shortcuts

| Key         | Action                |
| ----------- | --------------------- |
| Numbers     | Insert digits         |
| `+ - * /`   | Operators             |
| `Enter`     | Calculate             |
| `Backspace` | Delete last character |
| `Ctrl + C`  | Clear screen          |

##  Screenshots

<img src="Mini front end projects\Calculator\calculator.png" width="400">


##  Future Enhancements

* Scientific mode (sin, cos, tan, log…)
* Memory functions (M+, M−, MR, MC)
* Better expression parser
* Drag + drop window UI
* Sound/haptic interactions

