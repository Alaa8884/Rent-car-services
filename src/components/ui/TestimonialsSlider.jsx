import Slider from "react-slick";
import "../../styles/testimonials-slider.css";
import ava01 from "../../assets/all-images/ava-1.jpg";
import ava02 from "../../assets/all-images/ava-2.jpg";
import ava03 from "../../assets/all-images/ava-3.jpg";
import ava04 from "../../assets/all-images/ava-4.jpg";

function TestimonialsSlider() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonials">
        <p className="section-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, beatae!
          Quibusdam, delectus qui. Id doloremque recusandae tenetur corporis
          architecto quae nesciunt eligendi, alias fugit, mollitia corrupti,
          ipsa exercitationem neque ullam.
        </p>
        <div className="testimonials-info d-flex align-items-center gap-5">
          <img
            src={ava01}
            alt="Testimonials image"
            className=" w-25 h-25 rounded-3"
          />
          <div>
            <p className="testimonials-user-name mb-0 mt-4">User Name</p>
            <p className="testimonials-user-job mb-4">Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonials">
        <p className="section-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, beatae!
          Quibusdam, delectus qui. Id doloremque recusandae tenetur corporis
          architecto quae nesciunt eligendi, alias fugit, mollitia corrupti,
          ipsa exercitationem neque ullam.
        </p>
        <div className="testimonials-info d-flex align-items-center gap-5">
          <img
            src={ava02}
            alt="Testimonials image"
            className=" w-25 h-25 rounded-3"
          />
          <div>
            <p className="testimonials-user-name mb-0 mt-4">User Name</p>
            <p className="testimonials-user-job mb-4">Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonials">
        <p className="section-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, beatae!
          Quibusdam, delectus qui. Id doloremque recusandae tenetur corporis
          architecto quae nesciunt eligendi, alias fugit, mollitia corrupti,
          ipsa exercitationem neque ullam.
        </p>
        <div className="testimonials-info d-flex align-items-center gap-5">
          <img
            src={ava03}
            alt="Testimonials image"
            className=" w-25 h-25 rounded-3"
          />
          <div>
            <p className="testimonials-user-name mb-0 mt-4">User Name</p>
            <p className="testimonials-user-job mb-4">Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonials">
        <p className="section-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, beatae!
          Quibusdam, delectus qui. Id doloremque recusandae tenetur corporis
          architecto quae nesciunt eligendi, alias fugit, mollitia corrupti,
          ipsa exercitationem neque ullam.
        </p>
        <div className="testimonials-info d-flex align-items-center gap-5">
          <img
            src={ava04}
            alt="Testimonials image"
            className=" w-25 h-25 rounded-4"
          />
          <div>
            <p className="testimonials-user-name mb-0 mt-4">User Name</p>
            <p className="testimonials-user-job mb-4">Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
}

export default TestimonialsSlider;
