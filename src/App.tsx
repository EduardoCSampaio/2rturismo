/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Trustbar from './components/Trustbar';
import ToursSection from './components/ToursSection';
import PackagesSection from './components/PackagesSection';
import InstagramFeedSection from './components/InstagramFeedSection';
import TripCalculator from './components/TripCalculator';
import AboutSection from './components/AboutSection';
import ReviewsSection from './components/ReviewsSection';
import FaqSection from './components/FaqSection';
import ContactForm from './components/ContactForm';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-[#123349] text-neutral-100 selection:bg-amber-500 selection:text-neutral-950">
      <Navbar />
      <main>
        <Hero />
        <Trustbar />
        <ToursSection />
        <InstagramFeedSection />
        <PackagesSection />
        <TripCalculator />
        <AboutSection />
        <ReviewsSection />
        <FaqSection />
        <ContactForm />
        <LocationSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

