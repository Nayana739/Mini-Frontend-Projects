# Login Page

A clean, responsive, and animated **Login Page** built using **HTML, CSS, and JavaScript**.
It includes input validation, password visibility toggle, light/dark theme support, and a modern UI card layout.

##  Features

###  Authentication UI

* Email input
* Password input
* Password show/hide toggle (👁️ / 🙈)
* Error message display
* Basic frontend validation

###  Modern & Responsive UI

* Light/Dark theme using CSS variables
* Smooth animations (`fadeIn`)
* Centered card layout
* Mobile-friendly design
* Accent-based focus highlights

###  JavaScript Features

* Password visibility toggle
* Form validation:

  * Both fields required
  * Email must contain `@`
  * Password must be at least 6 characters
* Success message in green

##  Project Structure

```
/project-folder
│── index.html
│── style.css
│── script.js
└── README.md
```

## index.html

Contains the login UI structure with:

* Email and password fields
* Password toggle icon
* Login button
* Error message container

## style.css

Implements:

* CSS variables for theme
* Light/Dark theme support
* Card design
* Form styling
* Responsive design
* Fade-in animation

## script.js

Handles:

* DOM element selection
* Password toggle functionality
* Login validation
* Error + success messages

## How to Use

1. Download all three files:

   * `index.html`
   * `style.css`
   * `script.js`
2. Place them in the same folder.
3. Open `index.html` in any browser.
4. Test the login UI.

## Screenshots

<img src="Login\login page.png" width="400">


##  Enhancements

Extend this project by adding:

* Dark mode toggle button
* Real authentication with backend (Node.js, FastAPI, Django, Firebase)
* Animations (shake on wrong password)
* Remember Me option
* Redirect to dashboard page


