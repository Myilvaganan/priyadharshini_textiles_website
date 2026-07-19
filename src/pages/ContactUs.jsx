import { useState } from "react";
import PageHeaderBanner from "../components/PageHeaderBanner";
import Button from "../components/Button";
import Reveal from "../components/Reveal";
import { images } from "../data/images";
import { IconMapPin, IconPhone, IconMail, IconClock } from "../components/icons";

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <PageHeaderBanner
        title="Contact Us"
        breadcrumbItems={[{ label: "Contact Us" }]}
        image={images.warehouseInterior}
      />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {[
              {
                icon: <IconMapPin className="h-6 w-6" />,
                title: "Our Address",
                body: (
                  <p className="mt-2 text-sm text-brand-gray">
                    SIPCOT Industrial Complex, Perundurai, Erode, Tamil Nadu 638052, India
                  </p>
                ),
              },
              {
                icon: <IconPhone className="h-6 w-6" />,
                title: "Call Us",
                body: (
                  <>
                    <p className="mt-2 text-sm text-brand-gray">+91 424 267 1234</p>
                    <p className="text-sm text-brand-gray">+91 98765 43210</p>
                  </>
                ),
              },
              {
                icon: <IconMail className="h-6 w-6" />,
                title: "Email Us",
                body: (
                  <>
                    <p className="mt-2 text-sm text-brand-gray">info@priyadharshinitextiles.com</p>
                    <p className="text-sm text-brand-gray">exports@priyadharshinitextiles.com</p>
                  </>
                ),
              },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 100}>
                <div className="rounded-xl bg-brand-offwhite p-6 text-center shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md">
                  <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-gold/15 text-brand-gold">
                    {c.icon}
                  </span>
                  <h3 className="font-serif text-lg font-semibold text-brand-dark">{c.title}</h3>
                  {c.body}
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
            <Reveal>
              <p className="eyebrow">Home &gt; Contact Us</p>
              <h2 className="mt-3 font-serif text-3xl font-bold text-brand-dark">
                Send Us an Enquiry
              </h2>
              <p className="mt-3 text-brand-gray">
                Fill in your requirements and our export team will get back to you within 24
                hours.
              </p>

              {submitted ? (
                <div className="mt-8 rounded-xl border border-brand-gold/40 bg-brand-gold/10 p-6">
                  <p className="font-semibold text-brand-dark">
                    Thank you — your enquiry has been received.
                  </p>
                  <p className="mt-1 text-sm text-brand-gray">
                    Our team will reach out to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label className="text-sm font-medium text-brand-dark">Full Name</label>
                      <input
                        required
                        type="text"
                        className="mt-1.5 w-full rounded-lg border border-brand-dark/15 px-4 py-2.5 text-sm outline-none transition-colors duration-200 focus:border-brand-gold"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-brand-dark">Company Name</label>
                      <input
                        type="text"
                        className="mt-1.5 w-full rounded-lg border border-brand-dark/15 px-4 py-2.5 text-sm outline-none transition-colors duration-200 focus:border-brand-gold"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-brand-dark">Email</label>
                      <input
                        required
                        type="email"
                        className="mt-1.5 w-full rounded-lg border border-brand-dark/15 px-4 py-2.5 text-sm outline-none transition-colors duration-200 focus:border-brand-gold"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-brand-dark">Phone</label>
                      <input
                        type="tel"
                        className="mt-1.5 w-full rounded-lg border border-brand-dark/15 px-4 py-2.5 text-sm outline-none transition-colors duration-200 focus:border-brand-gold"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-brand-dark">Product of Interest</label>
                    <select className="mt-1.5 w-full rounded-lg border border-brand-dark/15 px-4 py-2.5 text-sm outline-none transition-colors duration-200 focus:border-brand-gold">
                      <option>Yarn</option>
                      <option>Greige Fabric</option>
                      <option>Dyed & Printed Fabric</option>
                      <option>Home Textiles</option>
                      <option>Technical Textiles</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-brand-dark">Message</label>
                    <textarea
                      required
                      rows={4}
                      className="mt-1.5 w-full rounded-lg border border-brand-dark/15 px-4 py-2.5 text-sm outline-none transition-colors duration-200 focus:border-brand-gold"
                    />
                  </div>
                  <Button type="submit" variant="primary">
                    Submit Enquiry
                  </Button>
                </form>
              )}
            </Reveal>

            <Reveal delay={150} className="flex flex-col gap-6">
              <div className="overflow-hidden rounded-xl shadow-lg">
                <iframe
                  title="Factory Location Map"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=77.55%2C11.24%2C77.65%2C11.31&layer=mapnik&marker=11.2758%2C77.5949"
                  className="h-72 w-full border-0"
                  loading="lazy"
                />
              </div>
              <div className="rounded-xl bg-brand-green p-6 text-white">
                <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-brand-gold-light">
                  <IconClock className="h-5 w-5" />
                </span>
                <h3 className="font-serif text-lg font-semibold">Business Hours</h3>
                <p className="mt-2 text-sm text-white/80">Monday – Saturday: 9:00 AM – 6:30 PM IST</p>
                <p className="text-sm text-white/80">Sunday: Closed</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
