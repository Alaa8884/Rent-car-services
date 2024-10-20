import { Col, Container, Row } from "reactstrap";
import blogData from "../../assets/data/blogData"
import BlogsCard from "./BlogsCard";
function BlogSection() {
  return (
    <section className="blogs-section">
      <Container>
        <Row>
          <Col lg="12" className=" text-center mb-5">
            <h2 className="section-subtitle ">Explore our blogs</h2>
            <h3 className="section-title">Latest Blogs</h3>
          </Col>
        </Row>
        <Row>
          {blogData.slice(-3).map((item) => (
            <BlogsCard key={item.id} item={item} />
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default BlogSection
