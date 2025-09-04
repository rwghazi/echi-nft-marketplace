import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home.tsx";
import Registration from "./pages/Registration.tsx";
import ErrorPage from "./pages/Error.tsx";
import Artist from "./pages/Artist.tsx";
import NFT from "./pages/NFT.tsx";
import Rankings from "./pages/Rankings.tsx";
import ConnectWallet from "./pages/ConnectWallet.tsx";
import Marketplace from "./pages/Marketplace.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "register", element: <Registration /> },
      { path: "connect-wallet", element: <ConnectWallet /> },
      { path: "artist", element: <Artist /> },
      { path: "nft", element: <NFT /> },
      { path: "rankings", element: <Rankings /> },
      { path: "marketplace", element: <Marketplace /> }
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
