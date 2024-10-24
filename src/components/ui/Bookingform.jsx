import { Form, FormGroup } from "reactstrap";
import "../../styles/booking-form.css";

function Bookingform() {

  function handleSubmit(e) {
    e.preventDefault
  }

  return (
    <Form className="bookings-form" onSubmit={handleSubmit}>
      <FormGroup className="booking-input d-inline-block me-4 mb-5">
        <input
          required
          type="text"
          name="first-name"
          id="first-name"
          placeholder="Your First Name"
        />
      </FormGroup>
      <FormGroup className="booking-input d-inline-block ms-1 mb-5">
        <input
          required
          type="text"
          name="last-name"
          id="last-name"
          placeholder="Your Last Name"
        />
      </FormGroup>
      <FormGroup className="booking-input d-inline-block me-4 mb-5">
        <input
          required
          type="email"
          name="email"
          id="email"
          placeholder="Your Email Address"
        />
      </FormGroup>
      <FormGroup className="booking-input d-inline-block ms-2 mb-5">
        <input
          required
          type="number"
          name="phone-number"
          id="phone-number"
          placeholder="Your Phone Number"
        />
      </FormGroup>{" "}
      <FormGroup className="booking-input d-inline-block me-4 mb-5">
        <input
          required
          type="text"
          name="from-address"
          id="from-address"
          placeholder="From Address"
        />
      </FormGroup>
      <FormGroup className="booking-input d-inline-block ms-2 mb-5">
        <input
          required
          type="text"
          name="to-address"
          id="to-address"
          placeholder="To Address"
        />
      </FormGroup>
      <FormGroup className="booking-input d-inline-block me-4 mb-5">
        <select name="person-number" id="person-number">
          <option value="1 person">1 person</option>
          <option value="2 person">2 person</option>
          <option value="3 person">3 person</option>
          <option value="4 person">4 person</option>
          <option value="5+ person">5+ person</option>
        </select>
      </FormGroup>
      <FormGroup className="booking-input d-inline-block ms-2 mb-5">
        <select name="luggage-number" id="luggage-number">
          <option value="1 luggage">1 luggage</option>
          <option value="2 luggage">2 luggage</option>
          <option value="3 luggage">3 luggage</option>
          <option value="4 luggage">4 luggage</option>
          <option value="5+ luggage">5+ luggage</option>
        </select>
      </FormGroup>
      <FormGroup className="booking-input d-inline-block me-4 mb-5">
        <input required type="date" name="journey-date" id="date" />
      </FormGroup>
      <FormGroup className="booking-input d-inline-block ms-2 mb-5">
        <input required type="time" name="time-picker" id="time" />
      </FormGroup>
      <FormGroup>
        <textarea
          name="extra-information"
          rows={5}
          placeholder="Write some addtion information"
        ></textarea>
      </FormGroup>
    </Form>
  );
}

export default Bookingform;
