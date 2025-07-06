import { AppBar, Toolbar, Typography, Button, IconButton, useTheme, useMediaQuery, Drawer, List, ListItem, ListItemIcon, ListItemText, Box } from '@mui/material';
import { HiMenuAlt3 } from 'react-icons/hi';
import { FaHotel, FaBed, FaEnvelope, FaHome } from 'react-icons/fa';
/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { useState } from 'react';

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Opciones del menú con scroll interno
  const menuOptions = [
    { label: 'Inicio', icon: <FaHome />, to: '#inicio' },
    { label: 'Habitaciones', icon: <FaBed />, to: '#habitaciones' },
    { label: 'Contacto', icon: <FaEnvelope />, to: '#contacto' }
  ];

  // Animación de entrada
  const navVariants = {
    hidden: { y: -100 },
    visible: { 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  // Scroll suave al hacer click en los links
  const handleScroll = (e, to) => {
    e.preventDefault();
    const section = document.querySelector(to);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setDrawerOpen(false);
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <AppBar position="fixed" className="bg-emerald-900/95 backdrop-blur-md shadow-lg z-50">
        <Toolbar className="justify-between container mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <FaHotel className="text-3xl text-emerald-400 drop-shadow-md" />
            <Typography variant="h6" className="font-serif text-2xl text-emerald-50 tracking-wide">
              Hotel Los Andes
            </Typography>
          </motion.div>

          {/* Opciones SIEMPRE visibles en desktop */}
          {!isMobile && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex gap-2 items-center"
            >
              {menuOptions.map(option => (
                <a
                  href={option.to}
                  key={option.label}
                  onClick={e => handleScroll(e, option.to)}
                  style={{ textDecoration: 'none' }}
                >
                  <motion.div
                    whileHover={{ scale: 1.08, backgroundColor: "#059669" }}
                    className="flex items-center gap-2 px-5 py-2 rounded-full transition-colors duration-200 cursor-pointer border-2 bg-emerald-800/80 border-emerald-600 text-emerald-50 hover:bg-emerald-700/90 hover:text-white"
                  >
                    <span className="text-xl">{option.icon}</span>
                    <span className="font-bold tracking-wide">{option.label}</span>
                  </motion.div>
                </a>
              ))}
              <motion.div
                whileHover={{ scale: 1.08, rotate: -2 }}
                whileTap={{ scale: 0.96 }}
              >
                <Button 
                  variant="contained" 
                  className="bg-gradient-to-r from-emerald-500 to-emerald-700 hover:from-emerald-600 hover:to-emerald-800 text-white shadow-md px-6 font-bold ml-2 rounded-full"
                  endIcon={<FaHotel />}
                >
                  Reservar Ahora
                </Button>
              </motion.div>
            </motion.div>
          )}

          {/* Drawer para móvil */}
          {isMobile && (
            <>
              <IconButton
                color="inherit"
                onClick={() => setDrawerOpen(true)}
                className="text-emerald-50"
              >
                <HiMenuAlt3 className="text-2xl" />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                PaperProps={{
                  className: "bg-emerald-900 text-emerald-50"
                }}
              >
                <Box sx={{ width: 240, pt: 2 }}>
                  <List>
                    {menuOptions.map((option) => (
                      <ListItem
                        button
                        key={option.label}
                        component="a"
                        href={option.to}
                        onClick={e => handleScroll(e, option.to)}
                        sx={{
                          borderRadius: 2,
                          my: 1,
                          '&:hover': { backgroundColor: '#047857', color: '#fff' }
                        }}
                      >
                        <ListItemIcon className="text-emerald-400">{option.icon}</ListItemIcon>
                        <ListItemText primary={<span className="font-bold">{option.label}</span>} />
                      </ListItem>
                    ))}
                  </List>
                  <Box className="flex justify-center mt-6">
                    <Button 
                      variant="contained"
                      className="bg-gradient-to-r from-emerald-500 to-emerald-700 hover:from-emerald-600 hover:to-emerald-800 text-white shadow-md px-6 font-bold rounded-full"
                      endIcon={<FaHotel />}
                    >
                      Reservar Ahora
                    </Button>
                  </Box>
                </Box>
              </Drawer>
            </>
          )}
        </Toolbar>
      </AppBar>
    </motion.div>
  );
};

export default Navbar;