const express = require('express')
const router = express.Router()

const validateTts = require('../middleware/validateTts')
const { generateSpeech } = require('../controllers/ttsController')
const { getVoices } = require('../controllers/voicesController')

router.post('/tts', validateTts, generateSpeech)
router.get('/voices', getVoices)

module.exports = router