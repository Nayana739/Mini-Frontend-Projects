# Modern Character Counter App

A clean, modern, and fully responsive **Character Counter** built using **HTML, CSS, and JavaScript**.
It includes live character counting, remaining character tracking, a dynamic progress bar, and a light/dark theme with smooth animations.

##  Features

### Core Features

* Live character counting
* Remaining characters indicator
* Progress bar that updates as you type
* Max character limit (customizable)
* Smooth UI animations

### UI/UX Features

* Modern glassmorphism-inspired card design
* Light/Dark theme toggle with localStorage memory
* Responsive layout for mobile and desktop
* Clean, readable typography
* Accessible, minimal interface

##  Project Structure

```
📁 character-count
│── index.html
│── style.css
│── script.js
│── README.md
```

##  Technology Stack

* **HTML5** – Structure
* **CSS3** – Styling, transitions, theme system
* **Vanilla JavaScript** – Logic + DOM updates
* **LocalStorage** – Saves theme preference

##  Installation & Usage

1. Download or clone the project:

   ```bash
   git clone https://github.com/your-username/character-counter.git
   ```
2. Open the project folder
3. Run `index.html` in your browser
4. Start typing in the text box – the counter and progress bar react instantly

No dependencies. No frameworks. Works out of the box.

##  How It Works

### Character Counting

* JavaScript listens for the `input` event
* Updates:

  * Current character count
  * Remaining characters
  * Progress bar width

### Progress Bar

* Fills based on percentage
* Color changes:

  * Blue → Safe
  * Orange → Medium
  * Red → Near limit

### Themes

* Toggles between Light 🌙 and Dark ☀️
* Saves preference in `localStorage`
* Restores choice on page load

##  Keyboard Support

* Standard typing
* Backspace
* Automatic updates on every keystroke

##  Screenshots

<img src= "https://github.com/Nayana739/Mini-Frontend-Projects/blob/master/output/character%20count.png" width="400">


##  Future Enhancements

* Word counter
* Sentence counter
* Live text analytics
* Export text as a file
* Emoji/URL detection
* AI-based text suggestions

