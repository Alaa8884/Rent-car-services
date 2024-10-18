import { useNavigate } from "react-router-dom";
import "../styles/privacy.css"


function PrivacyPolicy() {
  const navigate = useNavigate()
  return (
    <section className="privacy d-flex align-items-center justify-content-center flex-column">
      <h2 className=" mb-4">This page is under construction</h2>
      <p>We apologize for any inconvenience. Please check back soon.</p>
      <button onClick={()=> navigate(-1)}>Go Back</button>
    </section>
  );
}

export default PrivacyPolicy
