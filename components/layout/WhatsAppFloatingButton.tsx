"use client";

import React from "react";
import { MessageCircle } from "lucide-react";

export const WhatsAppFloatingButton: React.FC = () => {
  const whatsappNumber = "919840123456";
  const defaultText = encodeURIComponent(
    "Hello SilkAura! I am interested in inquiring about your silk sarees and festive collection."
  );

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${defaultText}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-3.5 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center group"
    >
      <MessageCircle className="w-6 h-6 fill-current" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out font-medium text-xs px-0 group-hover:px-2">
        Chat with Silk Concierge
      </span>
    </a>
  );
};
