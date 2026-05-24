# Expense Tracker

## Overview

Expense Tracker is a full stack web application built to manage daily expenses efficiently. The project is divided into two parts:

* Backend using Node.js, Express.js, MongoDB, and Mongoose
* Frontend using React and Vite

The application allows users to store and manage expense records using a modern frontend and REST API backend.

---

# Project Structure

```text
EXPENSE
│
├── Backend
│   ├── node_modules
│   ├── src
│   │   ├── DB
│   │   │   └── db.js
│   │   ├── models
│   │   │   └── expense.model.js
│   │   └── app.js
│   ├── .env
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
│
├── Frontend
│   └── expense-tracker
│       ├── node_modules
│       ├── public
│       ├── src
│       │   ├── pages
│       │   ├── App.css
│       │   ├── App.jsx
│       │   ├── index.css
│       │   └── main.jsx
│       ├── .gitignore
│       ├── eslint.config.js
│       ├── index.html
│       ├── package.json
│       ├── package-lock.json
│       └── README.md
```

---

# Backend

## Technologies Used

* Node.js
* Express.js
* MongoDB
* Mongoose
* dotenv
* Nodemon

---

## Backend Folder Details

### `server.js`

Entry point of the backend server.

Responsibilities:

* Starts the Express server
* Connects the database
* Runs application on port 3000

---

### `src/app.js`

Contains Express app configuration.

Responsibilities:

* Initializes Express
* Handles middleware setup
* Manages routes

---

### `src/DB/db.js`

Responsible for MongoDB connection using Mongoose.

Example:

```js
const mongoose = require('mongoose');
require('dotenv').config();

async function connectDB() {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to DB');
}

module.exports = connectDB;
```

---

### `src/models/expense.model.js`

Contains the Mongoose schema and model for expense data.

Possible fields:

* Expense title
* Amount
* Category
* Date
* Description

---

## Environment Variables

Create a `.env` file inside Backend folder.

```env
MONGO_URI=mongodb://127.0.0.1:27017/expense
```

---

# Frontend

## Technologies Used

* React.js
* Vite
* CSS
* Axios

---

## Frontend Folder Details

### `src/main.jsx`

Main entry point for React application.

Responsibilities:

* Renders React app
* Connects App component to DOM

---

### `src/App.jsx`

Main UI component.

Responsibilities:

* Handles overall layout
* Displays pages and components

---

### `src/pages`

Contains application pages.

Examples:

* Dashboard
* Add Expense
* Expense History
* Analytics

---

# What I Learned

## Backend Development

* Creating backend servers using Node.js and Express.js
* Connecting MongoDB database using Mongoose
* Using environment variables with dotenv
* Creating REST APIs
* Structuring backend folders professionally
* Exporting and importing modules
* Handling asynchronous database operations
* Understanding server-client architecture

---

## MongoDB and Mongoose

* Creating schemas and models
* Connecting MongoDB with Mongoose
* Performing database operations
* Managing collections and documents
* Organizing database configuration files

---

## Frontend Development

* Building UI using React.js
* Understanding React component structure
* Managing application layout
* Creating reusable components
* Styling applications using CSS
* Organizing frontend folders properly

---

## Full Stack Concepts

* Connecting frontend and backend
* Sending requests between client and server
* Understanding API workflow
* Managing project structure for large applications
* Separating frontend and backend architecture

---

## Git and GitHub

* Initializing Git repositories
* Managing remote repositories
* Pushing code to GitHub
* Understanding version control workflow

---

# API Workflow

1. User submits expense data from frontend
2. Axios sends request to backend API
3. Express server processes request
4. Mongoose stores data in MongoDB
5. Response is returned to frontend
6. Updated data is displayed to user

---

# Database

MongoDB is used as the database.

Mongoose is used for:

* Schema creation
* Validation
* Database operations
* Data modeling

---

# Future Improvements

* Authentication system
* JWT authorization
* Expense analytics charts
* Monthly reports
* Budget planning
* Export expenses to PDF or Excel
* Dark mode UI
* Responsive mobile design

---

# Author

Developed as a full stack Expense Tracker project using MERN technologies.
