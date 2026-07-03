import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import SectionTitle from "../components/ui/SectionTitle";
import ContactCard from "../components/ui/ContactCard";
import { contactInfo } from "../data/contact";

const Contact = () => {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setMessage("✅ Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        console.log(error);
        console.log(error.text);
        setMessage("❌ Failed to send message.");
      })
      .finally(() => {
        setLoading(false);

        setTimeout(() => {
          setMessage("");
        }, 3000);
      });
  };

  return (
    <section id="contact" className="py-24 px-6 lg:px-20">
      <SectionTitle
        title="Let's Connect"
        subtitle="Contact Me"
      />

      <div className="grid lg:grid-cols-2 gap-12">

        {/* Left Side */}

        <div className="space-y-6">
          {contactInfo.map((item) => (
            <ContactCard
              key={item.id}
              item={item}
            />
          ))}
        </div>

        {/* Right Side */}

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-8 space-y-5"
        >
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            className="w-full bg-transparent border border-cyan-500/20 rounded-xl p-4 outline-none focus:border-cyan-400"
          />

          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
            className="w-full bg-transparent border border-cyan-500/20 rounded-xl p-4 outline-none focus:border-cyan-400"
          />

          <select
            name="subject"
            required
            defaultValue=""
            className="w-full bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-xl p-4 text-white outline-none focus:border-cyan-400 appearance-none cursor-pointer"
          >
            <option value="" disabled className="bg-[#070B14] text-gray-400">
              Select Purpose
            </option>

            <option value="Full Stack Developer Opportunity" className="bg-[#070B14]">
              Full Stack Developer Opportunity
            </option>

            <option value="Frontend Developer Opportunity" className="bg-[#070B14]">
              Frontend Developer Opportunity
            </option>

            <option value="Internship Opportunity" className="bg-[#070B14]">
              Internship Opportunity
            </option>

            <option value="Interview Invitation" className="bg-[#070B14]">
              Interview Invitation
            </option>

            <option value="Freelance Project" className="bg-[#070B14]">
              Freelance Project
            </option>

            <option value="Project Discussion" className="bg-[#070B14]">
              Project Discussion
            </option>

            <option value="Collaboration" className="bg-[#070B14]">
              Collaboration
            </option>

            <option value="Other" className="bg-[#070B14]">
              Other
            </option>
          </select>
          <textarea
            rows="5"
            name="message"
            placeholder="Your Message"
            required
            className="w-full bg-transparent border border-cyan-500/20 rounded-xl p-4 outline-none resize-none focus:border-cyan-400"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-semibold py-4 rounded-xl transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {message && (
            <p className="text-center text-cyan-400">
              {message}
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;