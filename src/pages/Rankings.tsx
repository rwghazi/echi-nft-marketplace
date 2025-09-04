import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import topCreators from '../data/topCreators';

export default function Rankings() {
  const [activeTab, setActiveTab] = useState('Today');
  const navigate = useNavigate();

  const tabs = [
    { key: 'Today', label: 'Today', mobileLabel: '1d' },
    { key: 'This Week', label: 'This Week', mobileLabel: '7d' },
    { key: 'This Month', label: 'This Month', mobileLabel: '30d' },
    { key: 'All Time', label: 'All Time', mobileLabel: 'All' }
  ];

  const handleCreatorClick = () => {
    navigate('/artist');
  };

  return (
    <div>
      <h1 className="text-3xl lg:text-4xl font-bold text-white mt-12 text-left">Top Creators</h1>
      <p className="text-gray-400 mb-12">Check out top ranking NFT artists on the NFT Marketplace.</p>
      
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

      {/* Table Header */}
      <div className="w-full mb-6 border border-gray-700 rounded-3xl">
        <div className="flex w-full py-4 px-4">
          <div className="w-8 md:w-16 text-left text-gray-400 font-medium">#</div>
          <div className="flex-1 text-left text-gray-400 font-medium">Artist</div>
          <div className="w-24 text-right text-gray-400 font-medium hidden md:block">Change</div>
          <div className="w-32 text-right text-gray-400 font-medium">Volume</div>
        </div>
      </div>

      {/* Creator Cards */}
      <div className="w-full">
        {topCreators.map((creator) => (
          <div 
            key={creator.id} 
            className="flex w-full py-4 px-4 border-b border-gray-800 bg-secondary mb-4 rounded-3xl cursor-pointer hover:opacity-80 transition-opacity"
            onClick={handleCreatorClick}
          >
            <div className="w-8 md:w-16 text-left text-white font-medium flex items-center">
              {creator.rank}
            </div>
            <div className="flex-1 text-left flex items-center">
              <img 
                src={creator.image} 
                alt={creator.name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <span className="text-white font-semibold text-lg">{creator.name}</span>
            </div>
            <div className="w-24 flex items-center justify-center hidden md:flex">
              <span className={`text-lg font-medium ${
                creator.change.startsWith('+') 
                  ? 'text-green-400' 
                  : 'text-red-400'
              }`}>
                {creator.change}
              </span>
            </div>
            <div className="w-32 text-center text-white font-medium flex items-center justify-end">
              {creator.volume}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}