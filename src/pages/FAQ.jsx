

const FAQ = () => {
    return (
        <div className="mx-20 mt-10 lg:mx-40">
            <h2 className="text-2xl text-center font-bold mb-10 lg:text-3xl">Frequently Asked Questions</h2>
            <div className="collapse collapse-plus bg-base-200 mb-5">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title text-xl font-medium ">
                Do you offer e-books?
                </div>
                <div className="collapse-content">
                    <p>Yes, we do! In addition to physical books, we offer a wide selection of e-books in various formats. You can browse and purchase e-books directly from our website.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200 mb-5">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                What is your return policy?
                </div>
                <div className="collapse-content">
                    <p>We offer a hassle-free return policy. You can return any unopened and undamaged books within 30 days of purchase for a full refund. Please refer to our dedicated Returns & Refunds page for detailed information.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                How can I track my order?
                </div>
                <div className="collapse-content">
                    <p>Once your order is shipped, you will receive a confirmation email with a tracking number. You can use this tracking number to follow your order progress on the courier website. You can also log in to your account to view your order status.</p>
                </div>
            </div>
        </div>
    );
};

export default FAQ;