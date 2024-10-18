import { Col, Container, Row } from "reactstrap";
import "../../styles/services-list.css";
import ServicesData from "../../assets/data/serviceData.js";
import ServiceItem from "./ServiceItem.jsx";
function ServicesSection() {
  return (
    <section className="services-section">
      <Container>
        <Row>
          <Col lg="12" className=" mb-5 text-center">
            <h2 className="section-subtitle ">See our</h2>{" "}
            <h3 className="section-title">Popular Services</h3>
          </Col>

          {ServicesData.map((item) => (
            <ServiceItem item={item} key={item.id} />
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default ServicesSection;
