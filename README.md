# ☁️ cloud-native-first-contribution

> A beginner-friendly project to help you make your **first open-source contribution** in a cloud-native environment.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-18-green.svg)](https://nodejs.org)
[![Docker](https://img.shields.io/badge/Docker-ready-blue.svg)](https://docker.com)
[![Kubernetes](https://img.shields.io/badge/Kubernetes-manifests-326CE5.svg)](https://kubernetes.io)

---

## 📖 Project Overview

This project is a minimal **Node.js / Express** HTTP server that demonstrates the full cloud-native journey — from running locally to packaging with Docker to deploying on Kubernetes.

It is intentionally simple so that **first-time contributors** can focus on the contribution workflow rather than complex application logic.

---

## 🏗️ Architecture

```
Your Code (Node.js / Express)
        │
        ▼
  ┌─────────────┐
  │   Docker    │  ← Packages the app + its dependencies into a portable image
  └──────┬──────┘
         │
         ▼
  ┌─────────────────────────────────────┐
  │           Kubernetes Cluster        │
  │                                     │
  │  ┌─────────────┐  ┌─────────────┐  │
  │  │  Deployment │  │   Service   │  │
  │  │  (runs pod) │  │  (port 80)  │  │
  │  └─────────────┘  └─────────────┘  │
  └─────────────────────────────────────┘
```

| Layer | Tool | Purpose |
|---|---|---|
| Application | Node.js + Express | HTTP server with `/` and `/health` routes |
| Container | Docker (node:18-alpine) | Portable, reproducible runtime environment |
| Orchestration | Kubernetes | Manages deployment, scaling, and networking |

---

## 📁 Project Structure

```
cloud-native-first-contribution/
│
├── app/
│   └── server.js          # Express HTTP server (main application)
│
├── k8s/
│   ├── deployment.yaml    # Kubernetes Deployment manifest
│   └── service.yaml       # Kubernetes Service manifest (ClusterIP)
│
├── package.json           # Node.js project metadata & dependencies
├── Dockerfile             # Instructions to build the Docker image
├── .dockerignore          # Files excluded from the Docker build context
├── README.md              # You are here 👋
├── CONTRIBUTING.md        # How to contribute to this project
└── CODE_OF_CONDUCT.md     # Community guidelines
```

---

## 🚀 API Endpoints

| Method | Endpoint | Response |
|---|---|---|
| `GET` | `/` | `Hello from Cloud Native 🚀` |
| `GET` | `/health` | `{ "status": "ok" }` |

---

## ⚙️ Setup & Running

### Prerequisites

Make sure you have the following installed:

- [Node.js 18+](https://nodejs.org/)
- [Docker](https://docs.docker.com/get-docker/)
- [kubectl](https://kubernetes.io/docs/tasks/tools/) + a local cluster ([minikube](https://minikube.sigs.k8s.io/) or [kind](https://kind.sigs.k8s.io/))

---

### 1. Run Locally (without Docker)

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/cloud-native-first-contribution.git
cd cloud-native-first-contribution

# Install dependencies
npm install

# Start the server
npm start
```

Open your browser at [http://localhost:3000](http://localhost:3000)

Test the health endpoint:
```bash
curl http://localhost:3000/health
# → {"status":"ok"}
```

---

### 2. Build the Docker Image

```bash
# Build the image and tag it
docker build -t cloud-native-first-contribution:latest .
```

---

### 3. Run the Docker Container

```bash
# Run the container and map port 3000 on your machine to port 3000 in the container
docker run -p 3000:3000 cloud-native-first-contribution:latest
```

Open [http://localhost:3000](http://localhost:3000) — same app, now running inside Docker! 🐳

---

### 4. Deploy to Kubernetes

```bash
# Apply the Deployment (creates and manages the pod)
kubectl apply -f k8s/deployment.yaml

# Apply the Service (exposes the pod inside the cluster)
kubectl apply -f k8s/service.yaml

# Check the pod is running
kubectl get pods

# Check the service
kubectl get services
```

To access the app from your local machine, use port-forward:

```bash
kubectl port-forward service/cloud-native-service 8080:80
```

Then open [http://localhost:8080](http://localhost:8080) 🎉

---

## 🤝 Contributing

We welcome all contributions — no matter how small! Check out **[CONTRIBUTING.md](CONTRIBUTING.md)** to get started.

Look for issues labelled **`good first issue`** — they are hand-picked for first-time contributors.

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).
