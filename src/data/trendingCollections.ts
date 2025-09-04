import nft1 from "../assets/nfts/nft-1.png";
import nft2 from "../assets/nfts/nft-2.png";
import nft3 from "../assets/nfts/nft-3.png";
import nft4 from "../assets/nfts/nft-4.png";
import nft5 from "../assets/nfts/nft-5.png";
import nft6 from "../assets/nfts/nft-6.png";
import nft7 from "../assets/nfts/nft-7.png";

export interface TrendingCollection {
  id: number;
  title: string;
  creator: string;
  mainImage: string;
  smallImages: string[];
}

export const trendingCollections: TrendingCollection[] = [
  {
    id: 1,
    title: "DSGN Animals",
    creator: "MrFox",
    mainImage: nft2,
    smallImages: [nft3, nft4]
  },
  {
    id: 2,
    title: "Magic Mushrooms",
    creator: "Shroomie",
    mainImage: nft5,
    smallImages: [nft6, nft7]
  },
  {
    id: 3,
    title: "Disco Machines",
    creator: "BeKind2Robots",
    mainImage: nft1,
    smallImages: [nft2, nft3]
  }
];

export default trendingCollections;
