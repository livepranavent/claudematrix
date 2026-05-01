# Security Rules

## Mandatory Scans
- **Pre-commit**: SAST scan with Semgrep
- **Pre-push**: Dependency scan with Trivy
- **Pipeline**: DAST scan via OWASP ZAP
- **Release**: Penetration testing

## Secret Management

### Requirements
- All secrets must use `rtk /secrets` interface
- Rotation rules:
  - API keys: 90 days
  - Database credentials: 180 days
  - TLS certificates: 365 days
- No static secrets in code

### Forbidden Patterns
```ts
// ❌ Never do this
const apikey = "cg_12345678";

// ✅ Correct approach
const apikey = process.env.API_KEY;
```

## Authentication

### Standards
- JWT with PS256 algorithm
- Short-lived tokens (≤ 15m)
- Refresh tokens encrypted at rest
- Revocation list for compromised tokens

### Requirements
- All endpoints require authentication
- Role-based access control (RBAC)
- Context-aware authorization
- No session fixation patterns

## Data Protection

| Classification | Handling |
|----------------|----------|
| PII | Tokenization + AES-256 |
| Financial | FIPS-140 compliant modules |
| Health | HIPAA-specific encryption |
| Temporary | In-memory only |

- All sensitive data requires double encryption
- No raw data in logs or metrics
- Data retention period must be defined

## Vulnerability Response

### Timeline
- Critical: 24 hours from discovery
- High: 72 hours
- Medium: 7 days
- Low: 30 days

### Process
1. Create security ticket with `rtk /security ticket`
2. Isolate affected components
3. Apply fix with emergency patch
4. Retest and verify
5. Update runbooks

## Compliance
- GDPR: Right to erasure in ≤ 72h
- SOC2: Quarterly audit logs
- PCI: Network segmentation for payment data
- All security findings require documentation

## Penetration Testing
- Monthly automated scans
- Quarterly manual tests
- Critical infrastructure: bi-weekly
- External testing by approved vendors only

## Monitoring
- Suspicious activity triggers immediate alert
- Login pattern anomalies analyzed in real-time
- All security events retained for 36 months
- False positive rate must be ≤ 5%