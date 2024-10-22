import { Link, useParams } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import "../styles/blog-details-page.css";
import blogData from "../assets/data/blogData";
import userImage from "../assets/all-images/ava-1.jpg";

function BlogDetails() {
  const { blogId } = useParams();
  const selectedBlog = blogData.find((blog) => blog.id == blogId);
  return (
    <section className="blog-details-section">
      <Container>
        <Row>
          <Col lg="8" md="8" sm="12">
            <img
              src={selectedBlog.imgUrl}
              alt={`${selectedBlog.title} image`}
              className=" w-100"
            />
            <h2 className="section-title p-0">{selectedBlog.title}</h2>
            <div className="blog-publisher d-flex align-items-center gap-5  p-0">
              <div className="author-name d-flex align-items-center gap-1">
                <span>
                  <i className="ri-user-line"></i> {selectedBlog.author}
                </span>
              </div>
              <span className="blog-date d-flex align-items-center gap-2">
                <i className="ri-calendar-line"></i> {selectedBlog.date}
              </span>
              <span className="blog-time  d-flex align-items-center gap-2">
                <i className="ri-time-line"></i> {selectedBlog.time}
              </span>
            </div>
            <p className="section-description">{selectedBlog.description}</p>
            <h3 className=" fw-normal">
              {" "}
              <blockquote>{selectedBlog.quote}</blockquote>
            </h3>
            <p className="section-description">{selectedBlog.description}</p>
            <div className="users-comment">
              <h4 className="section-title">3 Comments</h4>
              <div className="single-comment">
                <div className=" d-flex gap-4">
                  <img src={userImage} alt="user photo" />
                  <div>
                    <h5 className="section-title">David Visa</h5>
                    <p className="section-description mb-0">14 July, 2022</p>
                    <p className="section-description">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eos nobis totam eius laborum molestias itaque minima
                      distinctio, quae velit tempore!
                    </p>
                    <span className="replay-button d-flex align-items-center gap-2">
                      <i className="ri-reply-line"></i>Replay
                    </span>
                  </div>
                </div>
              </div>
              <div className="leave-comment">
                <h4 className="section-title">Leave a Comment</h4>
                <p className="section-description">
                  You must sign-in to make or comment a post
                </p>
                <form className="leave-comment-form">
                  <div className=" d-flex align-items-center justify-content-between mb-4">
                    <input
                      type="text"
                      name="full-name"
                      placeholder="Full Name"
                    />
                    <input type="email" name="email" placeholder="Your Email" />
                  </div>
                  <textarea
                    name="comment"
                    placeholder="Your Comment"
                    rows={5}
                  ></textarea>
                  <button className="comment-btn">Post a Comment</button>
                </form>
              </div>
            </div>
          </Col>

          <Col lg="4" md="4" sm="12">
            <div className="recent-post">
              <h3 className="section-title">Recent Post</h3>

              {blogData.slice(-3).map((item) => (
                <div className="recent-blog-post mb-4" key={item.id}>
                  <div className="recent-blog-item d-flex gap-3">
                    <img src={item.imgUrl} alt="" className="w-25 rounded-2" />
                    <h6>
                      <Link to={`/blogs/${item.title}`}>{item.title}</Link>
                    </h6>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default BlogDetails;
