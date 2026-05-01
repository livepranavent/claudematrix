# Documentation Rules

## Content Standards

### Quality Metrics
- All documentation must be:
  - **Scannable**: Clear headings and bullet points
  - **Actionable**: Concrete examples and code snippets
  - **Searchable**: Keyword-rich titles
  - **Complete**: 100% coverage of features

### Structure Requirements
```text
docs/
├── architecture/
│   ├── overview.md
│   ├── data-flow.md
│   └── service-diagrams/
├── runbooks/
│   ├── deployment.md
│   └── incident-response.md
├── product/
│   ├── features/
│   └── use-cases/
└── specs/
    ├── api-specs.md
    └── interface-guidelines.md
```

## Writing Guidelines

### Technical Documentation
- **Code examples** must be executable
- **Diagrams** use Mermaid or PlantUML
- **Versioning** follows semantic versioning
- **Tone**: Authoritative but approachable

### API Documentation
- **Mandatory fields**:
  - Purpose
  - Authentication
  - Request/response examples
  - Error codes
- All endpoints must have:
  - Example curl command
  - SDK usage examples

## Review Process

1. **Technical accuracy check** (automated)
2. **Readability assessment** (Flesch-Kincaid score ≥ 60)
3. **Completeness verification** (100% feature coverage)
4. **Accessibility audit** (WCAG 2.1 compliant)

## Maintenance Requirements
- **Monthly**: Verify examples still work
- **Quarterly**: Update diagrams
- **At every release**: Update version references
- All docs must include last-modified timestamp

## Special Documentation Types

| Type | Requirements |
|------|--------------|
| Runbooks | Step-by-step, with rollback procedures |
| Specifications | Formal, with test cases |
| Tutorials | Code-first, with incremental steps |
| Architecture | Diagram + explanation (no hand-waving) |

## Enforcement
- Automated checks during `rtk /docs build`
- Documentation coverage tracked in Telemetry
- Missing documentation blocks releases
- All documentation must pass `rtk /review docs` validation