export interface Store {
  id: string;
  name: string;
  city: string;
  address: string;
  landmark: string;
  phone: string;
  whatsapp: string;
  timings: string;
  image: string;
  mapUrl: string;
  featured?: boolean;
}

export const STORES: Store[] = [
  {
    id: "chennai-flagship",
    name: "SilkAura Flagship Showroom - T. Nagar",
    city: "Chennai",
    address: "42, Usman Road, Panagal Park, T. Nagar",
    landmark: "Opposite to Kalyan Jewellers",
    phone: "+91 44 2434 8899",
    whatsapp: "+919840123456",
    timings: "10:00 AM - 9:30 PM (Open 7 Days)",
    image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=800&q=80",
    mapUrl: "https://maps.google.com/?q=T+Nagar+Chennai",
    featured: true,
  },
  {
    id: "bangalore-indiranagar",
    name: "SilkAura Heritage Boutique - Indiranagar",
    city: "Bangalore",
    address: "712, 100 Feet Road, HAL 2nd Stage, Indiranagar",
    landmark: "Near Sony Center Signal",
    phone: "+91 80 4123 7788",
    whatsapp: "+919840123457",
    timings: "10:30 AM - 9:00 PM (Open 7 Days)",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
    mapUrl: "https://maps.google.com/?q=Indiranagar+Bangalore",
    featured: true,
  },
  {
    id: "hyderabad-banjara",
    name: "SilkAura Royal Lounge - Banjara Hills",
    city: "Hyderabad",
    address: "Road No. 10, Singhania Heights, Banjara Hills",
    landmark: "Near Star Hospitals",
    phone: "+91 40 6677 5544",
    whatsapp: "+919840123458",
    timings: "10:00 AM - 9:00 PM (Open 7 Days)",
    image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=800&q=80",
    mapUrl: "https://maps.google.com/?q=Banjara+Hills+Hyderabad",
  },
  {
    id: "coimbatore-rs-puram",
    name: "SilkAura Boutique - R.S. Puram",
    city: "Coimbatore",
    address: "88, D.B. Road, R.S. Puram",
    landmark: "Next to Anandha Bhavan",
    phone: "+91 422 2541 223",
    whatsapp: "+919840123459",
    timings: "9:30 AM - 9:00 PM (Open 7 Days)",
    image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=800&q=80",
    mapUrl: "https://maps.google.com/?q=RS+Puram+Coimbatore",
  },
];
