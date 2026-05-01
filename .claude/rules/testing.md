# Testing Rules

## Coverage Requirements

- **Minimum coverage**: 85% for all code
- **Critical paths**: 100% coverage (security, auth, payment)
- **UI components**: 90% visual test coverage
- **Documentation**: 100% examples tested

## Testing Pyramid

| Level | % of Tests | Example |
|-------|------------|---------|
| Unit | 60% | Pure function tests |
| Integration | 30% | API/service interactions |
| E2E | 10% | Critical user journeys |

- **Violations** (any) block pull requests

## TDD Enforcement

### Mandatory Steps
1. Write test that fails
2. Implement minimal functionality
3. Refactor with zero test breakage

```typescript
// ✅ Valid workflow
it(' authenticates with valid token', async () => {
  // Arrange
  const token = generateValidToken();

  // Act
  const result = await authService.verify(token);

  // Assert
  expect(result).toBe(true);
});
```

## Test Structure

### AAA Pattern (Always)
```text
Arrange: Setup test state
Act: Execute operation
Assert: Verify outcome
```

### Naming Guidelines
- Should describe behavior: `it('handles expired tokens', ...)`
- No test numbers or order dependencies
- Group related tests in describe blocks

## Security Testing

| Type | Required | Tool |
|------|----------|------|
| SAST | Pre-commit | Semgrep |
| DAST | Pipeline | OWASP ZAP |
| SCA | Pre-push | Trivy |
| PenTest | Release | Manual |

- Security tests must run before any other tests
- Vulnerability findings require root cause analysis

## Performance Testing

### Requirements
- All APIs tested under load
- 100% of critical paths benchmarked
- Results must meet SLA:
  - Throughput: ≥ 1000 RPS
  - Error rate: ≤ 0.5%
  - 95th percentile latency ≤ 250ms

## Test Data Management

- Production data **never** used
- Synthetic data must match real patterns
- Test data versioned with code
- Data anonymization required for user content

## Test Execution

1. `rtk /test run --focus=security`
2. `rtk /coverage report`
3. `rtk /benchmark summary`
4. Auto-remediation for test failures

## Failure Protocol
- Immediate isolation of failing components
- No merge when tests fail
- Root cause documented in `memory/bugs/`
- All flaky tests require investigation