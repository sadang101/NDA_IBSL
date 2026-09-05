# Nrityangan Dance Academy – Digital Management Platform

## 📌 Project Overview

The **Nrityangan Dance Academy – Comprehensive Digital Management Platform** is a centralized web-based system designed to digitally manage the academy's student admissions, learning resources, payments, communication, and administrative activities.

The platform provides separate functionality for **visitors, students, and administrators**, creating a professional digital presence while reducing manual administrative work.

---

## 🎯 Objectives

* Digitize the academy's admission process
* Provide students with a personalized dashboard
* Enable online access to dance videos and study materials
* Manage students and admission applications efficiently
* Provide secure online fee payments
* Maintain academy branches, gallery, and other content
* Improve communication through inquiries and email notifications
* Provide secure authentication and role-based access

---

## 🌐 Main Modules

### 1. Public Website

Visitors can:

* View academy information
* Explore the mission and vision
* View Bharatanatyam programmes
* View teacher profiles
* Explore achievements and awards
* Browse the performance gallery
* View branch information
* Submit contact inquiries
* Register as a student

The academy has four branches:

* Loni
* Akola
* Sangamner
* Rahuri

**Online admissions are currently available only for the Loni branch.**

### 2. Student Module

Registered students can:

* Register and log in
* Use Google authentication
* Manage their profile
* Submit admission applications
* Track admission status
* Access course videos
* Download study notes
* Track course progress
* Make online payments
* View payment history

### 3. Admin Module

Administrators can:

* View the admin dashboard
* Manage students
* Review admission applications
* Approve or reject admissions
* Upload course videos
* Upload notes and study materials
* Manage gallery content
* Manage branch information
* Monitor payments
* View statistics and reports

### 4. Payment Module

The platform supports:

* Online academy fee payments
* Payment verification
* Transaction records
* Payment history
* Receipt generation

Payments are planned through **Razorpay**.

### 5. Communication Module

* Contact/inquiry form
* Email notifications
* Admission-related notifications

---

## 🔐 Authentication & Security

The system includes:

* Email/password authentication
* Google OAuth authentication
* JWT-based session management
* Password hashing
* Role-based authorization
* Protected API endpoints
* HTTPS communication
* Input validation
* Rate limiting
* Secure environment variables

Students cannot access administrator functionality, and only authorized administrators can access the admin dashboard.

---

## 🛠️ Technology Stack

### Frontend

* React 18
* TypeScript
* Vite
* Tailwind CSS
* React Router

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose

### Authentication

* Google OAuth 2.0
* JWT
* bcryptjs

### Cloud & Services

* Cloudinary – Media storage
* Nodemailer – Email notifications
* Razorpay – Online payments

### Validation

* express-validator

The complete technology stack is specified in the SRS document.

---

## 🏗️ System Architecture

```text
                         USERS
                           │
                           ▼
                  React Frontend
                           │
                     REST API / HTTPS
                           │
                           ▼
                 Node.js + Express
                           │
          ┌────────────────┼────────────────┐
          │                │                │
          ▼                ▼                ▼
     MongoDB Atlas      Cloudinary      External APIs
                                          │
                         ┌────────────────┼──────────────┐
                         ▼                ▼              ▼
                    Google OAuth       Razorpay       Nodemailer
```

The frontend communicates with the Express backend through REST APIs, while MongoDB Atlas handles application data and external services provide authentication, media storage, payments, and email functionality.

---

## 📝 Admission Workflow

```text
Student Opens Website
        ↓
Register / Login
        ↓
Open Admission Form
        ↓
Enter Personal & Course Details
        ↓
Submit Application
        ↓
System Validates Data
        ↓
Application Saved
        ↓
Status = Pending
        ↓
Admin Reviews Application
        ↓
Approve / Reject
        ↓
Status Updated
        ↓
Student Views Status
```

Admission applications can have three statuses:

* **Pending**
* **Approved**
* **Rejected**

---

## 📂 Core Data Collections

The system is designed around the following major collections:

* **Users**
* **Admissions**
* **Videos**
* **Notes**
* **Branches**

The Users collection stores authentication and profile information, while Admissions stores application details and status. Videos and Notes manage learning resources, and Branches stores academy location and admission information.

---

## 🔌 API Modules

### Authentication

```text
POST /api/auth/register
POST /api/auth/login
POST /api/auth/google
POST /api/auth/logout
GET  /api/auth/verify
```

### Student

```text
GET  /api/users/profile
PUT  /api/users/profile
POST /api/admissions
GET  /api/admissions/my-admission
GET  /api/videos
GET  /api/notes
```

### Admin

```text
GET  /api/admin/dashboard/stats
GET  /api/admissions
PUT  /api/admissions/:id/approve
PUT  /api/admissions/:id/reject
POST /api/videos
POST /api/notes
GET  /api/admin/users
```

### Contact

```text
POST /api/contact
```

These API categories and endpoints are defined in the project specification.

---

## 📱 Responsive Design

The platform is intended to work across:

* 📱 Smartphones
* 📲 Tablets
* 💻 Laptops
* 🖥️ Desktop computers

Supported environments include Windows, Android, iOS, macOS, and Linux, with modern browsers such as Chrome, Edge, Firefox, and Safari.

---

## 📋 Key Business Rules

1. Only the **Loni branch** accepts online admission applications.
2. Admission applications use **Pending, Approved, or Rejected** statuses.
3. Only authorized administrators can access administrative functions.
4. Students can access and modify only their own profile and admission information.
5. Course videos and notes are restricted to authorized students.
6. Payment status is updated only after successful gateway verification.
7. Protected student and admin resources require authentication.
8. Only authorized administrators can modify official academy content.

---

## 🚀 Future Enhancements

Planned or possible future improvements include:

* Android/iOS mobile application
* Push notifications
* Offline video access
* Online live classes
* Attendance tracking
* Student performance evaluation
* Parent portal
* Certificate generation
* SMS and WhatsApp integration
* Google Analytics
* SEO enhancements
* Blog and newsletter
* Automated invoicing
* Expense and revenue management
* Refund processing

---

## 👩‍💻 Project Information

**Project:** Nrityangan Dance Academy – Comprehensive Digital Management Platform
**Version:** 1.0
**Prepared By:** NrityaTech
**Client:** Mrs. Pranita, Founder & Director, Nrityangan Dance Academy
**Date:** 21 August 2026

---

## 📄 Documentation

The project requirements and system specifications are documented in the **Software Requirements Specification (SRS)**.

---

## ⭐ Expected Benefits

The platform is designed to:

* Reduce administrative effort
* Simplify student admissions
* Improve access to learning materials
* Organize digital student records
* Improve online communication
* Provide secure online payments
* Strengthen the academy's online presence

The SRS identifies these as the expected benefits of replacing several manual processes with an integrated web platform.
