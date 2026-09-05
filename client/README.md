# Nrityangan Academy - Frontend

React + TypeScript + Vite application for the Nrityangan Academy Dance Management System.

## Tech Stack

- **React 19** - UI library
- **TypeScript 6** - Type safety
- **Vite 8** - Build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework
- **React Router DOM 7** - Client-side routing
- **Axios** - HTTP client

## Project Structure

```
src/
├── components/        # Reusable UI components
│   ├── common/       # Generic components
│   ├── auth/         # Authentication components
│   ├── student/      # Student-specific components
│   ├── admin/        # Admin-specific components
│   └── admission/    # Admission workflow components
├── pages/            # Route page components
│   ├── public/       # Public pages
│   ├── student/      # Student dashboard pages
│   ├── admin/        # Admin dashboard pages
│   └── shared/       # Shared authenticated pages
├── layouts/          # Layout wrapper components
├── context/          # React Context for state management
├── services/         # API client functions
├── utils/            # Utility functions
├── hooks/            # Custom React hooks
├── assets/           # Static assets
│   ├── images/
│   ├── icons/
│   └── styles/
├── App.tsx           # Root component
└── main.tsx          # Application entry point
```

## Getting Started

### Install Dependencies

```bash
npm install
```

### Environment Setup

Copy `.env.example` to `.env` and fill in the values:

```bash
cp .env.example .env
```

### Development

Start the development server:

```bash
npm run dev
```

The application will run on: http://localhost:5173

### Build

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Code Quality

### Linting

Run ESLint:

```bash
npm run lint
```

### Formatting

Format code with Prettier:

```bash
npm run format
```

## Tailwind CSS v4

This project uses Tailwind CSS v4 with the new `@import` and `@theme` syntax.

Configuration is done in `src/index.css`:

```css
@import "tailwindcss";

@theme {
  /* Custom configuration */
}
```

## Development Guidelines

### Naming Conventions

- **Components**: PascalCase (`VideoCard.tsx`)
- **Files**: camelCase (`userService.ts`)
- **CSS Classes**: Tailwind utilities
- **Constants**: SCREAMING_SNAKE_CASE
- **Variables/Functions**: camelCase

### Component Structure

```tsx
import { FC } from 'react';

interface MyComponentProps {
  title: string;
}

const MyComponent: FC<MyComponentProps> = ({ title }) => {
  return <div>{title}</div>;
};

export default MyComponent;
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
