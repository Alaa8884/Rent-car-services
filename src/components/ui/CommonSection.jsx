/* eslint-disable react/prop-types */
import { Container } from "reactstrap";
import "../../styles/common-section.css"

function CommonSection({ title }) {
  return (
    <section className="common-section">
      <Container>
        <h1 className="text-light text-center">{title}</h1>
      </Container>
    </section>
  );
}

export default CommonSection
