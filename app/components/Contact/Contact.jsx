"use client";

import { useState } from "react";
import { Mail, MapPin, Clock, Loader2, Send } from "lucide-react";
import Reveal from "../Reveal";

const details = [
  { icon: MapPin, label: "Address", lines: ["Nairobi, Kenya"] },
  {
    icon: Mail,
    label: "Email",
    lines: ["help.vuka@yahoo.com"],
    href: "mailto:help.vuka@yahoo.com",
  },
  {
    icon: Clock,
    label: "Office Hours",
    lines: ["Monday - Friday", "9:00 AM - 5:00 PM"],
  },
];

const fieldClass =
  "w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-[0.95rem] text-[#072540] outline-none transition placeholder:text-slate-400 focus:border-[#009450] focus:bg-white focus:ring-4 focus:ring-[#009450]/15";

export default function Contact() {
  const [status, setStatus] = useState("");
  const [isError, setIsError] = useState(false);
  const [sending, setSending] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mzdnpkdq", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        form.reset();
        setIsError(false);
        setStatus("Message sent successfully!");
        setTimeout(() => setStatus(""), 4000);
      } else {
        setIsError(true);
        setStatus("Something went wrong. Please try again.");
      }
    } catch {
      setIsError(true);
      setStatus("Network error. Please try again.");
    }

    setSending(false);
  }

  return (
    <section id="contact" className="v-section v-section-dark">
      <div className="v-glow v-glow-a" aria-hidden="true" />
      <div className="v-glow v-glow-b" aria-hidden="true" />

      <div className="v-container">
        <Reveal>
          <div className="v-head">
            <span className="v-eyebrow">Get In Touch</span>
            <h2 className="v-title">
              Contact <span className="v-accent">Us</span>
            </h2>
            <p className="v-lead">
              Have a question or want to learn more about Vuka? We’d be happy to
              hear from you.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative grid overflow-hidden rounded-3xl bg-white shadow-2xl lg:grid-cols-12">
            <span className="absolute left-0 top-0 z-10 h-1 w-full bg-gradient-to-r from-[#009450] via-[#34d399] to-[#009450]" />

            <div className="border-b border-slate-200 bg-slate-50 p-8 sm:p-12 lg:col-span-5 lg:border-b-0 lg:border-r">
              <h3 className="v-h3 text-[#072540]">Get in Touch</h3>
              <p className="v-card-text mb-10">
                Reach us any way that suits you. We reply to every message.
              </p>

              <ul className="m-0 flex list-none flex-col gap-7 p-0">
                {details.map(({ icon: Icon, label, lines, href }) => (
                  <li key={label} className="group flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#009450]/10 text-[#009450] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#009450] group-hover:text-white">
                      <Icon size={20} />
                    </span>
                    <div>
                      <h4 className="text-base font-bold leading-tight text-[#072540]">
                        {label}
                      </h4>
                      {lines.map((line) =>
                        href ? (
                          <a
                            key={line}
                            href={href}
                            className="block text-[0.95rem] text-slate-500 transition-colors hover:text-[#009450]"
                          >
                            {line}
                          </a>
                        ) : (
                          <p
                            key={line}
                            className="m-0 text-[0.95rem] text-slate-500"
                          >
                            {line}
                          </p>
                        )
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 sm:p-12 lg:col-span-7">
              <h3 className="v-h3 text-[#072540]">Send Us a Message</h3>
              <p className="v-card-text mb-8">
                Fill in the form below and we will get back to you.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="flex flex-col gap-2 text-sm font-bold text-[#072540]">
                    Name
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                      className={fieldClass}
                    />
                  </label>
                  <label className="flex flex-col gap-2 text-sm font-bold text-[#072540]">
                    Email
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      required
                      className={fieldClass}
                    />
                  </label>
                </div>

                <label className="flex flex-col gap-2 text-sm font-bold text-[#072540]">
                  Message
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Your Message"
                    required
                    className={`${fieldClass} resize-none`}
                  />
                </label>

                <button
                  type="submit"
                  disabled={sending}
                  className="v-btn w-full"
                >
                  {sending ? (
                    <>
                      <Loader2 size={18} className="animate-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send size={17} />
                    </>
                  )}
                </button>
              </form>

              {status && (
                <p
                  role="status"
                  className={`mt-4 text-sm font-bold ${
                    isError ? "text-red-500" : "text-[#009450]"
                  }`}
                >
                  {status}
                </p>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
