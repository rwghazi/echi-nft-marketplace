import { useNavigate } from 'react-router-dom';
import bgImage from '../../assets/nfts/nft-8.png';
import ava from '../../assets/avatars/ava-1.png';

export default function Highlight() {
  const navigate = useNavigate();

  const handleSeeNFT = () => {
    navigate('/nft');
  };

  return (
    <div
      className="relative w-full h-[593px] p-6 text-center text-white bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#A259FF]/0 to-[#A259FF]/100"></div>
      <div className="relative z-10 flex flex-col mt-20 md:flex-row md:items-center md:justify-between md:max-w-7xl md:mx-auto md:gap-8 md:mt-60">
        <div className="flex flex-col flex-1">
          <div className="flex justify-start">
            <div className="flex items-center gap-3 bg-secondary rounded-full w-[151px] h-[44px] px-4 py-2">
              <img
                src={ava}
                alt="User Avatar"
                className="w-8 h-8 rounded-full"
              />
              <span className="text-white text-sm font-medium">Shroomie</span>
            </div>
          </div>
          <h2 className="text-[38px] text-left md:text-3xl font-semibold mt-8">Magic Mushroom</h2>
        </div>

        <div className="mt-8 md:mt-0 md:w-[300px]">
          <div className="w-full h-[147px] bg-secondary/50 backdrop-blur-md rounded-2xl p-6 text-white flex flex-col justify-between">
            <div className="ml-[2px] text-sm text-left">Auction Ends in:</div>
            <div className="flex justify-center items-baseline gap-4 font-mono">
              <div className="font-bold text-[38px] ">12</div>
              <div className="font-bold text-[38px] ">:</div>
              <div className="font-bold text-[38px] ">24</div>
              <div className="font-bold text-[38px] ">:</div>
              <div className="font-bold text-[38px] f">15</div>
            </div>
            <div className="flex justify-center gap-12 text-xs mt-1">
              <span>Hours</span>
              <span>Minutes</span>
              <span>Seconds</span>
            </div>
          </div>
        </div>
      </div>

      {/* Button for Mobile */}
      <div className="relative z-10 md:hidden mt-8">
        <button 
          onClick={handleSeeNFT}
          className="h-[60px] bg-white w-full text-[16px] text-black font-semibold rounded-3xl"
        >
          See NFT
        </button>
      </div>

      {/* Button for Tablet & Desktop */}
      <div className="relative z-10 hidden md:flex md:justify-end md:max-w-7xl md:mx-auto mt-8">
        <button 
          onClick={handleSeeNFT}
          className="h-[60px] bg-white text-[16px] text-black font-semibold rounded-3xl w-[200px]"
        >
          See NFT
        </button>
      </div>

    </div>
  );
}