# Pariwartan Poudel - Portfolio Website

A professional, eye-catching portfolio website built with Django REST API backend and React frontend, featuring modern animations and creative design.

## 🚀 Features

- **Modern Design**: Eye-catching animations and creative layouts
- **Responsive**: Fully responsive design that works on all devices
- **Django Backend**: Robust REST API with admin panel
- **React Frontend**: Modern React with Framer Motion animations
- **Professional Sections**: 
  - Hero section with animated typing
  - About section with statistics
  - Experience timeline
  - Skills with progress bars
  - Featured projects showcase
  - Contact form with email integration

## 🛠️ Tech Stack

### Backend
- Python 3.8+
- Django 4.2+
- Django REST Framework
- PostgreSQL/SQLite
- Django CORS Headers

### Frontend
- React 18
- Framer Motion (animations)
- React Router DOM
- React Icons
- Axios (API calls)
- CSS3 with modern features

## 📋 Prerequisites

- Python 3.8 or higher
- Node.js 14 or higher
- npm or yarn

## 🔧 Installation & Setup

### 1. Clone the repository
```bash
git clone <repository-url>
cd pariwartan-portfolio
```

### 2. Backend Setup
```bash
# Install Python dependencies
pip install -r requirements.txt

# Run migrations
python manage.py migrate

# Create superuser (optional)
python manage.py createsuperuser

# Populate sample data
python manage.py populate_data
```

### 3. Frontend Setup
```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install
```

## 🚀 Running the Application

### Development Mode

#### Option 1: Run both servers simultaneously
```bash
# Install concurrently (if not already installed)
npm install -g concurrently

# Run both backend and frontend
npm run dev
```

#### Option 2: Run servers separately

**Terminal 1 - Backend:**
```bash
python manage.py runserver
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm start
```

### Access the Application
- Frontend: http://localhost:3000
- Backend API: http://localhost:8000/api/
- Django Admin: http://localhost:8000/admin/

## 📁 Project Structure

```
pariwartan-portfolio/
├── portfolio_backend/          # Django project settings
├── portfolio/                  # Django app
│   ├── models.py              # Database models
│   ├── views.py               # API views
│   ├── serializers.py         # DRF serializers
│   ├── urls.py                # API URLs
│   └── admin.py               # Admin configuration
├── frontend/                   # React application
│   ├── src/
│   │   ├── components/        # React components
│   │   ├── App.js            # Main App component
│   │   └── App.css           # Global styles
│   └── public/               # Static files
├── requirements.txt           # Python dependencies
└── README.md                 # This file
```

## 🎨 Customization

### Personal Information
1. Update the database through Django admin panel
2. Or modify the `populate_data.py` management command
3. Replace placeholder images in the frontend

### Styling
- Modify CSS files in `frontend/src/components/`
- Update color schemes in CSS variables
- Customize animations in component files

### Content
- Update models in `portfolio/models.py`
- Modify API endpoints in `portfolio/views.py`
- Customize frontend components as needed

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🔒 Security Features

- CORS configuration for API access
- CSRF protection
- Input validation and sanitization
- Secure file upload handling

## 📧 Contact Form

The contact form includes:
- Real-time validation
- Email notification system
- Success/error feedback
- Spam protection ready

## 🚀 Deployment

### Backend Deployment
1. Configure production settings
2. Set up PostgreSQL database
3. Configure static files serving
4. Deploy to platforms like Heroku, DigitalOcean, or AWS

### Frontend Deployment
1. Build the React app: `npm run build`
2. Deploy to platforms like Netlify, Vercel, or serve with Django

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**Pariwartan Poudel**
- Leo Club President 2025/2026
- Python Django Developer
- Laravel Developer
- Campus Director

---

⭐ If you found this project helpful, please give it a star!