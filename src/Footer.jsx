import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope} from '@fortawesome/free-regular-svg-icons'; 
import {faPhone, faLocationArrow} from '@fortawesome/free-solid-svg-icons'; 
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return(<footer class=" py-4 mt-5 footer-section">
        <div class="container">
            <div class="row mt-4">
                <div class="col-md-3 mt-5 text-center">
                    <h5 className="fw-bold mb-3">CAR RENTAL</h5>
                    <a href="#" className="text-decoration-none"><p className="div-1-p">Blogs</p></a>
                    <a href="#" className="text-decoration-none"><p className="div-1-p">Cities</p></a>
                    <a href="#" className="text-decoration-none"><p className="div-1-p">How we work</p></a>
                    </div>
                <div class="col-md-3 mt-5 text-center">
                    <h5 className="fw-bold mb-3">ABOUT US</h5>
                    <p>Your trusted partner for luxury car rentals. We offer a wide selection of vehicles to meet all your travel needs, ensuring you travel in style and comfort.</p>
                </div>
                <div class="col-md-3 mt-5 mx-auto text-center">
                    <h5 className="fw-bold mb-3 div-3-contact ">CONTACT US</h5>
                    <div className="mx-auto"></div>
                    <p className="footer-contact-p text-center"><FontAwesomeIcon icon={faEnvelope} className="icon me-2"/> support@carrentals.com</p>
                    <p className="footer-contact-p text-center"><FontAwesomeIcon icon={faPhone}  className="icon me-2"/> +1 (234) 567-8901</p>
                    <p className="footer-contact-p mx-auto"><FontAwesomeIcon icon={faLocationArrow}  className="icon me-2"/> 123 Car Rental Ave, City</p>
                </div>
                <div class="col-md-3 div-4-socials mt-5 text-center">
                    <h5 className="fw-bold mb-3">FOLLOW US</h5>
                    <a href="#" className="text-decoration-none"><FontAwesomeIcon icon={faFacebook} className="icons" /></a><br/>
                    <a href="#" className="text-decoration-none"><FontAwesomeIcon icon={faInstagram} className="icons" /></a><br/>
                    <a href="#" className="text-decoration-none"><FontAwesomeIcon icon={faTwitter} className="icons" /></a>
                </div>
            </div>
            <div class="mt-5">
                <hr className="w-50"/>
                <p className="mt-4 text-center">&copy; 2024 <a href="#" className="text-decoration-none"><span className="footer-span">Car Rentals.</span></a> All rights reserved.</p>
            </div>
        </div>
    </footer>);
}
export default Footer;