import icon1 from '../../assets/icons/how1.png';
import icon2 from '../../assets/icons/how2.png';
import icon3 from '../../assets/icons/how3.png';

export default function HowItWorks() {
  return (
    <div className="max-w-6xl mx-auto py-10">
      <h2 className="text-2xl md:text-3xl font-bold text-white">How It Works</h2>
      <p className="text-white/80 text-sm mt-1">
        Checkout Top Rated Creators on the NFT Marketplace
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">

        <div className="flex flex-row md:flex-col bg-secondary rounded-2xl shadow-md p-6 w-full h-auto md:h-[420px] text-center">
          <div className="flex justify-center items-center w-1/3 md:w-full">
            <img src={icon1} alt="Setup Your Wallet" className="w-60 h-auto" />
          </div>
          <div className="flex flex-col justify-center w-2/3 md:w-full md:mt-4 pl-2 md:pl-0 text-left md:text-center">
            <h3 className="text-[16px] font-semibold mb-1">Setup Your Wallet</h3>
            <p className="text-[12px] text-white">Set up your wallet of choice. Connect it to the NFT market by clicking the wallet icon in the top right corner.</p>
          </div>
        </div>

        <div className="flex flex-row md:flex-col bg-secondary rounded-2xl shadow-md p-6 w-full h-auto md:h-[420px] text-center">
          <div className="flex justify-center items-center w-1/3 md:w-full">
            <img src={icon2} alt="Create Collection" className="w-60 h-auto" />
          </div>
          <div className="flex flex-col justify-center w-2/3 md:w-full md:mt-4 pl-2 md:pl-0 text-left md:text-center">
            <h3 className="text-[16px] font-semibold mb-1">Create Collection</h3>
            <p className="text-[12px] text-white">Upload your work and setup your collection. Add a description, social links and floor price.</p>
          </div>
        </div>

        <div className="flex flex-row md:flex-col bg-secondary rounded-2xl shadow-md p-6 w-full h-auto md:h-[420px] text-center">
          <div className="flex justify-center items-center w-1/3 md:w-full">
            <img src={icon3} alt="Start Earning" className="w-60 h-auto" />
          </div>
          <div className="flex flex-col justify-center w-2/3 md:w-full md:mt-4 pl-2 md:pl-0 text-left md:text-center">
            <h3 className="text-[16px] font-semibold mb-1">Start Earning</h3>
            <p className="text-[12px] text-white">Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.</p>
          </div>
        </div>

      </div>
    </div>
  );
} 