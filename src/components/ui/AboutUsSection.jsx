import { Col, Container, Row } from "reactstrap";
import aboutImg from "../../assets/all-images/cars-img/bmw-offer.png";
import "../../styles/about-section.css"

function AboutUsSection() {
  return (
    <section className="about-us-section">
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12">
            <div className="about-section-content">
              <h2 className="section-subtitle">About Us</h2>
              <h1 className="section-title">Welcome to car rent service</h1>
              <p className="section-description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatum blanditiis esse accusantium dignissimos labore
                laborum. Veniam, corporis mollitia temporibus, in quaerat vero
                deleniti amet dolorem repudiandae, pariatur nam dolore! Impedit
                neque sit ad temporibus quam similique dolor ipsam praesentium
                sunt.
              </p>
              <div className="about-section-item d-flex align-items-center">
                <p className="section-description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i>
                  <span> Lorem ipsum dolar sit.</span>
                </p>
                <p className="section-description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i>
                  <span> Lorem ipsum dolar sit.</span>
                </p>
              </div>
              <div className="about-section-item d-flex align-items-center">
                <p className="section-description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i>
                  <span> Lorem ipsum dolar sit.</span>
                </p>
                <p className="section-description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i>
                  <span> Lorem ipsum dolar sit.</span>
                </p>
              </div>
            </div>
          </Col>{" "}
          <Col lg="6" md="6" sm="12">
            <div className="about-img">
              <img
                src={aboutImg}
                alt="about us section image"
                className=" w-100"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AboutUsSection;
