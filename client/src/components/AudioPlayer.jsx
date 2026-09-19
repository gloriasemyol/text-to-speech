// src/components/AudioPlayer.jsx
function AudioPlayer({ audioUrl }) {
  if (!audioUrl) return null
  return (
    <div className="mt-4">
      <audio controls src={audioUrl} className="w-full" />
    </div>
  )
}

export default AudioPlayer