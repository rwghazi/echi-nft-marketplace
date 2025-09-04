import cat1 from "../assets/categories/cat-1.png";
import cat2 from "../assets/categories/cat-2.png";
import cat3 from "../assets/categories/cat-3.png";
import cat4 from "../assets/categories/cat-4.png";

import bgcat1 from "../assets/categories/bgcat-1.png";
import bgcat2 from "../assets/categories/bgcat-2.png";
import bgcat3 from "../assets/categories/bgcat-3.png";
import bgcat4 from "../assets/categories/bgcat-4.png";

export interface Category {
  image: string;
  backgroundImage: string;
  name: string;
}

export const categories: Category[] = [
  {
    image: cat1,
    backgroundImage: bgcat1,
    name: "Art"
  },
  {
    image: cat2,
    backgroundImage: bgcat2,
    name: "Music"
  },
  {
    image: cat3,
    backgroundImage: bgcat3,
    name: "Photography"
  },
  {
    image: cat4,
    backgroundImage: bgcat4,
    name: "Sports"
  },
  {
    image: cat1,
    backgroundImage: bgcat1,
    name: "Technology"
  },
  {
    image: cat2,
    backgroundImage: bgcat2,
    name: "Video"
  },
  {
    image: cat3,
    backgroundImage: bgcat3,
    name: "Metaverse"
  },
  {
    image: cat4,
    backgroundImage: bgcat4,
    name: "Gaming"
  }
];

export default categories;
