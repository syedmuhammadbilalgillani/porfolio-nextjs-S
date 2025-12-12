"use client";

import { Icon } from "@iconify/react";
import { useState, FormEvent } from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import SocialLinks from "../SocialLinks/SocialLinks";
import "./Contact.scss";

interface SocialLinkItem {
  link: string;
  icon: string;
  title: string;
}

interface ContactProps {
  data: {
    title: string;
    text: string;
    subTitle: string;
  };
  socialData: SocialLinkItem[];
}

export default function Contact({ data, socialData }: ContactProps) {
  const { title, text, subTitle } = data;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    msg: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alertMessage, setAlertMessage] = useState<{
    type: "success" | "error" | null;
    text: string;
  }>({ type: null, text: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear alert when user starts typing
    if (alertMessage.type) {
      setAlertMessage({ type: null, text: "" });
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setAlertMessage({ type: null, text: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setAlertMessage({
          type: "success",
          text: "Message sent successfully! We'll get back to you soon.",
        });
        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          msg: "",
        });
      } else {
        setAlertMessage({
          type: "error",
          text: data.error || "Failed to send message. Please try again.",
        });
      }
    } catch {
      setAlertMessage({
        type: "error",
        text: "An error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="st-dark-bg">
      <div className="st-height-b100 st-height-lg-b80"></div>
      <SectionHeading title="Contact" />
      <div
        className="container"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="500"
      >
        <div className="row d-flex">
          <div className="col-lg-6">
            <h3 className="st-contact-title">Get in Touch</h3>
            {alertMessage.type && (
              <div
                id="st-alert"
                className={`st-alert ${
                  alertMessage.type === "success" ? "st-alert-success" : "st-alert-error"
                }`}
              >
                {alertMessage.text}
              </div>
            )}
            <form
              onSubmit={handleSubmit}
              className="st-contact-form"
              id="contact-form"
            >
              <div className="st-form-field">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="st-form-field">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="st-form-field">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Your Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="st-form-field">
                <textarea
                  cols={30}
                  rows={10}
                  id="msg"
                  name="msg"
                  placeholder="Your Message"
                  value={formData.msg}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                ></textarea>
              </div>
              <button
                className="st-btn st-style1 st-color1"
                type="submit"
                id="submit"
                name="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
            <div className="st-height-b0 st-height-lg-b30"></div>
          </div>
          <div className="col-lg-6">
            <div className="st-height-b0 st-height-lg-b40"></div>
            <h3 className="st-contact-title">{title}</h3>
            <div className="st-contact-text">{text}</div>
            <div className="st-contact-info-wrap">
              <div className="st-single-contact-info">
                <div className="st-icon-wrap">
                  <Icon icon="fa-regular:envelope" />
                </div>
                <div className="st-single-info-details">
                  <h4>Email</h4>
                  <a
                    className="st-contact-email"
                    href="mailto:sarfarazkhanwattoo@gmail.com"
                  >
                    sarfarazkhanwattoo@gmail.com
                  </a>
                  <a
                    className="st-contact-email"
                    href="mailto:info@softechsolutions.com"
                  >
                    info@softechsol.com
                  </a>
                </div>
              </div>
              <div className="st-single-contact-info">
                <div className="st-icon-wrap">
                  <Icon icon="fa-solid:phone-alt" />
                </div>
                <div className="st-single-info-details">
                  <h4>Phone</h4>
                  <a className='st-contact-email' href="tel:+923009749672">+923009749672</a>
                </div>
              </div>
              <div className="st-single-contact-info">
                <div className="st-icon-wrap">
                  <Icon icon="mdi:location" />
                </div>
                <div className="st-single-info-details">
                  <h4>Address</h4>
                  <span>SRT Hostel, UET Lahore.</span>
                </div>
              </div>
              <div className="st-social-info">
                <div className="st-social-text">{subTitle}</div>
                <SocialLinks data={socialData} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="st-height-b100 st-height-lg-b80"></div>
    </section>
  );
}
