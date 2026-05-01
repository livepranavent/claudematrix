# Database Rules

## Schema Management

### Migration Requirements
- All schema changes require migration scripts
- Migrations must be backward-compatible
- No destructive changes in production
- Migration naming format: `YYYYMMDDHHMMSS_description`

### Testing
- All migrations tested in staging first
- Migration rollback scripts required
- Performance tested for tables > 1M rows
- Zero-downtime requirements

## Modeling Standards

| Pattern | Requirement |
|---------|-------------|
| Primary Keys | UUID v4 (default) or sequence |
| Foreign Keys | Indexed with ON DELETE/UPDATE |
| Timestamps | Created/modified automatically |
| Soft Delete | `is_deleted` flag required |

- No joins across databases
- Materialized views require approval
- No raw SQL in application code

## Security

### Access Control
- Least privilege principle
- Row-level security mandatory
- PII fields tokenized/encrypted
- All sensitive data uses column encryption

### Query Requirements
- All queries parameterized
- No dynamic SQL
- Query complexity limit: ≤ 5 table joins
- Critical queries require explain plan

## Performance

| Metric | Target | Monitoring |
|--------|--------|------------|
| Query Time | ≤ 200ms | Datadog |
| Lock Time | ≤ 50ms | Prometheus |
| Connections | < 80% max | Custom alert |

### Optimization Rules
- All critical queries must use indexes
- Pagination required for list endpoints
- Caching layer required for frequently accessed data
- Read/write splitting for high-traffic scenarios

## Audit Requirements
- All schema changes versioned
- Change logs retained for 24 months
- All sensitive data access audited
- Automatic anomaly detection

## Tooling
- Migration validation: `rtk /migrations validate`
- Schema comparison: `rtk /db diff`
- Performance analysis: `rtk /db explain`
- Security scan: `rtk /db security`

## Failure Protocol
- Immediate migration rollback
- No schema changes during business hours
- Rollback verified before deployment
- All failures documented in `memory/bugs/database/`