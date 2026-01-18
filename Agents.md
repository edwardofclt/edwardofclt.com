# Agents.md - AI Agent Guidelines for Eddie Herbert's Portfolio

> **⚠️ Maintenance Notice:** This file should be kept in sync with architectural decisions and coding patterns. If you discover new patterns, make significant refactors, or change how the codebase should be approached, propose updates to this file. **Changes to Agents.md require user approval before committing.**

## Project Overview

This is a personal resume/portfolio website for Eddie Herbert, a Platform Engineering Leader. The site is built with **Vite + React + TypeScript** and follows a developer-inspired aesthetic with terminal-style navigation, purple accent colors, and decorative elements.

## Architecture Decisions

### Atomic Design Pattern

The codebase follows atomic design principles with clear separation:

```
src/
├── types/          # TypeScript interfaces
│   └── resume.ts   # All data type definitions
├── data/           # Static data (single source of truth)
│   └── resumeData.ts
├── components/
│   ├── atoms/      # Smallest reusable units (icons, logo, headers)
│   ├── molecules/  # Combinations of atoms (skill boxes, cards)
│   ├── organisms/  # Full sections (navigation, hero, footer)
│   └── index.ts    # Barrel export for clean imports
├── App.tsx         # Composition root - assembles organisms
├── App.css         # Component styles
└── index.css       # CSS variables and theme system
```

### Data Flow

1. **Resume data** lives in `src/data/resumeData.ts` - this is the single source of truth
2. **Types** in `src/types/resume.ts` ensure type safety across all components
3. **Components** receive data via props - they are stateless and presentational
4. **App.tsx** is the composition root that wires data to components

### Theming

- CSS variables defined in `src/index.css`
- Automatic dark/light mode via `prefers-color-scheme` media queries
- Key variables: `--bg-primary`, `--accent`, `--text-primary`, `--border`

## Guidelines for Future Agents

### Adding New Resume Data

1. Update the interface in `src/types/resume.ts` if adding new fields
2. Add the data to `src/data/resumeData.ts`
3. Create or update components to display the new data
4. Pass the data through App.tsx

### Creating New Components

Follow the atomic hierarchy:

| Type | When to Use | Example |
|------|-------------|---------|
| **Atom** | Single-purpose, no dependencies on other components | `SectionHeader`, `Logo` |
| **Molecule** | Combines 2-3 atoms, represents a distinct UI concept | `SkillBox`, `ExperienceCard` |
| **Organism** | Full page section, may contain molecules/atoms | `HeroSection`, `Navigation` |

**Always:**
- Export from the barrel file (`src/components/index.ts`)
- Use TypeScript props interfaces
- Keep components stateless when possible
- Receive data via props, don't import `resumeData` directly in lower-level components

### Styling Guidelines

- Use existing CSS classes from `App.css` when possible
- Follow the naming convention: `.component-name`, `.component-name-element`
- Use CSS variables for colors - never hardcode color values
- The design uses:
  - `Fira Code` for monospace/code elements
  - `Inter` for body text
  - Purple accent (`--accent`) for highlights
  - Bordered boxes with subtle backgrounds

### Common Patterns

**Section structure:**
```tsx
<section id="section-name" className="section">
  <SectionHeader title="section-name" />
  {/* Section content */}
</section>
```

**Navigation hash links:**
- All nav items use `#` prefix (e.g., `#home`, `#skills`)
- Smooth scrolling via `scrollToSection()` in App.tsx

**Icon usage:**
- Import from `src/components/atoms/Icons.tsx`
- Icons accept `size` and `className` props

### What NOT to Do

- ❌ Don't put data directly in components - use `resumeData.ts`
- ❌ Don't create new CSS files per component - use `App.css`
- ❌ Don't hardcode colors - use CSS variables
- ❌ Don't skip the barrel export when adding components
- ❌ Don't make App.tsx handle presentation logic - keep it as a composition root

### Testing Changes

After making changes:
1. Run `bun dev` to start the dev server
2. Check both dark and light mode (toggle system preference)
3. Verify responsive behavior at different viewport sizes
4. Ensure smooth scroll navigation works

## File Reference

| File | Purpose |
|------|---------|
| `src/data/resumeData.ts` | Active resume data used by the app |
| `src/types/resume.ts` | TypeScript interfaces for type safety |
| `src/components/index.ts` | Barrel export - import components from here |
| `src/index.css` | Theme variables and global styles |
| `src/App.css` | Component-specific styles |
| `src/App.tsx` | Main app composition |

## Design Philosophy

The site reflects Eddie's identity as a platform engineer:
- **Terminal-inspired** navigation with hash prefixes
- **Code bracket** logo (`<Eddie/>`)
- **Clean, minimal** aesthetic with purposeful whitespace
- **Developer-friendly** typography with monospace accents
- **Subtle decorative elements** (dot grids, corner frames) that don't distract

When making changes, preserve this developer-centric aesthetic while keeping the UI clean and professional.

## Updating This Document

This file serves as the living documentation for how AI agents should interact with this codebase. Keep it current:

**When to propose updates:**
- New architectural patterns are introduced
- Component hierarchy or data flow changes
- New tools, libraries, or conventions are adopted
- You discover edge cases or gotchas worth documenting
- Existing guidelines become outdated or incorrect

**Process:**
1. Identify the section(s) that need updating
2. Draft the proposed changes
3. **Request explicit user approval** before modifying this file
4. Only commit Agents.md changes after approval is granted

This ensures the document remains authoritative and reflects intentional decisions rather than incremental drift.
