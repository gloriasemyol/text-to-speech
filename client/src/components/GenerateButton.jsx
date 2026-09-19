function GenerateButton({ onClick, loading }) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className="w-full bg-indigo-600 text-white font-semibold py-2.5 rounded-lg
                 hover:bg-indigo-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {loading ? 'Generating...' : 'Generate Speech'}
    </button>
  )
}

export default GenerateButton