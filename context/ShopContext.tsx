"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Product, PRODUCTS } from "@/data/products";

export interface CartItem {
  id: string; // unique cart item id (product.id + color)
  product: Product;
  selectedColor?: string;
  quantity: number;
}

export interface PlacedOrder {
  orderId: string;
  date: string;
  items: CartItem[];
  subtotal: number;
  discount: number;
  shipping: number;
  total: number;
  customer: {
    fullName: string;
    phone: string;
    email?: string;
    address: string;
    city: string;
    state: string;
    pincode: string;
  };
  status: "Placed" | "Under Review" | "Confirmed" | "Shipped" | "Delivered";
  timeline: {
    status: string;
    date: string;
    description: string;
    done: boolean;
  }[];
}

interface ShopContextType {
  cart: CartItem[];
  cartCount: number;
  cartSubtotal: number;
  cartDiscount: number;
  appliedCoupon: string | null;
  couponDiscountAmount: number;
  cartTotal: number;
  addToCart: (product: Product, quantity?: number, color?: string) => void;
  removeFromCart: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, newQuantity: number) => void;
  clearCart: () => void;
  applyCoupon: (code: string) => { success: boolean; message: string };
  removeCoupon: () => void;

  // Wishlist
  wishlist: Product[];
  wishlistCount: number;
  toggleWishlist: (product: Product) => void;
  isInWishlist: (productId: string) => boolean;

  // Recently Viewed
  recentlyViewed: Product[];
  addRecentlyViewed: (product: Product) => void;

  // Orders
  orders: PlacedOrder[];
  placeOrder: (customer: PlacedOrder["customer"]) => PlacedOrder;
  getOrderByIdOrPhone: (query: string) => PlacedOrder | undefined;

  // UI Drawers
  isCartDrawerOpen: boolean;
  setIsCartDrawerOpen: (open: boolean) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

const INITIAL_DEMO_ORDERS: PlacedOrder[] = [
  {
    orderId: "SILK12456",
    date: "24 Sep 2026",
    customer: {
      fullName: "Priya Sundaram",
      phone: "9840123456",
      email: "priya.sundaram@example.com",
      address: "Flat 4B, Lotus Apartments, Anna Nagar",
      city: "Chennai",
      state: "Tamil Nadu",
      pincode: "600040",
    },
    items: [
      {
        id: "kanchipuram-silk-saree-purple-Royal-Purple",
        product: PRODUCTS[0],
        selectedColor: "Royal Purple",
        quantity: 1,
      },
      {
        id: "mysore-silk-saree-green-Emerald-Green",
        product: PRODUCTS[1],
        selectedColor: "Emerald Green",
        quantity: 1,
      },
    ],
    subtotal: 15498,
    discount: 2000,
    shipping: 0,
    total: 13498,
    status: "Confirmed",
    timeline: [
      {
        status: "Order Placed",
        date: "24 Sep 2026, 11:30 AM",
        description: "Your order was successfully placed offline.",
        done: true,
      },
      {
        status: "Under Review",
        date: "24 Sep 2026, 12:15 PM",
        description: "Silk quality check and silk mark authentication passed.",
        done: true,
      },
      {
        status: "Order Confirmed",
        date: "24 Sep 2026, 03:00 PM",
        description: "Concierge verified payment and complimentary fall/pico initiated.",
        done: true,
      },
      {
        status: "Shipped",
        date: "25 Sep 2026, 10:00 AM",
        description: "Handed over to BlueDart Express Courier.",
        done: false,
      },
    ],
  },
];

