import illustration from "../assets/bg-register.png";
import illustrationDesktop from "../assets/bg-register-desktop.png";
import metamaskIcon from "../assets/icons/metamask.png";
import walletConnectIcon from "../assets/icons/coinwallet.png"
import coinbaseIcon from "../assets/icons/coinbase.png";

export default function ConnectWallet() {
  return (
    <div className="w-full h-210 md:h-screen flex flex-col lg:flex-row">
      <div className="lg:w-1/2 lg:h-screen">
        <img
          src={illustration}
          alt="Registration Illustration"
          className="w-full h-full object-cover block lg:hidden"
        />
        <img
          src={illustrationDesktop}
          alt="Registration Illustration"
          className="w-full h-full object-cover hidden lg:block"
        />
      </div>

      {/* Right side: Form */}
      <div className="flex lg:w-1/2 p-6 lg:p-12 mt-8">
        <div className="max-w-md w-full">
          <h2 className="text-[38px] font-bold text-white text-center lg:text-left">
            Connect Wallet
          </h2>
          <p className="text-white text-md text-center lg:text-left mt-2">
            Choose a wallet you want to connect. There are several wallet providers.
          </p>

          {/* BUTTON METAMASK,  WALLET CONNECT, COINBASE */}
          <div className="mt-6 space-y-4">
            <button className="bg-secondary w-full px-4 py-4 rounded-2xl text-white font-semibold hover:bg-gray-200 border border-primary text-left text-xl">
              <img src={metamaskIcon} alt="MetaMask" className="inline-block w-6 h-6 mr-2 -mt-1" />
              MetaMask
            </button>
            <button className="bg-secondary w-full px-4 py-4 rounded-2xl text-white font-semibold hover:bg-gray-200 border border-primary text-left text-xl">
              <img src={walletConnectIcon} alt="WalletConnect" className="inline-block w-6 h-6 mr-2 -mt-1" />
              WalletConnect
            </button>
            <button className="bg-secondary w-full px-4 py-4 rounded-2xl text-white font-semibold hover:bg-gray-200 border border-primary text-left text-xl">
              <img src={coinbaseIcon} alt="Coinbase" className="inline-block w-6 h-6 mr-2 -mt-1" />
              Coinbase
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
