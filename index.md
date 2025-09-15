---
layout: splash
title: "Dominik Speckbacher – IT Knowledge Base"
---

# 👋 Willkommen

Umschüler zum **Fachinformatiker Systemintegration** mit Fokus auf Homelab, Netzwerke, Automatisierung & Dokumentation.

---

## 🚀 Bereiche
{% include feature_row id="dashboard" %}

---

## 📝 Letzte Updates
<ul>
  {% for post in site.posts limit:3 %}
    <li><a href="{{ post.url | relative_url }}">{{ post.title }}</a> – {{ post.date | date: "%d.%m.%Y" }}</li>
  {% endfor %}
</ul>

---

## 📊 Skills (Chart.js)
<canvas id="skillsChart" style="max-width:700px; height:360px; margin: 20px auto; display: block;"></canvas>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
const ctx = document.getElementById('skillsChart');
new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Python', 'Docker', 'Ansible', 'Networking'],
      datasets: [{
        label: 'Lernfortschritt (%)',
        data: [70, 45, 25, 60],
        backgroundColor: ['#36a2eb','#ff6384','#ffce56','#4bc0c0']
      }]
    },
    options: { scales: { y: { beginAtZero: true } } }
});
</script>

---

## 📅 Zeitstrahl (Mermaid)
````mermaid`
gantt
  title Lern- & Projektplan
  dateFormat  YYYY-MM-DD
  section Ausbildung
  Umschulung :a1, 2024-10-01, 2026-07-01
  section Projekte
  Homelab-Doku         :2025-01-01, 6M
  Bewerbungs-Portfolio :2025-09-01, 3M```
  
<script type="module"> import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs'; mermaid.initialize({ startOnLoad: true }); </script>
