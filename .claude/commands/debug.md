# /debug - Development Debugging Command

Optimizes debugging operations with RTK token efficiency while ensuring comprehensive diagnostics.

## Usage Syntax
```
rtk /debug [target] [options]
```

## Standard Targets
| Target | Purpose | RTK Savings |
|--------|---------|-------------|
| `all` | Full stack debugging | 78% |
| `frontend` | Client-side diagnostics | 81% |
| `backend` | Service diagnostics | 75% |
| `database` | Query analysis | 68% |
| `network` | Traffic monitoring | 59% |

## Key Options

### Diagnostics Levels
- `--verbose` : Full diagnostics output
- `--trace` : Includes stack traces
- `--analyze` : Auto-performs root cause analysis
- `--profile` : CPU/memory profiling

### Specialized Tools
- `--security` : Includes security diagnostics
- `--performance` : Adds performance profiling
- `--network` : Captures network traffic

## Execution Flow
1. **Initial Diagnostics**
   - `rtk /system check`
   - `rtk /logs analyze`
2. **Targeted Debugging**
   - Generates focused diagnostic reports
   - Applies token-optimized filtering (RTK)
3. **Actionable Results**
   - Presents root causes in priority order
   - Includes auto-generated fixes where possible

## Example Usage
```bash
# Standard debugging session
rtk /debug backend --analyze --security

# Network diagnostics
rtk /debug network --profile --security

# Performance analysis
rtk /debug all --performance --trace
```

## Troubleshooting
- **No diagnostics**: Check system permissions
- **Missing data**: Verify monitoring tools
- **False positives**: Adjust diagnostic thresholds
- **Token limits**: Use `rtk gain` to view savings