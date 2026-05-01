# 🤖 Claude Godmode Agent Profiles

Welcome to the heart of the Claude Godmode multi-agent orchestration layer. This directory contains the configuration files for our specialized autonomous agents.

## What is an Agent Profile?
An agent profile dictates exactly how the `rtk` (Raw Token Killer) wrapper interfaces with the LLM. It defines:
- **Token constraints** (`maxContextTokens`)
- **Optimization aggression** (`rtk.optimizationLevel`)
- **Compliance mandates** (SOC2, GDPR, HIPAA)
- **Restricted commands** (e.g., blocking `git push --force`)

## The 8 Active Agents

| Agent Name | Profile JSON | Purpose | Context Window |
|------------|--------------|---------|----------------|
| **System Architect** | `architect.json` | High-level system design and validation. | 128k |
| **Enterprise Safe** | `enterprise-safe.json` | Maximum security for regulated pipelines. | 96k |
| **Security Auditor** | `security-auditor.json` | Continuous vulnerability scanning (OWASP). | 96k |
| **DevOps Orchestrator** | `devops-orchestrator.json` | CI/CD management and infrastructure coding. | 64k |
| **QA Tester** | `qa-tester.json` | Automated unit and E2E test generation. | 64k |
| **Fast Build** | `fast-build.json` | High-speed, low-latency code generation. | 64k |
| **Deep Research** | `deep-research.json` | Extensive documentation reading and RAG. | 128k |
| **Offline RTX3050** | `offline-rtx3050.json` | Local fallback orchestration. | 16k |

## Customizing an Agent
To modify an agent's behavior for your team, simply edit its respective JSON file.
1. Change `"model"` to your preferred endpoint (e.g., `claude-3-7-sonnet`).
2. Adjust `"disallowedCommands"` to fit your organizational security policy.
3. Toggle features like `"extendedThinking"` based on task complexity.

> **Pro Tip:** When executing a command, use `rtk /build --profile=security-auditor` to instantly switch context scopes.
