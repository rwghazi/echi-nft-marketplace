import { useNavigate } from 'react-router-dom';
import nftBg from "../assets/nfts/nft-9-big.png";
import avatar from "../assets/avatars/ava-4.png";

export default function NFT() {
  const navigate = useNavigate();

  const handleArtistClick = () => {
    navigate('/artist');
  };

  return (
    <div>
      {/* Banner */}
      <div className="w-full h-auto">
        <img
          src={nftBg}
          alt="NFT Background"
          className="w-full h-120 object-cover"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6">
        <h2 className="text-white text-3xl font-bold mt-6">The Orbitians</h2>
        <p className="text-white text-md mb-4">Minted on Sep 30, 2022</p>

        {/* Responsive Layout Container */}
        <div className="flex flex-col md:flex-row md:gap-8">
          {/* Left Column - Content */}
          <div className="flex-1">
            <div className="mb-6">
              <p className="text-white/50 text-md mb-2 font-space-mono font-bold">Created By</p>
              <div 
                className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
                onClick={handleArtistClick}
              >
                <img
                  src={avatar}
                  alt="Avatar"
                  className="w-8 h-8 rounded-full"
                />
                <p className="text-white text-md">Orbitians</p>
              </div>
            </div>

            <div className="mb-6">
              <p className="text-white/50 text-md mb-2 font-space-mono font-bold">Description</p>
              <p className="text-white text-md">
                The Orbitians is a collection of 10,000 unique NFTs on the
                Ethereum blockchain,
                <br />
                <br />
                There are all sorts of beings in the NFT Universe. The most
                advanced and friendly of the bunch are Orbitians.
                <br />
                <br />
                They live in a metal space machines, high up in the sky and only
                have one foot on Earth. These Orbitians are a peaceful race, but
                they have been at war with a group of invaders for many
                generations. The invaders are called Upside-Downs, because of
                their inverted bodies that live on the ground, yet do not know
                any other way to be. Upside-Downs believe that they will be able
                to win this war if they could only get an eye into Orbitian
                territory, so they've taken to make human beings their target.
              </p>
            </div>

            <div className="mb-6">
              <p className="text-white/50 text-md mb-2 font-space-mono font-bold">Details</p>
              <div>
                <p>View on Etherscan</p>
                <p>View Original</p>
              </div>
            </div>

            <div className="mb-6">
              <p className="text-white/50 text-md mb-2 font-space-mono font-bold">Tags</p>
              <div>
                <div className="bg-secondary rounded-full px-4 py-2 w-fit mb-4">
                  <p>ANIMATION</p>
                </div>
                <div className="bg-secondary rounded-full px-4 py-2 w-fit mb-4">
                  <p>ILLUSTRATION</p>
                </div>
                <div className="bg-secondary rounded-full px-4 py-2 w-fit mb-4">
                  <p>MOON</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Timer (appears first on mobile, second on tablet/desktop) */}
          <div className="order-first md:order-last md:w-[300px] mt-8 md:mt-0 mb-12">
            <div className="w-full h-[250px] bg-secondary backdrop-blur-md rounded-2xl p-6 text-white flex flex-col justify-between">
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
              <button className="h-[60px] bg-primary w-full text-[16px] text-white font-semibold rounded-3xl my-4 px-6 py-4">
                Place Bid
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
