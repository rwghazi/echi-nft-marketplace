import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import socials from "../../assets/icons/socials.png";
import { Button } from "../ui";

export default function Footer() {
  return (
    <footer className="w-full bg-secondary px-4">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block">
              <img
                src={logo}
                alt="Logo"
                className="h-16 w-46 lg:h-20 lg:w-60 object-contain"
              />
            </Link>
            <p className="text-white/70 text-md leading-relaxed mb-6">
              NFT marketplace UI created with Anima for Figma.
            </p>
            <p className="text-white/70 text-md leading-relaxed">
              Join our community
            </p>
            <img
              src={socials}
              alt="Social Media Icons"
              className="mt-4 h-8 w-auto"
            />
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-white font-semibold text-lg mb-6">Explore</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Marketplace
                </Link>
              </li>
              <li>
                <Link
                  to="/rankings"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Rankings
                </Link>
              </li>
              <li>
                <Link
                  to="/connect-wallet"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Connect a wallet
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-1">
            <h3 className="text-white font-semibold text-lg mb-6">
              Join our weekly digest
            </h3>
            <p className="text-white/70 text-md leading-relaxed mb-4">
              Get exclusive promotions & updates straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="bg-white w-full sm:flex-1 px-4 py-4 rounded-3xl text-black focus:outline-none"
              />
              <Button variant="primary" className="w-full sm:w-auto">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 mb-8"></div>
        <div className="text-left">
          <p className="text-white/70 text-sm">
            Ⓒ NFT Market. Use this template freely.
          </p>
        </div>
      </div>
    </footer>
  );
}
