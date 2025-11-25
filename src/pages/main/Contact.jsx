import React from "react";
import ContactImg1 from "../../assets/images/ExtraIcons/Vector-1.svg?react";
import ContactImg2 from "../../assets/images/ExtraIcons/Vector-4.svg?react";

function Contact() {
  return (
    // Main container: Stacks vertically on mobile, becomes a row on large screens.
    // Padding is smaller on mobile (p-4) and larger on desktop (lg:p-14).
    <div className="flex flex-col lg:flex-row justify-between gap-8 p-4 md:p-8 lg:p-14">
      {/* Left Column: Contact Info */}
      {/* Takes full width on mobile, 1/3 on large screens. Added transitions and hover shadow. */}
      <div className="w-full lg:w-1/3 h-auto flex flex-col p-6 gap-6 border rounded-md shadow-sm transition-shadow duration-300 hover:shadow-xl">
        <div>
          <div className="flex items-center gap-4">
            <ContactImg1 className="rounded-full bg-[#DB4444] text-white w-10 h-10 p-2" />
            <p className="font-semibold">Call To Us</p>
          </div>
          <div className="mt-4 flex flex-col gap-3 pl-2">
            <p>We are available 24/7, 7 days a week.</p>
            <p>Phone: +8801611112222</p>
          </div>
        </div>
        <div className="border-t border-gray-300 my-2"></div>
        <div>
          <div className="flex items-center gap-4">
            <ContactImg2 className="w-10 h-10 p-2 rounded-full bg-[#DB4444] text-white" />
            <p className="font-semibold">Write To Us</p>
          </div>
          <div className="mt-4 flex flex-col gap-3 pl-2">
            <p>Fill out our form and we will contact you within 24 hours.</p>
            <p>Emails: customer@exclusive.com</p>
            <p>Emails: support@exclusive.com</p>
          </div>
        </div>
      </div>

      {/* Right Column: Contact Form */}
      {/* Takes full width on mobile, 2/3 on large screens. Added transitions and hover shadow. */}
      <div className="w-full lg:w-2/3 h-auto flex flex-col p-6 gap-6 border rounded-md shadow-sm transition-shadow duration-300 hover:shadow-xl">
        {/* Input fields stack on mobile, become a row on large screens */}
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <input
            type="text"
            placeholder="Your Name*"
            // Full width on mobile, adjusts on larger screens. Added focus styles.
            className="w-full bg-[#F5F5F5] p-3 rounded-md border-2 border-transparent focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400 transition"
          />
          <input
            type="email"
            placeholder="Your Email*"
            className="w-full bg-[#F5F5F5] p-3 rounded-md border-2 border-transparent focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400 transition"
          />
          <input
            type="tel"
            placeholder="Your Phone"
            className="w-full bg-[#F5F5F5] p-3 rounded-md border-2 border-transparent focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400 transition"
          />
        </div>
        <div>
          <textarea
            placeholder="Your Message"
            // Set a responsive height. Added focus styles.
            className="bg-[#F5F5F5] p-3 rounded-md w-full h-48 resize-none border-2 border-transparent focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400 transition"
          ></textarea>
        </div>
        <div className="flex justify-end">
          <button
            // Added hover and active states for better user feedback.
            className="text-white bg-[#DB4444] py-3 px-8 rounded-md transition-all duration-300 hover:bg-red-600 hover:scale-105 active:scale-100"
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
