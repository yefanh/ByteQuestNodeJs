
# Interactive Language Learning Platform 🌍

[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38B2AC)](https://tailwindcss.com/)

## Overview
This is an interactive language learning platform that combines gamification with effective learning methodologies. Learn languages through engaging challenges, earn rewards, and track your progress.

## Tech Stack
- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: Tailwind CSS, Shadcn/ui
- **State Management**: Zustand
- **Database**: PostgreSQL (Neon)
- **ORM**: Drizzle
- **Authentication**: Clerk
- **Payments**: Stripe

## Key Features
- 🎯 Interactive Learning Challenges
- 💝 Hearts System
- 🏆 Achievement Quests
- 📊 Progress Tracking
- 🛍️ Points Store
- 👑 Premium Subscription
- 📱 Responsive Design

## Getting Started

### Prerequisites
```bash
node >= 18
npm >= 9
```

### Environment Variables
```bash
DATABASE_URL=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=
STRIPE_API_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_APP_URL=
```

### Installation
```bash
# Clone repository
git clone https://github.com/yourusername/bytequest.git

# Install dependencies
cd bytequest
npm install

# Setup database
npm run db:push

# Run development server
npm run dev
```

## Project Structure
```
bytequest/
├── app/                # Next.js pages & API routes
├── components/         # Reusable components
├── db/                 # Database configuration
├── lib/                # Utilities
├── store/              # State management
└── scripts/            # Database scripts
```

## Available Scripts
```bash
npm run dev            # Start development server
npm run build          # Build production
npm run start          # Start production server
npm run db:push        # Update database schema
npm run db:seed        # Seed database
```

## License
MIT

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
