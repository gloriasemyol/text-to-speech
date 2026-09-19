const axios = require('axios')

const ELEVENLABS_BASE_URL = 'https://api.elevenlabs.io/v1'

async function synthesizeSpeech(text, voiceId) {
  const response = await axios.post(
    `${ELEVENLABS_BASE_URL}/text-to-speech/${voiceId}`,
    {
      text,
      model_id: 'eleven_multilingual_v2',
    },
    {
      headers: {
        'xi-api-key': process.env.ELEVENLABS_API_KEY,
        'Content-Type': 'application/json',
      },
      responseType: 'arraybuffer',
    }
  )
  return response.data
}

module.exports = { synthesizeSpeech }