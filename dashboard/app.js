// Mock data fallback in case local fetch fails due to CORS on file:// protocol
const MOCK_METRICS = {
    "organization": "Pranav Enterprises",
    "environment": "Production",
    "period": "Last 30 Days",
    "token_optimization": {
        "average_savings_percent": 86.4,
        "tokens_saved_millions": 42.8,
        "cost_savings_usd": 1284.00,
        "cache_hit_rate": "92.1%"
    },
    "time_recovery": {
        "hours_saved": 225,
        "equivalent_fte": 1.4,
        "pr_review_reduction_percent": 82,
        "average_pr_review_time_mins": 8.4
    },
    "agents_activity": {
        "total_agents": 8,
        "tasks_completed": 1432,
        "autonomous_commits": 312,
        "security_vulnerabilities_prevented": 47
    },
    "compliance": {
        "soc2_violations_detected": 0,
        "gdpr_checks_passed": "100%",
        "audit_logs_generated": 1432
    },
    "system_health": {
        "uptime_percent": 99.998,
        "average_latency_ms": 142,
        "context_window_utilization_percent": 85.3
    }
};

// Counter animation utility
function animateValue(obj, start, end, duration, formatStr = '') {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        
        // Easing function (easeOutQuart)
        const easeProgress = 1 - Math.pow(1 - progress, 4);
        const currentVal = (progress * (end - start) + start).toFixed(Number.isInteger(end) ? 0 : 1);
        
        obj.innerHTML = currentVal + formatStr;
        
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Function to populate dashboard
function populateDashboard(data) {
    // Hero Metrics
    animateValue(document.getElementById('tokens-saved'), 0, data.token_optimization.tokens_saved_millions, 2000, 'M');
    animateValue(document.getElementById('savings-percent'), 0, data.token_optimization.average_savings_percent, 2000);
    animateValue(document.getElementById('cost-savings'), 0, data.token_optimization.cost_savings_usd, 2000);
    animateValue(document.getElementById('hours-saved'), 0, data.time_recovery.hours_saved, 2000);
    animateValue(document.getElementById('fte-equivalent'), 0, data.time_recovery.equivalent_fte, 2000);

    // Agent Stats
    document.getElementById('active-agents').textContent = data.agents_activity.total_agents;
    animateValue(document.getElementById('tasks-completed'), 0, data.agents_activity.tasks_completed, 2000);
    animateValue(document.getElementById('autonomous-commits'), 0, data.agents_activity.autonomous_commits, 2000);

    // Compliance
    document.getElementById('soc2-violations').textContent = data.compliance.soc2_violations_detected;
    document.getElementById('gdpr-passed').textContent = data.compliance.gdpr_checks_passed;
    animateValue(document.getElementById('vulns-prevented'), 0, data.agents_activity.security_vulnerabilities_prevented, 2000);

    // Impact
    document.getElementById('pr-review-time').textContent = data.time_recovery.average_pr_review_time_mins + 'm';
    animateValue(document.getElementById('pr-review-reduction'), 0, data.time_recovery.pr_review_reduction_percent, 2000);
    document.getElementById('cache-hit-rate').textContent = data.token_optimization.cache_hit_rate;
    document.getElementById('context-utilization').textContent = data.system_health.context_window_utilization_percent + '%';
}

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    // Attempt to fetch real telemetry data
    fetch('../telemetry/production-metrics.json')
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.json();
        })
        .then(data => {
            console.log("Loaded real telemetry data");
            populateDashboard(data);
        })
        .catch(error => {
            console.log("Using fallback mock data (likely due to file:// CORS)", error);
            populateDashboard(MOCK_METRICS);
        });
});
