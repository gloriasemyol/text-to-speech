function TextInput({ text, setText, maxLength = 500 }) {
  const charCount = text.length
  const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length

  return (
    <div className="mb-4">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value.slice(0, maxLength))}
        placeholder="Enter or paste your text here..."
        rows={6}
        className="w-full p-3 border border-slate-300 rounded-lg resize-none
                   focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <div className="flex justify-between text-sm text-slate-500 mt-1">
        <span>Words: {wordCount}</span>
        <span className={charCount >= maxLength ? 'text-red-500 font-semibold' : ''}>
          {charCount} / {maxLength}
        </span>
      </div>
    </div>
  )
}

export default TextInput