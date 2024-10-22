import { Link } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "../components/helmet/Helmet";
import CommonSection from "../components/ui/CommonSection";

import "../styles/contact.css";

const socialLinks = [
  {
    url: "#",
    icon: "ri-facebook-line",
  },
  {
    url: "#",
    icon: "ri-instagram-line",
  },
  {
    url: "#",
    icon: "ri-linkedin-line",
  },
  {
    url: "#",
    icon: "ri-twitter-line",
  },
];

function Contact() {
  return (
    <Helmet title="Contact">
      <CommonSection title="Contact" />
      <section className="contact-page-section">
        <Container>
          <Row>
            <Col lg="7" md="7">
              <h6 className="section-title mb-4">Get In Touch</h6>

              <Form>
                <FormGroup className="contact-form ">
                  <Input placeholder="Your Name" type="text" />
                </FormGroup>
                <FormGroup className="contact-form">
                  <Input placeholder="Email" type="email" />
                </FormGroup>
                <FormGroup className="contact-form">
                  <textarea
                    rows="5"
                    placeholder="Message"
                    className="textarea"
                  ></textarea>
                </FormGroup>

                <button className=" contact-btn" type="submit">
                  Send Message
                </button>
              </Form>
            </Col>

            <Col lg="5" md="5">
              <div className="contact-info">
                <h6 className="section-title">Contact Information</h6>
                <p className="section-description mb-0">
                  136 Str, Maadi, Cairo, Egypt
                </p>
                <div className="contact-info-content d-flex align-items-center gap-2">
                  <h6 className=" mb-0">Phone:</h6>
                  <p className="section-description mb-0">+201006541237</p>
                </div>

                <div className="contact-info-content d-flex align-items-center gap-2">
                  <h6 className="mb-0">Email:</h6>
                  <p className="section-description mb-0">example@gmail.com</p>
                </div>

                <h6 className="section-title mt-4">Follow Us</h6>

                <div className=" d-flex align-items-center gap-4 mt-3">
                  {socialLinks.map((item, index) => (
                    <Link
                      to={item.url}
                      key={index}
                      className="social-link-icon"
                    >
                      <i className={item.icon}></i>
                    </Link>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default Contact;
