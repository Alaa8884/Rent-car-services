import { useNavigate } from "react-router-dom";
import "../styles/under-construction.css";

function BecomeDriver() {
  const navigate = useNavigate();
  return (
    <section className="under-construction-section d-flex align-items-center justify-content-center flex-column">
      <h2 className=" mb-4">This page is under construction</h2>
      <p>We apologize for any inconvenience. Please check back soon.</p>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </section>
  );
}

export default BecomeDriver;
