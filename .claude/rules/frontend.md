# Frontend-Specific Rules

## Design Quality

### Anti-Template Policy
- Never ship generic template-looking UI
- Ban default card grids, uniform spacing, stock hero sections
- Frontend must show intentional design with at least 4 of:
  - Clear hierarchy through scale contrast
  - Intentional spacing rhythm
  - Depth through layering
  - Typography with character
  - Semantic color usage

## Component Architecture

### Structure
```text
src/components/
├── feature/
│   ├── [Component].tsx
│   ├── variants/
│   ├── hooks/
│   └── styles.css
└── shared/
    ├── Button/
    │   ├── index.ts
    │   └── styles.css
```

### Quality Gates
- Component max: 200 lines
- No deep nesting (>4 levels)
- All components have 3+ visual states
- Animation properties must be compositor-friendly

## Performance

| Metric | Target | Tool |
|--------|--------|------|
| LCP | ≤ 2.5s | Lighthouse |
| INP | ≤ 200ms | Web Vitals |
| CLS | ≤ 0.1 | Web Vitals |

- CSS must use design token variables
- Images require explicit dimensions
- AVIF/WebP with fallbacks
- Critical CSS inlined

## Security

### CSP Rules
- Nonce-based CSP required
- No 'unsafe-inline' for scripts
- All remote resources require SRI
- Content-Security-Policy header must be configured

### XSS Prevention
- No innerHTML/dangerouslySetInnerHTML
- Strict DOM sanitization
- User content must go through sanitizer

## Workflow

1. `rtk /design review` (for new components)
2. `rtk /performance audit`
3. `rtk /security scan`
4. Component documentation required