type CreatorCardProps = {
  image: string
  name: string
  volume: string
  rank: number
  onClick?: () => void
}

export default function CreatorCard({ image, name, volume, rank, onClick }: CreatorCardProps) {
  return (
    <div 
      className="bg-secondary rounded-xl p-4 flex items-center gap-4 w-full md:flex-col md:text-center md:items-center md:p-8 relative cursor-pointer hover:bg-secondary/80 transition-colors hover:scale-95 transition-transform duration-300"
      onClick={onClick}
    >
      <div className="absolute top-2 left-2 bg-black/50 backdrop-blur-sm rounded-full w-8 h-8 flex items-center justify-center text-white/60 text-xs font-bold">
        {rank}
      </div>
      <img
        src={image}
        alt={name}
        className="h-14 w-14 rounded-full object-cover md:h-24 md:w-24 md:mx-auto"
      />
      <div className="flex flex-col md:mt-4">
        <h3 className="text-white font-semibold text-lg md:text-xl">{name}</h3>
        <div className="flex items-center gap-2 mt-1 md:justify-center">
          <span className="text-white/70 text-sm md:text-base">Total Sales</span>
          <p className="text-white text-sm md:text-base font-space-mono">{volume}</p>
        </div>
      </div>
    </div>
  )
}
