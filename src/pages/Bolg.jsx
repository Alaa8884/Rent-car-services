import { Container, Row } from "reactstrap";
import Helmet from "../components/helmet/Helmet";
import CommonSection from "../components/ui/CommonSection";
import blogData from "../assets/data/blogData";
import BlogsCard from "../components/ui/BlogsCard";
import { useEffect } from "react";

function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <Helmet title="Blogs">
    <CommonSection title="Blogs" />
    <section className="blogs-page">
      <Container>
        <Row>
          {blogData.map((item, index)=> <BlogsCard item={item} key={index}/>)}
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default Blog