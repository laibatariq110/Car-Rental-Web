

const ContactSec = () => {

    return(<section className="contact-us-sec">
        <form className="mt-5">
        <h5 className="fs-5 fw-bold mb-4 mt-2 text-center">CONTACT US</h5>
        <div class="mb-3">
            <label for="name" class="form-label fw-bold">Name</label>
            <input required  type="text" class="form-control" id="name" placeholder="Enter your name"/>
        </div>
        <div class="mb-3">
            <label for="email" class="form-label fw-bold">Email</label>
            <input required  type="email" class="form-control" id="email" placeholder="Enter your email"/>
        </div>
        <div class="mb-3">
            <label for="phone" class="form-label fw-bold">Phone Number</label>
            <input required  type="tel" pattern="[0-9]{10}" class="form-control" id="phone" placeholder="Enter your phone number"/>
        </div>
        <div class="mb-3">
            <label for="message" class="form-label fw-bold">Message</label>
            <textarea class="form-control" id="message" rows={4} placeholder="Your message..."></textarea>
        </div>
        <button type="submit" class="btn custom-btn-clr rounded-0 fw-bold ">Submit</button>
        </form>
    </section>);
}
export default ContactSec;