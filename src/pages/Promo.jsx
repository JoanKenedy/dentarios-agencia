import { CallToAction } from "../components/CallToAction";
import { Testimonials } from "../components/Home/Testimonials";
import { Benefits } from "../components/Promo2025/Benefits";
import { Hero } from "../components/Promo2025/Hero";
import { PromoSection } from "../components/Promo2025/PromoSection";
import { SliderClients } from "../components/SliderClients";

export const Promo = () => {
  return (
    <>
      <Hero />
      <PromoSection />
      <SliderClients />
      <Benefits />
      
      <Testimonials />
      <CallToAction />
    </>
  );
};
