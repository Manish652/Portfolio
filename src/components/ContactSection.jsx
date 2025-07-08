import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
  Sparkles,
  MessageCircle,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import Reveal from "./Reveal";
import { motion } from "framer-motion";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setIsSubmitting(false);
    }, 1500);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      content: "manishbhunia96@gmail.com",
      link: "mailto:manishbhunia96@gmail.com",
      color: "from-blue-400 to-cyan-400",
    },
    {
      icon: Phone,
      label: "Phone",
      content: "+91 923455677",
      link: "tel:+91923455677",
      color: "from-green-400 to-emerald-400",
    },
    {
      icon: MapPin,
      label: "Location",
      content: "India",
      link: null,
      color: "from-purple-400 to-pink-400",
    },
  ];

  const socialLinks = [
    {
      Icon: Linkedin,
      color: "from-blue-600 to-blue-700",
      name: "LinkedIn",
      href: "https://linkedin.com/in/manishbhunia",
    },
    {
      Icon: Twitter,
      color: "from-sky-500 to-sky-600",
      name: "Twitter",
      href: "https://twitter.com/manishbhunia",
    },
    {
      Icon: Instagram,
      color: "from-pink-500 to-pink-600",
      name: "Instagram",
      href: "https://instagram.com/manishbhunia",
    },
    {
      Icon: Twitch,
      color: "from-purple-600 to-purple-700",
      name: "Twitch",
      href: "https://twitch.tv/manishbhunia",
    },
  ];

  const formFields = [
    {
      id: "name",
      label: "Your Name",
      type: "text",
      placeholder: "Enter your full name",
    },
    {
      id: "email",
      label: "Your Email",
      type: "email",
      placeholder: "your.email@example.com",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-20 px-4 sm:px-6 text-white overflow-hidden min-h-screen"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0" aria-hidden="true">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full backdrop-blur-sm border border-white/10 mb-6">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-purple-300">
              Let's Connect
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
            Get In{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>

          <p className="text-base sm:text-lg text-gray-300 max-w-xl mx-auto leading-relaxed px-2">
            Have an exciting project in mind or want to collaborate on something
            amazing? I'd love to hear from you and bring your ideas to life.
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 items-start">
          {/* Contact & Social Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            {/* Contact Info */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-6 sm:p-8 rounded-2xl border border-white/10 shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold">
                  Contact Information
                </h3>
              </div>

              <div className="space-y-6">
                {contactInfo.map(({ icon: Icon, label, content, link, color }, idx) => (
                  <div key={idx} className="flex items-center gap-5 group">
                    <div
                      className={`p-4 bg-gradient-to-r ${color} rounded-xl transition-transform duration-300 group-hover:scale-110`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white">
                        {label}
                      </h4>
                      {link ? (
                        <a
                          href={link}
                          className="text-gray-300 hover:text-white text-base transition-colors duration-300 hover:underline"
                        >
                          {content}
                        </a>
                      ) : (
                        <p className="text-gray-300 text-base">{content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-6 sm:p-8 rounded-2xl border border-white/10 shadow-2xl">
              <h4 className="font-semibold text-xl sm:text-2xl mb-6 text-white">
                Connect with me
              </h4>
              <div className="flex gap-4 flex-wrap">
                {socialLinks.map(({ Icon, color, name, href }, idx) => (
                  <a
                    key={idx}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={name}
                    className={`group relative p-4 bg-gradient-to-r ${color} rounded-full transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-purple-500/25`}
                  >
                    <span className="sr-only">{name}</span>
                    <Icon className="w-5 h-5 text-white transition-transform duration-300 group-hover:scale-110" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-6 sm:p-10 rounded-2xl border border-white/10 shadow-2xl"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
                <Send className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Send a Message</h3>
            </div>

            <Reveal delay={0.2}>
              <form onSubmit={handleSubmit} className="space-y-6">
                {formFields.map(({ id, label, type, placeholder }) => (
                  <div key={id}>
                    <label
                      htmlFor={id}
                      className="block text-sm font-semibold mb-3 text-gray-200"
                    >
                      {label}
                    </label>
                    <input
                      id={id}
                      name={id}
                      type={type}
                      required
                      value={formData[id]}
                      onChange={handleInputChange}
                      placeholder={placeholder}
                      className="w-full px-4 py-3 text-sm sm:text-base rounded-xl border border-white/20 bg-black/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300 hover:border-white/30 backdrop-blur-sm"
                    />
                  </div>
                ))}

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold mb-3 text-gray-200"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Hello, I'd like to talk about..."
                    className="w-full px-4 py-3 text-sm sm:text-base rounded-xl border border-white/20 bg-black/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300 hover:border-white/30 resize-none backdrop-blur-sm"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 hover:from-purple-600 hover:to-pink-600 hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-purple-500/25 ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </form>
            </Reveal>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
