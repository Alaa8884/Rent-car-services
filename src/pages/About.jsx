import { Col, Container, Row } from "reactstrap";
import Helmet from "../components/helmet/Helmet";
import AboutUsSection from "../components/ui/AboutUsSection";
import CommonSection from "../components/ui/CommonSection";
import BecomeDriverSection from "../components/ui/BecomeDriverSection";
import "../styles/about-page.css"
import MemberItem from "../components/ui/MemberItem";
import aboutPagImage from '../assets/all-images/drive.jpg'
import { useEffect } from "react";


function About() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Helmet title="About">
      <CommonSection title="About" />
      <AboutUsSection aboutClass="aboutPage"/>
      <section className="about-page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about-page-img">
                <img
                  src={aboutPagImage}
                  alt="About page image"
                  className=" w-100 rounded-3"
                />
              </div>
            </Col>
            <Col lg="6" md="6" sm="12">
              <div className="about-page-content">
                <h3 className="section-title">
                  We Are Committed To Provide Safe Ride Solutions
                </h3>
                <p className="section-description">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Eveniet veniam assumenda aperiam accusantium ex autem
                  perferendis repellendus nostrum delectus. Nemo et dolore est
                  tempore rem minima adipisci magni dolorum ipsam.
                </p>
                <p className="section-description">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Eveniet veniam assumenda aperiam accusantium ex autem
                  perferendis repellendus nostrum delectus. Nemo et dolore est
                  tempore rem minima adipisci magni dolorum ipsam.
                </p>
                <div className="need-help-content d-flex align-items-center gap-4">
                  <span>
                    <i className="ri-phone-line"></i>
                  </span>
                  <div className="need-help">
                    <h4 className="section-subtitle">Need Any Help?</h4>
                    <h5>+00123456789</h5>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <BecomeDriverSection />

      <section className="our-member-section">
        <Container>
          <Row>
            <Col lg="12" className=" text-center mb-5">
              <h2 className="section-subtitle ">Experts</h2>
              <h3 className="section-title">Our Members</h3>
            </Col>
          </Row>
          <Row>
              <MemberItem
              />
          
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default About
