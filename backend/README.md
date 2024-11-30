# School Clubs Management System

This project is a web-based application to manage school clubs, allowing administrators to oversee club activities, members, and events. Built with the **MERN Stack** (MongoDB, Express, Node.js, and Vue.js), it provides a simple and intuitive interface for users.

---

## Features

- **Admin Dashboard**:
  - Manage clubs, members, and events.
  - Approve or reject club registrations.
- **User Dashboard**:
  - View club details and join clubs.
  - Access club events and updates.
- **Authentication**:
  - Role-based login (Admins, Club Leaders, Members).
- **Event Management**:
  - Create, edit, and view events for specific clubs.
- **Responsive Design**:
  - Works seamlessly on desktops, tablets, and mobile devices.

---

## Technologies Used

### Backend:
- **Node.js**: Server-side runtime for building the API.
- **Express**: Web framework for managing routes and middleware.
- **MongoDB**: NoSQL database for storing data.

### Frontend:
- **Vue.js**: Frontend framework for building the user interface.
- **Vuex**: State management for handling app-wide state.
- **Vuetify**: UI library for creating a professional look.

---

## Installation

### Prerequisites:
- [Node.js](https://nodejs.org/) installed on your system.
- [MongoDB](https://www.mongodb.com/) running locally or using MongoDB Atlas.

### Steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/raghadisraghad/schoolManagement.git
   cd schoolManagement
   ```

2. Install dependencies for the backend:
   ```bash
   cd backend
   npm install
   ```

3. Install dependencies for the frontend:
   ```bash
   cd ../frontend
   npm install
   ```

4. Create a `.env` file in the backend folder and add the data from `.env.example`:

5. Start both server and frontend at the same time:
   ```bash
   npm run dev
   ```

6. Access the application:
   - Backend: `http://localhost:5000`
   - Frontend: `http://localhost:8080`

---

## Folder Structure

```
school-clubs-management
├── backend
│   ├── models
│   ├── routes
│   ├── controllers
│   ├── middleware
│   ├── server.js
│   └── .env
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── views
│   │   ├── store
│   │   ├── router
│   │   └── App.vue
│   └── public
├── README.md
└── package.json
```

---

## Contributors

- [Raghad Chamlali](https://github.com/raghadisraghad) - Developer
- [Reda Seti] - Designer

Feel free to customize this README file to suit your project! Let me know if you want to add additional sections or details.