const fs = require('fs')
const path = require('path')
const crypto = require('crypto')
const { synthesizeSpeech } = require('../services/elevenLabsService')
const VOICE_MAP = require('../utils/voiceMap')

async function generateSpeech(req, res) {
  const { text, voice } = req.body

  const elevenLabsVoiceId = VOICE_MAP[voice]
  if (!elevenLabsVoiceId) {
    return res.status(400).json({ success: false, message: 'Selected voice is not supported.' })
  }

  try {
    const audioBuffer = await synthesizeSpeech(text, elevenLabsVoiceId)

    const fileName = `${crypto.randomUUID()}.mp3`
    const filePath = path.join(__dirname, '..', 'public', 'audio', fileName)
    fs.writeFileSync(filePath, audioBuffer)

    res.status(200).json({
      success: true,
      audioUrl: `${req.protocol}://${req.get('host')}/audio/${fileName}`,
    })
  } catch (err) {
    const providerStatus = err.response?.status

    if (providerStatus === 401) {
      console.error('Invalid ElevenLabs API key')
      return res.status(500).json({ success: false, message: 'Server configuration error.' })
    }

    if (providerStatus === 429) {
      return res.status(429).json({ success: false, message: 'Too many requests. Please try again shortly.' })
    }

    console.error(err.message)
    return res.status(503).json({ success: false, message: 'Text-to-speech service is unavailable. Please try again later.' })
  }
}

module.exports = { generateSpeech }