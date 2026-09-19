import { useState } from 'react'
import TextInput from './components/TextInput'
import LanguageSelector from './components/LanguageSelector'
import VoiceSelector from './components/VoiceSelector'
import GenerateButton from './components/GenerateButton'
import ErrorMessage from './components/ErrorMessage'
import AudioPlayer from './components/AudioPlayer'
import DownloadButton from './components/DownloadButton'
import { generateSpeech } from './services/ttsService'

function App() {
  const [text, setText] = useState('')
  const [language, setLanguage] = useState('en-US')
  const [voice, setVoice] = useState('voice-1')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [audioUrl, setAudioUrl] = useState('')

  const handleGenerate = async () => {
    setError('')
    setAudioUrl('')

    if (text.trim() === '') {
      setError('Please enter some text before generating speech.')
      return
    }

    setLoading(true)
    try {
      const data = await generateSpeech(text, language, voice)
      setAudioUrl(data.audioUrl)
    } catch (err) {
      setError('Something went wrong generating speech. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-xl">
        <h1 className="text-2xl font-bold text-slate-800 text-center mb-6">
          Text to Speech
        </h1>
        <TextInput text={text} setText={setText} />
        <LanguageSelector language={language} setLanguage={setLanguage} />
        <VoiceSelector voice={voice} setVoice={setVoice} />
        <GenerateButton onClick={handleGenerate} loading={loading} />
        <ErrorMessage message={error} />
        <AudioPlayer audioUrl={audioUrl} />
        <DownloadButton audioUrl={audioUrl} />
      </div>
    </div>
  )
}

export default App