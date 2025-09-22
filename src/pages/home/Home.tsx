import AboutPage from "../about/AboutPage";
import Banner from "./Banner";
import CoustomerReview from "./CoustomerReview";

export default function Home() {
  return (
    <div>
      <Banner />
      <AboutPage></AboutPage>
      <CoustomerReview></CoustomerReview>
    </div>
  );
}
