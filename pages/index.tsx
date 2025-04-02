import HeroSection from '../components/HeroSection';
import MembershipSection from '../components/MembershipSection';
import ClassesSection from '../components/ClassesSection';
import ScheduleSection from '../components/ScheduleSection';
import ContactSection from '../components/ContactSection';
import LocationSection from '../components/LocationSection';
import Footer from '../components/Footer';
import FloatingWhatsAppButton from '../components/WhatsAppButton';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <MembershipSection />
      <ClassesSection />
      <ScheduleSection />
      <ContactSection />
      <LocationSection />
      <Footer />
      <FloatingWhatsAppButton />
    </main>
  );
}