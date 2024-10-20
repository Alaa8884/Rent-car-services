import HeroSlider from "../components/ui/HeroSlider";
import Helmet from "../components/helmet/Helmet";
import { Col, Container, Row } from "reactstrap";
import FindCarForm from "../components/ui/FindCarForm";
import AboutUsSection from "../components/ui/AboutUsSection";
import ServicesSection from "../components/ui/ServicesSection";
import CarsSection from "../components/ui/CarsSection";
import BecomeDriverSection from "../components/ui/BecomeDriverSection";
import Testimonials from "../components/ui/Testimonials-section";

function Home() {
  return (
    <Helmet title="Home">
      <section className="p-0 hero-slider-section">
        <HeroSlider />
        <div className="hero-form mt-5">
          <Container className="form-container">
            <Row>
              <Col lg="4" md="4" sm="12" className=" px-3">
                <div className="find-left">
                  <h2>Find your best car here</h2>
                </div>
              </Col>
              <Col lg="8" md="8" sm="12">
                <FindCarForm />
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      <AboutUsSection />
      <ServicesSection />
      <CarsSection />
      <BecomeDriverSection />
      <Testimonials/>
    </Helmet>
  );
}

export default Home;
