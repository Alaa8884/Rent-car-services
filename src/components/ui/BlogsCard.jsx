/* eslint-disable react/prop-types */
import { Col } from "reactstrap";
import "../../styles/blogs-card.css";
import { Link } from "react-router-dom";

function BlogsCard({ item }) {
  const { id, title, author, date, time, imgUrl, description } = item;
  return (
    <Col lg="4" md="6" sm="6">
      <div className="blog-card">
        <img src={imgUrl} alt={`${title} blog image`} className=" w-100" />
        <div className="blog-card-content">
          <Link to={`/blog/${id}`} className="section-title">
            {title}
          </Link>
          <p className="section-description">
            {description.split(" ").slice(0, 17).join(" ")}
          </p>
          <Link to={`/blog/${id}`} className="read-more">
            Read More
          </Link>
          <div className="blog-card-author-info d-flex align-items-center justify-content-between">
            <div className="author-name d-flex align-items-center gap-1">
              <span>
                <i className="ri-user-line"></i> {author}
              </span>
            </div>
            <div className="blog-date-time d-flex align-items-center gap-4">
              <span className="blog-date d-flex align-items-center gap-2">
                <i className="ri-calendar-line"></i> {date}
              </span>
              <span className="blog-time  d-flex align-items-center gap-2">
                <i className="ri-time-line"></i> {time}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
}

export default BlogsCard;
