import { useNavigate } from 'react-router-dom';
import topCreators from "../../data/topCreators";
import CreatorCard from "../cards/CreatorCard";
import { Button } from '../ui';
import rocketIcon from '../../assets/icons/rocket.png';

export default function TopCreators() {
  const navigate = useNavigate();

  const handleCreatorClick = () => {
    navigate('/artist');
  };

  const handleViewRankings = () => {
    navigate('/rankings');
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">Top Creators</h2>
          <p className="text-white/80 text-sm mt-1">
            Checkout Top Rated Creators on the NFT Marketplace
          </p>
        </div>
        <Button 
          variant="secondary"
          size="lg"
          onClick={handleViewRankings}
          className="!hidden sm:!flex w-full sm:w-auto"
          icon={<img src={rocketIcon} alt="Rocket Icon" className="w-6 h-6" />}
        >
          View Rankings
        </Button>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {topCreators.map((creator) => (
          <CreatorCard
            key={creator.id}
            rank={creator.rank}
            image={creator.image}
            name={creator.name}
            volume={creator.volume}
            onClick={handleCreatorClick}
          />
        ))}
      </div>
      
    <Button 
        variant="secondary"
        onClick={handleViewRankings}
        className="sm:hidden mt-8 w-full"
        icon={<img src={rocketIcon} alt="Rocket Icon" className="w-6 h-6" />}
      >
        View Rankings
      </Button>
    </div>
  );
} 