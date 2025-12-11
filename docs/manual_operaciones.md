groups:
  - name: examples
    rules:
      - alert: BackendDown
        expr: up{job="backend"} == 0
        for: 1m
        labels:
          severity: page
        annotations:
          summary: "Backend appears down"
