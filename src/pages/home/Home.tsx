import AboutPage from "../about/AboutPage";
import Banner from "./Banner";
import CoustomerReview from "./CoustomerReview";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Banner />
      <div className="mt-10">
        <AboutPage></AboutPage>
      </div>
      <CoustomerReview></CoustomerReview>
    </div>
  );
}
