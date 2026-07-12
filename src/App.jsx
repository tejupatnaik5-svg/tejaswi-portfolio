function App() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 px-6">
      <div className="flex items-center gap-2 border border-line bg-panel rounded-full px-4 py-1.5 font-mono text-xs text-gray-400">
        <span className="w-2 h-2 rounded-full bg-glow animate-pulse"></span>
        open to SDE / SWE roles
      </div>

      <h1 className="text-5xl font-bold tracking-tight text-center">
        Tejaswi Baggam
      </h1>

      <p className="max-w-xl text-center text-gray-400">
        Distributed systems engineer. Java, Spring Boot, AWS.
        This site runs on my own backend.
      </p>

      <p className="font-mono text-xs text-accent">// mission control — booting up</p>
    </main>
  )
}

export default App