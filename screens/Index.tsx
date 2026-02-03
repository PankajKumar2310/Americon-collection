import Hero from "@/components/Hero";
import FeaturedListings from "@/components/FeaturedListings";
import WhyAmericanCollection from "@/components/WhyAmericanCollection";
import CyberTruckService from "@/components/CyberTruckService";
import LibertyHomeowners from "@/components/LibertyHomeowners";
import WhyLibertyBase from "@/components/WhyLibertyBase";
import WorldCupGateway from "@/components/WorldCupGateway";
import TrustBadges from "@/components/TrustBadges";
// import WorldCupNewsletter from "@/components/WorldCupNewsletter";
import WorldCupContext from "@/components/WorldCupContext";
import TheExperience from "@/components/TheExperience";
import CapturedMoments from "@/components/CapturedMoments";
import BookWithConfidence from "@/components/BookWithConfidence";
import FinalCta from "@/components/FinalCta";

const Index = () => {
  return (
    <>
      <Hero />
      <FeaturedListings />
      <WhyAmericanCollection />
      <CyberTruckService />
      <LibertyHomeowners />
      <WhyLibertyBase />
      <WorldCupGateway />
      <TrustBadges />
      {/* <WorldCupNewsletter /> */}
      <WorldCupContext />
      <TheExperience />
      <CapturedMoments />
      <BookWithConfidence />
      <FinalCta />
    </>
  );
};

export default Index;