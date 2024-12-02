import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar} from '@fortawesome/free-solid-svg-icons'; 
import { faHeadset} from '@fortawesome/free-solid-svg-icons'; 
import { faDollarSign} from '@fortawesome/free-solid-svg-icons'; 

const WhyUsSec = () => {

    return(
        <>
    <div className="banner mt-5">
        <h1 className=" display-lg-2 p-4 text-center fw-bold">Luxury Cars, Unbeatable Prices!</h1>
        <p className=" fw-bold text-center mb-2">Experience <span>top-tier</span> vehicles at prices you can afford</p>
    </div>
        
        <img src="./3cars.png" alt="Cars picture" className="mt-5 why-us-above-pic w-75 mx-auto d-block" />

        <div className="container why-us-div mt-5 text-md-start text-center">

            <div className="row">
                <div className="col-md-6">
                    <h4 className="why-us-h4 text-uppercase fw-bold fs-5">
                    Why Choose Us
                    </h4>
                    <h2 className="fs-1 why-us-h2 fw-bold" >The ultimate car rental experience</h2>
                    <p className="why-us-p">
                    Discover a premium car rental service that combines luxury, comfort, and affordability. Our fleet of top-tier vehicles is designed to meet all your needs, whether for business or leisure. Enjoy unmatched quality and customer service when you choose us.
                    </p>
                    <button className="custom-btn-why-us fw-bold btn rounded-0 btn-sm">Explore Now!</button>
                </div>

                <div className="col-md-6 mt-md-0 mt-4">
                    
                    <div className='row mb-4'>

                        <div className='col-md-3 d-flex align-items-center '>
                        <div className='icon-bcg'><FontAwesomeIcon icon={faCar} size='3x' /></div> 
                        </div>

                        <div className='col-md-9 custom-col-md-10'>
                        <h5 className="fw-bold fs-5 mt-3">Premium Vehicles</h5>
                        <p>Our premium cars are well-maintained and offer a smooth driving experience.</p>
                        </div>
                    </div>

                    <div className='row mb-4'>

                        <div className='col-md-3 d-flex align-items-center '>
                        <div className='icon-bcg'><FontAwesomeIcon icon={faHeadset} size='3x'/></div>
                        </div>

                        <div className='col-md-9 custom-col-md-10'>
                        <h5 className="fw-bold fs-5 mt-3">24/7 Support</h5>
                        <p>We provide 24/7 customer support to ensure your satisfaction at all times.</p>
                        </div>
                    </div>

                    <div className='row mb-4'>

                        <div className='col-md-3 d-flex align-items-center '>
                        <div className='icon-bcg'><FontAwesomeIcon icon={faDollarSign} size='3x'/></div>
                        </div>

                        <div className='col-md-9 custom-col-md-10'>
                        <h5 className="fw-bold fs-5 mt-3">Affordable Rates</h5>
                        <p>Affordable rates with flexible rental options to suit your budget and schedule.</p>
                        </div>
                    </div>

                  
               </div>
               </div>
        
        </div>
        </>
);
}


export default WhyUsSec;