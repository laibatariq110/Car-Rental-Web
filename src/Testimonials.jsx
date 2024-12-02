import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar} from '@fortawesome/free-solid-svg-icons'; 
import { faStarHalfStroke} from '@fortawesome/free-solid-svg-icons'; 

const Testimonals = () => {

 return(
<section className="testimonials-section">
    <div className="container text-center">

        <h5 className="small-heading text-uppercase mt-5">Testimonials</h5>
        <h2 className="big-heading fw-bold">What Our Customers Say</h2>
        <p className="testimonials-description">Hear what our satisfied customers have to say about their experience with us.</p>

        <div className="carousel slide" data-bs-ride="carousel">
        <div id="testimonialsCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="testimonial-review">
                        <img src="./review-pic1.png" alt="Profile Picture" className='testimonial-pfp'/>
                        <h5 className='testimonial-name'>Sofie Garcia</h5>
                        <p className='testimonial-text'>"Amazing service! The car was in perfect condition and the process was smooth. Highly recommended!"</p>
                        <div className="testimonial-stars">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        </div>
                    </div>
                </div>

                <div className="carousel-item">
                    <div className="testimonial-review">
                        <img src="./review-pic2.png" alt="Profile Picture" className='testimonial-pfp'/>
                        <h5 className='testimonial-name'>Liam James</h5>
                        <p className='testimonial-text'>“Excellent service and very reliable cars. The booking process was seamless, and the car was spotless. Highly recommend!”</p>
                        <div className="testimonial-stars">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStarHalfStroke} />
                        </div>
                    </div>
                </div>

                <div className="carousel-item">
                    <div className="testimonial-review">
                        <img src="./review-pic3.png" alt="Profile Picture" className='testimonial-pfp'/>
                        <h5 className='testimonial-name'>Ava Brown</h5>
                        <p className='testimonial-text'>“Had a great experience renting a luxury car. Customer service was top-notch, and the prices were fair. Will definitely use them again.”</p>
                        <div className="testimonial-stars">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        </div>
                    </div>
                </div>

                <div className="carousel-item">
                    <div className="testimonial-review">
                        <img src="./review-pic4.png" alt="Profile Picture" className='testimonial-pfp'/>
                        <h5 className='testimonial-name'>Harry Edwards</h5>
                        <p className='testimonial-text'>“Easy to book, great variety of cars, and very affordable rates. The staff was super friendly and helpful. Five stars from me!”</p>
                        <div className="testimonial-stars">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStarHalfStroke} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>

    <button className='carousel-control-prev' type='button' data-bs-target="#testimonialsCarousel" data-bs-slide="prev">
    <span className='carousel-control-prev-icon' aria-hidden="true"></span>
    <span className='visually-hidden'>Previous</span>
</button>
<button className='carousel-control-next' type='button' data-bs-target="#testimonialsCarousel" data-bs-slide="next">
    <span className='carousel-control-next-icon' aria-hidden="true"></span>
    <span className='visually-hidden'>Next</span>
</button>

</section>);
}
export default Testimonals;