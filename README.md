# 🔢 Simple Counter

A basic and beginner-friendly JavaScript project that allows users to increase, decrease, and reset a counter value. This project is perfect for understanding core JavaScript concepts and DOM manipulation.

---

## 🚀 Features

* ➕ Increment counter
* ➖ Decrement counter
* 🔄 Reset counter
* ⚡ Instant UI updates
* 🎯 Clean and simple design

---

## 📂 Project Structure

```
Simple_Counter/
│── index.html
│── style.css
│── script.js
```

---

## 🛠️ How It Works

This project uses JavaScript to:

* Capture button click events
* Update the counter value dynamically
* Reflect changes instantly in the UI

The counter value is stored in a variable and updated using event listeners.

---

## ▶️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/SwarajThakre/Simple_Counter.git
```

### 2. Run the project

Open `index.html` in your browser.

---

## 💡 Example Code

```javascript
let count = 0;

function increase() {
  count++;
  document.getElementById("value").innerText = count;
}

function decrease() {
  count--;
  document.getElementById("value").innerText = count;
}

function reset() {
  count = 0;
  document.getElementById("value").innerText = count;
}
```

---

## 🧠 Concepts Used

* DOM Manipulation
* Event Listeners
* Functions in JavaScript
* Variables and State Handling

---

## 📸 Demo

*Add a screenshot or GIF here*

---

## 📌 Future Improvements

* 🎨 Add better UI design
* 📱 Make it responsive
* 🔢 Add step increment options
* 💾 Store value using localStorage

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a Pull Request

---

## 📄 License

This project is open source and available under the MIT License.

---

### ⭐ If you like this project, consider giving it a star!
