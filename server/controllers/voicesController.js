const VOICES = require('../utils/voicesData')

function getVoices(req, res) {
  res.status(200).json({ voices: VOICES })
}

module.exports = { getVoices }