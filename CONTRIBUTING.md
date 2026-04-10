# 🤝 Contributing to cloud-native-first-contribution

Thank you for your interest in contributing! 🎉
This guide will walk you through making your **very first open-source contribution** — step by step.

No contribution is too small. Fixing a typo, improving a comment, or updating documentation all count!

---

## 🧭 Quick Overview

```
Fork → Clone → Branch → Change → Commit → Push → Pull Request
```

---

## Step 1 — Fork the Repository

A **fork** is your own personal copy of the project on GitHub.

1. Go to the project page on GitHub.
2. Click the **Fork** button in the top-right corner.
3. GitHub creates a copy under your account: `https://github.com/YOUR_USERNAME/cloud-native-first-contribution`

---

## Step 2 — Clone Your Fork Locally

Cloning downloads the repository to your computer.

```bash
git clone https://github.com/YOUR_USERNAME/cloud-native-first-contribution.git
cd cloud-native-first-contribution
```

Add the original repository as `upstream` so you can stay up to date:

```bash
git remote add upstream https://github.com/ORIGINAL_OWNER/cloud-native-first-contribution.git
```

---

## Step 3 — Create a New Branch

Never work directly on `main`. Always create a dedicated branch for your change.

Branch names should describe what you are doing:

```bash
# Examples
git checkout -b fix/typo-in-readme
git checkout -b feature/add-contributors-list
git checkout -b docs/improve-setup-steps
```

---

## Step 4 — Make Your Changes

Open the project in your favourite editor and make your changes.

Some ideas for a first contribution:
- Fix a typo in any `.md` file
- Add a comment to `app/server.js`
- Improve the setup instructions in `README.md`
- Add a new route to the Express server (e.g. `GET /version`)

---

## Step 5 — Commit Your Changes

A good commit message is short, clear, and uses the present tense.

```bash
# Stage your changes
git add .

# Commit with a clear message
git commit -m "docs: fix typo in README setup section"
```

**Commit message format** (optional but appreciated):

```
type: short description

Types: feat, fix, docs, chore, refactor
```

---

## Step 6 — Push to Your Fork

```bash
git push origin your-branch-name
```

---

## Step 7 — Open a Pull Request

1. Go to your fork on GitHub.
2. Click **"Compare & pull request"** (GitHub usually shows this automatically).
3. Fill in the PR template:
   - **What** did you change?
   - **Why** did you make this change?
4. Click **"Create pull request"** ✅

A maintainer will review your PR and may leave comments. Don't worry — feedback is part of the process!

---

## 🏷️ Good First Issues

Not sure where to start? Look for issues labelled:

- **`good first issue`** — perfect for first-time contributors
- **`documentation`** — improve docs, no code required
- **`help wanted`** — the maintainers would love community help here

---

## ✅ Contribution Checklist

Before submitting your PR, make sure:

- [ ] Your branch is up to date with `main`
- [ ] Your changes work locally (`npm start`)
- [ ] Commit messages are clear and descriptive
- [ ] You have not committed `node_modules/`

---

## 💬 Need Help?

Open an issue with the **`question`** label and we will be happy to help!

Thank you for contributing — you are awesome! 🚀
