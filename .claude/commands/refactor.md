# /refactor - Refactoring Command

Optimizes refactoring operations with RTK token efficiency while ensuring code quality improvements.

## Usage Syntax
```
rtk /refactor [target] [options]
```

## Standard Targets
| Target | Purpose | RTK Savings |
|--------|---------|-------------|
| `all` | Full codebase refactoring | 85% |
| `smells` | Code smell resolution | 89% |
| `patterns` | Pattern standardization | 82% |
| `security` | Security-focused refactoring | 88% |
| `performance` | Performance optimization | 92% |

## Key Options

### Refactoring Levels
- `--safeguard` : Preserve existing behavior
- `--aggressive` : Allow breaking changes
- `--experimental` : Test speculative improvements

### Specialized Refactorings
- `--patterns` : Apply architectural patterns
- `--style` : Enforce coding standards
- `--security` : Remove vulnerabilities
- `--performance` : Optimize critical paths

## Execution Flow
1. **Analysis Phase**
   - `rtk /quality scan`
   - `rtk /metrics code-quality`
2. **Refactoring Plan**
   - Generates step-by-step improvement roadmap
   - Prioritizes high-impact changes first
3. **Implementation**
   - Creates atomic, testable changes
   - Provides before/after comparisons
   - Applies token-optimized change tracking

## Example Usage
```bash
# Standard code quality improvements
rtk /refactor smells --safeguard

# Security-focused refactoring
rtk /refactor security --aggressive

# Pattern standardization
rtk /refactor patterns --performance --style
```

## Safety Controls
- **Pre-refactor snapshot**: Automatic backup
- **Change impact analysis**: Prevents unwanted breakage
- **Test suite validation**: Ensures no regression
- **Atomic changes**: Each step independently verifiable

## Troubleshooting
- **Unexpected breakage**: Use `--safeguard`
- **Incomplete analysis**: Run `rtk /quality scan`
- **Performance degradation**: Check impact metrics
- **Token limits**: Use `rtk gain` to view savings