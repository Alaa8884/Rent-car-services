import { Col, Container, Row } from "reactstrap";
import TestimonialsSlider from "./TestimonialsSlider";
import "../../styles/testimonials-slider.css";


function Testimonials() {
  return (
    <section className="testimonials-section">
      <Container>
        <Row>
          <Col lg="12" className=" text-center mb-5">
            <h2 className="section-subtitle ">Our clients says</h2>
            <h3 className="section-title">Testimonials</h3>
          </Col>
        </Row>
        <Row>
          <TestimonialsSlider/>
        </Row>
      </Container>
    </section>
  );
}
export default Testimonials;