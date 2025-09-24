# 📦 Parcel Delivery System (Frontend + Backend)

## 🚀 Project Overview

A **secure, role-based parcel delivery system** built with **React, Redux Toolkit, RTK Query (Frontend)** and **Node.js, Express, MongoDB (Backend)**.  
This project allows **Senders, Receivers, and Admins** to manage parcels efficiently with real-time status updates and tracking.

---

## 🛠️ Tech Stack

### Frontend

- React.js (Vite)
- Redux Toolkit & RTK Query
- React Router
- Tailwind CSS
- TypeScript/JavaScript

### Backend

- Node.js / Express.js
- MongoDB / Mongoose
- JWT Authentication
- Bcrypt (Password hashing)

---

## 📌 Features

### Public

- Landing Page
- About Page
- Contact Page
- Parcel Tracking by Tracking ID

### Authentication

- Login & Registration (Sender/Receiver role)
- Role-based Dashboard Redirect
- Persisted Login (JWT + Cookies/LocalStorage)

### Sender Dashboard

- Create Parcel
- Cancel Parcel (if not dispatched)
- View Own Parcels + Status

### Receiver Dashboard

- View Incoming Parcels
- Confirm Delivery
- Delivery History

### Admin Dashboard

- Manage All Users (block/unblock)
- Manage All Parcels (update/cancel)
- Assign Delivery Personnel (optional)

### General

- Pagination, Search, Filter
- Toast Notifications (Success/Error)
- Charts & Overview Cards
- Responsive Design

---

## 🔑 Test Credentials

### Admin

- Email: `admin@parcel.com`
- Password: `Admin123`

### Sender

- Email: `sender@parcel.com`
- Password: `Sender123`

### Receiver

- Email: `receiver@parcel.com`
- Password: `Receiver123`

---

## ⚡ Live Links

- **Frontend:** [https://your-frontend-url.vercel.app](https://your-frontend-url.vercel.app)
- **Backend:** [https://your-backend-url.vercel.app](https://your-backend-url.vercel.app)

---

## 🖥️ Installation & Setup

### Clone the repositories

```bash
# Frontend
git clone https://github.com/your-username/parcel-delivery-frontend.git
cd parcel-delivery-frontend
yarn install
yarn dev
```
