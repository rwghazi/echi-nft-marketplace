import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function RootLayout() {
  const location = useLocation();

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Routes that need full width (no max-w wrapper)
  const fullScreenRoutes = ["/register", "/connect-wallet", "/artist", "/nft"];
  const isFullScreen = fullScreenRoutes.includes(location.pathname);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {isFullScreen ? (
          <Outlet />
        ) : (
          <div className="max-w-6xl mx-auto px-4 py-6">
            <Outlet />
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
