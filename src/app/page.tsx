"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardNineteen from '@/components/sections/feature/FeatureCardNineteen';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroSplitDoubleCarousel from '@/components/sections/hero/HeroSplitDoubleCarousel';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import { MapPin, Clock, Phone, Instagram } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="compact"
        sizing="mediumLarge"
        background="aurora"
        cardStyle="glass-depth"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="layered"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        { name: "Əsas", id: "hero" },
        { name: "Menyu", id: "products" },
        { name: "Haqqımızda", id: "about" },
        { name: "Əlaqə", id: "contact" },
      ]}
      brandName="BEDU'S"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDoubleCarousel
      background={{ variant: "plain" }}
      title="Desert Warmth Meets Modern Baku"
      description="Step into centuries of Bedouin hospitality. Every cup tells a story; every meal connects you to the rich traditions of the Middle East."
      leftCarouselItems={[
        { imageSrc: "http://img.b2bpic.net/free-photo/scene-from-morocco_23-2148129786.jpg", imageAlt: "traditional middle eastern coffee ceremony" },
        { imageSrc: "http://img.b2bpic.net/free-photo/woman-chilling-out-with-coffee-cafe_53876-26326.jpg", imageAlt: "middle eastern gourmet food platter" },
      ]}
      rightCarouselItems={[
        { imageSrc: "http://img.b2bpic.net/free-photo/beautiful-thanksgiving-meal-concept_23-2148629587.jpg", imageAlt: "traditional middle eastern dessert" },
        { imageSrc: "http://img.b2bpic.net/free-photo/coffee-decoration-with-coffee-beans_23-2147671426.jpg", imageAlt: "specialty coffee beans texture" },
      ]}
      buttons={[{ text: "Discover Our Story", href: "#about" }]}
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={false}
      title="Beduin Hospitality in Baku"
      description={["Bedu's isn't just a coffee shop; it's a sanctuary. We blend the warmth of desert traditions with the heartbeat of modern Baku.", "From traditional coffee ceremonies to carefully crafted Middle Eastern dishes, we invite you to pause, savor, and connect."]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardNineteen
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        { tag: "Coffee", title: "Specialty Brews", subtitle: "Crafted with care", description: "Authentic beans and traditional brewing techniques.", imageSrc: "http://img.b2bpic.net/free-photo/girl-pours-milk-cup-coffee_8353-1389.jpg" },
        { tag: "Dining", title: "Heritage Flavors", subtitle: "Middle Eastern heart", description: "Traditional recipes served with a modern twist.", imageSrc: "http://img.b2bpic.net/free-photo/coffee-beans-background_23-2148116661.jpg" },
      ]}
      title="Experience the Art of Hospitality"
      description="Discover what makes Bedu's the city's preferred gathering place."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      products={[
        { id: "1", brand: "Coffee", name: "Bedouin Gold", price: "7 AZN", rating: 5, reviewCount: "120", imageSrc: "http://img.b2bpic.net/free-photo/two-cups-aroma-coffee-with-pastries-gray-table_114579-22329.jpg" },
        { id: "2", brand: "Coffee", name: "Traditional Turkish", price: "6 AZN", rating: 5, reviewCount: "98", imageSrc: "http://img.b2bpic.net/free-photo/coffee-beans-black-background-with-powder_114579-16635.jpg" },
      ]}
      title="Our Signature Selection"
      description="Taste the tradition in every serving."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      testimonial="Absolutely phenomenal hospitality and authentic taste. A true oasis in the city!"
      rating={5}
      author="Leyla M."
      avatars={[{ src: "http://img.b2bpic.net/free-photo/cropped-shot-good-looking-cheerful-african-american-female-holds-cup-coffee-has-lunch-cozy-cafeteria-rests-after-excursion-recreats-resort-country_273609-3409.jpg", alt: "Leyla M." }]}
      ratingAnimation="slide-up"
      avatarsAnimation="slide-up"
      useInvertedBackground={true}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      tag="Location & Info"
      title="Visit Us in Baku"
      description="Baku, White City, 1st Green Island Street\n\nOperating Hours:\nMon–Sat: 07:00–02:00\nSun: 09:00–00:00\n\nPhone/WhatsApp: +994 50 388 35 88\nInstagram: @beduscoffee"
      buttons={[{ text: "Get Directions", href: "#" }, { text: "Follow Us", href: "#" }]}
      background={{ variant: "plain" }}
      useInvertedBackground={false}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DE8rCCIae0SlyXkikO90v2SgnL/uploaded-1777877176287-2jg0wefb.png"
      logoText="BEDU'S"
      copyrightText="© 2026 BEDU’S. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}