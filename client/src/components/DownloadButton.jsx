async function handleDownload(audioUrl) {
  const response = await fetch(audioUrl)
  const blob = await response.blob()
  const blobUrl = URL.createObjectURL(blob)

  const link = document.createElement('a')
  link.href = blobUrl
  link.download = 'speech.mp3'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(blobUrl)
}

function DownloadButton({ audioUrl }) {
  if (!audioUrl) return null
  return (
    <button
      onClick={() => handleDownload(audioUrl)}
      className="block w-full text-center mt-3 text-indigo-600 font-medium hover:underline"
    >
      Download Audio
    </button>
  )
}

export default DownloadButton