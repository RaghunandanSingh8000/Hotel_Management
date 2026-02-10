# Hotel Management System

A full-stack hotel management application built with React, Express, and MongoDB.

## Features

### Frontend
- User authentication (login/register)
- Room browsing and booking
- Reservation management
- Contact form
- Restaurant table booking
- Responsive UI with Tailwind CSS

### Backend
- RESTful API with Express.js
- MongoDB database integration
- User authentication with JWT
- Reservation management endpoints
- Contact and booking endpoints

---

## Getting Started

### Prerequisites

- Node.js (v14+)
- npm or yarn
- MongoDB Atlas account
- Git

### Installation

#### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/Hotel_Management.git
cd Hotel_Management
```

#### 2. Setup Backend

```bash
cd Backend
npm install
```

Create a `.env` file in the `Backend` directory:
```
MONGO_URI=mongodb+srv://Rathore_Hotel:Hotel2002@user.yxnpiie.mongodb.net/royalhotel?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret_key
PORT=5000
```

Start the backend server:
```bash
node Server.js
```

You should see:
```
MongoDB connected
Server running on port 5000
```

#### 3. Setup Frontend

```bash
cd Frontend
npm install
```

Start the development server:
```bash
npm run dev
```

The app will run at `http://localhost:5173` (Vite) or `http://localhost:3000` (Create React App).

---

## Project Structure

```
Hotel_Management/
├── Backend/
│   ├── Model/
│   │   ├── User.js
│   │   └── ...
│   ├── Router/
│   │   ├── routes/
│   │   │   └── authRoutes.js
│   │   └── AuthRouter.js
│   ├── .env
│   ├── Server.js
│   └── package.json
│
├── Frontend/
│   ├── public/
│   │   ├── Room/
│   │   ├── Slide/
│   │   ├── Other/
│   │   └── ...
│   ├── src/
│   │   ├── Component/
│   │   │   ├── Home.jsx
│   │   │   ├── Reservation.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── ...
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── vite.config.js
│   ├── package.json
│   └── README.md
│
└── README.md
```

---

## API Endpoints

### Reservations
- **POST** `/api/reservations` - Create a new reservation
- **GET** `/api/reservations` - Get all reservations

### Bookings
- **POST** `/api/bookings` - Create a new booking
- **GET** `/api/bookings` - Get all bookings

### Contact
- **POST** `/api/contact` - Submit a contact form
- **GET** `/api/contact` - Get all contact messages

### Health Check
- **GET** `/` - Server status

---

## Frontend Setup Notes

### Static Assets
Place images in the `Frontend/public/` directory:
- **Images:** `/public/Room/`, `/public/Slide/`, `/public/Other/`
- **Reference in code:** `/Room/Room1.webp` (not `/public/Room/Room1.webp`)

### Environment Variables
Create a `.env.local` file in `Frontend/` if needed:
```
VITE_API_URL=http://localhost:5000
```

---

## Backend Setup Notes

### Database Models
- **User** - User authentication and profiles
- **Reservation** - Hotel room reservations
- **Booking** - Restaurant table bookings
- **Contact** - Contact form submissions

### MongoDB Collections
All data is stored in the `royalhotel` database:
- `users` - User accounts
- `reservations` - Room reservations
- `bookings` - Restaurant bookings
- `contacts` - Contact form messages

---

## Deployment

### Deploy Frontend (Vercel)
```bash
cd Frontend
npm run build
vercel --prod
```

Add `vercel.json` for SPA routing:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### Deploy Backend (Heroku, Railway, or Vercel)
```bash
cd Backend
# For Heroku
heroku create your-app-name
git push heroku main
```

Update frontend API URL to deployed backend.

---

## Security Notes

⚠️ **Never commit `.env` files with secrets!**

- Add `.env` to `.gitignore`
- Use environment variables for sensitive data (API keys, DB URI, JWT secret)
- Rotate MongoDB credentials if compromised
- Use HTTPS in production
- Implement rate limiting and input validation

---

## Troubleshooting

### Backend Connection Issues
- Check `.env` file for correct `MONGO_URI`
- Verify MongoDB Atlas IP whitelist
- Ensure backend is running on port 5000

### Frontend Cannot Connect to Backend
- Verify backend is running (`http://localhost:5000`)
- Check CORS is enabled in `Server.js`
- Use correct API URL in fetch requests

### MongoDB E11000 Duplicate Key Error
- Drop the unique index on `bookingId` in Atlas
- Or always provide unique values for unique fields

### Static Assets (Images) Not Loading
- Use `/Room/filename.webp` (not `/public/Room/filename.webp`)
- Ensure files are in `public/` directory
- Clear browser cache and rebuild if needed

---

## Contributing

Pull requests are welcome. For major changes, please open an issue first.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## License

[MIT](./LICENSE)

---

## Contact

For support, email: support@royalhotel.com  
Call: +91-123456789

---

**Happy coding! 🚀**
