🚀 Dynamic Portfolio Website (MERN Stack)

A full-stack dynamic portfolio website built using React, Node.js, Express, and MongoDB with an Admin Panel to manage content like profile, skills, projects, and social links.

All portfolio data is stored in MongoDB and fetched dynamically, so updates can be made from the admin dashboard without touching frontend code.

✨ Features
👤 Public Portfolio

Hero section (name, role, description, resume, email)

About section

Skills section (dynamic from database)

Projects section (dynamic from database)

Connect / Social links (LinkedIn, GitHub, Email, etc.)

Fully responsive UI


🔐 Admin Panel

Secure login using JWT authentication

Manage:

Profile details

Skills

Projects

Connect / social links

Data stored in MongoDB and reflected instantly on portfolio


🛠 Tech Stack:
Frontend:

React (Vite)

CSS / Bootstrap

React Icons

Backend:

Node.js

Express.js

MongoDB + Mongoose

JWT Authentication

⚙️ Installation & Setup

1️⃣ Clone the repository : 
git clone https://github.com/your-username/your-repo-name.git

2️⃣ Backend Setup:

cd Backend
npm install


Create a .env file in the Backend folder:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key



Run backend server:

npm run dev


3️⃣ Frontend Setup
cd Frontend
npm install
npm run dev


🔑 Admin Login

Login Endpoint: 

POST /api/auth/login


Admin can manage: 

/api/profile

/api/skills

/api/projects

/api/connect

All admin routes are protected using JWT authentication.


🧪 Sample API Routes: 
GET /api/profile
POST /api/profile

GET /api/skills
POST /api/skills

GET /api/projects
POST /api/projects

GET /api/connect
POST /api/connect

📚 What I Learned:

JWT authentication

Building a real-world admin panel

Creating a professional dynamic portfolio

API design & frontend-backend integration

🧑‍💻 Author:

J Damodara Prasad Reddy
Aspiring Full Stack Developer

📧 Email: jdreddy220@gmail.com

🔗 LinkedIn: https://www.linkedin.com/in/jd-prasad/

🐙 GitHub: https://github.com/JDprasad2005

📜 License

This project is for learning and personal portfolio use.
