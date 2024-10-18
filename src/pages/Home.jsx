import HeroSlider from "../components/ui/HeroSlider";
import Helmet from "../components/helmet/Helmet";

function Home() {
  return (
    <Helmet title="Home">
      <section className="p-0 hero-slider-section">
        <HeroSlider />
      </section>
    </Helmet>
  );
}

export default Home;
