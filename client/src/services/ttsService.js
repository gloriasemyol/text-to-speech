import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

export async function generateSpeech(text, language, voice) {
  const response = await axios.post(`${API_BASE_URL}/tts`, {
    text,
    language,
    voice,
  })
  return response.data
}