# Assets Directory

This directory contains all static assets for the Nrityangan Academy website.

## Directory Structure

```
assets/
├── images/
│   ├── logo/              # Logo files
│   ├── hero/              # Hero section images
│   ├── about/             # About section images
│   ├── teachers/          # Teacher photos
│   ├── gallery/           # Gallery images
│   ├── branches/          # Branch images
│   └── placeholders/      # Placeholder images
├── icons/                 # Icon files
└── index.ts              # Centralized assets configuration
```

## Usage

All image paths are centralized in `assets/index.ts`. Import from there:

```typescript
import { logo, teachers, gallery } from '../assets';

// Use in component
<img src={teachers.priyaSharma} alt="Teacher" />
```

## Adding New Assets

1. Place images in the appropriate subdirectory under `public/images/`
2. Update `assets/index.ts` with the new path
3. Components will automatically use the new images

## Image Naming Convention

- Use lowercase with hyphens: `teacher-name.jpg`
- Be descriptive: `bharatanatyam-performance-2024.jpg`
- Use appropriate format: `.jpg` for photos, `.png` for logos with transparency

## Placeholder Images

During development, components will show placeholder images if actual assets are not available. Replace paths in `assets/index.ts` when real images are ready.

## Optimization Tips

- Compress images before uploading
- Use appropriate dimensions (don't upload 4K images if not needed)
- Consider WebP format for better compression
- Use lazy loading (already implemented in Image component)
