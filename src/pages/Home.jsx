import HeroSlider from "../components/ui/HeroSlider";
import Helmet from "../components/helmet/Helmet";
import { Col, Container, Row } from "reactstrap";
import FindCarForm from "../components/ui/FindCarForm";
import AboutUsSection from "../components/ui/AboutUsSection";
import ServicesSection from "../components/ui/ServicesSection";
import CarsSection from "../components/ui/CarsSection";
import BecomeDriverSection from "../components/ui/BecomeDriverSection";
import Testimonials from "../components/ui/Testimonials-section";
import BlogSection from "../components/ui/BlogSection";

function Home() {
  return (
    <Helmet title="Home">
      <section className="p-0 hero-slider-section">
        <HeroSlider />
        <div className="hero-form">
          <Container className="form-container">
            <Row>
              <Col lg="4" md="4" sm="12" className=" ">
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
      <Testimonials />
      <BlogSection/>
    </Helmet>
  );
}

export default Home;
