# /ship - Deployment Command

Optimizes deployment operations with RTK token efficiency while ensuring compliance with enterprise standards.

## Usage Syntax
```
rtk /ship [environment] [options]
```

## Standard Environments
| Environment | Purpose | RTK Savings |
|-------------|---------|-------------|
| `staging` | Pre-production validation | 83% |
| `production` | Live deployment | 87% |
| `canary` | Gradual rollout | 82% |
| `preview` | PR-based testing | 79% |

## Key Options

### Deployment Controls
- `--no-autofix` : Disables automatic remediation
- `--skip-tests` : Bypasses test execution
- `--dry-run` : Validates without actual deployment
- `--force` : Ignores non-critical failures

### Compliance Flags
- `--soc2` : Applies SOC2-specific deployment controls
- `--gdpr` : Enforces data protection requirements
- `--fips` : Uses FIPS-compliant encryption

## Execution Flow
1. **Pre-Deployment Checklist**
   - `rtk /validate security`
   - `rtk /compliance audit`
   - `rtk /traffic estimate`
2. **Deployment Execution**
   - Uses profile-specific concurrency
   - Applies rolling updates
   - Generates token-optimized status reports (RTK)
3. **Post-Deployment Verification**
   - `rtk /health check`
   - `rtk /metrics baseline`
   - `rtk /compliance verify`

## Example Usage
```bash
# Standard production deployment
rtk /ship production --soc2

# Canary deployment with traffic
rtk /ship canary --traffic=10%

# Dry-run for validation
rtk /ship staging --dry-run
```

## Safety Controls
- **Auto-rollback** on critical failures
- **Circuit breaker** if error rate > 0.5%
- **Readiness checks** before traffic routing
- **Zero-downtime** guarantees for customer data

## Troubleshooting
- **Failed deployment**: Check `rtk /log deploy`
- **Rollback not triggered**: Verify health check configuration
- **Compliance failures**: Review `rtk /compliance report`
- **Token limits exceeded**: Use `rtk gain` to view savings