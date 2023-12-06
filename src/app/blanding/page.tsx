import TabsSection from "@/components/blanding/TabsSection";
import HeroSection from "@/components/blanding/HeroSection";
import FeatureSection from "@/components/blanding/FeatureSection";
import DownloadsSection from "@/components/blanding/DownloadSection";
import FAQSection from "@/components/blanding/FAQSection";
import { tabsInfo } from "@/lib/data";

function BlandingPage() {
  return (
    <main className="mb-2 mt-10 flex min-h-screen flex-col gap-28 md:mx-10">
      <HeroSection />

      <FeatureSection />

      <TabsSection tabsInfo={tabsInfo} />

      <DownloadsSection />

      <FAQSection />
    </main>
  );
}

export default BlandingPage;
