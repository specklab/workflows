---
layout: single
title: "Homelab Infrastruktur"
---

Aufbau einer virtualisierten Umgebung mit Proxmox, pfSense und Docker.

main:
  # Startseite
  - title: "🏠 Dashboard"
    url: /workflows/

  # Projekte mit Unterseiten
  - title: "📂 Projekte"
    url: /workflows/projects/
    children:
      - title: "Homelab"
        url: /workflows/projects/homelab/
      - title: "Monitoring"
        url: /workflows/projects/monitoring/

  # Playbooks (IT-Snippets)
  - title: "⚙️ Playbooks"
    url: /workflows/playbooks/
    children:
      - title: "Squid Proxy"
        url: /workflows/playbooks/squid_proxy/
      - title: "SSH Hardening"
        url: /workflows/playbooks/ssh_hardening/

  # Research (Wissenschaft/Tech-Experimente)
  - title: "🔬 Research"
    url: /workflows/research/
    children:
      - title: "Data Science"
        url: /workflows/research/datascience/
      - title: "Sensoren"
        url: /workflows/research/sensors/

  # Lebenslauf
  - title: "📄 Lebenslauf"
    url: /workflows/lebenslauf/

  # Kontaktseite
  - title: "📬 Kontakt"
    url: /workflows/kontakt/

  # Blog mit Updates
  - title: "📝 Blog"
    url: /workflows/blog/
