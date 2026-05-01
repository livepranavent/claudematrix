# /review - Code Review Command

Optimizes code review operations with RTK token efficiency while ensuring comprehensive quality assessment.

## Usage Syntax
```
rtk /review [target] [options]
```

## Standard Targets
| Target | Purpose | RTK Savings |
|--------|---------|-------------|
| `pull-request` | Comprehensive PR review | 82% |
| `code` | File/directory review | 79% |
| `security` | Security-focused review | 85% |
| `compliance` | Regulatory compliance | 76% |
| `performance` | Performance assessment | 88% |

## Key Options

### Review Levels
- `--basic` : Core quality checks
- `--advanced` : Includes design patterns and architecture
- `--comprehensive` : Full analysis with security and compliance

### Specialized Reviews
- `--ai` : AI-specific code patterns
- `--security` : OWASP Top 10 focus
- `--accessibility` : WCAG 2.1 compliance
- `--performance` : Critical path optimization

## Execution Flow
1. **Initial Analysis**
   - `rtk /metrics code-quality`
   - `rtk /security scan`
2. **Targeted Review**
   - Generates focused review reports
   - Applies token-optimized filtering
3. **Actionable Results**
   - Severity-ranked issue list
   - Auto-suggests fixes for common issues
   - Compliance verification

## Example Usage
```bash
# Standard PR review
rtk /review pull-request --comprehensive --security

# Security-focused review
rtk /review code --security --advanced

# Performance review
rtk /review performance --ai --accessibility
```

## Review Criteria
- **Critical**: Blocks merge (security issues)
- **High**: Must fix before production
- **Medium**: Should fix before release
- **Low**: Optional improvements

## Troubleshooting
- **Incomplete reviews**: Ensure code analysis tools are installed
- **False positives**: Adjust linter rules
- **Missing patterns**: Update review templates
- **Token limits**: Use `rtk gain` to view savings