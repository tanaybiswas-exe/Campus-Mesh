# 🌐 Campus Mesh Pro

> **Zero-Internet Local Real-Time Communication & File Sharing for Campus Networks**

**Campus Mesh Pro** is a lightweight, real-time local chat and file-sharing application engineered for offline or restricted local networks—such as university labs, study groups, dormitories, and mobile hotspot environments. It combines a high-speed Node.js + Express + Socket.io backend with a responsive, dark/light-mode web interface and client-side IndexedDB persistence.

---

## ✨ Key Features

* 🔒 **PIN-Protected Rooms:** Create or join isolated chat rooms using a custom Room Code and a 4-digit PIN with real-time server-side PIN verification.
* 📷 **Instant QR Invite & Camera Scan:** Generate a room invite QR code with one click, or use the built-in camera QR scanner to automatically fill room credentials and join.
* 👥 **Live Member Tracking:** View active room participants and live member counts with real-time join/leave updates and system alerts.
* 💬 **Real-Time Messaging & Media Sharing:** Send instant text messages, reply with quoted context, share files and images (up to 50 MB), see live typing indicators, and react to messages with emojis (`❤️`, `👍`, `😂`, `🔥`).
* 💾 **Local Chat Persistence & Controls:** Automatically store chat history locally in the browser via IndexedDB, clear local history on demand, or terminate a room for all connected users.
* 🌓 **Adaptive Dark / Light Mode:** Switch seamlessly between sleek dark mode and clean light mode interfaces.

---

## 🛠️ Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Backend** | Node.js, Express, Socket.io (50 MB payload support) |
| **Frontend** | HTML5, CSS3, Vanilla JavaScript, IndexedDB |
| **Utilities** | `qrcodejs` (QR Generation), `html5-qrcode` (Camera QR Scanner) |

---

## 📁 Project Structure

```text
campus-mesh/
├── public/
│   └── index.html      # Complete UI, QR generator/scanner, & IndexedDB logic
├── server.js           # Express + Socket.io server & room/user state manager
├── package.json        # Project metadata and npm dependencies
└── README.md           # Project documentation
```

---

## 🚀 Quick Start (Local Network)

### 1. Prerequisites
Ensure you have **Node.js** installed on your host machine.

### 2. Installation
Clone the repository and install the required dependencies:

```bash
git clone [https://github.com/tanaybiswas-exe/campus-mesh.git](https://github.com/tanaybiswas-exe/campus-mesh.git)
cd campus-mesh
npm install express socket.io
```

### 3. Start the Server
Run the Node.js server:

```bash
node server.js
```

### 4. Connect & Chat
* **On the Host Device:** Open your browser and navigate to `http://localhost:3000`
* **On Connected Devices (Same Wi-Fi / Hotspot):** Open the local IPv4 address displayed in your terminal (e.g., `http://192.168.x.x:3000`) or scan the generated Room QR code.

---

## 📱 Mobile & Standalone Deployment

* **Mobile Hotspot Hosting:** Run the server directly on an Android device using Termux (`pkg install nodejs`) and turn on your mobile hotspot so nearby peers can connect without internet access.
* **Native Android APK Embedding:** Wrap the web interface inside an Android `WebView` paired with `nodejs-mobile-android` to bundle the Node.js server directly inside a standalone APK.

---

## 👨‍💻 Author

**Tanay Biswas Bandhan**  
Department of Software Engineering (ID: `253-35-094`)  
Daffodil International University  
GitHub: [@tanaybiswas-exe](https://github.com/tanaybiswas-exe)
