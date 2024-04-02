import BasicApiCalls from "@/components/BasicApiCalls";
import ChefSection from "@/components/ChefSection";
import CustomerReviewSection from "@/components/CustomerReviewSection";
import HomepageSection1 from "@/components/HomepageSection1";
import HomepageSection2 from "@/components/HomepageSection2";
import HungryBannerSection from "@/components/HungryBannerSection";
import PopularMenuSection from "@/components/PopularMenuSection";
import TheFooter from "@/components/TheFooter";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HomepageSection1 />
      <HomepageSection2 />
      <PopularMenuSection />
      <ChefSection />
      <CustomerReviewSection />
      <HungryBannerSection />
    </>
  );
}
