const PROJECTS = [
  {
    id: "llm-platform",
    featured: true,
    title: "Production LLM Inference & Monitoring Platform",
    company: "Revent Labs · 2025 – Present",
    summary:
      "Built organization-wide AI platform infrastructure with LiteLLM and Phoenix across 5+ applications on AWS ECS.",
    tags: ["LiteLLM", "Phoenix", "ECS", "GitLab CI/CD", "Grafana"],
    impact: "Enabled monitored, repeatable AI releases across the org",
    diagram: [
      ["Apps", "→", "LiteLLM", "→", "Models"],
      ["Phoenix", "←", "Traces / Metrics", "←", "CloudWatch"],
    ],
    problem:
      "Engineering teams needed a reliable way to run LLM workloads in production with observability, cost control, and repeatable deployments.",
    solution: [
      "Deployed LiteLLM as the inference gateway for centralized routing, auth, and model management.",
      "Integrated Phoenix for LLM tracing, usage tracking, and production debugging.",
      "Containerized services on AWS ECS with GitLab CI/CD for automated releases.",
      "Added CloudWatch and Grafana dashboards for health monitoring and incident detection.",
    ],
    role: "Platform owner — architecture, deployment automation, runbooks, and production support.",
  },
  {
    id: "devsecops",
    title: "Secure CI/CD for AI Application Deployment",
    company: "Revent Labs · 2025 – Present",
    summary:
      "GitLab CI/CD with SonarQube quality gates, Semgrep, Trivy, and DefectDojo for SOC2-ready releases.",
    tags: ["SonarQube", "Semgrep", "Trivy", "DefectDojo", "GitLab CI/CD"],
    impact: "~40% reduction in high-risk production vulnerabilities",
    diagram: [["Build", "→", "Scan", "→", "Gate", "→", "Deploy"]],
    problem:
      "Production releases needed automated security enforcement without slowing down AI product delivery.",
    solution: [
      "Designed staged build → scan → deploy pipelines with promotion gates.",
      "Deployed SonarQube and blocked releases on quality gate failures.",
      "Embedded Semgrep, Trivy, and container scans for Critical/High findings.",
      "Centralized vulnerability tracking in DefectDojo with Azure SSO.",
    ],
    role: "Pipeline architect and DevSecOps lead for release security controls.",
  },
  {
    id: "eks-platform",
    title: "Production Kubernetes Platform on EKS",
    company: "Flutterwave · 2023 – 2025",
    summary:
      "Operated Amazon EKS for the Send Money platform with Terraform, GitLab CI/CD, and full observability stack.",
    tags: ["EKS", "Terraform", "Helm", "Prometheus", "Grafana", "Loki"],
    impact: "99.9%+ uptime on business-critical fintech workloads",
    diagram: [["GitLab CI", "→", "EKS", "→", "Send Money"], ["Prometheus", "→", "Grafana / Loki"]],
    problem:
      "A high-traffic fintech platform required stable Kubernetes operations, faster releases, and strong incident visibility.",
    solution: [
      "Managed EKS cluster operations including deployments, scaling, and troubleshooting.",
      "Automated infrastructure provisioning with Terraform.",
      "Built GitLab CI/CD pipelines that reduced release cycle time by ~40%.",
      "Deployed Prometheus, Grafana, and Loki for metrics, dashboards, and log correlation.",
    ],
    role: "Primary DevOps engineer for EKS platform reliability and release automation.",
  },
  {
    id: "azure-migration",
    title: "AWS to Azure Platform Migration",
    company: "Flutterwave · 2023 – 2025",
    summary:
      "Supported multi-cloud migration to Azure with AKS, APIM, VNet, WAF, and Front Door.",
    tags: ["AKS", "APIM", "Azure WAF", "Front Door", "VNet"],
    impact: "Expanded platform resilience across AWS and Azure",
    diagram: [["AWS Workloads", "→", "Migration", "→", "AKS / APIM"]],
    problem:
      "The organization needed to extend platform capabilities to Azure while maintaining security and operational standards.",
    solution: [
      "Supported migration planning and execution for core platform components.",
      "Configured AKS clusters, APIM gateways, and secure VNet architecture.",
      "Applied WAF and Front Door controls for edge security and traffic management.",
      "Aligned operational practices with existing Kubernetes and CI/CD standards.",
    ],
    role: "DevOps engineer supporting migration design, implementation, and hardening.",
  },
  {
    id: "ecs-migration",
    title: "Zero-Downtime EC2 to ECS Migration",
    company: "Revent Labs · 2025 – Present",
    summary:
      "Led containerization and migration from EC2 to ECS with Terraform and Nginx frontends.",
    tags: ["ECS", "Terraform", "Nginx", "Lambda", "EventBridge"],
    impact: "~30% scalability improvement with zero downtime",
    diagram: [["EC2", "→", "ECS + Nginx", "→", "Global LB"]],
    problem:
      "Legacy EC2 deployments limited scalability and made releases harder to standardize.",
    solution: [
      "Architected ECS-based deployment model with Terraform-managed infrastructure.",
      "Planned and executed zero-downtime traffic cutover.",
      "Standardized release patterns with CI/CD and observability hooks.",
      "Improved platform elasticity for growing application demand.",
    ],
    role: "Migration lead — architecture, execution, and post-migration hardening.",
  },
  {
    id: "slack-bot",
    title: "Self-Service DevOps Automation (Slack Bot)",
    company: "Flutterwave · 2023 – 2025",
    summary:
      "Python Slack bot to auto-create GitLab repos with standard CI/CD templates and branch rules.",
    tags: ["Python", "Slack API", "GitLab", "Automation"],
    impact: "Faster onboarding and consistent CI/CD across teams",
    diagram: [["Slack", "→", "Bot", "→", "GitLab Repo + CI"]],
    problem:
      "New service onboarding created a DevOps bottleneck and inconsistent repository standards.",
    solution: [
      "Built a Python Slack bot integrated with GitLab APIs.",
      "Automated repo creation with naming conventions and protected branches.",
      "Shipped default .gitlab-ci.yml templates for day-one pipeline readiness.",
      "Reduced manual setup work for engineering teams.",
    ],
    role: "Developer experience automation — design, build, and rollout.",
  },
];

