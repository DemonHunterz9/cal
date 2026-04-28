# Client-Server Architecture Calculator

A distributed web service demonstrating real client-server communication with a Node.js/Express backend and HTML/CSS/JS frontend.

## 📋 Assignment Requirements Met

| Component | Status | Description |
|-----------|--------|-------------|
| **Web Service (Backend)** | ✅ Done | Node.js/Express server on port 5001 |
| **Client Application** | ✅ Done | HTML/CSS/JS with real HTTP requests |
| **Client-Server Communication** | ✅ Done | JSON over HTTP POST |

## 🚀 How to Run

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Server
```bash
npm start
```
Server will run at `http://localhost:5001`

### 3. Open the Client
Open `main.html` in your browser (or use Live Server).

## 📡 API Endpoints

| Endpoint | Method | Request Body | Response |
|----------|--------|--------------|----------|
| `/add` | POST | `{ "a": number, "b": number }` | `{ "result": number, "operation": "add" }` |
| `/subtract` | POST | `{ "a": number, "b": number }` | `{ "result": number, "operation": "subtract" }` |
| `/multiply` | POST | `{ "a": number, "b": number }` | `{ "result": number, "operation": "multiply" }` |
| `/divide` | POST | `{ "a": number, "b": number }` | `{ "result": number, "operation": "divide" }` |

## 🔧 Project Structure

```
simple/
├── main.html      # Client (UI + HTTP requests)
├── style.css      # Styling
├── server.js      # Express backend server
├── package.json   # Node.js dependencies
└── README.md      # This file
```

## 💡 Key Concepts Demonstrated

- **REST API Design** — Proper HTTP methods, JSON request/response
- **Client-Server Architecture** — Real network communication
- **Async/Await** — Non-blocking JavaScript for API calls
- **Error Handling** — Network errors, server errors, division by zero

## ⚠️ Important Notes

1. **Server must be running** before using the client
2. If server is not running, client shows "Connection Error"
3. The client now makes **real fetch() calls** to `http://localhost:5001`