export const ShopProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initial default cart with 2 demo items as shown in the reference image (Kanchipuram & Mysore silk sarees)
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [recentlyViewed, setRecentlyViewed] = useState<Product[]>([]);
  const [orders, setOrders] = useState<PlacedOrder[]>(INITIAL_DEMO_ORDERS);
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isHydrated, setIsHydrated] = useState<boolean>(false);

  // Hydrate from localStorage safely on client mount
  useEffect(() => {
    try {
      const storedCart = localStorage.getItem("silkaura_cart");
      if (storedCart) {
        const parsed = JSON.parse(storedCart);
        if (Array.isArray(parsed)) {
          // Validate each item to ensure product and price exist
          const validItems = parsed.filter(
            (item): item is CartItem =>
              Boolean(item && item.product && typeof item.product.price === "number")
          );
          setCart(validItems);
        }
      } else {
        // Default initial items matching the reference screenshot cart (Kanchipuram & Mysore)
        if (PRODUCTS.length >= 2) {
          setCart([
            {
              id: `${PRODUCTS[0].id}-Purple`,
              product: PRODUCTS[0],
              selectedColor: PRODUCTS[0].colors[0]?.name || "Purple",
              quantity: 1,
            },
            {
              id: `${PRODUCTS[1].id}-Green`,
              product: PRODUCTS[1],
              selectedColor: PRODUCTS[1].colors[0]?.name || "Green",
              quantity: 1,
            },
          ]);
        }
      }

      const storedWishlist = localStorage.getItem("silkaura_wishlist");
      if (storedWishlist) {
        const parsedWish = JSON.parse(storedWishlist);
        if (Array.isArray(parsedWish)) {
          setWishlist(parsedWish.filter((p) => p && typeof p.id === "string"));
        }
      } else if (PRODUCTS.length >= 3) {
        setWishlist([PRODUCTS[0], PRODUCTS[2]]);
      }

      const storedRecent = localStorage.getItem("silkaura_recently_viewed");
      if (storedRecent) {
        const parsedRecent = JSON.parse(storedRecent);
        if (Array.isArray(parsedRecent)) {
          setRecentlyViewed(parsedRecent.filter((p) => p && typeof p.id === "string"));
        }
      } else if (PRODUCTS.length >= 4) {
        setRecentlyViewed([PRODUCTS[0], PRODUCTS[1], PRODUCTS[2], PRODUCTS[3]]);
      }

      const storedOrders = localStorage.getItem("silkaura_orders");
      if (storedOrders) {
        const parsedOrders = JSON.parse(storedOrders);
        if (Array.isArray(parsedOrders)) {
          setOrders(parsedOrders);
        }
      }
    } catch (e) {
      console.error("Failed to load state from localStorage:", e);
    }
    setIsHydrated(true);
  }, []);

  // Sync to localStorage
  useEffect(() => {
    if (!isHydrated) return;
    try {
      localStorage.setItem("silkaura_cart", JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart, isHydrated]);

  useEffect(() => {
    if (!isHydrated) return;
    try {
      localStorage.setItem("silkaura_wishlist", JSON.stringify(wishlist));
    } catch (e) {
      console.error(e);
    }
  }, [wishlist, isHydrated]);

  useEffect(() => {
    if (!isHydrated) return;
    try {
      localStorage.setItem("silkaura_recently_viewed", JSON.stringify(recentlyViewed));
    } catch (e) {
      console.error(e);
    }
  }, [recentlyViewed, isHydrated]);

  useEffect(() => {
    if (!isHydrated) return;
    try {
      localStorage.setItem("silkaura_orders", JSON.stringify(orders));
    } catch (e) {
      console.error(e);
    }
  }, [orders, isHydrated]);

  const addToCart = (product: Product, quantity = 1, color?: string) => {
    if (!product || typeof product.price !== "number") return;
    const chosenColor = color || (product.colors && product.colors[0]?.name) || "Default";
    const itemId = `${product.id}-${chosenColor.replace(/\s+/g, "-")}`;

    setCart((prev) => {
      const existing = prev.find((item) => item.id === itemId);
      if (existing) {
        return prev.map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prev, { id: itemId, product, selectedColor: chosenColor, quantity }];
    });

    setIsCartDrawerOpen(true);
  };

  const removeFromCart = (cartItemId: string) => {
    setCart((prev) => prev.filter((item) => item.id !== cartItemId));
  };

  const updateQuantity = (cartItemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.id === cartItemId ? { ...item, quantity: newQuantity } : item))
    );
  };

  const clearCart = () => {
    setCart([]);
    setAppliedCoupon(null);
  };

  const applyCoupon = (code: string) => {
    const normalized = code.trim().toUpperCase();
    if (normalized === "SILK10" || normalized === "FESTIVE" || normalized === "WELCOME2000") {
      setAppliedCoupon(normalized);
      return { success: true, message: `Coupon ${normalized} applied successfully!` };
    }
    return { success: false, message: "Invalid coupon code. Try SILK10 or WELCOME2000" };
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
  };

  const toggleWishlist = (product: Product) => {
    if (!product || !product.id) return;
    setWishlist((prev) => {
      const exists = prev.some((item) => item.id === product.id);
      if (exists) {
        return prev.filter((item) => item.id !== product.id);
      }
      return [...prev, product];
    });
  };

  const isInWishlist = (productId: string) => {
    return wishlist.some((item) => item && item.id === productId);
  };

  const addRecentlyViewed = (product: Product) => {
    if (!product || !product.id) return;
    setRecentlyViewed((prev) => {
      const filtered = prev.filter((item) => item && item.id !== product.id);
      return [product, ...filtered].slice(0, 8);
    });
  };

  const cartCount = cart.reduce((total, item) => total + (item?.quantity || 0), 0);
  const cartSubtotal = cart.reduce(
    (total, item) => total + (item?.product?.price || 0) * (item?.quantity || 1),
    0
  );

  // Demo discount calculation (e.g. ₹2,000 promotional voucher discount if subtotal is high or coupon used)
  let couponDiscountAmount = 0;
  if (appliedCoupon === "SILK10") {
    couponDiscountAmount = Math.round(cartSubtotal * 0.1);
  } else if (appliedCoupon === "WELCOME2000" || appliedCoupon === "FESTIVE") {
    couponDiscountAmount = Math.min(2000, cartSubtotal);
  } else if (cartSubtotal >= 10000) {
    couponDiscountAmount = 2000;
  }

  const cartDiscount = couponDiscountAmount;
  const cartTotal = Math.max(0, cartSubtotal - cartDiscount);
  const wishlistCount = wishlist.length;

  const placeOrder = (customer: PlacedOrder["customer"]): PlacedOrder => {
    const randomNum = Math.floor(10000 + Math.random() * 90000);
    const newOrderId = `SILK${randomNum}`;
    const today = new Date();
    const formattedDate = today.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

    const newOrder: PlacedOrder = {
      orderId: newOrderId,
      date: formattedDate,
      items: [...cart],
      subtotal: cartSubtotal,
      discount: cartDiscount,
      shipping: 0,
      total: cartTotal,
      customer,
      status: "Placed",
      timeline: [
        {
          status: "Order Placed",
          date: `${formattedDate}, Just now`,
          description: "Order submitted with Offline Payment preference.",
          done: true,
        },
        {
          status: "Under Review",
          date: "Pending concierge verification",
          description: "Our silk specialist will review stock and authentic Silk Mark tags.",
          done: false,
        },
        {
          status: "Confirmed",
          date: "Awaiting review",
          description: "Order confirmed after concierge direct contact.",
          done: false,
        },
        {
          status: "Shipped",
          date: "Awaiting confirmation",
          description: "Express insured dispatch to your doorstep.",
          done: false,
        },
      ],
    };

    setOrders((prev) => [newOrder, ...prev]);
    clearCart();
    return newOrder;
  };

  const getOrderByIdOrPhone = (query: string) => {
    const clean = query.trim().toLowerCase();
    return orders.find(
      (o) =>
        o.orderId.toLowerCase() === clean ||
        o.customer.phone.replace(/\D/g, "") === clean.replace(/\D/g, "")
    );
  };

  return (
    <ShopContext.Provider
      value={{
        cart,
        cartCount,
        cartSubtotal,
        cartDiscount,
        appliedCoupon,
        couponDiscountAmount,
        cartTotal,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        applyCoupon,
        removeCoupon,
        wishlist,
        wishlistCount,
        toggleWishlist,
        isInWishlist,
        recentlyViewed,
        addRecentlyViewed,
        orders,
        placeOrder,
        getOrderByIdOrPhone,
        isCartDrawerOpen,
        setIsCartDrawerOpen,
        isSearchOpen,
        setIsSearchOpen,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error("useShop must be used within a ShopProvider");
  }
  return context;
};
