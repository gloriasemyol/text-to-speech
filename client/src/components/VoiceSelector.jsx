const VOICES = [
  { id: 'voice-1', label: 'Female Voice 1' },
  { id: 'voice-2', label: 'Male Voice 1' },
  { id: 'voice-3', label: 'Female Voice 2' },
  { id: 'voice-4', label: 'Male Voice 2' },
]

function VoiceSelector({ voice, setVoice }) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-slate-700 mb-1">
        Voice
      </label>
      <select
        value={voice}
        onChange={(e) => setVoice(e.target.value)}
        className="w-full p-2 border border-slate-300 rounded-lg
                   focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        {VOICES.map((v) => (
          <option key={v.id} value={v.id}>
            {v.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default VoiceSelector
export { VOICES }