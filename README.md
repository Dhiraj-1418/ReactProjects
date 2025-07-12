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

![React Counter App Preview](https://raw.githubusercontent.com/Dhiraj-1418/ReactProjects/main/preview.png)

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













# 🧩 React API Data Listing

This project is a simple React application that fetches and displays data from an external API using **Axios**, `useEffect`, and `useState`. It's a great example of how to work with asynchronous data in React using functional components and hooks.

> ✅ Built and tested on **CodeSandbox**

---

## 🔗 Live Demo

👉 [View on CodeSandbox](https://codesandbox.io/p/sandbox/prod-waterfall-dxfcd9)

---

## 🖼️ Preview

![App Preview](https://raw.githubusercontent.com/your-username/your-repo-name/main/preview.png)

> _Replace the above link with an actual screenshot after uploading it to your GitHub repo._

---

## ⚙️ Tech Stack

- **React** (Functional Components)
- **Axios** (HTTP Client)
- **React Hooks**: `useEffect`, `useState`
- **CodeSandbox** (Development Environment)

---

## 📦 Features

- 🔄 Fetches data from an API on component mount
- 🧠 Uses React Hooks for state management and side effects
- 📃 Displays data in a clean and readable format
- ❗ Handles loading and error states gracefully

---

## 🧠 How It Works

```jsx
useEffect(() => {
  axios.get("https://example-api.com/data")
    .then(response => setData(response.data))
    .catch(error => console.error("Error fetching data:", error));
}, []);
useEffect: Runs the API call once when the component mounts

axios: Performs the GET request

useState: Stores and updates the response data

📁 Project Structure
graphql
Copy
Edit
src/
├── App.js       # Main app logic and component
└── index.js     # React DOM rendering entry point
🚀 Getting Started Locally
You can fork or clone this repo and run it locally:

1. Clone the repository
bash
Copy
Edit
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
2. Install dependencies
bash
Copy
Edit
npm install
3. Start the app
bash
Copy
Edit
npm start
🙋 Author
Dhiraj Yadav

📧 [8475@gmail.com]

