# Global Development Rules

## Core Principles

1. **RTK Enforcement**
   - All development commands MUST use `rtk` prefix
   - Token efficiency metrics are tracked automatically
   - Violations block CI/CD gates

2. **Change Validation**
   - Every change must pass:
     - `rtk /diff --audit`
     - Security scan
     - Test coverage ≥ 85%
   - Automatic rollback on failure

3. **Context Awareness**
   - Never operate beyond the first 80% of the context window
   - Critical changes require **Plan Mode** activation
   - Memory limits auto-trigger optimization

4. **Multi-Agent Coordination**
   - Agents must declare dependencies before execution
   - No parallel writes to the same file
   - State changes must be idempotent

## Mandatory Workflow Steps

1. **RTK Pre-Check**
   ```bash
   rtk /validate workspace
   ```

2. **Plan Mode Activation**
   ```bash
   rtk /plan "Add user authentication"
   ```

3. **Multi-Agent Execution**
   ```bash
   rtk /agents start --all
   ```

4. **Compliance Verification**
   ```bash
   rtk /compliance audit
   ```

## Token Efficiency Standards

| Operation | Before | After |
|-----------|--------|---------|
| Git Diff | 50KB | 12KB |
| Test Suites | 294KB | 18KB |
| Build Logs | 420KB | 52KB |
| PR Reviews | 380KB | 38KB |

## Security Requirements
- No production secrets in source
- All API calls require RTK validation
- Dynamic analysis on every push
- Sensitive data patterns auto-redacted