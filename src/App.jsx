import BentoTile from "./components/BentoTile"
import { profile, featuredProject } from "./data"

function App() {
  return (
    <main className="min-h-screen max-w-5xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[minmax(110px,auto)]">

        {/* intro — big tile */}
        <BentoTile className="md:col-span-2 md:row-span-2 flex flex-col justify-center">
          <div className="flex items-center gap-2 font-mono text-xs text-glow mb-4">
            <span className="w-2 h-2 rounded-full bg-glow animate-pulse"></span>
            {profile.status}
          </div>
          <h1 className="text-4xl font-bold tracking-tight">{profile.name}</h1>
          <p className="text-gray-400 mt-3">{profile.tagline}</p>
        </BentoTile>

        {/* metric placeholders — real data in the backend phase */}
        <BentoTile title="live uptime">
          <p className="font-mono text-2xl text-glow">--.--%</p>
          <p className="text-xs text-gray-500 mt-1">soon: Spring Actuator</p>
        </BentoTile>

        <BentoTile title="requests served">
          <p className="font-mono text-2xl">--,---</p>
          <p className="text-xs text-gray-500 mt-1">soon: real API counter</p>
        </BentoTile>

        {/* AI teaser */}
        <BentoTile title="// coming soon" className="md:col-span-2">
          <p className="font-medium text-accent">💬 Interview my AI</p>
          <p className="text-sm text-gray-400 mt-1">
            "Why should we hire Tejaswi?" — answers grounded in my resume
          </p>
        </BentoTile>

        {/* featured project */}
        <BentoTile title="featured project" className="md:col-span-2">
          <p className="font-medium">{featuredProject.title}</p>
          <p className="text-xs text-gray-500 mt-1">{featuredProject.badge}</p>
          <p className="text-sm text-gray-400 mt-2">{featuredProject.blurb}</p>
        </BentoTile>

        {/* stack */}
        <BentoTile title="stack" className="md:col-span-2">
          <div className="flex flex-wrap gap-2 mt-1">
            {profile.stack.map((tech) => (
              <span
                key={tech}
                className="font-mono text-xs border border-line rounded-md px-2 py-1 text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </BentoTile>

      </div>
    </main>
  )
}

export default App