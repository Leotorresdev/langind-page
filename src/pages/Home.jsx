import Hero from '../components/Hero';
import HabitacionesSection from '../components/Habitaciones';
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <div>
      <section id="inicio">
        <Hero />
      </section>
      <section id="habitaciones" className="pt-24">
        <HabitacionesSection />
      </section>
      <section id="contacto" className="pt-24">
        <ContactForm />
      </section>
    </div>
  );
}