const EXPERIENCE = [
  {
    company: "Revent Labs",
    role: "DevOps Lead / MLOps",
    period: "Jun 2025 – Present",
    location: "Indore, India",
    highlights: [
      "Lead a team of 4–6 engineers on AI platform and multi-cloud operations",
      "Own LiteLLM/Phoenix production infra, ECS migrations, and secure CI/CD",
      "Drive P0/P1 incident response, RCA, and platform hardening",
    ],
  },
  {
    company: "Flutterwave",
    role: "DevOps Engineer II",
    period: "Nov 2023 – Jun 2025",
    location: "Gwalior, India",
    highlights: [
      "Operated Amazon EKS for Send Money with 99.9%+ uptime",
      "Automated infra with Terraform and GitLab CI/CD",
      "Supported AWS to Azure migration and observability stack rollout",
    ],
  },
  {
    company: "Legit Bytes",
    role: "DevOps Engineer",
    period: "Jan 2022 – Oct 2023",
    location: "Remote",
    highlights: [
      "Built Jenkins CI/CD and Kubernetes deployment pipelines",
      "Automated configuration with Ansible and Python/Bash scripting",
      "Managed AWS infrastructure for HA and security",
    ],
  },
];

const CERTIFICATIONS = [
  {
    name: "RHCSA",
    fullName: "Red Hat Certified System Administrator",
    issuer: "Red Hat",
    status: "Active",
    year: "Certified",
  },
  {
    name: "CKA",
    fullName: "Certified Kubernetes Administrator",
    issuer: "CNCF / Linux Foundation",
    status: "In progress",
    year: "Target 2026",
  },
  {
    name: "AWS SAA",
    fullName: "AWS Solutions Architect Associate",
    issuer: "Amazon Web Services",
    status: "Planned",
    year: "Target 2026",
  },
];

const HOW_I_WORK = [
  {
    title: "IaC-first operations",
    description:
      "Production changes go through Terraform, pipelines, and review — not manual console clicks.",
  },
  {
    title: "Security in the pipeline",
    description:
      "SonarQube, Semgrep, and Trivy gates block risky releases before they reach production.",
  },
  {
    title: "Reliability with ownership",
    description:
      "On-call, incident response, RCA, and runbooks — with measurable uptime and MTTR targets.",
  },
  {
    title: "Enable engineering teams",
    description:
      "Self-service automation (repos, CI templates, standards) so developers ship faster safely.",
  },
];

const SKILLS = [
  {
    title: "Cloud & Platforms",
    items: ["AWS EKS/ECS/Lambda", "Azure AKS/APIM", "GCP GKE", "VPC/VNet", "IAM"],
  },
  {
    title: "Containers & Orchestration",
    items: ["Kubernetes", "Helm", "Docker", "ECS", "GitOps"],
  },
  {
    title: "IaC & Automation",
    items: ["Terraform", "Ansible", "AWS CDK", "Python", "Bash", "PowerShell"],
  },
  {
    title: "CI/CD & Quality",
    items: ["GitLab CI/CD", "Jenkins", "SonarQube", "Argo CD", "GitHub Actions"],
  },
  {
    title: "Observability & Reliability",
    items: ["Prometheus", "Grafana", "Loki", "CloudWatch", "Incident Response"],
  },
  {
    title: "Security & MLOps",
    items: ["DevSecOps", "Trivy", "Semgrep", "LiteLLM", "Phoenix", "SOC2/ISO27001"],
  },
];
