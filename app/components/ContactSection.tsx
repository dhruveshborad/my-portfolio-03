"use client";

import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { personalInfo } from "@/data/portfolio";
import { useState } from "react";
import { Send, Mail, Phone, MapPin, LinkedinIcon, Github, Twitter, Download } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { useToast } from "../hooks/use-toast";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

export function ContactSection() {
  const { ref, isIntersecting } = useIntersectionObserver();
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent! 🚀",
      description: "Thank you for your message! I'll get back to you soon.",
    });

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    });

    setIsSubmitting(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  const socialLinks = [
    { 
      name: "LinkedIn", 
      href: personalInfo.socialLinks.linkedin, 
      icon: <LinkedinIcon size={20} />, 
      color: "text-accent" 
    },
    { 
      name: "GitHub", 
      href: personalInfo.socialLinks.github, 
      icon: <Github size={20} />, 
      color: "text-accent" 
    },
    { 
      name: "Twitter", 
      href: personalInfo.socialLinks.twitter, 
      icon: <Twitter size={20} />, 
      color: "text-accent" 
    },
    { 
      name: "Resume", 
      href: "#", 
      icon: <Download size={20} />, 
      color: "text-accent" 
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 relative z-10" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ y: 30, opacity: 0 }}
          animate={isIntersecting ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-4">
            Get In <span className="text-accent">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          <p className="text-white/80 mt-6 max-w-2xl mx-auto">
            Ready to collaborate on your next stellar project? Let's create something amazing together!
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
        >
          {/* Contact Form */}
          <motion.div
            className="glass-morphism p-6 md:p-8 rounded-2xl cosmic-glow"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-orbitron font-semibold text-white mb-6 flex items-center">
              <Send className="text-accent mr-3" size={24} />
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="text-foreground/80">
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="John"
                    className="mt-2 bg-muted/20 text-black dark:text-black"
                    required
                    data-testid="input-firstName"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-foreground/80">
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Doe"
                    className="mt-2 bg-muted/20 text-black dark:text-black"
                    required
                    data-testid="input-lastName"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="text-foreground/80">
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john.doe@example.com"
                  className="mt-2 bg-muted/20 text-black dark:text-black"
                  required
                  data-testid="input-email"
                />
              </div>

              <div>
                <Label htmlFor="subject" className="text-foreground/80">
                  Subject
                </Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Project Collaboration"
                  className="mt-2 bg-muted/20 text-black dark:text-black"
                  required
                  data-testid="input-subject"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-foreground/80">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project..."
                  className="mt-2 bg-muted/20 text-black dark:text-black resize-none"
                  rows={5}
                  required
                  data-testid="textarea-message"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full glass-morphism cosmic-glow px-8 py-4 rounded-xl text-white font-semibold hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                data-testid="button-submit"
              >
                <Send size={20} />
                <span>{isSubmitting ? "Launching..." : "Launch Message"}</span>
              </Button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <div className="space-y-8">
            <motion.div
              className="glass-morphism p-6 md:p-8 rounded-2xl cosmic-glow"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-orbitron font-semibold text-white mb-6 flex items-center">
                <Mail className="text-accent mr-3" size={24} />
                Contact Information
              </h3>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                    <Mail className="text-accent" size={20} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-white/80 text-sm">Email</p>
                    <p className="text-white font-medium break-words">{personalInfo.email}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                    <Phone className="text-accent" size={20} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-white/80 text-sm">Phone</p>
                    <p className="text-white font-medium break-words">{personalInfo.phone}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                    <MapPin className="text-accent" size={20} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-white/80 text-sm">Location</p>
                    <p className="text-white font-medium break-words">{personalInfo.location}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="glass-morphism p-6 md:p-8 rounded-2xl cosmic-glow"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-orbitron font-semibold text-white mb-6 flex items-center">
                <i className="fas fa-share-alt text-accent mr-3"></i>
                Connect With Me
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    className="flex items-center justify-center space-x-3 glass-morphism px-6 py-4 rounded-xl hover:cosmic-glow transition-all duration-300 group"
                    whileHover={{ scale: 1.05 }}
                    data-testid={`link-${link.name.toLowerCase()}`}
                  >
                    <span className={`${link.color} group-hover:scale-110 transition-transform duration-300`}>
                      {link.icon}
                    </span>
                    <span className="text-white font-medium">{link.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
