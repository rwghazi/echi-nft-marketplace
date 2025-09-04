import nft1 from "../assets/nfts/nft-1.png";
import nft2 from "../assets/nfts/nft-2.png";
import nft3 from "../assets/nfts/nft-3.png";

import ava1 from "../assets/avatars/ava-1.png";
import ava2 from "../assets/avatars/ava-2.png";
import ava3 from "../assets/avatars/ava-3.png";

export interface TrendingNFT {
  image: string;
  title: string;
  creator: string;
  avatar: string;
  price: string;
  bid: string;
}

export const trendingNFTs: TrendingNFT[] = [
  {
    image: nft1,
    title: "Life on Edena",
    creator: "John Doe",
    avatar: ava1,
    price: "100",
    bid: "100"
  },
  {
    image: nft2,
    title: "Edena Life",
    creator: "John Doe",
    avatar: ava2,
    price: "100",
    bid: "100"
  },
  {
    image: nft3,
    title: "Distant Galaxy",
    creator: "John Doe",
    avatar: ava3,
    price: "100",
    bid: "100"
  }
];

export default trendingNFTs;
