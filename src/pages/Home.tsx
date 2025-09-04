import Hero from "../components/sections/Hero";
import TrendingCollections from "../components/sections/TrendingCollections";
import TopCreators from "../components/sections/TopCreators";
import Categories from "../components/sections/Categories";
import Discover from "../components/sections/Discover";
import Highlight from "../components/sections/Highlight";
import HowItWorks from "../components/sections/HowItWorks";
import Subscription from "../components/sections/Subscription";

export default function Home() {
  return (
    <div className="py-10 overflow-x-hidden">
      {/* Hero Section */}
      <Hero />

      {/* Trending Collections */}
      <div className="mt-10">
        <TrendingCollections />
      </div>

      {/* Top Creators */}
      <div className="mt-10">
        <TopCreators />
      </div>

      {/* Categories */}
      <div className="mt-10">
        <Categories />
      </div>

      {/* Discover */}
      <div className="mt-10">
        <Discover />
      </div>

      {/* Highlight Section */}
      <div className="mt-10">
        <Highlight />
      </div>

      {/* How It Works Section */}
      <div className="mt-10">
        <HowItWorks />
      </div>

      {/* Subscription Section */}
      <div className="mt-10">
        <Subscription />
      </div>

    </div>
  );
}
