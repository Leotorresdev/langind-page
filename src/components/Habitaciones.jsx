import { FaWifi, FaTv, FaShower, FaUserFriends } from 'react-icons/fa';
import suiteAndinaImg from '../assets/suite-andina.jpg'; // Asegúrate de tener esta imagen en tu carpeta assets
import dobleDeluxeImg from '../assets/doble.jpg'; // Asegúrate de tener esta imagen en tu carpeta assets
import individualEstándarImg from '../assets/individual.jpg'; // Asegú

const habitaciones = [
  {
    nombre: "Suite Andina",
    descripcion: "Vista a la montaña, jacuzzi, wifi, TV y desayuno incluido.",
    precio: "$80/noche",
    imagen: suiteAndinaImg,
    servicios: [<FaWifi />, <FaTv />, <FaShower />, <FaUserFriends />],
    capacidad: "2 adultos",
    camas: "1 King",
    size: "40m²"
  },
  {
    nombre: "Doble Deluxe",
    descripcion: "Habitación doble, baño privado, aire acondicionado, wifi y TV.",
    precio: "$60/noche",
    imagen: dobleDeluxeImg,
    servicios: [<FaWifi />, <FaTv />, <FaShower />],
    capacidad: "2 adultos",
    camas: "2 Queen",
    size: "28m²"
  },
  {
    nombre: "Individual Estándar",
    descripcion: "Cómoda habitación individual, baño privado, wifi y desayuno.",
    precio: "$40/noche",
    imagen: individualEstándarImg,
    servicios: [<FaWifi />, <FaShower />],
    capacidad: "1 adulto",
    camas: "1 Individual",
    size: "18m²"
  }
];

export default function HabitacionesSection() {
  return (
    <section className="bg-emerald-50 py-12">
      <h2 className="text-4xl font-serif font-bold text-emerald-900 mb-10 text-center">Habitaciones Disponibles</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {habitaciones.map((hab, i) => (
          <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
            <img src={hab.imagen} alt={hab.nombre} className="h-48 w-full object-cover" />
            <div className="p-5 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-emerald-900 mb-2">{hab.nombre}</h3>
              <p className="text-gray-700 mb-2 flex-1">{hab.descripcion}</p>
              <div className="flex gap-3 mb-2 text-emerald-600 text-lg">
                {hab.servicios.map((icon, idx) => <span key={idx}>{icon}</span>)}
              </div>
              <div className="flex justify-between text-sm text-emerald-800 mb-2">
                <span>Capacidad: {hab.capacidad}</span>
                <span>Camas: {hab.camas}</span>
                <span>{hab.size}</span>
              </div>
              <span className="font-semibold text-emerald-700">{hab.precio}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}