import ContactForm from '../components/ContactForm';

export default function Contacto() {
  return (
    <section className="pt-32 min-h-screen bg-gradient-to-b from-emerald-100 to-emerald-50">
      <ContactForm />
      <div className="max-w-lg mx-auto text-center text-emerald-900">
        <h3 className="text-xl font-bold mb-2">Dirección</h3>
        <p>Av. Principal, Trujillo, Estado Trujillo, Venezuela</p>
        <h3 className="text-xl font-bold mt-6 mb-2">Teléfono</h3>
        <p>+58 123-4567890</p>
      </div>
    </section>
  );
}