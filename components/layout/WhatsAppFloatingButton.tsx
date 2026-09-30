"use client";

import React from "react";

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
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#20ba59] text-white p-3.5 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center group"
    >
      {/* Official WhatsApp SVG Vector Icon */}
      <svg
        className="w-6 h-6 fill-current"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.275-.1-.475-.15-.675.15-.2.301-.776.979-.951 1.18-.175.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.895-.798-1.5-1.785-1.675-2.086-.176-.301-.019-.464.132-.614.136-.135.301-.351.451-.527.151-.175.201-.3.301-.501.101-.2.051-.376-.025-.527-.075-.15-.675-1.63-.925-2.23-.244-.587-.492-.508-.675-.517-.175-.009-.376-.01-.577-.01-.2 0-.526.075-.802.376-.276.301-1.053 1.028-1.053 2.508s1.078 2.91 1.228 3.11c.151.201 2.122 3.24 5.141 4.544.718.31 1.28.495 1.718.634.722.23 1.379.197 1.898.12.578-.087 1.78-.727 2.031-1.43.25-.702.25-1.304.175-1.43-.075-.125-.276-.2-.576-.35zm-5.419 7.422a9.71 9.71 0 0 1-4.965-1.356l-.356-.211-3.69 1.015 1.014-3.597-.232-.369a9.718 9.718 0 0 1-1.493-5.184c0-5.385 4.382-9.767 9.771-9.767 2.61 0 5.064 1.017 6.91 2.863a9.714 9.714 0 0 1 2.86 6.904c0 5.388-4.382 9.77-9.819 9.77zM20.52 3.48A11.934 11.934 0 0 0 12.053 0C5.405 0 .004 5.401.004 12.05c0 2.124.555 4.198 1.611 6.027L0 24l6.096-1.6c1.768.964 3.766 1.472 5.808 1.472h.005c6.647 0 12.048-5.402 12.048-12.052 0-3.22-1.254-6.246-3.437-8.34z" />
      </svg>
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out font-medium text-xs px-0 group-hover:px-2">
        Chat with Silk Concierge
      </span>
    </a>
  );
};
