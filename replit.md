# GHLSPACE Agency Website

## Overview

GHLSPACE is a modern, full-stack React application built for a digital agency specializing in GoHighLevel automation, ClickFunnels optimization, and video editing services. The application features a responsive, high-conversion design with smooth animations and modern UI components.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Animations**: Framer Motion for smooth scroll animations and interactions
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon serverless PostgreSQL
- **Session Management**: PostgreSQL-based session store with connect-pg-simple
- **Build Tool**: Vite for development and production builds
- **Deployment**: ESBuild for server bundling

### Development Environment
- **Development Server**: Vite with HMR and React refresh
- **TypeScript**: Full TypeScript support across client and server
- **Code Quality**: ESM modules throughout the stack
- **Replit Integration**: Custom Replit development banner and cartographer plugin

## Key Components

### UI Component System
- **Design System**: shadcn/ui components with New York style variant
- **Theme**: Custom GHLSPACE brand theme blending GHL blue and ClickFunnels red
- **Typography**: Inter font family for modern, professional appearance
- **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints

### Page Structure
- **Home Page**: Single-page application with multiple sections
  - Hero section with animated typing effect
  - About section with scroll animations
  - Services section (GHL, ClickFunnels, Video Editing)
  - Portfolio/case studies with results metrics
  - Testimonials carousel
  - Call-to-action section
  - Contact form with service selection

### Custom Hooks
- **useScrollAnimation**: Intersection Observer-based scroll animations
- **useIsMobile**: Responsive breakpoint detection
- **useToast**: Toast notification system

### Database Schema
- **Users Table**: Basic user management with username/password authentication
- **Extensible Design**: Schema designed to accommodate future agency-specific entities

## Data Flow

### Client-Side Data Flow
1. React components consume data through TanStack Query
2. API requests handled through centralized query client
3. Form submissions processed with React Hook Form
4. UI state managed locally with React hooks
5. Toast notifications for user feedback

### Server-Side Data Flow
1. Express.js handles API routes with `/api` prefix
2. Drizzle ORM manages database operations
3. In-memory storage implementation for development
4. PostgreSQL integration ready for production
5. Session management through PostgreSQL store

### Animation Flow
1. Intersection Observer detects element visibility
2. Framer Motion triggers enter animations
3. Custom scroll animation hook manages state
4. CSS transforms provide smooth transitions

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Router (Wouter)
- **TypeScript**: Full TypeScript support
- **Build Tools**: Vite, ESBuild for production builds

### UI and Styling
- **Radix UI**: Complete accessible component primitives
- **Tailwind CSS**: Utility-first styling framework
- **Framer Motion**: Animation library
- **Lucide React**: Icon library

### Backend Dependencies
- **Express.js**: Web application framework
- **Drizzle ORM**: Type-safe database toolkit
- **Neon Database**: Serverless PostgreSQL provider
- **Session Management**: connect-pg-simple for PostgreSQL sessions

### Development Tools
- **Replit Plugins**: Development environment integration
- **PostCSS**: CSS processing with Autoprefixer
- **Date-fns**: Date utility library

## Deployment Strategy

### Development Deployment
- **Local Development**: Vite development server with HMR
- **Database**: Neon serverless PostgreSQL for development
- **Environment Variables**: DATABASE_URL for database connection
- **Asset Serving**: Vite handles static assets and hot reloading

### Production Deployment
- **Build Process**: 
  1. Vite builds client-side React application
  2. ESBuild bundles server-side Express application
  3. Static assets compiled to `dist/public`
  4. Server bundle output to `dist/index.js`
- **Database Migrations**: Drizzle Kit handles schema migrations
- **Session Storage**: PostgreSQL-based session management
- **Static File Serving**: Express serves built client assets

### Environment Configuration
- **Database URL**: Required environment variable for PostgreSQL connection
- **Node Environment**: Development/production mode switching
- **Replit Integration**: Conditional development tooling based on REPL_ID

## Changelog

- July 07, 2025. Initial setup
- July 07, 2025. Enhanced website with comprehensive trust-building features:
  - Added detailed case study pages with real metrics and testimonials
  - Implemented functional buttons throughout the site for smooth navigation
  - Created live demo section with interactive video previews
  - Added comprehensive pricing, FAQ, and certification sections
  - Enhanced portfolio with clickable case studies
  - Improved overall user experience with working CTAs

## User Preferences

Preferred communication style: Simple, everyday language.