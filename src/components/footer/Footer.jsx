import { Link } from "react-router-dom";
import { Col, Container, ListGroup, ListGroupItem, Row } from "reactstrap";
import "../../styles/footer.css";


const quickLinks = [
  {
    diaplay: "About",
    path: "/about",
  },
  {
    diaplay: "Privacy Policy",
    path: "/privacy",
  },
  {
    diaplay: "Cars",
    path: "/cars",
  },
  {
    diaplay: "Blog",
    path: "/blog",
  },
  {
    diaplay: "Contact",
    path: "/contact",
  },
];

function Footer() {
  const date = new Date();
  const year = date.getFullYear()
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <h1 className="company-logo footer-logo">
              <Link to="/home" className=" d-flex align-items-center gap-3">
                <i className="ri-car-line"></i>
                <span>
                  Rent Car <br />
                  Service
                </span>
              </Link>
            </h1>
            <p className="footer-logo-content my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur, distinctio, itaque reiciendis ab cupiditate harum ex
              quam veniam, omnis expedita animi quibusdam obcaecati mollitia?
              Delectus et ad illo recusandae temporibus?
            </p>
          </Col>
          <Col lg="2" md="4" sm="6">
            <div className=" mb-4">
              <h5 className="footer-tilte footer-quick-links">Quick Links</h5>
              <ListGroup>
                {quickLinks.map((link, index) => (
                  <ListGroupItem key={index} className=" p-0 mt-4 quick-link">
                    <Link to={link.path}>{link.diaplay}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>
          <Col lg="3" md="4" sm="6">
            {" "}
            <div className=" mb-4">
              <h5 className="footer-tilte footer-contact">Head Office</h5>
              <p className="office-info">136 Str, Maadi, Cairo, Egypt</p>
              <p className="office-info">Phone: +201006541237</p>
              <p className="office-info">Email: alaa_test@gmail.com</p>
              <p className="office-info">Office Time: 10am - 11pm</p>
            </div>
          </Col>
          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer-tilte footer-newsletter">Newsletter</h5>
              <p className="office-subscribe mt-0 ">Subscribe our newsletter</p>
              <div className="newsletter d-flex align-items-center justify-content-between">
                <input
                  type="email"
                  name="user-newsletter"
                  id="user-newsletter"
                  placeholder="Write your Email"
                />
                <span>
                  <i className="ri-send-plane-line"></i>
                </span>
              </div>
            </div>
          </Col>
          <Col lg="12">
            <div className="footer-bottom">
              <p className="section-description d-flex align-items-center justify-content-center gap-2">
                <i className="ri-copyright-line"></i>
                Copyright {year}, Developed by Alaa Mohammed youssef [ Frontend Developer ].
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
