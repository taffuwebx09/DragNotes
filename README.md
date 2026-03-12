# 📝 Stickify — Smart Sticky Notes App

A modern **Sticky Notes Web Application** built with **Vanilla JavaScript, HTML, and CSS**.
Create notes, drag them anywhere on the screen, auto-save content, and persist everything using **LocalStorage**.

This project demonstrates strong fundamentals of **DOM manipulation, event delegation, data persistence, and drag-and-drop systems**.

---

# 🚀 Features

✔ Create unlimited sticky notes
✔ Drag notes anywhere on the screen
✔ Auto-save text while typing
✔ Delete notes instantly
✔ Persistent storage using LocalStorage
✔ Restore notes and positions after page reload
✔ Clean event-delegation architecture
✔ Lightweight — no frameworks

---

# 🧠 Concepts Implemented

This project focuses on mastering core JavaScript concepts:

- DOM Manipulation
- Event Delegation
- LocalStorage Persistence
- Dataset API
- Array Methods (`find`, `findIndex`, `push`, `splice`)
- Drag and Drop Logic
- Mouse Coordinate System
- Dynamic UI Rendering
- State Synchronization

---

# 📂 Project Structure

```
stickify-js/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

# ⚙️ How It Works

The application maintains a **single source of truth** using a JavaScript array.

Example data structure:

```
[
 {
  id: 171001,
  text: "Buy milk",
  color: "#ff0000",
  x: 340,
  y: 200
 }
]
```

Workflow:

```
User Action
     ↓
DOM Event Triggered
     ↓
Find Note Element
     ↓
Update Data Array
     ↓
Save to LocalStorage
     ↓
Update UI
```

---

# 🖥️ Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript (ES6+)
- LocalStorage API
- Bootstrap Icons

---

# 🎯 Learning Goals

This project was built to strengthen skills in:

- Building interactive UI with JavaScript
- Managing application state
- Implementing drag-and-drop mechanics
- Persisting data in the browser
- Structuring scalable frontend code

---

# 📸 Preview

(Add screenshots here after uploading images)

Example:

```
/preview/app-preview.png
```

---

# 🔮 Future Improvements

- Mobile touch support
- Color picker for existing notes
- Search notes
- Export notes
- Cloud storage support

---

# 🧑‍💻 Author

**Tafajjul Ansari**

Frontend Developer (WordPress & JavaScript)

GitHub: https://github.com/yourusername

---

# ⭐ If you like this project

Give it a ⭐ on GitHub and feel free to contribute!
