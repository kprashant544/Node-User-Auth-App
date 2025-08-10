# Node User Auth App

A simple **Node.js** application implementing user authentication with **Express.js**, **MongoDB** (via Mongoose), **JWT** (JSON Web Tokens), and basic middlewares for route protection.

## Features

- User registration and login with secure password hashing (e.g., bcrypt)
- Token-based authentication using JWT
- Protected routes via middleware
- Structured folders:
  - `models/` — Mongoose schemas
  - `controllers/` — Business logic (e.g., auth handlers)
  - `routes/` — API endpoints
  - `middlewares/` — Authorization/authentication checks
- Easy integration and extension for any Node.js/Express project

## Prerequisites

- [Node.js](https://nodejs.org/) (v12 or later)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- MongoDB instance (local or remote)

## Installation

```bash
git clone https://github.com/kprashant544/Node-User-Auth-App.git
cd Node-User-Auth-App
npm install
