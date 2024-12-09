import Image from "next/image";
import HeroSection from "./components/Hero";
import FeaturedProducts from "./components/Featuredproductsection";
import LatestProducts from "./components/LatestProducts";
import OneMore from "./components/OneMore";
import TrendingProducts from "./components/TrendingProducts";

import BlogSection from "./components/BlogSection";
import Discount from "./components/Discount";
import TopCategories from "./components/TopCategories";
import Newslater from "./components/Newslater";
import Th from "./components/TH";





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
  <Discount/>
  <TopCategories/>
  <Newslater/>
<BlogSection/>
    </div>
      );
}
