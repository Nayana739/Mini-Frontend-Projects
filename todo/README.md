#  Modern To-Do App

A clean, responsive, and feature-rich **To-Do List Application** built using **HTML, CSS, and Vanilla JavaScript**.
It includes task filtering, inline editing, animations, light/dark themes, and persistent storage using `localStorage`.

##  Features

###  Core Features

* Add new tasks
* Mark tasks as complete/incomplete
* Delete tasks
* Edit tasks directly inside the list
* Automatically save all tasks to `localStorage`

###  Filters

* **All** – show every task
* **Active** – show only tasks not completed
* **Completed** – show only finished tasks

###  Actions

* **Clear Done** – delete only completed tasks
* **Clear All** – remove all tasks (with confirmation)

###  Theme Support

* Light & Dark mode toggle
* Preferred theme saved automatically

###  Persistent Storage

* All tasks stored in `localStorage`
* Even after page reload or browser close, tasks remain

###  Modern UI

* Soft shadows & gradients
* Smooth entry animations (`enter` keyframe)
* Mobile-friendly layout
* Elegant edits using `contentEditable`

##  Project Structure

```
/
├── index.html      # App structure
├── style.css       # UI styling + animations + themes
└── script.js       # App logic + storage + rendering
```

##  How It Works

### 1. Adding Tasks

Enter text → Press **Enter** or click **Add**
Task is stored as:

```js
{ id: 1710000000, text: "...", done: false }
```

### 2. Editing Tasks

* Click ✎
* Field becomes editable
* Press **Enter** to save
* Press **Esc** or blur to cancel

### 3. Filtering

Buttons update the `filter` state:

```js
filter = "all" | "active" | "completed";
```

### 4. **Theme Toggle**

Stored in:

```js
localStorage.setItem('todo_theme_dark', '1' or '0')
```

##  Installation / Usage

1. Download or clone the repository:

   ```sh
   git clone https://github.com/yourusername/todo-app.git
   ```
2. Open `index.html` in any browser.
3. Done! No dependencies or builds required.

##  Technologies Used

* **HTML5**
* **CSS3**
* **Vanilla JavaScript (ES6+)**
* `localStorage`

##  Screenshots 

<img src = "https://github.com/Nayana739/Mini-Frontend-Projects/blob/master/output/to%20do.png" width="400">




