import StoryDownloader from "@/app/components/StoryDownloader";
import HowToDownload from "@/app/components/HowToDownload";
import Features from "@/app/components/Features";
import Supported from "@/app/components/Supported";
import ProTips from "@/app/components/ProTips";
import ReadOurBlogs from "@/app/components/ReadOurBlogs";
import TikTokTools from "./components/TikTokTools";
import AlternativeTools from "./components/AlternativeTools";
import FAQ from "./components/FAQQuestion";
import DownloadCTA from "./components/DownloadCTA";
export default function Home() {
  return (
    <>
      <StoryDownloader />
      <HowToDownload />
      <Features />
      <Supported />
      <ProTips />
      <ReadOurBlogs />
      <TikTokTools />
      <AlternativeTools />
      <FAQ />
      <DownloadCTA />
    </>
  );
}