# MediBook - Doctor Appointment Web App

**MediBook** is a full-stack web application designed to make healthcare more accessible by simplifying the process of booking doctor appointments. It offers three levels of login: **Patient**, **Doctor**, and **Admin**, each with distinct features tailored to their roles. The app integrates **online payment gateway(Razorpay)** to facilitate seamless and secure payments. Built using the **MERN stack** (MongoDB, Express.js, React.js, and Node.js), MediBook provides an efficient, user-friendly experience for both patients and healthcare providers.

## 🌐 Live Demo

| Service | URL |
|---------|-----|
| **Frontend (Patient App)** | [https://medibook-xi-one.vercel.app](https://medibook-xi-one.vercel.app) |
| **Admin Panel** | [https://medibook-admin-eight.vercel.app](https://medibook-admin-eight.vercel.app) |
| **Backend API** | [https://medibook-mcr4.onrender.com](https://medibook-mcr4.onrender.com) |

### 🔑 Test Credentials

**Admin Login:**
- Email: `admin@medibook.com`
- Password: `admin123`

**Doctor Login (any doctor):**
- Email: `priya.verma@medibook.com` (or any doctor email)
- Password: `doctor123`

---

## 📸 Screenshots

### 🏠 Homepage
<img width="1917" height="848" alt="image" src="https://github.com/user-attachments/assets/96300fa4-ca80-4a46-a438-2433c8452579" />

### 👨‍⚕️ All Doctors
<img width="1907" height="862" alt="image" src="https://github.com/user-attachments/assets/c3628952-5c01-4055-8f48-5721fa10b9ed" />

### 📅 Appointment Booking
<img width="1913" height="866" alt="image" src="https://github.com/user-attachments/assets/e46baac2-dd1a-42a8-9286-d7074ca6e71c" />

### 🔐 Admin Panel
<img width="1906" height="860" alt="image" src="https://github.com/user-attachments/assets/32da80a5-e820-4486-9935-6020663a9f3e" />

### 📊 Admin Dashboard
<img width="1911" height="866" alt="image" src="https://github.com/user-attachments/assets/afd37706-659e-48d5-a27f-c7d446e08991" />

---

## ✨ Features

### 👤 Patient Features
- JWT-based secure signup and login
- Browse doctors by 6 specialties
- View detailed doctor profiles (experience, fees, about)
- Book appointments with date & time slot selection
- Manage appointments (view, cancel)
- Update profile with image upload

### 👨‍⚕️ Doctor Features
- Dedicated doctor login
- View assigned appointments
- Update availability status
- Manage profile and fees

### 🛡️ Admin Features
- Add/Edit/Delete doctors
- Upload doctor images to Cloudinary
- View all appointments across the platform
- Manage doctor availability
- Cancel appointments
- Full dashboard with statistics

### 🔧 Technical Features
- JWT authentication with role-based access
- Password hashing with bcrypt
- Image upload via Cloudinary + Multer
- Payment integration via Razorpay (test mode)
- Responsive design with Tailwind CSS
- MongoDB Atlas cloud database

---

## 🛠️ Tech Stack

### Frontend
- **React.js 18** — UI library
- **Vite** — Build tool
- **React Router DOM v6** — Routing
- **Axios** — API calls
- **Tailwind CSS** — Styling
- **React Hot Toast** — Notifications

### Backend
- **Node.js** — Runtime
- **Express.js** — Web framework
- **MongoDB + Mongoose** — Database
- **JWT** — Authentication
- **bcrypt** — Password hashing
- **Multer** — File uploads
- **Cloudinary** — Image storage
- **Razorpay** — Payment gateway
- **CORS** — Cross-origin handling

### Deployment
- **Vercel** — Frontend + Admin hosting
- **Render** — Backend hosting
- **MongoDB Atlas** — Cloud database
- **Cloudinary** — Image CDN

---

## 📦 Folder Structure

```plaintext
MediBook/
├── client/          # Frontend (React.js)
├── server/          # Backend (Node.js, Express.js)
├── models/          # MongoDB Schemas
├── controllers/     # API Controllers
├── routes/          # API Routes
├── middleware/      # Authentication and Error Handling
├── config/          # Configuration Files
├── utils/           # Utility Functions
├── public/          # Static Files
└── .env             # Environment Variables
```

## 🤝 Contributing

We welcome contributions! Please feel free to submit issues, fork the repository, and open pull requests.


## 🌟 Acknowledgements

- Thanks to the developers and contributors of MongoDB, Express.js, React.js, Node.js, and Razorpay for their fantastic tools and libraries.

---

