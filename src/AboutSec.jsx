import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRoad, faEye, faBalanceScale, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const AboutSec = () => {

    return (
      <section className="about-us-sec text-center mt-5">
        <h5 className="fs-5 fw-bold mb-4">ABOUT US</h5>
        
        {/* Mission Section */}
        <div className='icons-about-sec' ><FontAwesomeIcon icon={faRoad} size='3x'/></div>
        <h5 className="fs-2 fw-bold">Mission</h5>
        <p className="mx-5 mb-5">
          At <span className="span-about-sec">Car Rentals</span>, we provide a seamless car rental experience with a wide selection of vehicles to match your style and needs. Whether you're traveling for business, leisure, or a special occasion, our team ensures that you drive away with comfort and confidence.
          <br /><br />
          With years of industry experience, we pride ourselves on excellent customer service, competitive pricing, and flexible rental terms. Your journey is our priority—wherever the road takes you, we'll be there to make it smooth and memorable.
        </p>
        
        {/* Vision Section */}
        <div className='icons-about-sec '><FontAwesomeIcon icon={faEye} size='3x'/></div>
        <h5 className="fs-2 fw-bold">Vision</h5>
        <p className="mx-5 mb-5">
          Our vision is to become the leading car rental service worldwide, recognized for innovation, sustainability, and customer loyalty. We strive to continually improve our services and expand our fleet to meet the evolving needs of modern travelers.
        </p>

        {/* Values Section */}
        <div className='icons-about-sec'><FontAwesomeIcon icon={faBalanceScale} size='3x'/></div>
        <h5 className="fs-2 fw-bold">Our Values</h5>
        <p className="mx-5 mb-5">
          We believe in integrity, customer focus, and accountability. Our core values guide every interaction we have with our clients. From our transparency in pricing to our dedication to providing top-quality vehicles, we aim to build lasting relationships based on trust and satisfaction.
        </p>

        {/* Why Choose Us Section */}
        <div className='icons-about-sec' ><FontAwesomeIcon icon={faThumbsUp} size='3x'/></div>
        <h5 className= "fs-2 fw-bold">Why Choose Us</h5>
        <p className="mx-5 mb-5">
          With a commitment to delivering exceptional service, we offer a fleet of luxury, economy, and utility vehicles to suit all needs. Our round-the-clock support and flexible booking options make us the top choice for discerning travelers. Choose Elite Car Rentals for reliability, convenience, and a premium driving experience.
        </p>
      </section>
    );
};

export default AboutSec;
