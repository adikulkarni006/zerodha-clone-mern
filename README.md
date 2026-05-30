# 🚀 Zerodha Clone – Full Stack Trading Platform

A modern full-stack trading platform inspired by Zerodha, built using the MERN Stack. The application provides secure authentication, portfolio management, order placement, real-time stock market data, and an intuitive trading dashboard.

---

## 🌟 Features

### 🔐 Authentication & Security

* User Registration (Signup)
* User Login
* JWT Authentication
* Protected Dashboard Routes
* Secure Password Hashing using bcryptjs
* Persistent User Sessions
* Logout Functionality

### 📈 Trading Dashboard

* Interactive Trading Dashboard
* Holdings Management
* Positions Management
* Buy Stock Orders
* User-Specific Orders
* Portfolio Overview
* Responsive User Interface

### 📊 Real-Time Market Data

* Live Stock Price Integration
* Finnhub Stock Market API
* Dynamic Price Updates
* Percentage Gain/Loss Indicators
* Real-Time Market Insights

### 🎨 Modern UI/UX

* Responsive Design
* Bootstrap 5 Integration
* Font Awesome Icons
* Toast Notifications (React Toastify)
* Interactive Components
* Professional Trading Interface

### 📞 Support Portal

* Support Ticket Categories
* Search Interface
* Featured Help Articles
* Structured Support System

---

## 🛠️ Tech Stack

### Frontend

* React.js
* React Router DOM
* Axios
* Bootstrap 5
* Font Awesome
* React Toastify

### Backend

* Node.js
* Express.js
* JWT Authentication
* bcryptjs

### Database

* MongoDB Atlas
* Mongoose ODM

### APIs

* Finnhub Stock Market API

### Development Tools

* Git
* GitHub
* Nodemon
* VS Code

---

## 📂 Project Structure

```bash
Zerodha-Clone/
│
├── frontend/
│   ├── landing_page/
│   ├── components/
│   └── src/
│
├── dashboard/
│   ├── components/
│   └── src/
│
├── backend/
│   ├── model/
│   ├── schemas/
│   ├── middleware/
│   └── index.js
│
└── README.md
```

---

## 🔑 Environment Variables

Create a `.env` file inside the backend folder.

```env
MONGO_URL=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

FINNHUB_API_KEY=your_finnhub_api_key
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/zerodha-clone.git
```

### Install Dependencies

Backend

```bash
cd backend
npm install
```

Frontend

```bash
cd frontend
npm install
```

Dashboard

```bash
cd dashboard
npm install
```

---

## ▶️ Run Application

Backend

```bash
cd backend
npm start
```

Frontend

```bash
cd frontend
npm start
```

Dashboard

```bash
cd dashboard
npm start
```

---

## 🌐 Application Ports

```bash
Frontend  : http://localhost:3001

Dashboard : http://localhost:3000

Backend   : http://localhost:3002
```

---

## 📡 API Endpoints

### Authentication

```http
POST /signup
POST /login
```

### Trading

```http
POST /newOrder
GET /myOrders
```

### Portfolio

```http
GET /allHoldings
GET /allPositions
```

### Market Data

```http
GET /stock/:symbol
```

Example:

```http
GET /stock/AAPL
```

---

## 🔒 Security Features

* JWT Token Authentication
* Password Hashing with bcryptjs
* Protected API Routes
* User-Specific Data Access
* Environment Variable Protection
* Git Ignore Configuration

---

## 🚀 Future Enhancements

* Sell Orders
* Real-Time Portfolio Updates
* Advanced Charts
* Watchlist Feature
* Transaction History
* Razorpay Integration
* Email Verification
* Two-Factor Authentication
* Live WebSocket Market Feed
* Admin Dashboard

---

## 📸 Screenshots

Coming Soon...

---

## 👨‍💻 Author

**Adi Kulkarni**

Full Stack MERN Developer

GitHub: https://github.com/adikulkarni006

---

## ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.

---

### Built with ❤️ using MERN Stack
