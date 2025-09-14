---
layout: splash
title: "Dashboard"
---

# 👋 Willkommen bei meiner IT Knowledge Base

{% include feature_row id="dashboard" %}

---

## 📊 Lernfortschritt (Chart.js)

<canvas id="skillsChart" style="max-width:600px;"></canvas>
<script>
const ctx = document.getElementById('skillsChart');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Python', 'Docker', 'Ansible', 'Networking'],
        datasets: [{
            label: 'Lernfortschritt (%)',
            data: [70, 40, 20, 60],
            backgroundColor: ['#4caf50','#2196F3','#f44336','#9c27b0']
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: { y: { beginAtZero: true } }
    }
});
</script>

---

## 📅 Timeline (Mermaid)

```mermaid
gantt
    title Lern- & Projektplan
    dateFormat  YYYY-MM-DD
    section Ausbildung
    Umschulung :a1, 2024-10-01, 2026-07-01
    section Projekte
    Homelab-Doku   :2025-01-01, 6M
    Bewerbungs-Portfolio :2025-09-01, 3M
```
