<p align="center"><img src="https://capsule-render.vercel.app/api?type=waving&color=0:111827,100:059669&height=160&section=header&text=Node%20EventEmitter%20Lab&fontSize=30&fontColor=ffffff" alt="Node EventEmitter Lab header"/></p>
<p align="center"><img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=18&pause=1000&color=6EE7B7&center=true&vCenter=true&width=760&lines=Explore+listener+order%2C+once%2C+off+and+error+events" alt="Animated tagline"/></p>
<p align="center"><a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-059669.svg" alt="MIT"/></a> <img src="https://img.shields.io/badge/language-JavaScript-2563eb.svg" alt="JavaScript"/> <img src="https://img.shields.io/github/stars/CyberLoop-dev/node-event-emitter-lab?style=flat" alt="Stars"/> <img src="https://img.shields.io/github/last-commit/CyberLoop-dev/node-event-emitter-lab?style=flat" alt="Last commit"/></p>
<p align="center"><img src="assets/mark.svg" width="110" alt="Custom project mark"/></p>

## 🧭 Overview
A dependency-free Node.js CLI that demonstrates the built-in EventEmitter listener lifecycle and event ordering.

## ✨ Features
- 📣 Compare regular listeners with prependListener ordering
- 🔂 See how once listeners are removed after their first event
- 🧹 Remove listeners with off and handle the special error event

## 🎬 Demo
The CLI prints a labelled event trace. No hosted demo is claimed.

## 🚀 Quick Start
```bash
npm start
```

## 🧰 Tech Stack
- 🧩 Node.js built-in events module
- 🔒 Local execution with no network access
- 📦 No third-party dependencies

## 🗂️ Folder Structure
```text
node-event-emitter-lab/
├── assets/mark.svg
├── src/{demo.js,main.js}
├── test/demo.test.js
├── package.json
├── .gitignore
├── LICENSE
└── README.md
```

## 🛣️ Roadmap
- [ ] Add async listener examples
- [ ] Add a configurable listener trace

## 🤝 Contributing
Issues and pull requests are welcome. Keep output deterministic and include a focused test for new behavior.

## 📄 License
Released under the [MIT License](LICENSE).

<p align="center"><img src="https://capsule-render.vercel.app/api?type=waving&color=0:059669,100:111827&height=105&section=footer" alt="Animated wave footer"/></p>