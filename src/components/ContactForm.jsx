import { FaUser, FaEnvelope, FaComment } from 'react-icons/fa';

export default function ContactForm() {
  return (
    <form className="bg-white rounded-xl shadow-lg p-8 max-w-lg mx-auto mt-16 mb-16">
      <h2 className="text-2xl font-bold mb-6 text-emerald-900">Contáctanos</h2>
      <div className="mb-4 flex items-center gap-2">
        <FaUser className="text-emerald-600" />
        <input className="flex-1 border-b-2 border-emerald-400 outline-none p-2" type="text" placeholder="Nombre" required />
      </div>
      <div className="mb-4 flex items-center gap-2">
        <FaEnvelope className="text-emerald-600" />
        <input className="flex-1 border-b-2 border-emerald-400 outline-none p-2" type="email" placeholder="Correo" required />
      </div>
      <div className="mb-4 flex items-center gap-2">
        <FaComment className="text-emerald-600" />
        <textarea className="flex-1 border-b-2 border-emerald-400 outline-none p-2" placeholder="Mensaje" required />
      </div>
      <button className="bg-emerald-600 text-white px-6 py-2 rounded hover:bg-emerald-700 transition w-full">Enviar</button>
    </form>
  );
}