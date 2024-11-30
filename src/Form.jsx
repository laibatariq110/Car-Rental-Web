import {useState} from 'react';
import { faCar} from '@fortawesome/free-solid-svg-icons'; 
import { faLocationDot} from '@fortawesome/free-solid-svg-icons'; 
import { faCalendarDay} from '@fortawesome/free-solid-svg-icons'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import the FontAwesomeIcon component

const Form = () => {

    const [pickupDate, setPickupDate] = useState("");
    const [dropoffDate, setDropoffDate] = useState("");


    const handlePickupDateChange = (event) => {
        const selectedPickupDate = event.target.value;
        setPickupDate(selectedPickupDate);

        if(dropoffDate && dropoffDate <= selectedPickupDate){
            setDropoffDate("")
        }
    }

return(
    <section className="container mt-5 custom-form-section">
        <h1 className="form-h1 mb-4 fw-bold">Book a car</h1>
        <form>
            <div className="row">

            <div className="col-md-4 mb-3">
              <FontAwesomeIcon icon={faCar} />  <label for="carType" className="form-label fw-bold">Car Type</label>
                <select id="carType" class="form-select form-control-lg rounded-0">
                    <option selected>SUV</option>
                    <option value="convertible">Convertible</option>
                    <option value="sedan">Sedan</option>
                    <option value="hatchback">Hatchback</option>
                    <option value="coupe">Coupe</option>
                    <option value="truck">Truck</option>
                </select>
            </div>

            <div className="col-md-4 mb-3">
              <FontAwesomeIcon icon={faLocationDot} />  <label for="pickupLocation" className="form-label fw-bold">Pick-up location</label>
                <select id="pickupLocation" class="form-select form-control-lg rounded-0" > 
                    <option selected>New York</option>
                    <option value="losangeles">Los Angeles</option>
                    <option value="chicago">Chicago</option>
                    <option value="houston">Houston</option>
                    <option value="miami">Miami</option>
                    <option value="boston">Boston</option>
                </select>
            </div>

            <div className="col-md-4 mb-3">
            <FontAwesomeIcon icon={faLocationDot} /> <label for="dropoffLocation" className="form-label fw-bold">Drop-off location</label>
                <select id="dropoffLocation" class="form-select form-control-lg rounded-0" >
                    <option selected>New York</option>
                    <option value="losangeles">Los Angeles</option>
                    <option value="chicago">Chicago</option>
                    <option value="houston">Houston</option>
                    <option value="miami">Miami</option>
                    <option value="boston">Boston</option>
                </select>
            </div>
            </div>

            <div className="row">
            <div className="col-md-4 mb-3">
            <FontAwesomeIcon icon={faCalendarDay} /> <label for="pickupDate" className='fw-bold'>Pick-up Date</label>
                <input id="pickupDate" type="date" className="form-control form-control-lg rounded-0" value={pickupDate} onChange={handlePickupDateChange}/>
            </div>

            <div className="col-md-4 mb-3">
            <FontAwesomeIcon icon={faCalendarDay} /> <label for="dropoffDate" className='fw-bold'>Drop-off Date</label>
                <input id="dropoffDate" type="date" className="form-control form-control-lg rounded-0" value={dropoffDate} onChange={(e) => setDropoffDate(e.target.value)} min={pickupDate}/>
            </div>

            <div className='col-md-4 d-flex align-items-center mt-1'>
            <button className=" btn btn-lg custom-color-search rounded-0 custom-offset-shadow-search w-100 " type="button">Search</button>
            </div>
              

            </div>
        </form>
    </section>
);
}
export default Form;