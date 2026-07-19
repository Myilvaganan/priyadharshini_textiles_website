import { useState } from "react";
import Button from "./Button";

const inputClasses =
  "mt-1.5 w-full rounded-lg border border-brand-dark/15 px-4 py-2.5 text-sm outline-none transition-colors duration-200 focus:border-brand-gold";

export default function FeedbackForm() {
  const [submitted, setSubmitted] = useState(false);
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-xl border border-brand-gold/40 bg-brand-gold/10 p-6">
        <p className="font-semibold text-brand-dark">Thank you for your feedback!</p>
        <p className="mt-1 text-sm text-brand-gray">We appreciate you taking the time to share it.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <p className="text-sm text-brand-gray">
        Tell us about your experience with our products or service.
      </p>
      <div>
        <label className="text-sm font-medium text-brand-dark">Your Name</label>
        <input required type="text" className={inputClasses} />
      </div>
      <div>
        <label className="text-sm font-medium text-brand-dark">Email</label>
        <input required type="email" className={inputClasses} />
      </div>
      <div>
        <label className="text-sm font-medium text-brand-dark">Rating</label>
        <div className="mt-1.5 flex gap-1.5">
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              type="button"
              aria-label={`Rate ${n} out of 5`}
              onClick={() => setRating(n)}
              className={`h-9 w-9 rounded-full border text-sm font-semibold transition-colors duration-200 ${
                n <= rating
                  ? "border-brand-gold bg-brand-gold text-brand-dark"
                  : "border-brand-dark/15 text-brand-gray hover:border-brand-gold"
              }`}
            >
              {n}
            </button>
          ))}
        </div>
      </div>
      <div>
        <label className="text-sm font-medium text-brand-dark">Your Feedback</label>
        <textarea required rows={4} className={inputClasses} />
      </div>
      <Button type="submit" variant="primary" className="w-full">
        Submit Feedback
      </Button>
    </form>
  );
}
