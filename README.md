# ReactProjects




# 🔢 React Counter App

A simple yet functional **Counter App** built with **React**, demonstrating the use of `useEffect` for real-time value tracking and UI updates.

This app features:
- ✅ Count increment and decrement functionality
- 🧠 Checks if the count is **even or odd**
- 🔍 Detects whether the current count is a **prime number**
- 🚫 Disables the minus button when the counter reaches zero

> 🔗 **Live Repo**: [ReactProjects by Dhiraj Yadav](https://github.com/Dhiraj-1418/ReactProjects)

---

## 🖼️ Preview

![React Counter App Preview]([https://raw.githubusercontent.com/Dhiraj-1418/ReactProjects/main/preview.png](https://drive.google.com/file/d/1rXFGik8Bln-aAYDksm5lC6KDhRX_E8-m/view?usp=sharing))

> _Make sure to upload a screenshot named `preview.png` to your GitHub repo root directory for this to display correctly._

---

## 🚀 Features

- `+` Increases the counter
- `-` Decreases the counter (disabled when at 0)
- Displays whether the count is **Even** or **Odd**
- Displays whether the count is a **Prime number** or not
- Logic handled using `useEffect` and `useState`

---

## 🛠️ Tech Stack

- **React**
- **React Hooks** (`useState`, `useEffect`)
- **JavaScript** (for prime/even/odd logic)
- **CSS** for basic styling (optional)

---

## 🧠 Logic Overview

### useEffect Usage

```js
useEffect(() => {
  setIsEven(count % 2 === 0);
  setIsPrime(checkPrime(count));
}, [count]);
Prime Checker Function
js
Copy
Edit
function checkPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
📁 Project Structure
bash
Copy
Edit
src/
├── App.js         # Main counter logic and display
└── index.js       # Renders App component
🧪 How to Run Locally
1. Clone the repository
bash
Copy
Edit
git clone https://github.com/Dhiraj-1418/ReactProjects.git
cd ReactProjects
2. Install dependencies
bash
Copy
Edit
npm install
3. Start the development server
bash
Copy
Edit
npm start
🙋 Author
Dhiraj Yadav
🔗 GitHub Profile


