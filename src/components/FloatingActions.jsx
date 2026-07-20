import { useState } from "react";
import Modal from "./Modal";
import FeedbackForm from "./FeedbackForm";
import EnquiryForm from "./EnquiryForm";
import { useContent } from "../context/ContentContext";
import { IconMessageCircle, IconSend, IconPhone } from "./icons";

export default function FloatingActions() {
  const [open, setOpen] = useState(null);
  const { content } = useContent();
  const phone = content.contact.phones[0];

  return (
    <>
      <div className="fixed right-4 top-1/2 z-40 flex -translate-y-1/2 flex-col gap-3 sm:right-6">
        <a
          href={`tel:${phone.replace(/[^\d+]/g, "")}`}
          aria-label={`Call us at ${phone}`}
          className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-brand-green text-white shadow-lg transition-all duration-200 ease-out hover:scale-110 hover:bg-brand-dark sm:h-14 sm:w-14"
        >
          <IconPhone className="h-5 w-5 sm:h-6 sm:w-6" />
          <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-md bg-brand-dark px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100 sm:block">
            Call {phone}
          </span>
        </a>
        <button
          type="button"
          onClick={() => setOpen("feedback")}
          aria-label="Give feedback"
          className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-brand-dark text-white shadow-lg transition-all duration-200 ease-out hover:scale-110 hover:bg-brand-green sm:h-14 sm:w-14"
        >
          <IconMessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
          <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-md bg-brand-dark px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100 sm:block">
            Feedback
          </span>
        </button>
        <button
          type="button"
          onClick={() => setOpen("enquiry")}
          aria-label="Send an enquiry"
          className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-brand-gold text-brand-dark shadow-lg transition-all duration-200 ease-out hover:scale-110 hover:bg-brand-gold-light sm:h-14 sm:w-14"
        >
          <IconSend className="h-5 w-5 sm:h-6 sm:w-6" />
          <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-md bg-brand-dark px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100 sm:block">
            Enquiry
          </span>
        </button>
      </div>

      {open === "feedback" && (
        <Modal title="Share Your Feedback" onClose={() => setOpen(null)}>
          <FeedbackForm />
        </Modal>
      )}
      {open === "enquiry" && (
        <Modal title="Send an Enquiry" onClose={() => setOpen(null)}>
          <EnquiryForm />
        </Modal>
      )}
    </>
  );
}
