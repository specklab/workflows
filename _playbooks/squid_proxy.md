---
layout: page
title: "Squid Proxy Setup"
category: "Automation"
---

```yaml
- name: Install Squid Proxy
  hosts: proxy
  tasks:
    - name: Install squid
      apt:
        name: squid
        state: present
```
