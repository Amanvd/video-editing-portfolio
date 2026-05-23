# Video Editing Portfolio - Copilot Instructions

## Project Overview

A premium noir-minimalist video editing portfolio built with React, Tailwind CSS, and Framer Motion. This project showcases cinematic storytelling with a professional, clean aesthetic designed for video editors and motion designers.

## Design System

**Aesthetic:** Noir-minimalist with matte finish
- Primary Color: #050505 (Deep Black)
- Accent Color: #121212 (Matte Gray)  
- Text Color: #e5e5e5 (Muted White)
- Typography: Helvetica Neue, Inter
- Headings: Extra-bold with tight tracking

## Technology Stack

- React 18 + TypeScript
- Vite (build tool)
- Tailwind CSS (styling)
- Framer Motion (animations)
- Radix UI (accessible components)
- Lucide React (icons)

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── About.tsx       # Biography & stats section
│   ├── Contact.tsx     # Contact form & social links
│   ├── CustomCursor.tsx # Interactive custom cursor
│   ├── Hero.tsx        # Full-screen hero introduction
│   ├── Navigation.tsx  # Sticky nav header
│   ├── Services.tsx    # Services showcase
│   ├── VideoModal.tsx  # Video lightbox modal
│   └── WorkGrid.tsx    # 2-column portfolio grid
├── App.tsx             # Main application component
├── index.css          # Global styles & Tailwind directives
└── main.tsx           # React entry point
```

## Key Features Implemented

✨ **Design Elements**
- Deep black noir aesthetic with zero clutter
- Custom color palette: noir-black, matte-gray, muted-white
- Helvetica Neue typography with extra-bold heading weight
- Grain texture overlay for film-stock aesthetic

🎥 **Portfolio Showcase**
- Responsive 2-column grid layout
- 16:9 aspect ratio for video thumbnails
- Smooth hover animations (1.05x thumbnail scale)
- Minimalist video modal with backdrop blur

🎨 **Animations**
- Staggered reveal animations on scroll
- Custom circular cursor that expands on video hover
- "PLAY" text appears in expanded cursor
- Smooth page transitions with Framer Motion
- Scroll-triggered animations with viewport detection

🧩 **Sections**
- Hero: Full-screen name and services
- Work: 2-column grid with project cards
- Services: Tool list with descriptions
- About: Director's note with statistics
- Contact: Email form and social links
- Navigation: Sticky header with mobile menu

## Customization Guide

### Update Your Information

**Hero Section** - Edit `src/components/Hero.tsx`:
```typescript
<motion.h1 className="text-display font-extra-bold">
  YOUR NAME              // Change this
</motion.h1>
```

**Services List** - Edit the services array in `src/components/Services.tsx`

**About Bio** - Update text in `src/components/About.tsx`

**Contact Info** - Replace email/social links in `src/components/Contact.tsx`

### Add Your Projects

Edit `defaultProjects` array in `src/components/WorkGrid.tsx`:

```typescript
const defaultProjects: Project[] = [
  {
    id: '1',
    title: 'Your Project Title',
    thumbnail: 'your-image-url.jpg',
    videoUrl: 'your-video-url.mp4',
    category: 'Film/Motion/etc'
  },
  // Add more projects
];
```

### Modify Colors

Edit `tailwind.config.js` theme.extend.colors:
```javascript
colors: {
  "noir-black": "#050505",    // Primary dark
  "matte-gray": "#121212",    // Accent gray
  "muted-white": "#e5e5e5",   // Text color
  "accent-gray": "#1a1a1a",   // Secondary accent
}
```

### Adjust Typography

Modify `tailwind.config.js` theme.extend.fontSize and fontWeight

## Development Workflow

### Prerequisites
- Node.js (v16+)
- npm or yarn

### Installation & Setup

```bash
# Install dependencies
npm install

# Start development server (hot reload)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The dev server runs on `http://localhost:5173/`

## Component Documentation

### Hero.tsx
Full-screen hero section with:
- Centered, large typography
- Services list below name
- Animated scroll indicator
- Grain texture overlay

### WorkGrid.tsx
2-column responsive portfolio grid:
- 16:9 aspect ratio containers
- Hover overlay with project title
- "View Project" button
- Opens VideoModal on click

### VideoModal.tsx
Minimalist lightbox component:
- Backdrop blur effect
- Centered video player
- Close button (X)
- Project info below

### CustomCursor.tsx
Interactive custom cursor:
- Circular cursor dot
- Expands on [data-video-hover] elements
- Shows "PLAY" text when hovering videos
- Smooth spring animation

### Navigation.tsx
Sticky header with:
- Logo/brand name
- Desktop navigation menu
- Mobile hamburger menu
- Smooth scrolling links

### Services.tsx
Services showcase with:
- 2-column responsive grid
- Service title and description
- Tool/sofware badges
- Hover animations

### About.tsx
Biography section with:
- Director's note heading
- Personal bio paragraph
- Stats grid (projects, experience, clients)
- Responsive layout

### Contact.tsx
Contact section featuring:
- Email form (name, subject, message)
- Success message animation
- Email link
- Social media icons (Email, LinkedIn, Instagram, GitHub)
- Footer with copyright

## Performance Optimization

- Vite for ultra-fast builds
- Code splitting via React lazy loading
- Tailwind CSS purging unused styles
- Optimized Framer Motion animations
- Responsive images with proper sizing

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment

### Build for Production
```bash
npm run build
```

Output goes to `dist/` folder

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
Connect GitHub repo to Netlify for automatic deploys on push

## Troubleshooting

**Dev server won't start:**
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again

**Styling not applying:**
- Clear Tailwind CSS cache: Delete `.next` or build folder
- Ensure `src` folder is in Tailwind content config

**Animations stuttering:**
- Use `will-change` CSS property sparingly
- Check GPU acceleration via browser DevTools

## File Modification Checklist

When setting up your portfolio:

- [ ] Update name in `Hero.tsx`
- [ ] Replace services in `Services.tsx`  
- [ ] Update bio in `About.tsx`
- [ ] Add projects to `WorkGrid.tsx` defaultProjects
- [ ] Update contact email in `Contact.tsx`
- [ ] Add social media links in `Contact.tsx`
- [ ] Customize colors in `tailwind.config.js` if desired
- [ ] Test all sections by scrolling through the site
- [ ] Test video modal by clicking projects
- [ ] Test mobile responsiveness

## Resources & Documentation

- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Vite Guide](https://vitejs.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

## Questions or Issues?

Refer to the main [README.md](../README.md) for quick reference or check component documentation in their source files.
