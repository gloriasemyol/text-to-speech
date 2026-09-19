function validateTts(req, res, next) {
  const { text, language, voice } = req.body

  if (!text || text.trim() === '') {
    return res.status(400).json({ success: false, message: 'Text is required.' })
  }

  if (text.length > 500) {
    return res.status(400).json({ success: false, message: 'Text exceeds the 500 character limit.' })
  }

  if (!language) {
    return res.status(400).json({ success: false, message: 'Language is required.' })
  }

  if (!voice) {
    return res.status(400).json({ success: false, message: 'Voice is required.' })
  }

  next()
}

module.exports = validateTts