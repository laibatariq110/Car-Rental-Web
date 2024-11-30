import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faClock, faDollarSign } from '@fortawesome/free-solid-svg-icons';

const BookingAssistance = () => {

    return(<section className="container my-5 booking-assistance-container">
        <p className="text-center mt-5 fw-bold fs-5">Start Your Adventure Today</p>
        <h2 className="fw-bold text-center fs-1">Effortless Car Rental Experience</h2>
        <div className="row custom-margin-top">
            <div className="col-md-4">
                <div className="icon-bcg"><FontAwesomeIcon icon={faCar} size='3x' /></div>
                <h3 className='custom-color-icons fw-bold fs-5 mt-5 text-center'>Wide Selection of Cars</h3>
                <p className="text-center">
                    Choose from our diverse fleet of well-maintained vehicles, ranging from economy to luxury models.
                </p>
            </div>

            <div className="col-md-4">
                <div className="icon-bcg"> <FontAwesomeIcon icon={faClock} size='3x'/></div> 
                <h3 className='mt-3 custom-color-icons fw-bold fs-5 mt-5 text-center'>24/7 Availability</h3>
                <p className="text-center">
                Our services are available around the clock to accommodate your travel needs at any time.
                </p>
            </div>

            <div className="col-md-4">
            <div className="icon-bcg"> <FontAwesomeIcon icon={faDollarSign} size='3x'/></div>
                <h3 className='mt-3 custom-color-icons fw-bold fs-5 mt-5 text-center'>Affordable Rates</h3>
                <p className="text-center">We offer competitive pricing with no hidden fees, ensuring you get the best value for your money.
                </p>
            </div>
        </div>
    </section>);
}

export default BookingAssistance;