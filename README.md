# Node User Auth App

A simple **Node.js** application implementing user authentication with **Express.js**, **MongoDB** (via Mongoose), **bcrypt** for secure password hashing, and **JWT** for token-based authentication. Includes middleware to protect private routes.

## Features

- User registration and login with hashed passwords (bcrypt)
- Token-based authentication using JWT
- Middleware for route protection
- Environment variable configuration
- Nodemon for hot-reload during development
- Organized folder structure for scalability

## Prerequisites

- [Node.js](https://nodejs.org/) (v12 or later)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- MongoDB instance (local or remote)

## Installation

```bash
git clone https://github.com/kprashant544/Node-User-Auth-App.git
cd Node-User-Auth-App
npm install
```
## Folder Structure
```bash
Copy
Edit
├── controllers/
│   └── authController.js    # Handles registration & login logic
├── middlewares/
│   └── verifyToken.js       # Verifies JWT tokens
├── models/
│   └── userModel.js         # User schema & model
├── routes/
│   └── authRoutes.js        # Authentication endpoints
├── index.js                 # Main application entry point
├── package.json
└── .env.example
```
## Technologies Used

- Node.js
- Express.js
- MongoDB & Mongoose
- bcrypt
- JSON Web Tokens (JWT)
- Nodemon
