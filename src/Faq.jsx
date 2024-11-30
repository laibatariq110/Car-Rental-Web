

const Faq = () => {
    return(<section className="container faq-section">
        
        <div className="text-center">
            <h5 className="small-heading">FAQ</h5>
            <h2 className="big-heading">Frequently Asked Questions</h2>
            <p className="faq-description">Got questions? We’ve got answers! Here are some of the most common inquiries we receive.</p>
        </div>

<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      How do I book a rental car?
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Booking a car is easy! Simply browse through our available options, select the car you want, and click the "Book Now" button. You’ll be guided through a simple booking process that includes choosing your rental dates and completing the payment.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        What documents are required to rent a car?
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      You’ll need a valid driver’s license, a government-issued ID, and a credit or debit card for the security deposit. International drivers may need additional documents, such as an international driving permit.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Are there any age restrictions for renting a car?
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Yes, renters must be at least 21 years old to rent a car. Some car categories may require the renter to be 25 years or older.
      </div>
    </div>
  </div>
</div>

</section>);
}
export default Faq;