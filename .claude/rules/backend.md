# Backend-Specific Rules

## Architecture

### Service Structure
```text
src/services/
├── [service]/
│   ├── api/
│   │   ├── routes.ts
│   │   ├── validation.ts
│   │   └── middlewares/
│   ├── domain/
│   │   ├── entities/
│   │   ├── use-cases/
│   │   └── services/
│   ├── infrastructure/
│   │   ├── repositories/
│   │   ├── persistence/
│   │   └── integrations/
│   └── index.ts
```

### Key Principles
- **Hexagonal Architecture** required
- 1 service = 1 bounded context
- No cross-service direct calls (use events or APIs)
- Domain layer must be framework-agnostic

## Data Handling

| Operation | Requirement |
|-----------|-------------|
| Input Validation | Schema-based validation + type guard |
| Data Access | Repository pattern only |
| Database | ORM forbidden for complex queries |
| Transactions | Explicit scope definition |

## Security

### Critical Requirements
- All endpoints require authentication/authorization
- Parameterized queries mandatory (no string concatenation)
- Password hashing: bcrypt (12 rounds)
- Token validation: JWK + signature verification
- Rate limiting on all public endpoints

### Secrets Management
- Never commit secrets
- Use vault-backed environment variables
- Automatic rotation every 90 days
- Audit trail for all secret accesses

## Error Handling

- **Error Classification**:
  - Client errors (400): User-input related
  - System errors (500): Service failures
  - Transient errors (503): Retry-able issues
- All errors must include machine-readable code
- No stack traces in production

## Testing

### Requirements
- 90% coverage for domain logic
- 100% coverage for security controls
- Performance tests for all APIs
- Integration tests ≥ 80% coverage

### Structure
```text
tests/
├── unit/
│   └── services/
├── integration/
│   ├── api/
│   └── database/
└── perf/
    └── stress-test/
```

## Performance

| Metric | Threshold | Monitoring |
|--------|-----------|------------|
| API Response | ≤ 500ms | Datadog |
| Error Rate | ≤ 0.1% | Prometheus |
| Concurrent Users | ≥ 10,000 | k6 |

### Optimization Rules
- Use connection pooling
- Implement cache-first strategy
- Database indexing required for all queries
- Avoid N+1 queries (use JOINs/batching)