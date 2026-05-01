# /analyze - System Analysis Command

Optimizes analysis operations with RTK token efficiency while ensuring comprehensive diagnostic insights.

## Usage Syntax
```
rtk /analyze [target] [options]
```

## Standard Targets
| Target | Purpose | RTK Savings |
|--------|---------|-------------|
| `system` | Resource utilization | 84% |
| `dependencies` | Package analysis | 89% |
| `security` | Vulnerability scan | 86% |
| `performance` | Bottleneck identification | 82% |
| `quality` | Code health metrics | 78% |

## Key Options

### Analysis Depth
- `--shallow` : Surface-level analysis
- `--deep` : Comprehensive system analysis
- `--focal` : Targeted critical path analysis

### Specialized Modes
- `--ai` : AI-assisted pattern recognition
- `--compliance` : Regulatory-focused analysis
- `--historical` : Compare with previous baselines

## Execution Flow
1. **Data Collection**
   - `rtk /metrics baseline`
   - `rtk /system snapshot`
2. **Targeted Analysis**
   - Generates multi-dimensional analysis reports
   - Applies token-optimized filtering (RTK)
3. **Actionable Insights**
   - Presents findings in priority order
   - Includes root cause analysis where applicable

## Example Usage
```bash
# Standard system analysis
rtk /analyze system --deep --ai

# Security vulnerability focus
rtk /analyze security --compliance --historical

# Performance bottleneck identification
rtk /analyze performance --focal
```

## Analysis Criteria
- **Critical**: Immediate action required (security, stability)
- **High**: Should address within current sprint
- **Medium**: Should address within next release
- **Low**: Optional improvements

## Troubleshooting
- **Incomplete data**: Verify monitoring tools are enabled
- **False positives**: Adjust analysis thresholds
- **Analysis failures**: Check `rtk /log analyze`
- **Token limits**: Use `rtk gain` to view savings