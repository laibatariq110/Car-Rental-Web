import React, {useState} from 'react';

const Selection = () => {
    
    const [activeBtn, setActiveBtn] = useState("BMW M4");

    const carOptions = [
        "BMW M4",
        "Ferrari SF90",
        "Porsche Taycan",
        "Rolls Royce Cullinan",
        "Lamborghini Aventador",
        "Audi R8"
    ];
    const carData = {
        "BMW M4": {
            image: "/bmw.png",
            pricePerDay: 150,
            details: {
            Brand: "BMW",
            Model: "M4",
            Year: "2023",
            Transmission: "Automatic",
            Seats: "4",
            Doors: "2",
            Fuel: "Petrol",
            }
        },

        "Ferrari SF90": {
            image: "/ferrari.png",
            pricePerDay: 200,
            details: {
            Brand: "Ferrari",
            Model: "SF90",
            Year: "2023",
            Transmission: "Automatic",
            Seats: "2",
            Doors: "2",
            Fuel: "Hybrid",
            }
        },

        "Porsche Taycan": {
            image: "/porsche.png",
            pricePerDay: 180,
            details: {
            Brand: "Porsche",
            Model: "Taycan",
            Year: "2019",
            Transmission: "Automatic",
            Seats: "4",
            Doors: "4",
            Fuel: "Electric",
            }
        },

        "Lamborghini Aventador": {
            image: "/lambo.png",
            pricePerDay: 280,
            details: {
            Brand: "Lamborghini",
            Model: "Aventador",
            Year: "2011",
            Transmission: "Automatic",
            Seats: "2",
            Doors: "2",
            Fuel: "Gasoline",
            }
        },

        "Rolls Royce Cullinan": {
            image: "/rollsroyce.png",
            pricePerDay: 300,
            details: {
            Brand: "Rolls Royce",
            Model: "Cullinan",
            Year: "2018",
            Transmission: "Automatic",
            Seats: "5",
            Doors: "5",
            Fuel: "Petrol",
            }
        },
        "Audi R8": {
            image: "/audi.png",
            pricePerDay: 160,
            details: {
            Brand: "Audi",
            Model: "Cullinan",
            Year: "2018",
            Transmission: "Automatic",
            Seats: "5",
            Doors: "5",
            Fuel: "Petrol",
            }
        }
    };

    const selectedCar = carData[activeBtn];

return(<section className="container custom-selec-container">
    <p className="fw-bold fs-5 text-center">Vehicle Selections</p>
    <h2 className="fw-bold fs-1 text-center ">Our Premium Fleet</h2>
    <p className="text-center mt-4">Explore a range of top-tier vehicles, perfect for your next journey or business venture, offering style, comfort, and performance.</p>

    <div className="container mt-5">
        <div className="row">
            <div className="col-md-3">
                {carOptions.map((car)=>(
                    <button
                    key={car}
                    className= {`btn btn-lg rounded-0 custom-clr-selection-btn w-100 fw-bold mt-2 custom-height-btn ${activeBtn === car ? "custom-clr-selection-active" : ""}`}
                    onClick={() => setActiveBtn(car)}
                    >
                        {car}
                    </button>
))}
            </div>
            <div className="col-md-6 ">
                <img src={selectedCar.image} alt={selectedCar} className='custom-selec-img-size'/>
            </div>
            <div className="col-md-3">
                <div className='price-per-day p-3'>
                    <span className='fw-bold fs-2 cutsom-color-price'>${selectedCar.pricePerDay}</span>
                    <span className='cutsom-color-price fs-3'>/</span>
                    <span className='cutsom-color-price fs-3'>day</span>
                </div>

                <div className='info-div-select mt-4'>
                    <table className='table table-bordered'>
                        <tbody>
                            {Object.entries(selectedCar.details).map(([key, value]) => (
                                <tr key={key}>
                                    <th>{key}</th>
                                    <td>{value}</td>
                                </tr>
                            ) )}
                        </tbody>
                    </table>
                </div>

                <button className='select-book-now-btn btn btn-lg rounded-0 custom-offset-shadow custom-clr-book-now-btn'>Book now!</button>
                
            </div>
        </div>
    </div>    
</section>);
}
export default Selection;