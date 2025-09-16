---
layout: single
title: "Squid Proxy Setup"
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
