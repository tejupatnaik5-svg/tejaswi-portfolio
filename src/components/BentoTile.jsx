function BentoTile({ title, children, className = "" }) {
  return (
    <div
      className={`rounded-2xl border border-line bg-panel p-5
                  transition-transform duration-200 hover:-translate-y-1
                  hover:border-accent/50 ${className}`}
    >
      {title && (
        <p className="font-mono text-xs text-gray-500 mb-2">{title}</p>
      )}
      {children}
    </div>
  )
}

export default BentoTile