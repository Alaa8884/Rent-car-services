import { useNavigate } from "react-router-dom";
import "../styles/under-construction.css";

function ErrorPage() {
  const navigate = useNavigate();
  return (
    <section className="under-construction-section d-flex align-items-center justify-content-center flex-column">
      <h2 className=" mb-4">Sorry!! Some thing went wrong</h2>
      <p>We apologize for any inconvenience. Please Try again later or click go back below.</p>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </section>
  );
}

export default ErrorPage;
