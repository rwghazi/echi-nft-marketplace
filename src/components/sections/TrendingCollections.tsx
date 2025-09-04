import { useNavigate } from "react-router-dom";
import trendingCollections from "../../data/trendingCollections.json";
import nft1 from "../../assets/nfts/nft-1.png";
import nft2 from "../../assets/nfts/nft-2.png";
import nft3 from "../../assets/nfts/nft-3.png";
import nft4 from "../../assets/nfts/nft-4.png";
import nft5 from "../../assets/nfts/nft-5.png";
import nft6 from "../../assets/nfts/nft-6.png";
import nft7 from "../../assets/nfts/nft-7.png";

// Helper function to get image by filename
const getImageByFilename = (filename: string) => {
  const images: { [key: string]: string } = {
    "nft-1.png": nft1,
    "nft-2.png": nft2,
    "nft-3.png": nft3,
    "nft-4.png": nft4,
    "nft-5.png": nft5,
    "nft-6.png": nft6,
    "nft-7.png": nft7,
  };
  return images[filename] || nft1;
};

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
                  src={getImageByFilename(collection.mainImage)}
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
                    src={getImageByFilename(collection.smallImages[0])}
                    alt={`${collection.title} 1`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div 
                  className="rounded-xl overflow-hidden aspect-square cursor-pointer hover:scale-95 transition-transform duration-300"
                  onClick={handleClick}
                >
                  <img
                    src={getImageByFilename(collection.smallImages[1])}
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