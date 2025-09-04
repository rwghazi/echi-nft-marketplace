import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/logo.png";
import menuIcon from "../../assets/icons/burger-menu.png";
import userIcon from "../../assets/icons/user.png";
import { Button } from "../ui";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full border-b border-white/10 bg-[#2B2B2B] sticky top-0 z-50 px-4">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-4">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Logo"
            className="h-16 w-46 lg:h-20 lg:w-60 object-contain"
          />
        </Link>

        {/* Desktop navigation menu */}
        <nav className="hidden lg:flex items-center gap-6 ml-auto mr-4">
          <Link
            to="/marketplace"
            className="text-white/90 hover:text-white transition-colors"
          >
            Marketplace
          </Link>
          <Link
            to="/rankings"
            className="text-white/90 hover:text-white transition-colors"
          >
            Rankings
          </Link>
          <Link
            to="/connect-wallet"
            className="text-white/90 hover:text-white transition-colors"
          >
            Connect a wallet
          </Link>
        </nav>

        <div className="hidden lg:block">
          <Link to="/register">
            <Button
              variant="primary"
              size="lg"
              icon={<img src={userIcon} alt="User" className="object-contain" />}
            >
              Sign Up
            </Button>
          </Link>
        </div>

        <button
          aria-label="Open menu"
          className="ml-auto inline-flex items-center justify-center rounded-md p-3 lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <img src={menuIcon} alt="Menu" className="h-7 w-7 object-contain" />
        </button>
      </div>

      {/* Mobile menu panel */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-white/10 bg-[#2B2B2B]">
          <nav className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-2">
            <Link
              to="/"
              className="text-white/90 hover:text-white"
              onClick={() => setMobileOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/marketplace"
              className="text-white/90 hover:text-white"
              onClick={() => setMobileOpen(false)}
            >
              Marketplace
            </Link>
            <Link
              to="/rankings"
              className="text-white/90 hover:text-white"
              onClick={() => setMobileOpen(false)}
            >
              Rankings
            </Link>
            <Link
              to="/connect-wallet"
              className="text-white/90 hover:text-white text-left"
              onClick={() => setMobileOpen(false)}
            >
              Connect a wallet
            </Link>
            <Link
              to="/about"
              className="text-white/90 hover:text-white"
              onClick={() => setMobileOpen(false)}
            >
              About
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
