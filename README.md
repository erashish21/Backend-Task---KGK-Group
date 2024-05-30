## Bidding Platform
This project is a bidding platform where users can create auction items, place bids, and receive notifications about their bids and auction items. It provides RESTful APIs for managing items, bids, and notifications.

## Table of Contents
Technologies Used
Features
Installation
API Endpoints
Usage
Contributing
Technologies Used
Node.js
Express.js
Sequelize (ORM for interacting with PostgreSQL)
PostgreSQL (Database)
Multer (Middleware for handling file uploads)
JSON Web Tokens (JWT) for authentication
WebSocket for real-time notifications
## Features
Items Management:

Create, read, update, and delete auction items.
Retrieve all auction items with pagination.
Retrieve a single auction item by ID.
Bids Management:

Place bids on specific auction items.
Retrieve all bids for a specific auction item.
Notifications:

Retrieve notifications for the logged-in user.
Mark notifications as read.
Authentication:

Authenticate users using JWT.
Protect routes that require authentication.

# Real-time Bidding Platform

## Setup

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Create a `.env` file with the following variables:


4. Run `npx sequelize-cli db:migrate` to set up the database.
5. Start the server with `npm start`.

## API Endpoints

### Users

- `POST /users/register` - Register a new user.
- `POST /users/login` - Authenticate a user and return a token.
- `GET /users/profile` - Get the profile of the logged-in user.

### Items

- `GET /items` - Retrieve all auction items (with pagination).
- `GET /items/:id` - Retrieve a single auction item by ID.
- `POST /items` - Create a new auction item. (Authenticated users, image upload)
- `PUT /items/:id` - Update an auction item by ID. (Authenticated users, only item owners or admins)
- `DELETE /items/:id` - Delete an auction item by ID. (Authenticated users, only item owners or admins)

### Bids

- `GET /items/:itemId/bids` - Retrieve all bids for a specific item.
- `POST /items/:itemId/bids` - Place a new bid on a specific item. (Authenticated users)

### Notifications

- `GET /notifications` - Retrieve notifications for the logged-in user.
- `POST /notifications/mark-read` - Mark notifications as read.

## WebSocket Events

### Bidding

- `connection` - Establish a new WebSocket connection.
- `bid` - Place a new bid on an item.
- `update` - Notify all connected clients about a new bid on an item.

### Notifications

- `notify` - Send notifications to users in real-time.
