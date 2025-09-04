import { useNavigate } from "react-router-dom";
import trendingCollections from "../../data/trendingCollections";

export default function TrendingCollections() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/nft");
  };

  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-white">
        Trending Collections
      </h2>
      <p className="text-white/80 text-sm mt-1">
        Checkout our weekly updated trending collection.
      </p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {trendingCollections.map((collection, index) => (
          <div 
            key={collection.id}
            className={`${
              // Mobile: show only first item, Tablet: show first 2, Desktop: show all 3
              index === 0 ? 'block' : 'hidden md:block'
            } ${
              index === 2 ? 'hidden lg:block' : ''
            }`}
          >
            <div className="grid gap-4">
              <div 
                className="rounded-xl overflow-hidden aspect-square cursor-pointer hover:scale-95 transition-transform duration-300"
                onClick={handleClick}
              >
                <img
                  src={collection.mainImage}
                  alt={`${collection.title} Main`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div 
                  className="rounded-xl overflow-hidden aspect-square cursor-pointer hover:scale-95 transition-transform duration-300"
                  onClick={handleClick}
                >
                  <img
                    src={collection.smallImages[0]}
                    alt={`${collection.title} 1`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div 
                  className="rounded-xl overflow-hidden aspect-square cursor-pointer hover:scale-95 transition-transform duration-300"
                  onClick={handleClick}
                >
                  <img
                    src={collection.smallImages[1]}
                    alt={`${collection.title} 2`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div 
                  className="rounded-xl overflow-hidden aspect-square bg-primary flex items-center justify-center cursor-pointer hover:scale-95 transition-transform duration-300"
                  onClick={handleClick}
                >
                  <span className="text-white text-2xl md:text-3xl font-bold">
                    1025+
                  </span>
                </div>
              </div>
              <div>
                <p className="text-white font-semibold">{collection.title}</p>
                <p className="text-white/80 text-sm">{collection.creator}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
