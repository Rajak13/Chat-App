# Chat App

A modern chat application with both web and desktop (Electron) clients.

## Features

- Landing page with modern design
- Login and Register pages
- Responsive design that works on both web and desktop
- Built with React, Tailwind CSS, and Electron

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm

### Installation

1. Clone the repository
2. Install dependencies for all apps:
   ```bash
   npm run install:all
   ```

### Running the Applications

#### Web Client (Development)
```bash
npm run dev:web
```
This will start the web client at `http://localhost:5173`

#### Electron Desktop App (Development)
Option 1 - Run both simultaneously:
```bash
npm run dev:both
```

Option 2 - Run separately:
First, start the web client in development mode:
```bash
npm run dev:web
```

Then in another terminal, start the Electron app:
```bash
npm run dev:electron
```

#### Production Builds
Web client:
```bash
npm run build:web
```

Electron desktop app:
```bash
npm run build:electron
```

## Project Structure

```
├── apps/
│   ├── web-client/          # React web application
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   ├── LandingPage/
│   │   │   │   ├── Login/
│   │   │   │   └── Register/
│   │   │   └── App.jsx
│   │   └── package.json
│   └── electron-client/     # Electron desktop application
│       ├── main.js
│       └── package.json
├── docs/                    # Documentation and wireframes
├── packages/               # Shared packages
├── services/              # Backend services
└── package.json          # Root package.json for monorepo
```

## Available Routes

- `/` - Landing page
- `/login` - Login page
- `/register` - Register page

## Technologies Used

- **Frontend**: React, React Router, Tailwind CSS
- **Desktop**: Electron
- **Build Tool**: Vite
- **Package Manager**: npm

## Development

The application uses a monorepo structure with workspaces. Both the web client and Electron app share the same React codebase, ensuring consistency across platforms.

### Web Client
- Built with Vite for fast development and optimized builds
- Uses Tailwind CSS for styling
- React Router for navigation

### Electron Client
- Loads the web client in development mode from `http://localhost:5173`
- In production, loads from the built files in `dist/`
- Configured to work seamlessly with React Router

## Design

The application follows the provided wireframes with:
- Split-screen layout for landing page
- Consistent branding with red (#8B1538) and cream (#fcf5eb) color scheme
- Responsive design that adapts to different screen sizes
- Modern UI with rounded corners and smooth transitions