var store = [{
        "title": "Squid Proxy Setup",
        "excerpt":"- name: Install Squid Proxy   hosts: proxy   tasks:     - name: Install squid       apt:         name: squid         state: present  ","categories": [],
        "tags": [],
        "url": "/workflows/playbooks/squid-proxy/",
        "teaser": null
      },{
        "title": "SSH Hardening",
        "excerpt":"- name: Harden SSH   hosts: all   tasks:     - name: Disable root login       lineinfile:         path: /etc/ssh/sshd_config         regexp: '^PermitRootLogin'         line: 'PermitRootLogin no'  ","categories": [],
        "tags": [],
        "url": "/workflows/playbooks/ssh-hardening/",
        "teaser": null
      },{
        "title": "Erster Blogeintrag",
        "excerpt":"Heute starte ich mein IT Knowledge Dashboard 🚀  Hier dokumentiere ich Projekte, Forschung und Lernfortschritte.  ","categories": [],
        "tags": [],
        "url": "/workflows/2025/09/14/erster-eintrag/",
        "teaser": null
      },{
        "title": "Erster Blogeintrag",
        "excerpt":"Start meines Knowledge Dashboards 🚀  ","categories": ["general"],
        "tags": ["intro","learning"],
        "url": "/workflows/general/2025/09/15/erster-blogeintrag/",
        "teaser": null
      },{
        "title": "Homelab Projektupdate",
        "excerpt":"Update: Neue Container (Nextcloud, Portainer) in meinem Homelab.  ","categories": ["homelab"],
        "tags": ["proxmox","docker","monitoring"],
        "url": "/workflows/homelab/2025/09/16/homelab-projektupdate/",
        "teaser": null
      },{
        "title": "Lebenslauf",
        "excerpt":"📄 Lebenslauf – Dominik Speckbacher 👤 Persönliches Profil Umschüler zum Fachinformatiker Systemintegration mit Fokus auf Netzwerke, Automatisierung und IT-Sicherheit. Praxisorientiertes Lernen durch Homelab-Projekte (Proxmox, Docker, pfSense) und kontinuierliche Weiterbildung. Ziel: moderne, sichere und automatisierte IT-Infrastrukturen entwickeln und betreiben. 🎓 Ausbildung Umschulung Fachinformatiker Systemintegration GFN München • 10/2024 – 07/2026 Schwerpunkte:...","categories": [],
        "tags": [],
        "url": "/workflows/projects/lebenslauf/",
        "teaser": null
      },{
        "title": "Homelab Infrastruktur",
        "excerpt":"Aufbau einer virtualisierten Umgebung mit Proxmox, pfSense und Docker. main: # Startseite title: “🏠 Dashboard” url: /workflows/ # Projekte mit Unterseiten title: “📂 Projekte” url: /workflows/projects/ children: title: “Homelab” url: /workflows/projects/homelab/ title: “Monitoring” url: /workflows/projects/monitoring/ # Playbooks (IT-Snippets) title: “⚙️ Playbooks” url: /workflows/playbooks/ children: title: “Squid Proxy” url: /workflows/playbooks/squid_proxy/ title:...","categories": [],
        "tags": [],
        "url": "/workflows/projects/homelab/",
        "teaser": null
      },{
        "title": "Monitoring & Logging",
        "excerpt":"ELK Stack, Prometheus &amp; Grafana für Logs und Metriken.  ","categories": [],
        "tags": [],
        "url": "/workflows/projects/monitoring/",
        "teaser": null
      },{
        "title": "Netzwerk-Log Analyse",
        "excerpt":"Python, Pandas, Matplotlib für Datenanalyse von Logs.  ","categories": [],
        "tags": [],
        "url": "/workflows/research/datascience/",
        "teaser": null
      },{
        "title": "Sensor-Datenanalyse",
        "excerpt":"ESP32 + Python für Feuchtigkeitssensoren und Logging.  ","categories": [],
        "tags": [],
        "url": "/workflows/research/sensors/",
        "teaser": null
      }]
