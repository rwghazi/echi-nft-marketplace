import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NFTCard from '../components/cards/NFTCard';
import trendingNFTs from '../data/trendingNFTs.json';

export default function Marketplace() {
  const [activeTab, setActiveTab] = useState('NFTs');
  const navigate = useNavigate();

  const tabs = [
    { key: 'NFTs', label: 'NFTs', mobileLabel: 'NFTs' },
    { key: 'Collections', label: 'Collections', mobileLabel: 'Collections' }
  ];

  const handleNFTClick = () => {
    navigate('/nft');
  };

  return (
    <div>
      <h1 className="text-3xl lg:text-4xl font-bold text-white mt-12 text-left">Browse Marketplace</h1>
      <p className="text-gray-400 mb-12">Browse through more than 50k NFTs on the NFT Marketplace.</p>
      
      {/* Tab Menu */}
      <div className="flex w-full mb-8">
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
        {activeTab === 'NFTs' && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {trendingNFTs.map((nft) => (
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
        
        {activeTab === 'Collections' && (
          <div>
            {/* Collections content will go here */}
            <p className="text-white">Collections content coming soon...</p>
          </div>
        )}
      </div>
    </div>
  );
}