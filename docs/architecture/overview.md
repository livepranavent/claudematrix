# Claude Godmode Workspace - Architecture Overview

## System Context
The Claude Godmode Workspace is designed to wrap existing AI coding agent interactions (specifically Claude Code via the RTK wrapper) in a deterministic, SOC2-compliant orchestration layer. This ensures that every AI prompt is pre-filtered, optimized for token usage, and securely executed.

## Core Components

### 1. RTK Optimization Layer
At the core of the workspace is the RTK (Raw Token Killer) wrapper. 
- **Token Compression:** Uses semantic reduction to strip out non-essential boilerplate before passing context to the LLM.
- **Cache Maxing:** Prefetches frequently used ASTs to ensure ~90% cache hit rates on repetitive tasks.

### 2. Multi-Agent Orchestrator
Defined in `.claude/profiles/`, the orchestration layer dynamically switches between specialized prompts:
- **Fast Build (`fast-build.json`)**: High-speed, low-latency code generation.
- **Enterprise Safe (`enterprise-safe.json`)**: Enforces FIPS encryption checks and data redaction.
- **Security Auditor (`security-auditor.json`)**: Dedicated pipeline for scanning PR diffs against OWASP top 10.

### 3. Telemetry Engine
Located in `/telemetry`, this module silently logs API interactions, token consumption, and dollar costs, aggregating them into the `production-metrics.json` file to power the dynamic dashboard.

## Data Flow
1. Developer runs `rtk /build`.
2. Workspace pre-hooks intercept the command and inject the context from `.claude/commands/build.md`.
3. The selected profile restricts or expands context.
4. AI response is parsed, SOC2 compliance rules are verified, and the code is written to disk.
5. Telemetry is updated via a post-hook.
