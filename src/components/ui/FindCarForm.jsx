import { Form, FormGroup } from "reactstrap";
import "../../styles/find-car-form.css"
function FindCarForm() {
  return (
    <Form className="form">
      <div className=" d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form-group">
          <input
            type="text"
            name="from-address"
            id="from-address"
            placeholder="From Address"
          />
        </FormGroup>

        <FormGroup className="form-group">
          <input
            type="text"
            name="to-address"
            id="to-address"
            placeholder="to Address"
          />
        </FormGroup>
        <FormGroup className="form-group">
          <input type="date" name="journey-date" id="journey-date" />
        </FormGroup>
        <FormGroup className="form-group">
          <input
            type="time"
            name="journey-time"
            id="journey-time"
            placeholder="Journey Time"
          />
        </FormGroup>
        <FormGroup className="select-group">
          <select name="car-type" id="car-type">
            <option value="Ac car">Ac Car</option>
            <option value="Non Ac car">Non Ac Car</option>
          </select>
        </FormGroup>
        <FormGroup className="form-group">
          <button className="find-btn" type="submit">
            Find Car
          </button>
        </FormGroup>
      </div>
    </Form>
  );
}

export default FindCarForm
