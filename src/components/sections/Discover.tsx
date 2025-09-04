import { useNavigate } from 'react-router-dom';
import trendingNFTs from "../../data/trendingNFTs.json";
import NFTCard from "../cards/NFTCard";
import { Button } from '../ui';
import eyeIcon from '../../assets/icons/eye.png';

export default function Discover() {
  const navigate = useNavigate();

  const handleSeeAll = () => {
    navigate('/marketplace');
  };

  const handleNFTClick = () => {
    navigate('/nft');
  };

  return (
    <div>
      {/* Header with title - CTA button only on desktop */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <h2 className="text-2xl md:text-3xl font-bold text-white">Discover</h2>
        <Button 
         variant="secondary"
         size="lg"
         onClick={handleSeeAll}
         className="!hidden sm:!flex w-full sm:w-auto"
         icon={<img src={eyeIcon} alt="Eye Icon" className="w-6 h-6" />}
        >
          See All
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {trendingNFTs.slice(0, 3).map((nft) => (
          <NFTCard 
            key={nft.title} 
            {...nft} 
            onClick={handleNFTClick}
          />
        ))}
      </div>
      
      {/* Button for mobile */}
      <Button 
        variant="secondary"
        onClick={handleSeeAll}
        className="md:hidden w-full mt-6"
        icon={<img src={eyeIcon} alt="Eye Icon" className="w-6 h-6" />}
      >
        See All
      </Button>
    </div>
  );
}
