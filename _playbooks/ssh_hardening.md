---
layout: single
title: "SSH Hardening"
---

```yaml
- name: Harden SSH
  hosts: all
  tasks:
    - name: Disable root login
      lineinfile:
        path: /etc/ssh/sshd_config
        regexp: '^PermitRootLogin'
        line: 'PermitRootLogin no'
```
