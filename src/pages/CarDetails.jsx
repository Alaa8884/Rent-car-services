import { useParams } from "react-router-dom";
import Helmet from "../components/helmet/Helmet";
import carData from "../assets/data/carData.js";
import { Col, Container, Row } from "reactstrap";
import "../styles/car-details-page.css";
import Bookingform from "../components/ui/Bookingform.jsx";
import PaymentMethod from "../components/ui/PaymentMethod.jsx";
import { useEffect } from "react";

function CarDetails() {
  const { carName } = useParams();

  const selectedCar = carData.find((item) => item.carName === carName);
  
useEffect(() => {
  window.scrollTo(0, 0);
}, [selectedCar]);


  return (
    <Helmet title={`${selectedCar.carName} details`}>
      <section className="car-details-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="car-details-image">
                <img
                  src={selectedCar.imgUrl}
                  alt={selectedCar.carName}
                  className=" w-100"
                />
              </div>
            </Col>
            <Col lg="6" md="6" sm="12">
              <div className="car-details-content">
                <h2 className="section-title">{selectedCar.carName}</h2>
                <div className="rent-star-info d-flex align-items-center gap-5">
                  <h3 className="rent-price section-title">
                    {selectedCar.price}.00 EGP / Day
                  </h3>
                  <div className="ratings-container d-flex align-items-center gap-3">
                    <span>
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                    </span>
                    <span>({selectedCar.rating} ratings)</span>
                  </div>
                </div>
                <p className="section-description">{selectedCar.description}</p>
                <div className="car-details-info d-flex align-items-center">
                  <span className=" section-description d-flex align-items-center gap-2">
                    <i className="ri-car-line"></i>
                    {selectedCar.model}
                  </span>
                  <span className=" section-description d-flex align-items-center gap-2">
                    <i className="ri-settings-line"></i>
                    {selectedCar.automatic}
                  </span>
                  <span className=" section-description d-flex align-items-center gap-2">
                    <i className="ri-timer-flash-line"></i>
                    {selectedCar.speed}
                  </span>
                </div>
                <div className="car-details-info d-flex align-items-center ">
                  <span className=" section-description d-flex align-items-center gap-2">
                    <i className="ri-map-pin-line"></i>
                    {selectedCar.gps}
                  </span>
                  <span className=" section-description d-flex align-items-center gap-2">
                    <i className="ri-wheelchair-line"></i>
                    {selectedCar.seatType}
                  </span>
                  <span className=" section-description d-flex align-items-center gap-2">
                    <i className="ri-building-2-line"></i>
                    {selectedCar.brand}
                  </span>
                </div>
              </div>
            </Col>

            <Col lg="7" sm="12">
              <div className="booking-info">
                <h4 className="section-title">Booking Information</h4>
                <Bookingform />
              </div>
            </Col>
            <Col lg="5">
              <div className="payment-information">
                <h4 className="section-title">Payment Information</h4>
               <PaymentMethod/>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default CarDetails;
