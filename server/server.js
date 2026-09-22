require('dotenv').config()
const express = require('express')
const cors = require('cors')
const path = require('path')
const ttsRoutes = require('./routes/ttsRoutes')

const app = express()
app.set('trust proxy', 1)

const PORT = process.env.PORT || 5000

app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173' }))
app.use(express.json())
app.use('/audio', express.static(path.join(__dirname, 'public', 'audio')))

app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok' })
})

app.use('/api', ttsRoutes)

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})