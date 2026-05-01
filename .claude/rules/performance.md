# Performance Rules

## Core Metrics

| Metric | Target | Monitoring Tool |
|--------|--------|-----------------|
| Token Efficiency | ≥ 85% savings | RTK Token Monitor |
| Build Time | ≤ 60s (full build) | Datadog |
| CI/CD Throughput | ≥ 20 PRs/hr | Jenkins |
| Error Rate | ≤ 0.5% | Prometheus |

## Context Management

### Window Rules
- Never operate beyond first 80% of context window
- Critical operations require context ≥ 90% available
- Automatic context optimization triggers at 70%
- Memory limits auto-trigger cleanup at 60%

## Model Selection Strategy

| Task Type | Primary | Fallback | RTK Savings |
|-----------|---------|----------|-------------|
| Planning | Opus 4.6 | Sonnet 4.6 | 75% |
| Coding | Sonnet 4.6 | Haiku 4.5 | 82% |
| Review | Haiku 4.5 | None | 89% |
| Complex Analysis | Opus 4.6 | Sonnet 4.6 | 78% |

## Optimization Techniques

- **Token Efficiency**:
  - 85%+ of output should be actual code
  - Never include redundant explanations
  - Use compact formatting where applicable

- **Context Preservation**:
  - Memory cleanup every 30 minutes
  - Automatic archiving of completed decisions
  - Critical context tagged with `#core`

## Performance Review Process
1. `rtk /performance baseline`
2. `rtk /metrics comparison`
3. `rtk /optimization suggestions`
4. `rtk /profile summary`

## Critical Performance Paths
- All API endpoints must respond in ≤ 250ms
- 95th percentile latency ≤ 500ms
- No operations should block UI thread > 5ms
- All background tasks must have progress indicators

## Tooling Requirements
- Must use `rtk`-enabled commands
- Performance metrics automatically tracked
- Real-time token counter visible in status bar
- Historical performance data in `telemetry/`