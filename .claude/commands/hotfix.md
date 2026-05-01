# /hotfix - Emergency Hotfix Command

Optimizes emergency fix operations with RTK token efficiency while ensuring controlled release of critical fixes.

## Usage Syntax
```
rtk /hotfix [target] [options]
```

## Standard Targets
| Target | Purpose | RTK Savings |
|--------|---------|-------------|
| `security` | Security vulnerability fix | 88% |
| `critical` | System-impacting bug fix | 85% |
| `data` | Data corruption fix | 82% |
| `release` | Release-blocking fix | 79% |

## Key Options

### Severity Levels
- `--critical` : Immediate deployment (bypasses normal checks)
- `--security` : Includes security-specific validation
- `--rollback` : Creates automatic rollback procedure

### Compliance Flags
- `--soc2` : Applies SOC2 emergency protocols
- `--gdpr` : Adds data protection validation
- `--fips` : Uses FIPS-compliant encryption

## Execution Flow
1. **Emergency Validation**
   - `rtk /security scan --emergency`
   - `rtk /compliance audit --emergency`
2. **Hotfix Deployment**
   - Bypasses standard build pipeline
   - Creates automatic backup of current state
   - Immediate deployment to production
3. **Post-Fix Verification**
   - Real-time monitoring of fix effectiveness
   - Automated documentation of root cause
   - System stability checks

## Example Usage
```bash
# Critical production security fix
rtk /hotfix security --critical

# Data corruption emergency fix
rtk /hotfix data --rollback --gdpr

# Release-blocking bug fix
rtk /hotfix critical --soc2
```

## Safety Controls
- **Automated rollback** if metrics degrade > 5%
- **Circuit breaker** for database operations
- **Immediate alerts** to on-call team
- **Mandatory documentation** of root cause

## Troubleshooting
- **Failed hotfix**: Check rollback procedure in `memory/emergency/`
- **Compliance failure**: Use `rtk /compliance override --reason=EMERGENCY`
- **Token limits**: Use `rtk gain` to view savings