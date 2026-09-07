 🚀 Dummy Data Generator

A full-stack **Dummy Data Generator** web application that allows users to generate realistic dummy data through APIs and use it for testing, development, and prototyping.

The project is built using a simple and powerful stack with **HTML, CSS, JavaScript, Node.js, Express.js, MongoDB and REST APIs**.

---

## ✨ Features

* 🧑 Generate dummy user data
* 📦 Generate sample product data
* 📧 Generate emails and contact information
* 🔢 Generate random numbers and data
* 🌐 REST API based backend
* 💾 MongoDB database integration
* ⚡ Fast Express.js backend
* 🎨 Simple and responsive frontend
* 🛠️ Useful for testing and development
* 🔄 Dynamic data generation
* 📡 API endpoints for generated data

---

## 🛠️ Tech Stack

### 🎨 Frontend

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge\&logo=html5\&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge\&logo=css3\&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)

### ⚙️ Backend

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge\&logo=node.js\&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge\&logo=express\&logoColor=white)

### 🗄️ Database

![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge\&logo=mongodb\&logoColor=white)

### 🔌 API

![REST API](https://img.shields.io/badge/REST%20API-FF6B35?style=for-the-badge\&logo=fastapi\&logoColor=white)

---

## 📂 Project Structure

```text
Dummy-Data-Generator/
│
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── routes/
│   └── dataRoutes.js
│
├── controllers/
│   └── dataController.js
│
├── models/
│   └── Data.js
│
├── server.js
├── package.json
├── .env
└── README.md
```

---

## 🔄 How It Works

```text
        👤 User
           │
           ▼
    🌐 HTML / CSS / JS
           │
           ▼
       🔌 REST API
           │
           ▼
    ⚙️ Node.js + Express
           │
           ▼
       🗄️ MongoDB
           │
           ▼
      📊 Generated Data
           │
           ▼
        👤 User
```

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/sarthakchandel/Dummy-Data-genrator.git
```

### 2️⃣ Go to Project Directory

```bash
cd Dummy-Data-genrator
```

### 3️⃣ Install Dependencies

```bash
npm install
```

### 4️⃣ Create `.env` File

Create a `.env` file in the root directory:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

### 5️⃣ Start the Server

```bash
npm start
```

For development:

```bash
npm run dev
```

---

## 🔌 API Endpoints

| Method   | Endpoint        | Description             |
| -------- | --------------- | ----------------------- |
| `GET`    | `/`             | Check API status        |
| `GET`    | `/api/data`     | Get generated data      |
| `POST`   | `/api/data`     | Generate new dummy data |
| `DELETE` | `/api/data/:id` | Delete generated data   |

> API endpoints may vary depending on the implementation of the project.

---

## 🧪 Example API Request

### POST

```http
POST /api/data
Content-Type: application/json
```

Example:

```json
{
  "type": "user",
  "count": 10
}
```

The backend processes the request through **Express.js** and stores/retrieves the required data using **MongoDB**.

---

## 🗄️ Database

This project uses **MongoDB** for storing generated data.

MongoDB provides a flexible NoSQL database structure that makes it easy to work with different types of dummy data.

---

## 🔐 Environment Variables

Never upload your `.env` file to GitHub.

Example:

```env
MONGO_URI=your_mongodb_uri
PORT=5000
```

Add `.env` to `.gitignore`:

```text
node_modules/
.env
```

---


The frontend can also be deployed separately depending on the project architecture.

---

## 📸 Project Preview

> Add screenshots of your Dummy Data Generator here.

```text
Frontend Screenshot
Backend / API Screenshot
Generated Data Screenshot
```

---

## 🎯 Purpose

The main purpose of this project is to provide developers with an easy way to generate dummy data for:

* 🧪 Testing applications
* 💻 Frontend development
* 🔌 API testing
* 🗄️ Database testing
* 🚀 Prototyping
* 📊 Development environments

---

## 👨‍💻 Author

### Sarthak Chandel

B.Tech CSE & AI/ML | Full-Stack Developer

Focused on building **real-world applications, APIs and developer tools**.

---

