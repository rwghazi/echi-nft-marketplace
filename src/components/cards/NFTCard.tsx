type NFTCardProps = {
  image: string;
  title: string;
  creator: string;
  avatar: string;
  price: string;
  bid: string;
  onClick?: () => void;
};

export default function NFTCard({
  image,
  title,
  creator,
  avatar,
  price,
  bid,
  onClick,
}: NFTCardProps) {
  return (
    <div 
      className="flex flex-col rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer hover:scale-95 transition-transform duration-300"
      onClick={onClick}
    >
      <div className="relative rounded-t-xl overflow-hidden bg-gray-800 aspect-square">
        <div className="relative h-full">
          <img
            src={image}
            alt={creator}
            className="absolute inset-0 w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
        </div>
      </div>
      <div className="flex flex-col p-4 bg-secondary">
        <div className="flex items-center justify-start text-white">
          <h5 className="text-white font-semibold text-xl">{title}</h5>
        </div>
        <div className="flex items-center justify-start text-white">
          <div className="flex items-center gap-2">
            <img src={avatar} alt={creator} className="w-6 h-6 rounded-full" />
            <h3 className="text-white font-semibold text-sm">{creator}</h3>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between p-4 bg-secondary gap-4">
        <div className="flex flex-col gap-2">
          <p className="text-white/80">Price:</p>
          <p className="text-white font-semibold font-space-mono">{price} ETH</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-white/80">Highest Bid:</p>
          <p className="text-white font-semibold font-space-mono">{bid} ETH</p>
        </div>
      </div>
    </div>
  );
}
