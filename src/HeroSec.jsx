import './styles/style.scss';

const HeroSec = () => {

    return(<section className='container'>
        <div className='row'>
        <div className='col-md-6 d-flex flex-column text-md-left text-center  col1-custom'>
            <p className='hero-sec-question'>Looking for the Perfect Ride?</p>
            <h1 className='hero-sec-h1'>Experience Top-Notch Car Rentals with <span className='custom-color-word'>Unmatched</span> Convenience</h1>
            <p className='hero-sec-description'>Explore a wide range of cars available at your fingertips. Hassle-free booking, premium service, and affordable prices.</p>
            <div className="btn-group" role="group" aria-label="Buttons">
            <button className='btn custom-color-explore rounded-0'>Explore Cars</button>
            <button className=' btn btn-dark rounded-0 custom-learn-more'>Learn More &gt; </button>
            </div>
        </div>
        <div className='col-md-6'>
            <img src='./hero-sec-car.png' alt='Car Image' className='img-fluid'></img>
        </div>
    </div>
    </section>
    );
    
    
}

     
export default HeroSec;