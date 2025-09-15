import BannerImage from "@/assets/banner.png";
import { Button } from "@/components/ui/button";
export default function Banner() {
  return (
    <div className="w-full h-screen max-w-7xl mx-auto">
      <div className="flex flex-col-reverse  md:flex-row items-center justify-center md:h-screen w-full">
        <div className="flex-1">
          <div className="space-y-4 p-4 sm:p-8 xl:p-0">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold  font-serif ">
              <span> “দ্রুত ও নিরাপদ পার্সেল ডেলিভারি</span>{" "}
              <span>আপনার দোরগোড়ায়”</span>
            </h2>
            <p>
              “আমাদের নির্ভরযোগ্য কুরিয়ার সার্ভিসের মাধ্যমে আপনার পার্সেল পৌঁছে
              দিন নিরাপদে, <br /> দ্রুত এবং ঝামেলাহীনভাবে। লোকাল হোক বা
              লং-ডিস্ট্যান্স—আমরা নিশ্চয়তা দিচ্ছি অন-টাইম ডেলিভারির।”
            </p>
            <Button variant="outline">explore</Button>
          </div>
        </div>
        <div className="flex-1 w-full h-full">
          <img className=" w-full h-full" src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
}
