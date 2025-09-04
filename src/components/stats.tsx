export default function Stats() {
  return (
    <div className="flex items-center justify-between sm:justify-start sm:gap-12 pt-4">
      <div className="flex flex-col items-center sm:items-start">
        <p className="text-2xl md:text-3xl font-bold text-white font-space-mono">240k+</p>
        <p className="text-white/80 text-sm md:text-base">Sales</p>
      </div>
      <div className="flex flex-col items-center sm:items-start">
        <p className="text-2xl md:text-3xl font-bold text-white font-space-mono">100k+</p>
        <p className="text-white/80 text-sm md:text-base">Auctions</p>
      </div>
      <div className="flex flex-col items-center sm:items-start">
        <p className="text-2xl md:text-3xl font-bold text-white font-space-mono">240k+</p>
        <p className="text-white/80 text-sm md:text-base">Artist</p>
      </div>
    </div>
  )
}
