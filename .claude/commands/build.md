# /build - Project Build Command

Optimizes build operations with RTK token efficiency while ensuring compliance with enterprise standards.

## Usage Syntax
```
rtk /build [target] [options]
```

## Standard Targets
| Target | Purpose | RTK Savings |
|--------|---------|-------------|
| `all` | Full project build | 85% |
| `frontend` | Web client assets | 87% |
| `backend` | Service binaries | 82% |
| `docker` | Container images | 78% |
| `docs` | Documentation site | 92% |

## Key Options

### Optimization Flags
- `--fast` : Uses fast-build profile (disables extended thinking)
- `--audit` : Includes security and compliance checks
- `--dry-run` : Validates without executing builds
- `--force-cache` : Skips cache validation

### Compliance Enforcement
- `--soc2` : Applies SOC2-specific build controls
- `--gdpr` : Adds data anonymization steps
- `--hipaa` : Applies healthcare compliance checks

## Execution Flow
1. **Pre-Build Validation**
   - `rtk /validate dependencies`
   - `rtk /security scan`
2. **Build Execution**
   - Uses profile-specific concurrency
   - Applies token-optimized logging
3. **Post-Build Verification**
   - `rtk /audit build-artifacts`
   - `rtk /compliance verify`

## Example Usage
```bash
# Standard build with compliance
rtk /build all --audit --soc2

# Fast rebuild during development
rtk /build frontend --fast

# Dry-run for validation
rtk /build backend --dry-run
```

## Troubleshooting
- **Cache invalidation**: Use `--force-cache`
- **Missing dependencies**: Run `rtk /validate dependencies`
- **Compliance failures**: Check `rtk /compliance report`
- **Token limits exceeded**: Use `rtk gain` to view savings