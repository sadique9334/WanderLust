# 🌍 WanderLust

A full-stack travel listing web application inspired by Airbnb, where users can create, explore, and review travel destinations.

## 🔗 Live Demo
> Coming Soon

## 📸 Screenshots
> Add your project screenshots here

---

## ✨ Features

- 🔐 **User Authentication** — Register, Login, Logout using Passport.js
- 🏠 **Listings CRUD** — Create, Read, Update, Delete travel listings
- 🖼️ **Image Upload** — Upload listing photos via Cloudinary
- ⭐ **Reviews System** — Add and delete reviews on listings
- 🔒 **Authorization** — Only listing/review owners can edit or delete
- 💬 **Flash Messages** — Success and error notifications
- ✅ **Form Validation** — Server-side validation using Joi
- 📱 **Responsive Design** — Mobile-friendly UI with Bootstrap

---

## 🛠️ Tech Stack

**Frontend:**
- EJS (Embedded JavaScript Templates)
- EJS-Mate (Layout support)
- CSS3 + Bootstrap 5

**Backend:**
- Node.js
- Express.js v5

**Database:**
- MongoDB
- Mongoose ODM

**Authentication:**
- Passport.js
- Passport-Local
- Passport-Local-Mongoose

**Cloud Storage:**
- Cloudinary (image hosting)
- Multer (file upload handling)

**Other:**
- Express Session
- Connect-Flash
- Joi (validation)
- Method-Override
- Dotenv

---

## 📁 Project Structure

```
WanderLust/
├── controllers/        # Route logic (listings, reviews, users)
├── models/             # Mongoose schemas (Listing, Review, User)
├── routes/             # Express route definitions
├── views/              # EJS templates
│   ├── listings/       # Listing pages
│   ├── users/          # Auth pages
│   └── partials/       # Navbar, footer, etc.
├── public/             # Static files (CSS, JS, images)
├── utils/              # Helper functions & error handling
├── init/               # Database seed data
├── middleware.js        # Custom middleware
├── cloudconfig.js      # Cloudinary configuration
├── schema.js           # Joi validation schemas
└── app.js              # Main entry point
```

---

## ⚙️ Installation & Setup

### Prerequisites
- Node.js installed
- MongoDB running locally or MongoDB Atlas account
- Cloudinary account

### Steps

**1. Clone the repository**
```bash
git clone https://github.com/sadique9334/WanderLust.git
cd WanderLust
```

**2. Install dependencies**
```bash
npm install
```

**3. Create `.env` file in root directory**
```env
ATLASDB_URL=your_mongodb_connection_string
SECRET=your_session_secret_key
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
```

**4. Initialize database (optional seed data)**
```bash
node init/index.js
```

**5. Start the server**
```bash
node app.js
```

**6. Open in browser**
```
http://localhost:8080
```

---

## 🔐 Environment Variables

| Variable | Description |
|----------|-------------|
| `ATLASDB_URL` | MongoDB Atlas connection string |
| `SECRET` | Express session secret key |
| `CLOUD_NAME` | Cloudinary cloud name |
| `CLOUD_API_KEY` | Cloudinary API key |
| `CLOUD_API_SECRET` | Cloudinary API secret |

---

## 🚀 Deployment

This project can be deployed on:
- **Render** (recommended for Node.js)
- **Railway**
- **Cyclic**

Make sure to set all environment variables in the deployment platform's dashboard.

---

## 👨‍💻 Author

**Sadique Anwar**
- GitHub: [@sadique9334](https://github.com/sadique9334)
- B.Tech CSE — Maulana Azad National Urdu University

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
