# Testing & Pre-commit Hooks

This project enforces code quality by running **unit tests automatically before every commit**.

---

## 🧪 Unit Testing with Jest

* All unit tests are written using **Jest**
* Tests can be executed manually using:

```bash
npm run jest
```

* The test suite validates core business logic and ensures changes do not break existing functionality.

---

## 🪝 Pre-commit Hook with Husky

**Husky** is used to add a Git **pre-commit hook** that runs the Jest test suite automatically.

### Why this is used

* Prevents committing broken or failing code
* Ensures all commits pass unit tests
* Improves overall code reliability and team confidence

### How it works

* On every `git commit`, Husky triggers the **pre-commit hook**
* The pre-commit file executes **all commands written inside it, sequentially**, before the commit is created
* In this project, the hook runs:

```bash
npm run jest
```

* If all commands **succeed** → commit proceeds ✅
* If **any command fails** → commit is blocked ❌

---

## 📄 Pre-commit Hook Configuration

```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npm run jest
```

This ensures only tested and verified code is allowed into the repository.

---

## ✅ Summary

* Jest ensures reliable unit testing
* Husky enforces testing at commit time
* No untested code reaches version control
