import { useState } from "react";
import Button from "./Button";

const inputClasses =
  "mt-1.5 w-full rounded-lg border border-brand-dark/15 px-4 py-2.5 text-sm outline-none transition-colors duration-200 focus:border-brand-gold";

export default function EnquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-xl border border-brand-gold/40 bg-brand-gold/10 p-6">
        <p className="font-semibold text-brand-dark">Thank you — your enquiry has been received.</p>
        <p className="mt-1 text-sm text-brand-gray">Our export team will reach out to you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <p className="text-sm text-brand-gray">
        Share your requirements and our export team will get back to you within 24 hours.
      </p>
      <div>
        <label className="text-sm font-medium text-brand-dark">Full Name</label>
        <input required type="text" className={inputClasses} />
      </div>
      <div>
        <label className="text-sm font-medium text-brand-dark">Email</label>
        <input required type="email" className={inputClasses} />
      </div>
      <div>
        <label className="text-sm font-medium text-brand-dark">Phone</label>
        <input type="tel" className={inputClasses} />
      </div>
      <div>
        <label className="text-sm font-medium text-brand-dark">Product of Interest</label>
        <select className={inputClasses}>
          <option>Yarn & Raw Cords</option>
          <option>ID Card Tapes & Lanyards</option>
          <option>Shoelaces</option>
          <option>Hoodie Drawcords</option>
          <option>Shorts Waistband Tapes</option>
        </select>
      </div>
      <div>
        <label className="text-sm font-medium text-brand-dark">Message</label>
        <textarea required rows={4} className={inputClasses} />
      </div>
      <Button type="submit" variant="primary" className="w-full">
        Submit Enquiry
      </Button>
    </form>
  );
}
