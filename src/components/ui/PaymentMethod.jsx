import "../../styles/payment-method.css";
import masterCardImg from "../../assets/all-images/master-card.jpg"
import paypalImg from "../../assets/all-images/paypal.jpg"


function PaymentMethod() {
  return (
    <>
      <div className="payment">
        <label htmlFor="" className=" d-flex align-items-center gap-3">
          <input type="radio" /> Direct Bank Transfer
        </label>
      </div>
      <div className="payment mt-3">
        <label htmlFor="" className=" d-flex align-items-center gap-3">
          <input type="radio" /> Cheque Payment
        </label>
      </div>
      <div className="payment mt-3 d-flex align-items-center justify-content-between">
        <label htmlFor="" className=" d-flex align-items-center gap-3">
          <input type="radio" /> Master Card
        </label>
        <img src={masterCardImg} alt="master card image" />
      </div>
      <div className="payment mt-3 d-flex align-items-center justify-content-between">
        <label htmlFor="" className=" d-flex align-items-center gap-3">
          <input type="radio" /> Paypal
        </label>
        <img src={paypalImg} alt="paypalImg " />
      </div>
      <div className="payment mt-5 text-end">
        <button className="reserve-btn">Reserve Now</button>
      </div>
    </>
  );
}

export default PaymentMethod
