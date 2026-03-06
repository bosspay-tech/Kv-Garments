import React from "react";

export default function Contact() {
  return (
    <div className="min-h-[70vh] bg-linear-to-b from-violet-50 via-purple-50 to-white">
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
        {/* Header */}
        <div className="rounded-3xl border border-violet-200 bg-white p-6 shadow-sm">
          <h1 className="text-2xl font-extrabold tracking-tight text-violet-950 sm:text-3xl">
            Contact Us
          </h1>
          <p className="mt-2 text-sm text-violet-700">
            We’re here to help. Reach out to us using the details below.
          </p>
        </div>

        {/* Content */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {/* Company Card */}
          <div className="rounded-3xl border border-violet-200 bg-white p-6 shadow-sm">
            <div className="text-xs font-semibold text-violet-600">COMPANY</div>
            <h2 className="mt-2 text-lg font-extrabold text-violet-950">
              PECIFY INFRA PAYMENT SOLUTION PRIVATE LIMITED
            </h2>

            <div className="mt-5 space-y-4 text-sm text-violet-700">
              <div>
                <div className="text-xs font-semibold text-violet-600">
                  ADDRESS
                </div>
                <p className="mt-1 leading-6">
                  4th Floor, 434, Shiven Square, <br />
                  Pal Road, Opp Swsthik Party Plot, <br />
                  Adajan, Surat, Gujarat - 395009
                </p>
              </div>

              <div>
                <div className="text-xs font-semibold text-violet-600">
                  MOBILE
                </div>
                <a
                  href="tel:+917048179839"
                  className="mt-1 inline-flex items-center gap-2 font-semibold text-violet-950 hover:text-violet-800"
                >
                  +91 7048179839
                </a>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:+917048179839"
                className="inline-flex w-full items-center justify-center rounded-2xl bg-violet-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-400 focus:outline-none focus:ring-4 focus:ring-violet-200"
              >
                Call Now
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  "4th Floor,434, Shiven Square, Pal Road, opp swsthik party plot, Adajan, Surat, Gujarat 395009",
                )}`}
                className="inline-flex w-full items-center justify-center rounded-2xl border border-violet-200 bg-white px-5 py-3 text-sm font-semibold text-violet-700 transition hover:bg-violet-50 focus:outline-none focus:ring-4 focus:ring-violet-100"
              >
                Open in Maps
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-3xl border border-violet-200 bg-white p-6 shadow-sm">
            <div className="text-xs font-semibold text-violet-600">
              SEND A MESSAGE
            </div>
            <h3 className="mt-2 text-lg font-extrabold text-violet-950">
              We’ll get back within 24–48 hours
            </h3>

            <form className="mt-5 space-y-3">
              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-2xl border border-violet-200 bg-white px-4 py-3 text-sm text-violet-950 outline-none transition focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
              />
              <input
                type="text"
                placeholder="Phone number"
                className="w-full rounded-2xl border border-violet-200 bg-white px-4 py-3 text-sm text-violet-950 outline-none transition focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
              />
              <textarea
                rows="5"
                placeholder="Your message"
                className="w-full rounded-2xl border border-violet-200 bg-white px-4 py-3 text-sm text-violet-950 outline-none transition focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
              />

              <button
                type="button"
                className="w-full rounded-2xl bg-violet-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-900 focus:outline-none focus:ring-4 focus:ring-violet-200"
                onClick={() => alert("Info submitted")}
              >
                Send Message
              </button>

              <p className="text-xs text-violet-600">
                Note: This form is UI-only. Connect it to your backend/WhatsApp
                for submissions.
              </p>
            </form>
          </div>
        </div>

        {/* Bottom trust */}
        <div className="mt-8 flex flex-wrap gap-2 text-xs text-violet-700">
          <span className="rounded-full bg-violet-100 px-3 py-1">
            ⏱️ Quick Response
          </span>
          <span className="rounded-full bg-violet-100 px-3 py-1">
            📍 Surat, Gujarat
          </span>
          <span className="rounded-full bg-violet-100 px-3 py-1">
            📞 Call Support
          </span>
        </div>
      </div>
    </div>
  );
}
