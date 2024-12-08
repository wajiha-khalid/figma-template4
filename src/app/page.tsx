import Image from "next/image";
import HeroSection from "./components/Hero";
import FeaturedProducts from "./components/Featuredproductsection";
import LatestProducts from "./components/LatestProducts";
import OneMore from "./components/OneMore";
import TrendingProducts from "./components/TrendingProducts";
import Th from "./components/TH";
import BlogSection from "./components/BlogSection";





export default function Home() {
  return (
    <div>

      {/* components */}
    <HeroSection/>
  <FeaturedProducts/>
  <LatestProducts/>
  <OneMore/>
  <TrendingProducts/>
  <Th/>
  
<BlogSection/>
    </div>
      );
}
