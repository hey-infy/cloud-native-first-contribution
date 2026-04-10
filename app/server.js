// ============================================================
// cloud-native-first-contribution — server.js
// A beginner-friendly Express server to demonstrate
// cloud-native concepts (Docker + Kubernetes).
// ============================================================

// Import the Express framework
const express = require('express');

// Create an Express application instance
const app = express();

// Define the port the server will listen on.
// process.env.PORT lets Kubernetes / Docker override it if needed.
const PORT = process.env.PORT || 3000;

// ------------------------------------------------------------
// Routes
// ------------------------------------------------------------

// Root endpoint — the friendly welcome message
app.get('/', (req, res) => {
  res.send('Hello from Cloud Native 🚀');
});

// Health endpoint — used by Kubernetes liveness / readiness probes
// Returns a simple JSON object so orchestrators know the app is alive
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// ------------------------------------------------------------
// Start the server
// ------------------------------------------------------------
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
  console.log(`   Root    → GET http://localhost:${PORT}/`);
  console.log(`   Health  → GET http://localhost:${PORT}/health`);
});
