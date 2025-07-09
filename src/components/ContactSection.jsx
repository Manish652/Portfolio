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
  Globe,
  Clock,
  Heart,
  Star,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import Reveal from "./Reveal";
import { motion } from "framer-motion";
import axios from "axios";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post("https://messageapi-igki.onrender.com/sendmail", formData);
      if (response.status === 200) {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: error.response?.data?.error || "Failed to send message.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      content: "manishbhunia96@gmail.com",
      link: "mailto:manishbhunia96@gmail.com",
      color: "from-blue-400 to-cyan-400",
      description: "Drop me a line anytime"
    },
    {
      icon: Phone,
      label: "Phone",
      content: "+91 923455677",
      link: "tel:+91923455677",
      color: "from-green-400 to-emerald-400",
      description: "Let's talk directly"
    },
    {
      icon: MapPin,
      label: "Location",
      content: "Siliguri, West Bengal, India",
      link: null,
      color: "from-purple-400 to-pink-400",
      description: "Where the magic happens"
    },
    {
      icon: Clock,
      label: "Response Time",
      content: "Within 24 hours",
      link: null,
      color: "from-orange-400 to-red-400",
      description: "Quick turnaround guaranteed"
    },
  ];

  const socialLinks = [
    {
      Icon: Linkedin,
      color: "from-blue-600 to-blue-700",
      name: "LinkedIn",
      href: "https://linkedin.com/in/manishbhunia",
      hoverColor: "hover:shadow-blue-500/30"
    },
    {
      Icon: Twitter,
      color: "from-sky-500 to-sky-600",
      name: "Twitter",
      href: "https://twitter.com/manishbhunia",
      hoverColor: "hover:shadow-sky-500/30"
    },
    {
      Icon: Instagram,
      color: "from-pink-500 to-pink-600",
      name: "Instagram",
      href: "https://instagram.com/manishbhunia",
      hoverColor: "hover:shadow-pink-500/30"
    },
    {
      Icon: Twitch,
      color: "from-purple-600 to-purple-700",
      name: "Twitch",
      href: "https://twitch.tv/manishbhunia",
      hoverColor: "hover:shadow-purple-500/30"
    },
  ];

  return (
    <section id="contact" className="relative py-12 sm:py-20 px-4 sm:px-6 text-white overflow-hidden min-h-screen">
      {/* Enhanced Cosmic Background */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 sm:w-72 sm:h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 sm:w-96 sm:h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 sm:w-80 sm:h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute top-1/4 right-1/4 w-24 h-24 sm:w-64 sm:h-64 bg-cyan-500/15 rounded-full blur-2xl animate-pulse delay-700"></div>
      </div>

      {/* Floating Stars */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto max-w-7xl">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full backdrop-blur-sm border border-white/10 mb-6">
            <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
            <span className="text-sm font-medium text-purple-300">Let's Connect Across the Cosmos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
            Get In <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed px-2">
            Ready to launch your next project into orbit? Let's collaborate and create something extraordinary together. 
            I'm always excited to work on innovative ideas that push boundaries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 xl:gap-16">
          {/* Left Side - Enhanced Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Contact Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map(({ icon: Icon, label, content, link, color, description }, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10 shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105 h-full">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 bg-gradient-to-r ${color} rounded-xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-lg font-semibold text-white mb-1">{label}</h4>
                        <p className="text-xs text-gray-400 mb-2">{description}</p>
                        {link ? (
                          <a 
                            href={link} 
                            className="text-gray-300 hover:text-white text-sm transition-colors hover:underline break-all"
                          >
                            {content}
                          </a>
                        ) : (
                          <p className="text-gray-300 text-sm break-words">{content}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Enhanced Map Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-6 sm:p-8 rounded-2xl border border-white/10 shadow-2xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">Find Me Here</h3>
                  <p className="text-gray-400 text-sm">Siliguri, West Bengal, India</p>
                </div>
              </div>
              
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black/20 group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29640.63325655063!2d87.72926307164899!3d21.777197227248887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0326e5394d8237%3A0x7bb6b4d525857f71!2sContai%2C%20West%20Bengal%20721401!5e0!3m2!1sen!2sin!4v1752069759613!5m2!1sen!2sin"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="relative z-10 filter sepia-[0.3] hue-rotate-[240deg] saturate-[0.7] contrast-[1.2] opacity-80 group-hover:opacity-100 transition-all duration-300"
                />
                
              </div>
              
              <div className="mt-4 flex items-center justify-between text-sm text-gray-400">
                <span>🌍 GMT+5:30 (IST)</span>
                <span>📍 Available for remote work globally</span>
              </div>
            </motion.div>

            {/* Enhanced Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-6 sm:p-8 rounded-2xl border border-white/10 shadow-2xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-xl sm:text-2xl text-white">Let's Connect</h4>
                  <p className="text-gray-400 text-sm">Follow my journey across the digital universe</p>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-4">
                {socialLinks.map(({ Icon, color, name, href, hoverColor }, idx) => (
                  <motion.a
                    key={idx}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className={`group relative p-4 bg-gradient-to-r ${color} rounded-2xl transition-all duration-300 hover:scale-110 shadow-xl ${hoverColor} flex items-center justify-center sm:justify-start gap-3 min-h-[60px]`}
                  >
                    <Icon className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-white font-medium text-sm hidden sm:inline">{name}</span>
                    <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Enhanced Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-6 sm:p-8 rounded-2xl border border-white/10 shadow-2xl sticky top-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
                  <Send className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">Send Message</h3>
                  <p className="text-gray-400 text-sm">Let's start a conversation</p>
                </div>
              </div>

              <Reveal delay={0.2}>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="relative">
                    <label htmlFor="name" className=" text-sm font-semibold mb-3 text-gray-200 flex items-center gap-2">
                      <span>👤</span>
                      Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 rounded-xl bg-black/50 text-white border border-white/20 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300"
                    />
                  </div>

                  <div className="relative">
                    <label htmlFor="email" className=" text-sm font-semibold mb-3 text-gray-200 flex items-center gap-2">
                      <span>✉️</span>
                      Your Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-black/50 text-white border border-white/20 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300"
                    />
                  </div>

                  <div className="relative">
                    <label htmlFor="message" className=" text-sm font-semibold mb-3 text-gray-200 flex items-center gap-2">
                      <span>💬</span>
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Hello, I'd love to discuss..."
                      className="w-full px-4 py-3 rounded-xl bg-black/50 text-white border border-white/20 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 resize-none transition-all duration-300"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30 ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Sending to Space...
                      </>
                    ) : (
                      <>
                        <Star className="w-5 h-5" />
                        Launch Message
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              </Reveal>

              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-center text-sm text-gray-400">
                  🚀 Your message will be transmitted through the cosmic network
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;