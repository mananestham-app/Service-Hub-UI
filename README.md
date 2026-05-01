# Service Hub - Micro-Frontend Platform

A revolutionary dining platform that combines restaurant ordering and chef booking services in one seamless experience.

## 🚀 Project Overview

Service Hub is a cutting-edge micro-frontend architecture platform that provides:
- **Tap-to-Eat**: QR-based restaurant ordering system
- **Find-a-Chef**: Professional chef booking service
- **Container App**: Main navigation and service hub

## 🏗️ Architecture

```
tap-to-eat-platform/
├── packages/
│   ├── container/          # Main application (Port 3000)
│   ├── tap-to-eat-mfe/     # Restaurant ordering (Port 3001)
│   ├── find-a-chef-mfe/    # Chef booking (Port 3002)
│   └── shared/             # Shared types and utilities
├── src/                    # Original monolith (preserved)
├── package.json            # Root monorepo configuration
└── README.md
```

## 🛠️ Technology Stack

- **Frontend**: Next.js 14.2.3 with React 18.3.1
- **Architecture**: Micro-Frontend with independent services
- **Styling**: Tailwind CSS
- **Package Manager**: npm workspaces
- **Language**: TypeScript

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd tap-to-eat-platform
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run All Services
```bash
npm run dev:all
```

### 4. Individual Services
```bash
# Container App (Port 3000)
npm run dev:container

# Tap-to-Eat Service (Port 3001)
npm run dev:tap-to-eat

# Find-a-Chef Service (Port 3002)
npm run dev:find-a-chef
```

## 🌐 Access Points

- **Container App**: http://localhost:3000
- **Tap-to-Eat**: http://localhost:3001
- **Find-a-Chef**: http://localhost:3002

## 📦 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev:all` | Run all services concurrently |
| `npm run dev:container` | Run container app only |
| `npm run dev:tap-to-eat` | Run tap-to-eat service only |
| `npm run dev:find-a-chef` | Run find-a-chef service only |
| `npm run build` | Build all packages |
| `npm run lint` | Lint all packages |

## 🎯 Features

### Tap-to-Eat Service
- QR code menu scanning
- Real-time ordering
- Secure digital payments
- Customizable orders

### Find-a-Chef Service
- Professional chef discovery
- Booking management
- Cuisine filtering
- Availability tracking

### Container App
- Service navigation
- Live status monitoring
- Unified user experience

## 🔧 Development

### Adding New Services
1. Create new package in `packages/` directory
2. Update root `package.json` workspaces
3. Configure independent port
4. Add scripts to root package.json

### Shared Components
Common types and utilities are located in `packages/shared/` and can be imported across services.

## 🚀 Deployment

### Vercel Deployment
The platform is optimized for Vercel deployment:

1. **Container App**: Main deployment target
2. **MFE Services**: Deployed as separate applications
3. **Environment Variables**: Configure per service

### Environment Variables
```env
# No required environment variables for current setup
# Future: API keys, database URLs, etc.
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

© 2026 Service Hub Platform. All rights reserved.

## 🆘 Troubleshooting

### Common Issues

**Port Already in Use**
```bash
# Find process using port
netstat -ano | findstr :3000
# Kill process
taskkill /F /PID <PID>
```

**Module Resolution Errors**
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

**Build Failures**
```bash
# Clean build
npm run clean
npm run build
```

### Support

For issues and questions:
- Check the troubleshooting section
- Review the MFE Migration Guide
- Open an issue on GitHub

## 📚 Documentation

- [MFE Migration Guide](./MFE_MIGRATION_GUIDE.md) - Detailed architecture documentation
- [API Documentation](./docs/api/) - API references (coming soon)
- [Deployment Guide](./docs/deployment/) - Deployment instructions (coming soon)

---

**Built with ❤️ using Next.js and Micro-Frontend Architecture**
