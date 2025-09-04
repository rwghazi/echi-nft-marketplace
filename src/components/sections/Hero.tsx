import { useNavigate } from 'react-router-dom';
import nftHero from "../../assets/nfts/nft-1.png";
import heroAvatar from "../../assets/avatars/ava-1.png";
import rocketIcon from "../../assets/icons/rocket.png";
import Stats from "../stats";
import { Button } from "../ui";

export default function Hero() {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate('/artist');
  };

  const handleGetStarted = () => {
    navigate('/register');
  };

  return (
    <div className="lg:flex lg:flex-row lg:items-center lg:gap-12">
      <div className="space-y-6 lg:space-y-8 lg:flex-1">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight animate-fade-in-up animation-delay-100">
            Discover Digital Art & Collect NFTs
          </h1>
          <p className="mt-4 md:mt-6 text-lg text-white/90 leading-relaxed animate-fade-in-up animation-delay-200">
            NFT marketplace UI created with Anima for Figma. Collect, buy and sell
            art from more than 20k NFT artists.
          </p>
        </div>

        <div className="lg:hidden animate-fade-in-up animation-delay-300">
          <div 
            className="rounded-3xl overflow-hidden bg-[#2f2f2f] border border-white/10 shadow-lg cursor-pointer hover:opacity-90 hover:scale-105 transition-all duration-300 hover:shadow-2xl"
            onClick={handleCardClick}
          >
            <div className="h-64 sm:h-56 overflow-hidden">
              <img
                src={nftHero}
                alt="Featured NFT"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="bg-secondary p-5 h-36 flex flex-col justify-center gap-2">
              <h2 className="text-2xl font-bold text-white">
                Space Walking
              </h2>
              <div className="flex items-center gap-2">
                <img src={heroAvatar} alt="Hero Avatar" className="w-8 h-8 rounded-full" />
                <p className="text-white/80 text-lg">Animakid</p>
              </div>
            </div>
          </div>
        </div>

        <div className="animate-fade-in-up animation-delay-400">
          <Button 
            variant="primary"
            size="lg"
            onClick={handleGetStarted}
            className="w-full sm:w-auto hover:scale-105 transition-transform duration-200"
            icon={<img src={rocketIcon} alt="Rocket Icon" className="w-6 h-6" />}
          >
            Get Started
          </Button>
        </div>

        <div className="animate-fade-in-up animation-delay-500">
          <Stats />
        </div>
      </div>

      <div className="hidden lg:block lg:flex-1 animate-fade-in-up animation-delay-600">
        <div 
          className="rounded-xl overflow-hidden bg-[#2f2f2f] border border-white/10 shadow-lg cursor-pointer hover:opacity-90 hover:scale-105 transition-all duration-300 hover:shadow-2xl"
          onClick={handleCardClick}
        >
          <div className="h-80 overflow-hidden">
            <img
              src={nftHero}
              alt="Featured NFT"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="bg-secondary p-6 h-48 flex flex-col justify-center gap-2">
            <h2 className="text-3xl font-bold text-white">
              Space Walking
            </h2>
            <div className="flex items-center gap-2">
              <img src={heroAvatar} alt="Hero Avatar" className="w-8 h-8 rounded-full" />
              <p className="text-white/80 text-lg">Animakid</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
