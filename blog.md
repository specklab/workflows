---
layout: home
title: "Blog & Updates"
permalink: /blog/
---

# 📝 Blog & Updates

Hier veröffentliche ich meine **Lernfortschritte, Projektnotizen und Updates**.  
Die neuesten Beiträge findest du direkt unten:

---

{% for post in site.posts %}
- [{{ post.title }}]({{ post.url | relative_url }})  
  *{{ post.date | date: "%d.%m.%Y" }}*
{% endfor %}
