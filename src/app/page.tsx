"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardNineteen from '@/components/sections/feature/FeatureCardNineteen';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroSplitDoubleCarousel from '@/components/sections/hero/HeroSplitDoubleCarousel';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';

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
        {
          name: "Əsas",          id: "hero"},
        {
          name: "Menyu",          id: "products"},
        {
          name: "Haqqımızda",          id: "about"},
        {
          name: "Əlaqə",          id: "contact"},
      ]}
      brandName="BEDU'S"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDoubleCarousel
      background={{
        variant: "plain"}}
      title="Desert Warmth Meets Modern Baku"
      description="Step into centuries of Bedouin hospitality. Every cup tells a story; every meal connects you to the rich traditions of the Middle East."
      leftCarouselItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/scene-from-morocco_23-2148129786.jpg",          imageAlt: "traditional middle eastern coffee ceremony"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/woman-chilling-out-with-coffee-cafe_53876-26326.jpg",          imageAlt: "middle eastern gourmet food platter"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/chef-putting-oil-from-glass-bottle-into-ceramic-jar_114579-4573.jpg",          imageAlt: "barista preparing specialty coffee"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/cups-coffee-near-saucer-with-sweet-turkish-delights-tray-against-mat_23-2148111674.jpg",          imageAlt: "Cups of coffee near saucer with sweet Turkish delights on tray against mat"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/berber-woman-preparing-tea-guests-camp-merzouge-desert_268835-7025.jpg",          imageAlt: "Berber woman preparing tea for guests at a camp in the Merzouge desert"},
      ]}
      rightCarouselItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-thanksgiving-meal-concept_23-2148629587.jpg",          imageAlt: "traditional middle eastern dessert"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/coffee-decoration-with-coffee-beans_23-2147671426.jpg",          imageAlt: "specialty coffee beans texture"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/man-having-iced-coffee-break-while-using-smartphone_23-2149567208.jpg",          imageAlt: "middle eastern heritage storytelling"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/dates-fruit-with-tea-glasses-pot_23-2148088477.jpg",          imageAlt: "Dates fruit with tea glasses and pot"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/two-cups-turkish-coffee-served-with-sweets_140725-7108.jpg",          imageAlt: "Two cups of turkish coffee served with sweets"},
      ]}
      buttons={[
        {
          text: "Discover Our Story",          href: "#about"},
      ]}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/full-shot-happy-people-sitting-bistro_23-2149366421.jpg",          alt: "Happy guests at bistro"},
        {
          src: "http://img.b2bpic.net/free-photo/side-view-man-woman-coffee-shop_23-2148263242.jpg",          alt: "Couple at coffee shop"},
        {
          src: "http://img.b2bpic.net/free-photo/friends-having-fun-together_23-2149290143.jpg",          alt: "Friends having fun"},
        {
          src: "http://img.b2bpic.net/free-photo/teenage-girl-smiling-while-talking-phone-having-chocolate-milkshake_1157-1233.jpg",          alt: "Happy teenage girl"},
        {
          src: "http://img.b2bpic.net/free-photo/eid-al-fitr-concept-with-tea_23-2147799469.jpg",          alt: "Tea ceremony concept"},
      ]}
      avatarText="Join our community of coffee lovers."
      marqueeItems={[
        {
          type: "text",          text: "Authentic Hospitality"},
        {
          type: "text",          text: "Specialty Brews"},
        {
          type: "text",          text: "Heritage Flavors"},
        {
          type: "text",          text: "Modern Baku Style"},
        {
          type: "text",          text: "Cultural Sanctuary"},
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={false}
      title="Beduin Hospitality in Baku"
      description={[
        "Bedu's isn't just a coffee shop; it's a sanctuary. We blend the warmth of desert traditions with the heartbeat of modern Baku.",        "From traditional coffee ceremonies to carefully crafted Middle Eastern dishes, we invite you to pause, savor, and connect."]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardNineteen
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          tag: "Coffee",          title: "Specialty Brews",          subtitle: "Crafted with care",          description: "Authentic beans and traditional brewing techniques.",          imageSrc: "http://img.b2bpic.net/free-photo/girl-pours-milk-cup-coffee_8353-1389.jpg"},
        {
          tag: "Dining",          title: "Heritage Flavors",          subtitle: "Middle Eastern heart",          description: "Traditional recipes served with a modern twist.",          imageSrc: "http://img.b2bpic.net/free-photo/coffee-beans-background_23-2148116661.jpg"},
        {
          tag: "Space",          title: "Gathering Haven",          subtitle: "Cultural escape",          description: "Designed for families, friends, and professionals.",          imageSrc: "http://img.b2bpic.net/free-photo/tool-used-coffee-machine-coffee-making-process_23-2150187556.jpg"},
        {
          tag: "Quality",          title: "Ethical Sourcing",          subtitle: "Bean to cup",          description: "We partner directly with farmers to bring you the best.",          imageSrc: "http://img.b2bpic.net/free-photo/energy-coffee-seed-food-aroma_1172-470.jpg"},
        {
          tag: "Craft",          title: "Artisan Brewing",          subtitle: "Precision in every drop",          description: "Our baristas are trained in the highest traditions.",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-open-coffee-kettle-coffee-beans_23-2148441197.jpg"},
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
        {
          id: "1",          brand: "Coffee",          name: "Bedouin Gold",          price: "7 AZN",          rating: 5,
          reviewCount: "120",          imageSrc: "http://img.b2bpic.net/free-photo/two-cups-aroma-coffee-with-pastries-gray-table_114579-22329.jpg"},
        {
          id: "2",          brand: "Coffee",          name: "Traditional Turkish",          price: "6 AZN",          rating: 5,
          reviewCount: "98",          imageSrc: "http://img.b2bpic.net/free-photo/coffee-beans-black-background-with-powder_114579-16635.jpg"},
        {
          id: "3",          brand: "Cuisine",          name: "Classic Hummus Platter",          price: "12 AZN",          rating: 4,
          reviewCount: "45",          imageSrc: "http://img.b2bpic.net/free-photo/arabic-tea-glasses-tray_23-2148088448.jpg"},
        {
          id: "4",          brand: "Cuisine",          name: "Baklava Selection",          price: "9 AZN",          rating: 5,
          reviewCount: "82",          imageSrc: "http://img.b2bpic.net/free-photo/cup-coffee-with-lokum_114579-20004.jpg"},
        {
          id: "5",          brand: "Coffee",          name: "Spice Latte",          price: "8 AZN",          rating: 4,
          reviewCount: "67",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-fresh-coffee-cup-table_23-2148463942.jpg"},
        {
          id: "6",          brand: "Cuisine",          name: "Stuffed Dates",          price: "5 AZN",          rating: 5,
          reviewCount: "34",          imageSrc: "http://img.b2bpic.net/free-photo/tea-still-life_23-2148117321.jpg"},
      ]}
      title="Our Signature Selection"
      description="Taste the tradition in every serving."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",          name: "Leyla M.",          role: "Local Professional",          testimonial: "The best atmosphere in Baku. Felt like home.",          imageSrc: "http://img.b2bpic.net/free-photo/cropped-shot-good-looking-cheerful-african-american-female-holds-cup-coffee-has-lunch-cozy-cafeteria-rests-after-excursion-recreats-resort-country_273609-3409.jpg"},
        {
          id: "2",          name: "Ahmed K.",          role: "Food Enthusiast",          testimonial: "Authentic flavors that remind me of home.",          imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-asian-girl-barista-giving-out-order-cafe-inviting-guest-pick-up-takeaway-o_1258-130468.jpg"},
        {
          id: "3",          name: "Sarah W.",          role: "Tourist",          testimonial: "A beautiful cultural escape. The coffee is unmatched.",          imageSrc: "http://img.b2bpic.net/free-photo/side-view-smiley-business-owner_23-2149434493.jpg"},
        {
          id: "4",          name: "Rashid F.",          role: "Family Guest",          testimonial: "Perfect place for our family weekends.",          imageSrc: "http://img.b2bpic.net/free-photo/positive-pleasant-looking-woman-with-blonde-hair-holds-disposable-cup-coffee-enjoys-drinking-hot-beverage-cold-winter-weather-dressed-knitted-grey-sweater_273609-46817.jpg"},
        {
          id: "5",          name: "Elena V.",          role: "Expat",          testimonial: "Bedu's is where I go for genuine peace.",          imageSrc: "http://img.b2bpic.net/free-photo/enthusiastic-young-asian-woman-barista-apron-looking-amazed-clap-hands-smiling-standing_1258-199222.jpg"},
      ]}
      title="Heartfelt Reviews"
      description="What our guests say about their Bedu's experience."
    />
  </div>

  <div id="socialProof" data-section="socialProof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Baku Daily",        "City Coffee Awards",        "Heritage Food Magazine",        "Expat Insider",        "Local Guide Baku",        "Cultural Daily",        "Baku Lifestyle"]}
      title="Recognized for Hospitality"
      description="Proud to be a staple in Baku's vibrant coffee scene."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        {
          id: "1",          title: "Do you accept reservations?",          content: "Yes, we encourage reservations for large groups."},
        {
          id: "2",          title: "Do you have vegetarian options?",          content: "We offer a wide selection of Middle Eastern vegetarian specialties."},
        {
          id: "3",          title: "Are your coffee beans ethically sourced?",          content: "Absolutely. We pride ourselves on ethical sourcing directly from farmers."},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/medium-shot-couple-having-lunch-luxury-restaurant_23-2150598349.jpg"
      mediaAnimation="slide-up"
      title="Common Questions"
      description="Everything you need to know about visiting."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "plain"}}
      text="Join us today for a cup of desert warmth. Reach out for reservations or events."
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