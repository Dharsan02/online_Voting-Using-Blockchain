import React from "react";

const Contact = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-[#0B1320] text-white p-10">
      {/* Left Side - Contact Info */}
      <div className="w-1/2 p-8">
        <h2 className="text-4xl font-bold text-[#FF9933] mb-4">Contact Us</h2>
        <p className="text-lg text-gray-300">
          Have any questions or need support? Feel free to reach out to us.
        </p>
        
        <div className="mt-6 space-y-4">
          <p><strong>📍 Location:</strong> Election Commission of India, New Delhi</p>
          <p><strong>📞 Phone:</strong> +91 1800-112-1950</p>
          <p><strong>✉ Email:</strong> support@evoteindia.gov.in</p>
        </div>
      </div>

      {/* Right Side - Contact Form */}
      <div className="w-1/2 p-8 bg-[#1E1E1E] rounded-lg">
        <h2 className="text-3xl font-bold mb-6 text-[#138808]">Get in Touch</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-3 border rounded bg-white text-black" required />
          <input type="email" placeholder="Your Email" className="w-full p-3 border rounded bg-white text-black" required />
          <textarea placeholder="Your Message" className="w-full p-3 border rounded bg-white text-black h-32" required></textarea>
          <button type="submit" className="w-full bg-[#138808] text-white p-3 rounded font-semibold hover:bg-[#FFC107]">
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
