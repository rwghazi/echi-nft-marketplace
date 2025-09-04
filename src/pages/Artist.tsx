import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bgArtist from "../assets/bg-artist.png";
import avatar from "../assets/avatars/ava-4.png";
import Stats from "../components/stats";
import socials from "../assets/icons/socials.png";
import NFTCard from '../components/cards/NFTCard';
import trendingNFTs from '../data/trendingNFTs';
import { Button } from '../components/ui';

export default function Artist() {
  const [activeTab, setActiveTab] = useState('Created');
  const navigate = useNavigate();

  const tabs = [
    { key: 'Created', label: 'Created', mobileLabel: 'Created' },
    { key: 'Owned', label: 'Owned', mobileLabel: 'Owned' },
    { key: 'Collections', label: 'Collections', mobileLabel: 'Collections' }
  ];

  const handleNFTClick = () => {
    navigate('/nft');
  };

  return (
    <div>
      <div className="w-full h-[300px]">
        <img
          src={bgArtist}
          alt="Artist Banner"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex flex-col items-center md:items-start -mt-16">
          <img
            src={avatar}
            alt="Artist Avatar"
            className="w-32 h-32 rounded-3xl border-4 border-black object-cover"
          />

          <h1 className="text-3xl lg:text-4xl font-bold text-white mt-4 text-center lg:text-left">
            Animakid
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
            <Button variant="primary" className="w-full sm:w-auto">
              0x3b2...9fK4
            </Button>
            <Button variant="secondary" className="w-full sm:w-auto">
              Follow
            </Button>
          </div>
          <div className="mt-6 w-full lg:w-auto">
            <Stats />
          </div>
        </div>

        <div className="mt-8">
          <p className="text-white/60 font-semibold text-lg">Bio</p>
          <p>The internet's friendliest designer kid.</p>
        </div>

        <div className="mt-8">
          <p className="text-white/60 font-semibold text-lg">Links</p>
          <img src={socials} alt="Social Links" className="mt-2" />
        </div>

        {/* Tab Menu */}
        <div className="flex w-full mb-8 mt-12">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex-1 pb-2 font-medium transition-all duration-200 ${
                activeTab === tab.key
                  ? 'text-white border-b-2 border-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <span className="hidden md:inline">{tab.label}</span>
              <span className="md:hidden">{tab.mobileLabel}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="w-full">
          {activeTab === 'Created' && (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {trendingNFTs.slice(0, 6).map((nft) => (
                  <div 
                    key={nft.title} 
                    onClick={handleNFTClick}
                    className="cursor-pointer"
                  >
                    <NFTCard {...nft} />
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {activeTab === 'Owned' && (
            <div>
              <p className="text-white">Owned NFTs content coming soon...</p>
            </div>
          )}
          
          {activeTab === 'Collections' && (
            <div>
              <p className="text-white">Collections content coming soon...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}