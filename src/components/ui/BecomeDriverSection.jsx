import { Col, Container, Row } from "reactstrap";
import "../../styles/become-driver-section.css"
import driverImage from "../../assets/all-images/cars-img/toyota-offer-2.png"
import { Link } from "react-router-dom";

function BecomeDriverSection() {
  return (
    <section className="become-driver-section">
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12">
            <div className="become-driver-image">
              <img
                src={driverImage}
                alt="become driver section image"
                className=" w-100"
              />
            </div>
          </Col>
          <Col lg="6" md="6" sm="12">
            <h2>Do You Want to Earn With Us? So Don&apos;t Be Late</h2>
            <button className="become-driver-btn"><Link to="/becomeDriver">Become a Driver</Link></button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default BecomeDriverSection
