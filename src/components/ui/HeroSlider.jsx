import { Link } from "react-router-dom";
import Slider from "react-slick";
import { Container } from "reactstrap";
import "../../styles/hero-slider.css";

function HeroSlider() {
  const settings = {
    fade: true,
    speed: 2000,
    autoplaySpeed: 4000,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };

  return (
    <Slider {...settings} className="hero-slider">
      <div className="slider-item slider-item-01 mt-0">
        <Container>
          <div className="slider-content">
            <h4 className="text-light">For Rent 10000 Egp per day</h4>
            <h1 className="text-light">Reserve Now and Get 50% off</h1>
            <button className="btn-reserve">
              <Link to="/cars">Reserve Now</Link>
            </button>
          </div>
        </Container>
      </div>
      <div className="slider-item slider-item-02 mt-0">
        <Container>
          <div className="slider-content">
            <h4 className="text-light">For Rent 7000 Egp per day</h4>
            <h1 className="text-light">Reserve Now and Get 50% off</h1>
            <button className="btn-reserve">
              <Link to="/cars">Reserve Now</Link>
            </button>
          </div>
        </Container>
      </div>
      <div className="slider-item slider-item-03 mt-0">
        <Container>
          <div className="slider-content">
            <h4 className="text-light">For Rent 12000 Egp per day</h4>
            <h1 className="text-light">Reserve Now and Get 50% off</h1>
            <button className="btn-reserve">
              <Link to="/cars">Reserve Now</Link>
            </button>
          </div>
        </Container>
      </div>
    </Slider>
  );
}

export default HeroSlider;
