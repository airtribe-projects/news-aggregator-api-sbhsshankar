# Personalized News API

This is a basic backend project built with Node.js and Express. It allows users to register, log in, set their news preferences (like category and language), and get news articles based on those preferences using the NewsAPI service.

The app uses JWT for authentication and bcrypt for secure password storage.


## Features

- User registration and login
- Secure password hashing using bcrypt
- JWT token-based authentication
- Set and update user news preferences
- Fetch news articles based on saved preferences
- Simple error handling and testable using Postman or curl


## Tech Used

- Node.js
- Express
- bcrypt
- JSON Web Tokens (JWT)
- axios
- NewsAPI (https://newsapi.org)


## Process

- Clone the repo and go into the folder
- Install the required packages
- Start the server


## Methods

- POST /api/register
- POST /api/login
- GET /api/preferences
- PUT /api/preferences
- GET /api/news
