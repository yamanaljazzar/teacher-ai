# Teacher AI

A smart assistant for teachers — an Arabic-first, RTL web application that helps educators create and deliver lessons more easily and engagingly.

Built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS 4**.

---

## Features

- **Arabic-first RTL interface** — fully right-to-left layout with Readex Pro font
- **Authentication** — login/logout with JWT session management (cookie-based, 7-day expiry)
- **Dashboard** — subject selection cards with animated floating icons
- **Dark / Light theme** — toggle between themes via `next-themes`
- **Form validation** — powered by React Hook Form + Zod
- **Animated UI** — smooth transitions with Framer Motion
- **Component library** — built on shadcn/ui (New York style)

## Tech Stack

| Layer         | Technology                                          |
| ------------- | --------------------------------------------------- |
| Framework     | Next.js 16 (App Router)                             |
| Language      | TypeScript 5                                        |
| UI            | React 19, Tailwind CSS 4, shadcn/ui, Radix UI      |
| Animations    | Framer Motion                                       |
| Forms         | React Hook Form, Zod                                |
| Auth          | jose (JWT), HTTP-only cookies                       |
| Icons         | Lucide React                                        |
| Font          | Readex Pro (Google Fonts)                            |

## Getting Started

### Prerequisites

- **Node.js** 18.18+ (or Bun / pnpm / Yarn)
- **npm**, **pnpm** or **yarn**

### Installation

```bash
# Clone the repository
git clone https://github.com/yamanaljazzar/teacher-ai.git
cd teacher-ai

# Install dependencies
pnpm install
```

### Environment Variables

Create a `.env` file in the project root:

```env
SESSION_SECRET=your-secret-key-here
```

| Variable         | Required | Description                        |
| ---------------- | -------- | ---------------------------------- |
| `SESSION_SECRET`  | Yes      | Secret key for JWT session encryption |

### Running the App

```bash
# Development server
pnpm dev

# Production build
npm build
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Demo Credentials

| Field    | Value              |
| -------- | ------------------ |
| Email    | `user@teacher.ai`  |
| Password | `password123`      |

## Available Scripts

| Script       | Command                                          | Description              |
| ------------ | ------------------------------------------------ | ------------------------ |
| `dev`        | `next dev`                                       | Start dev server         |
| `build`      | `next build`                                     | Create production build  |
| `start`      | `next start`                                     | Serve production build   |
| `lint`       | `eslint`                                         | Lint source files        |
| `format`     | `prettier --write "src/**/*.{js,jsx,ts,tsx}"`    | Format source files      |

## Project Structure

```
src/
├── app/                        # Next.js App Router (pages & layouts)
│   ├── auth/login/             # Login page
│   ├── dashboard/              # Dashboard page
│   ├── globals.css             # Global styles, theme variables
│   ├── layout.tsx              # Root layout (providers, fonts)
│   └── page.tsx                # Home — splash screen → redirect
│
├── auth/                       # Authentication logic
│   ├── actions.ts              # Server actions (login, logout, getCurrentUser)
│   ├── types.ts                # Auth type definitions
│   ├── context/                # Auth context & provider
│   └── hooks/                  # useAuthContext hook
│
├── components/
│   ├── ui/                     # shadcn/ui primitives (button, card, input, etc.)
│   ├── hook-form/              # React Hook Form wrappers
│   ├── logo.tsx                # App logo
│   ├── splash-screen.tsx       # Loading splash screen
│   ├── theme-provider.tsx      # Theme context provider
│   └── theme-toggle.tsx        # Dark/Light toggle
│
├── layouts/
│   ├── auth/                   # Auth pages layout (floating icons)
│   └── dashboard/              # Dashboard layout (header + sidebar)
│
├── lib/
│   ├── session.ts              # JWT encrypt/decrypt, cookie management
│   └── utils.ts                # cn() class merge utility
│
├── routes/
│   └── paths.ts                # Centralized route path constants
│
└── views/
    ├── auth/view.tsx           # Login form view
    └── dashboard/
        ├── components/         # Dashboard-specific components
        └── view.tsx            # Dashboard main view
```

## Routes

| Route          | Description                 | Status      |
| -------------- | --------------------------- | ----------- |
| `/`            | Splash screen → login       | Implemented |
| `/auth/login`  | Login page                  | Implemented |
| `/dashboard`   | Subject selection dashboard | Implemented |

## Auth Flow

1. `/` displays a splash screen for 3 seconds, then redirects to `/auth/login`
2. User logs in with email and password
3. On success, a JWT session is created in an HTTP-only cookie and the user is redirected to `/dashboard`
4. Logout clears the session cookie and redirects back to `/auth/login`
