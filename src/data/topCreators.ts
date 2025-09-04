import ava1 from "../assets/avatars/ava-1.png";
import ava2 from "../assets/avatars/ava-2.png";
import ava3 from "../assets/avatars/ava-3.png";

export interface TopCreator {
  id: number;
  rank: number;
  name: string;
  image: string;
  volume: string;
  change: string;
}

export const topCreators: TopCreator[] = [
  {
    id: 1,
    rank: 1,
    name: "Keepitreal",
    image: ava1,
    volume: "34.53 ETH",
    change: "+1.43%"
  },
  {
    id: 2,
    rank: 2,
    name: "DigiLab",
    image: ava2,
    volume: "28.10 ETH",
    change: "+2.15%"
  },
  {
    id: 3,
    rank: 3,
    name: "GravityOne",
    image: ava3,
    volume: "19.85 ETH",
    change: "+0.89%"
  },
  {
    id: 4,
    rank: 4,
    name: "Juanie",
    image: ava2,
    volume: "15.22 ETH",
    change: "-0.45%"
  },
  {
    id: 5,
    rank: 5,
    name: "BlueWhale",
    image: ava1,
    volume: "12.70 ETH",
    change: "+3.21%"
  },
  {
    id: 6,
    rank: 6,
    name: "GreenTurtle",
    image: ava3,
    volume: "9.99 ETH",
    change: "+1.67%"
  },
  {
    id: 7,
    rank: 7,
    name: "RedFox",
    image: ava2,
    volume: "8.45 ETH",
    change: "-1.23%"
  },
  {
    id: 8,
    rank: 8,
    name: "SilverWolf",
    image: ava1,
    volume: "7.30 ETH",
    change: "+0.34%"
  }
];

export default topCreators;
