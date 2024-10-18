/* eslint-disable react/prop-types */
import { Col } from "reactstrap";
import "../../styles/car-item.css"
import { Link } from "react-router-dom";


function CarItem({ car }) {
  const { carName, imgUrl, model, price, speed, automatic } = car;
  return (
    <Col lg="4" md="6"  xs="12" className=" px-3 h-100">
      <div className="car-item">
        <div className="car-image">
          <img src={imgUrl} alt={`${carName} image`} className="w-100" />
        </div>
        <div className="car-item-content mt-5">
          <h4 className="section-title text-center">{carName}</h4>
          <h5 className="rent-price text-center">{price} Egp / Day</h5>
          <div className="car-info d-flex align-items-center justify-content-between">
            <p className=" d-flex align-items-center gap-2 m-0">
              <i className="ri-car-line"></i>
              <span>{model}</span>
            </p>
            <p className=" d-flex align-items-center gap-1 m-0">
              <i className="ri-settings-5-line"></i>
              <span>{automatic}</span>
            </p>
            <p className=" d-flex align-items-center gap-1 m-0">
              <i className="ri-timer-flash-line"></i>
              <span>{speed}</span>
            </p>
          </div>
          <div className="car-item-button">
            <button className="car-item-btn rent-btn w-50">
              <Link to={`/cars/${carName}`}>Rent</Link>
            </button>
            <button className="car-item-btn details-btn  w-50">
              {" "}
              <Link to={`/cars/${carName}`}>Details</Link>
            </button>
          </div>
        </div>
      </div>
    </Col>
  );
}

export default CarItem;
