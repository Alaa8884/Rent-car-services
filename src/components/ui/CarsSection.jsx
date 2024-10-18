import { Col, Container, Row } from "reactstrap";
import CarItem from "./CarItem";
import carData from "../../assets/data/carData.js"
function CarsSection() {
  return (
    <section className="cars-section">
      <Container>
        <Row>
          <Col lg="12" className=" text-center mb-5">
            <h2 className="section-subtitle ">Come with</h2>
            <h3 className="section-title">Hot Offers</h3>
          </Col>
          {carData.slice(0,6).map(car => <CarItem car={car} key={car.id}/>)}
        </Row>
      </Container>
    </section>
  );
}

export default CarsSection
