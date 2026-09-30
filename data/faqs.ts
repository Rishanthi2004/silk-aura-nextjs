export interface FAQItem {
  question: string;
  answer: string;
  category: "Ordering & Payment" | "Shipping & Delivery" | "Authenticity & Quality" | "Returns & Exchanges" | "Care & Maintenance";
}

export const FAQS_DATA: FAQItem[] = [
  {
    category: "Authenticity & Quality",
    question: "Are all SilkAura sarees Silk Mark certified?",
    answer:
      "Yes, 100%! Every pure silk saree sold on SilkAura comes with an authentic Silk Mark tag issued by the Silk Mark Organisation of India (SMOI) under the Ministry of Textiles, Government of India. You can scan the unique QR code on the tag to verify the authenticity of the silk.",
  },
  {
    category: "Authenticity & Quality",
    question: "Is the zari pure gold and silver?",
    answer:
      "Our premium bridal and heirloom Kanchipuram and Banarasi sarees feature authentic electroplated silver and gold zari threads over pure silk core. Our lightweight and semi-festive sarees feature tested high-grade metallic zari.",
  },
  {
    category: "Ordering & Payment",
    question: "How does the offline / direct payment process work?",
    answer:
      "When you place an order on SilkAura, our dedicated concierge team will review your order within 30 minutes, confirm availability and customizations (such as blouse stitching or fall & edging), and contact you directly via WhatsApp or phone call to finalize payment via Bank Transfer, UPI, or Cash on Delivery.",
  },
  {
    category: "Ordering & Payment",
    question: "Can I request custom blouse stitching or saree fall & pico?",
    answer:
      "Yes! We provide complimentary fall and edging (pico) services on all saree orders. Custom blouse stitching by master tailors is available on request when our concierge confirms your order.",
  },
  {
    category: "Shipping & Delivery",
    question: "What are the shipping charges and delivery timelines?",
    answer:
      "We offer FREE express shipping across India on all orders above ₹5,000. Orders within metropolitan cities (Chennai, Bangalore, Hyderabad, Mumbai, Delhi) are delivered in 2 to 4 business days. Other cities and towns take 4 to 6 business days.",
  },
  {
    category: "Returns & Exchanges",
    question: "What is your return and exchange policy?",
    answer:
      "We have a hassle-free 7-day return and exchange policy from the date of delivery. The product must remain unused, unwashed, with all original tags (including the Silk Mark tag) intact.",
  },
  {
    category: "Care & Maintenance",
    question: "How should I wash and store my silk sarees?",
    answer:
      "Pure silk sarees should only be dry cleaned. Store them wrapped in breathable pure cotton or muslin fabric in a cool, dry place. Refold along different creases every 3-4 months to keep the zari and silk fresh for decades.",
  },
];
