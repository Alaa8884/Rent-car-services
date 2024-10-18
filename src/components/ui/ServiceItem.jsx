/* eslint-disable react/prop-types */
import { Col } from "reactstrap";

function ServiceItem({ item }) {
  return (
    <Col lg="4" md="4" sm="6" xs="12" className=" mb-3 mt-3 px-3">
      <div className="service-item d-flex flex-column ">
        <span className=" mb-4 d-inline-block">
          <i className={item.icon} />
        </span>
        <h4>{item.title}</h4>
        <p className="section-description">{item.desc}</p>
      </div>
    </Col>
  );
}

export default ServiceItem;
