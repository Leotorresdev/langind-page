import { Container, Typography, Button, Box, Grid, Paper } from '@mui/material';
/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { FaMountain, FaStar, FaWifi, FaUtensils, FaCar, FaBed } from 'react-icons/fa';
import { BiSolidLeaf } from 'react-icons/bi';

const servicios = [
  { icon: <FaWifi className="text-emerald-600" />, label: "WiFi Gratis" },
  { icon: <FaUtensils className="text-emerald-600" />, label: "Desayuno Incluido" },
  { icon: <FaCar className="text-emerald-600" />, label: "Estacionamiento" },
  { icon: <FaBed className="text-emerald-600" />, label: "Habitaciones de lujo" },
];

const testimonios = [
  {
    nombre: "María G.",
    texto: "¡Una experiencia inolvidable! El personal es muy amable y la vista a los Andes es espectacular.",
    estrellas: 5
  },
  {
    nombre: "Carlos P.",
    texto: "Las habitaciones son cómodas y limpias. El desayuno típico andino es delicioso.",
    estrellas: 5
  }
];

const Hero = () => {
  return (
    <Box
      id="inicio"
      className="min-h-screen relative bg-cover bg-center bg-fixed flex flex-col justify-center"
      sx={{
        backgroundImage: `linear-gradient(rgba(20,83,45,0.7), rgba(34,197,94,0.7)), url('/fondo.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/40 to-emerald-950/60" />

      <Container className="relative z-10 pt-32 pb-12">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <div className="flex items-center gap-3 mb-4">
                <FaMountain className="text-3xl text-emerald-400" />
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: 100 }}
                  transition={{ duration: 0.8 }}
                  className="h-0.5 bg-emerald-400"
                />
              </div>
              <Typography
                variant="h1"
                className="font-serif text-5xl md:text-7xl mb-4 text-emerald-50 drop-shadow-lg"
              >
                Hotel Los Andes
              </Typography>
              <Typography
                variant="h4"
                className="mb-4 text-emerald-100/90 font-semibold"
              >
                Vive la experiencia andina en Trujillo, Venezuela
              </Typography>
              <Typography
                variant="h6"
                className="mb-8 text-emerald-100/80"
              >
                Disfruta de la hospitalidad venezolana, paisajes de montaña y el mejor confort en el corazón de los Andes. Perfecto para vacaciones, escapadas románticas y viajes de negocios.
              </Typography>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="flex gap-4 items-center mb-8"
              >
                <Button
                  variant="contained"
                  size="large"
                  className="bg-emerald-600 hover:bg-emerald-700 px-8 py-3 rounded-full font-bold"
                  startIcon={<BiSolidLeaf />}
                  href="#contacto"
                >
                  Reservar Ahora
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  className="border-emerald-400 text-emerald-400 hover:bg-emerald-400/10 px-8 py-3 rounded-full font-bold"
                  href="#habitaciones"
                >
                  Ver Habitaciones
                </Button>
              </motion.div>
              <div className="flex flex-wrap gap-6 mt-4">
                {servicios.map((serv, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full shadow text-emerald-50 font-medium backdrop-blur">
                    {serv.icon}
                    <span>{serv.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 md:mt-0"
            >
              <Paper elevation={6} className="p-6 bg-white/90 rounded-xl">
                <Typography variant="h6" className="text-emerald-900 font-bold mb-2 text-center">
                  Testimonios de nuestros huéspedes
                </Typography>
                {testimonios.map((t, i) => (
                  <Box key={i} className="mb-4">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-emerald-800">{t.nombre}</span>
                      {[...Array(t.estrellas)].map((_, idx) => (
                        <FaStar key={idx} className="text-yellow-400" />
                      ))}
                    </div>
                    <Typography variant="body2" className="text-emerald-800 italic">
                      "{t.texto}"
                    </Typography>
                  </Box>
                ))}
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;