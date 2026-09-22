# 🎙️ Text-to-Speech Application

> A full-stack web app that converts written text into natural-sounding spoken audio in real time, using React and the ElevenLabs Text-to-Speech API.

---

## ✨ Features

- 📝 **Live Text Input**: Type or paste text with real-time word and character counting, capped at 500 characters
- 🌍 **Language Selection**: Choose from multiple supported languages
- 🎤 **Voice Selection**: Pick from multiple natural-sounding male and female voices
- 🔊 **Real Speech Generation**: Converts text into realistic audio using the ElevenLabs API
- ▶️ **Audio Playback**: Built-in player with play, pause, seek, and volume controls
- ⬇️ **Reliable Download**: Downloads the generated audio as an MP3 file, with a cross-origin-safe blob download (not a plain link)
- ⚠️ **Robust Error Handling**: Catches empty input, over-limit text, network failures, and API/provider failures with clear, friendly messages

---

## 🛠️ Tech Stack

### Frontend
- ⚛️ React.js (Vite)
- 🎨 Tailwind CSS
- 📡 Axios

### Backend
- 🟢 Node.js
- 🚂 Express.js
- 🗣️ ElevenLabs API (Text-to-Speech)

### Database & Tools
- 🚫 No database — this project is intentionally built database-free for a fast, lightweight Level 1 build
- 📮 Postman (API testing)

---

## 🚀 Live Demo & Deployment

- 🔺 **Frontend Live App (Vercel)**: https://text-to-speech-rho-silk.vercel.app/
- 🟣 **Backend Live Service (Render)**: https://text-to-speech-zaez.onrender.com

---

## 📁 Project Structure

```text
text-to-speech/
├── server/
│   ├── controllers/
│   │   ├── ttsController.js
│   │   └── voicesController.js
│   ├── middleware/
│   │   └── validateTts.js
│   ├── routes/
│   │   └── ttsRoutes.js
│   ├── services/
│   │   └── elevenLabsService.js
│   ├── utils/
│   │   ├── voicesData.js
│   │   └── voiceMap.js
│   ├── public/
│   │   └── audio/
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   └── server.js
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── TextInput.jsx
│   │   │   ├── LanguageSelector.jsx
│   │   │   ├── VoiceSelector.jsx
│   │   │   ├── GenerateButton.jsx
│   │   │   ├── AudioPlayer.jsx
│   │   │   ├── DownloadButton.jsx
│   │   │   └── ErrorMessage.jsx
│   │   ├── services/
│   │   │   └── ttsService.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── .env
│   ├── package.json
│   └── vite.config.js
└── README.md
```

---

## 💻 Local Installation & Setup

### 📋 Prerequisites
- Node.js (v18 or higher)
- npm
- An ElevenLabs API key (free tier works — sign up at elevenlabs.io)

### 1. Clone the repository
```bash
git clone https://github.com/gloriasemyol/text-to-speech.git
cd text-to-speech
```

### 2. Setup Backend
```bash
cd server
npm install
```

Create a `.env` file inside the `server` directory:
```env
PORT=5000
ELEVENLABS_API_KEY=your_elevenlabs_api_key
CLIENT_URL=http://localhost:5173
```

Start the backend server:
```bash
npm run dev
```

### 3. Setup Frontend
```bash
cd ../client
npm install
```

Create a `.env` file inside the `client` directory:
```env
VITE_API_URL=http://localhost:5000/api
```

Start the Vite development server:
```bash
npm run dev
```

Open `http://localhost:5173` in your browser! 🚀

---

## 🌐 Production Deployment Steps

### 🟣 Backend Deployment (Render)
1. Create a new Web Service on Render and connect your repository.
2. Root Directory: `server`
3. Build Command: `npm install`
4. Start Command: `npm start`
5. Set Environment Variables:
   - `ELEVENLABS_API_KEY`
   - `CLIENT_URL` = [Frontend Deployment URL, e.g. https://text-to-speech-rho-silk.vercel.app]

### 🔺 Frontend Deployment (Vercel)
1. Create a new Project on Vercel and import your repository.
2. Framework Preset: `Vite`
3. Root Directory: `client`
4. Build Command: `npm run build`
5. Output Directory: `dist`
6. Set Environment Variable:
   - `VITE_API_URL` = [Backend Deployment URL + /api, e.g. https://text-to-speech-zaez.onrender.com/api]

---

## ⚙️ Environment Variables

| Variable | Location | Description |
| :--- | :--- | :--- |
| `PORT` | server/.env | Port number for the Express server |
| `ELEVENLABS_API_KEY` | server/.env / Render | API key for the ElevenLabs Text-to-Speech service |
| `CLIENT_URL` | server/.env / Render | Frontend production URL allowed for CORS |
| `VITE_API_URL` | client/.env / Vercel | Production backend API endpoint |

---

## 📝 License

Distributed under the MIT License.
