---
layout: page
title: "SSH Hardening"
---

```yaml
- name: Harden SSH
  hosts: all
  tasks:
    - name: Ensure root login disabled
      lineinfile:
        path: /etc/ssh/sshd_config
        regexp: '^PermitRootLogin'
        line: 'PermitRootLogin no'
```
