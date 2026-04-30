# Ridox 3D - Premium 3D Manufacturing Portfolio

A modern, high-performance portfolio and service website for professional 3D printing and digital manufacturing.

## 🎨 Design Philosophy

- **Premium & Minimal**: Clean UI with refined color palette (white + matte green)
- **Industrial & Modern**: Glassmorphism, soft shadows, subtle gradients
- **Performance First**: Optimized for speed, SEO, and mobile
- **User-Centric**: Smooth micro-interactions and intuitive navigation

## 🚀 Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS with custom design tokens
- **Animations**: Framer Motion
- **Backend**: Next.js API Routes
- **Database**: MongoDB + Mongoose
- **Authentication**: JWT + Optional Google OAuth
- **File Storage**: Local + Cloud-ready
- **State Management**: Zustand

## 📁 Project Structure

```
ridox-3d/
├── src/
│   ├── app/                 # Next.js 15 app router
│   ├── components/          # Reusable components
│   ├── pages/api/           # API routes
│   ├── lib/                 # Utilities & helpers
│   ├── models/              # MongoDB schemas
│   ├── store/               # Zustand state
│   ├── styles/              # Global styles
│   └── types/               # TypeScript types
├── public/                  # Static assets
├── scripts/                 # Utility scripts
└── docs/                    # Documentation
```

## 🌟 Features

### Client-Facing
- ✅ Hero with animated 3D showcase
- ✅ Portfolio grid with filters
- ✅ Advanced quote system with file upload
- ✅ Service pages with detailed info
- ✅ Blog with markdown support
- ✅ Client testimonials
- ✅ Contact form + WhatsApp integration
- ✅ Dark/Light mode toggle

### Admin Panel
- ✅ Secure authentication
- ✅ Dashboard with analytics
- ✅ Portfolio management (CRUD)
- ✅ Blog management
- ✅ Quote request handling
- ✅ Media manager
- ✅ Message center

## 🛠️ Installation

```bash
# Clone repository
git clone https://github.com/mstfaeybk-svg/ridox-3d.git
cd ridox-3d

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

Visit `http://localhost:3000`

## 📚 Documentation

See `/docs` folder for detailed guides:
- Setup & Installation
- Database Schema
- API Documentation
- Admin Panel Guide
- Deployment

## 🔐 Security

- JWT-based authentication
- Password hashing with bcrypt
- CORS protection
- Environment variable isolation
- Input validation & sanitization

## 📊 Performance

- Next.js 15 optimizations
- Image optimization (AVIF/WebP)
- Code splitting
- SSR & ISR support
- Lazy loading

## 📝 License

Proprietary - Ridox 3D © 2026

## 👨‍💻 Development

```bash
# Type check
npm run type-check

# Lint
npm run lint

# Build
npm run build

# Start production
npm start
```

---

**Built with precision for the future of manufacturing.**