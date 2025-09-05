# Overview

This is a modern full-stack portfolio website built with React, Express.js, and TypeScript. The application showcases a developer's skills, projects, and experience through an interactive, responsive web interface. It features a comprehensive tech stack including React for the frontend, Express.js for the backend API, Drizzle ORM for database management, and shadcn/ui components for a polished design system.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management and caching
- **UI Components**: shadcn/ui component library built on Radix UI primitives for accessibility
- **Styling**: Tailwind CSS with custom CSS variables for theming support
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **API Design**: RESTful endpoints with proper error handling and validation
- **Request Validation**: Zod schemas for runtime type checking and validation
- **Development**: Hot reload with tsx for TypeScript execution

## Component Structure
The frontend follows a clean component architecture:
- **Layout Components**: Navigation and Footer for consistent page structure
- **Section Components**: Modular sections (Hero, About, Skills, Projects, Experience, Contact)
- **UI Components**: Reusable shadcn/ui components with consistent styling
- **Custom Hooks**: Specialized hooks for intersection observation, typing effects, and mobile detection

## Database Schema
- **Users Table**: Basic user authentication structure with username and password
- **Contacts Table**: Stores contact form submissions with name, email, subject, and message fields
- **Type Safety**: Drizzle-zod integration for automatic schema validation

## Development Features
- **Hot Module Replacement**: Fast development with Vite HMR
- **Type Safety**: End-to-end TypeScript coverage from database to frontend
- **Code Quality**: ESLint and TypeScript strict mode for code consistency
- **Build Optimization**: Separate client and server build processes

# External Dependencies

## Database & ORM
- **PostgreSQL**: Primary database using Neon serverless PostgreSQL
- **Drizzle ORM**: Type-safe database toolkit with automatic migrations
- **connect-pg-simple**: PostgreSQL session store for Express sessions

## UI & Styling
- **Radix UI**: Comprehensive collection of accessible, unstyled UI primitives
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens
- **Lucide Icons**: Modern icon library for consistent iconography
- **React Icons**: Additional icon collections (Simple Icons for brand logos)

## Form Handling & Validation
- **React Hook Form**: Performant form library with minimal re-renders
- **Zod**: TypeScript-first schema validation for runtime type checking
- **@hookform/resolvers**: Integration between React Hook Form and Zod

## Development Tools
- **Vite**: Next-generation frontend build tool with fast HMR
- **TypeScript**: Static type checking for enhanced developer experience
- **ESBuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing tool with Autoprefixer for browser compatibility

## Deployment & Runtime
- **Replit Integration**: Custom plugins for Replit development environment
- **Express Session Management**: Session handling for user state
- **CORS Support**: Cross-origin resource sharing configuration for API access