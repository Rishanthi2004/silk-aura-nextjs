"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "Bridal Saree Consultation",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) return;
    setSubmitted(true);
    setFormData({
      name: "",
      phone: "",
      email: "",
      subject: "Bridal Saree Consultation",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-[#faf7f2] py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center space-y-3 max-w-xl mx-auto">
          <span className="text-[#c59b27] text-xs font-semibold uppercase tracking-widest">
            We Are Here For You
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900">
            Contact Our Silk Concierge
          </h1>
          <p className="text-xs sm:text-sm text-gray-600">
            Have queries about bridal trousseau, custom weaving, or international delivery? Reach out to our dedicated specialists.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-[#ede5d8] shadow-xs space-y-6">
              <h2 className="font-serif text-lg font-bold text-gray-900 pb-3 border-b border-gray-100">
                Get In Touch Directly
              </h2>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#faf7f2] text-[#800020] flex items-center justify-center border border-[#ede5d8] flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-semibold text-gray-900">Phone Support</span>
                    <span className="text-gray-600">+91 44 2434 8899 / +91 98401 23456</span>
                    <span className="block text-[11px] text-gray-400">10:00 AM - 9:00 PM IST (Mon - Sun)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#faf7f2] text-[#25D366] flex items-center justify-center border border-[#ede5d8] flex-shrink-0">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.275-.1-.475-.15-.675.15-.2.301-.776.979-.951 1.18-.175.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.895-.798-1.5-1.785-1.675-2.086-.176-.301-.019-.464.132-.614.136-.135.301-.351.451-.527.151-.175.201-.3.301-.501.101-.2.051-.376-.025-.527-.075-.15-.675-1.63-.925-2.23-.244-.587-.492-.508-.675-.517-.175-.009-.376-.01-.577-.01-.2 0-.526.075-.802.376-.276.301-1.053 1.028-1.053 2.508s1.078 2.91 1.228 3.11c.151.201 2.122 3.24 5.141 4.544.718.31 1.28.495 1.718.634.722.23 1.379.197 1.898.12.578-.087 1.78-.727 2.031-1.43.25-.702.25-1.304.175-1.43-.075-.125-.276-.2-.576-.35zm-5.419 7.422a9.71 9.71 0 0 1-4.965-1.356l-.356-.211-3.69 1.015 1.014-3.597-.232-.369a9.718 9.718 0 0 1-1.493-5.184c0-5.385 4.382-9.767 9.771-9.767 2.61 0 5.064 1.017 6.91 2.863a9.714 9.714 0 0 1 2.86 6.904c0 5.388-4.382 9.77-9.819 9.77zM20.52 3.48A11.934 11.934 0 0 0 12.053 0C5.405 0 .004 5.401.004 12.05c0 2.124.555 4.198 1.611 6.027L0 24l6.096-1.6c1.768.964 3.766 1.472 5.808 1.472h.005c6.647 0 12.048-5.402 12.048-12.052 0-3.22-1.254-6.246-3.437-8.34z" />
                    </svg>
                  </div>
                  <div>
                    <span className="block font-semibold text-gray-900">WhatsApp Concierge</span>
                    <span className="text-gray-600">+91 98401 23456</span>
                    <span className="block text-[11px] text-gray-400">Instant video call & high-res saree demos</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#faf7f2] text-[#800020] flex items-center justify-center border border-[#ede5d8] flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-semibold text-gray-900">Email Inquiries</span>
                    <span className="text-gray-600">concierge@silkaura.com</span>
                    <span className="block text-[11px] text-gray-400">We respond within 2 business hours</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#faf7f2] text-[#800020] flex items-center justify-center border border-[#ede5d8] flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-semibold text-gray-900">Flagship Headquarters</span>
                    <span className="text-gray-600">
                      SilkAura Heritage Center, 42 Usman Road, T. Nagar, Chennai, Tamil Nadu - 600017
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-[#ede5d8] shadow-xs">
            <h2 className="font-serif text-lg font-bold text-gray-900 mb-4 pb-3 border-b border-gray-100">
              Send a Message
            </h2>

            {submitted ? (
              <div className="p-6 bg-emerald-50 rounded-xl border border-emerald-200 text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h3 className="font-serif text-base font-bold text-emerald-900">
                  Message Received!
                </h3>
                <p className="text-xs text-emerald-700 max-w-sm mx-auto">
                  Thank you for reaching out. Our Senior Silk Consultant will contact you shortly on your provided phone number.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-3 text-xs text-emerald-800 underline font-semibold"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-medium text-gray-700 mb-1">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Radhika Sundaram"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0f172a] bg-[#faf7f2]"
                    />
                  </div>

                  <div>
                    <label className="block font-medium text-gray-700 mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 98401 23456"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0f172a] bg-[#faf7f2]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-medium text-gray-700 mb-1">
                      Email Address <span className="text-gray-400">(Optional)</span>
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. radhika@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0f172a] bg-[#faf7f2]"
                    />
                  </div>

                  <div>
                    <label className="block font-medium text-gray-700 mb-1">Subject</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0f172a] bg-[#faf7f2]"
                    >
                      <option value="Bridal Saree Consultation">Bridal Saree Consultation</option>
                      <option value="Custom Blouse Stitching Inquiry">Custom Blouse Stitching Inquiry</option>
                      <option value="Order Tracking / Delivery">Order Tracking / Delivery</option>
                      <option value="Showroom Appointment">Showroom Appointment</option>
                      <option value="Bulk / Wedding Trousseau Order">Bulk / Wedding Trousseau Order</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-medium text-gray-700 mb-1">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about the colors, fabrics, or occasion you have in mind..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0f172a] bg-[#faf7f2]"
                  />
                </div>

                <button
                  type="submit"
                  className="px-6 py-3 bg-[#0f172a] hover:bg-[#1e293b] text-white font-semibold text-xs uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 transition-colors shadow-md"
                >
                  <Send className="w-3.5 h-3.5 text-[#fde047]" />
                  <span>Send Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
