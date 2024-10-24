import { useCallback, useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import Helmet from "../components/helmet/Helmet";
import CommonSection from "../components/ui/CommonSection";
import "../styles/cars-page.css"
import CarItem from "../components/ui/CarItem";
import carData from "../assets/data/carData";


function CarList() {
  const [sortedBy, setSortedBy] = useState("default");
  
  const sorted = useCallback(() => {
    if (sortedBy === "default") return;

    carData.sort((a, b) => {
      if (sortedBy === "low-rent") {
        return a.price - b.price;
      } else if (sortedBy === "high-rent") {
        return b.price - a.price;
      }
    });
  }, [sortedBy]);

  sorted();

  const handleSortChange = (e) => {
    setSortedBy(e.target.value);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <Helmet title="Cars List">
      <CommonSection title="Cars List" />
      <section className="cars-page-section">
        <Container>
          <Row>
            <Col lg="12" md="12">
              <div className="select-cars-page d-flex align-items-center gap-4">
                <span className=" d-flex align-items-center gap-2">
                  <i className="ri-sort-asc"></i>Sort By
                </span>
                <select
                  name="sort-rent-price"
                  value={sortedBy}
                  onChange={handleSortChange}
                >
                  <option value="default">Default</option>
                  <option value="low-rent">Low to high</option>
                  <option value="high-rent">High to low</option>
                </select>
              </div>
            </Col>
            {carData.map((car, index) => (
              <CarItem car={car} key={index} />
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default CarList;
