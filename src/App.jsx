import React from 'react';
import {
  Printer,
  PenTool,
  Megaphone,
  MapPin,
  Package,
  FileText,
  PartyPopper,
  BookOpen,
  Layers,
  MapPin as MapPinIcon,
  Phone,
  Instagram,
  CheckCircle2,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const services = [
    {
      icon: <PenTool className="w-8 h-8 text-primary-cyan" />,
      title: "Diseño Gráfico",
      items: ["Logos", "Placas", "Flyers", "Reels", "Videos", "Rediseños", "Todo tipo de diseños"]
    },
    {
      icon: <Megaphone className="w-8 h-8 text-primary-magenta" />,
      title: "Publicidad",
      items: ["Folletos", "Tarjetas personales", "Stickers", "Afiches", "Posters", "Banderas", "Planchas troqueladas"]
    },
    {
      icon: <MapPin className="w-8 h-8 text-primary-yellow" />,
      title: "Cartelería",
      items: ["Carteles", "Lona", "Estructuras", "Vidrieras", "Vinilos", "Fly banners", "Pasacalles", "Corpóreas", "Instalaciones"]
    },
    {
      icon: <Package className="w-8 h-8 text-primary-cyan" />,
      title: "Packaging",
      items: ["Etiquetas simples", "Etiquetas autoadhesivas", "Cajas simples", "Papel kraft", "Hang tags", "Sticker cierrabolsa"]
    },
    {
      icon: <FileText className="w-8 h-8 text-primary-magenta" />,
      title: "Papelería Comercial",
      items: ["Taloneras", "Planillas", "Sobres empresariales", "Anotadores"]
    },
    {
      icon: <PartyPopper className="w-8 h-8 text-primary-yellow" />,
      title: "Deco para Eventos",
      items: ["Cumpleaños", "Bautismos", "Fiestas", "Guirnaldas", "Souvenirs", "Centros de mesa"]
    },
    {
      icon: <BookOpen className="w-8 h-8 text-primary-cyan" />,
      title: "Editorial",
      items: ["Encuadernados", "Cuadernillos", "Apuntes", "Revistas", "Manuales", "Catálogos"]
    },
    {
      icon: <Layers className="w-8 h-8 text-primary-magenta" />,
      title: "Servicios Varios",
      items: ["Fotos normales", "Fotos polaroid", "Sellos", "DTF", "Carta menú", "Individuales de mesa", "Diplomas", "Cartas", "Ploteos"]
    }
  ];

  const advantages = [
    "Atención personalizada",
    "Diseños a medida",
    "Calidad profesional",
    "Entregas rápidas"
  ];

  const gallery = [
          {title: "Tarjetas Personales", bg: "bg-white/5", height: "h-64" },
    { title: "Packaging", bg: "bg-white/10", height: "h-80" },
    { title: "Etiquetas", bg: "bg-white/5", height: "h-48" },
    { title: "Cartelería", bg: "bg-white/10", height: "h-72" },
    { title: "Menús", bg: "bg-white/5", height: "h-60" },
    { title: "Diplomas", bg: "bg-white/10", height: "h-56" },
    { title: "Polaroids", bg: "bg-white/5", height: "h-64" }
  ];

  const testimonials = [
    {
      name: "Laura Gómez",
      role: "Emprendedora",
      text: "La calidad de las etiquetas y el packaging superó mis expectativas. ¡Súper recomendados!",
      color: "text-primary-cyan"
    },
    {
      name: "Martín Rodríguez",
      role: "Dueño de Restaurante",
      text: "Hicimos las cartas menú y la cartelería con IMA. Excelente asesoramiento y tiempos de entrega.",
      color: "text-primary-magenta"
    },
    {
      name: "Sofía Fernández",
      role: "Organizadora de Eventos",
      text: "Siempre confío en ellos para la deco y papelería de mis eventos. La atención es impecable.",
      color: "text-primary-yellow"
    }
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen font-sans text-white selection:bg-primary-cyan selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-primary-black/90 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
              <div className="flex items-center gap-3">
                <img src="/logo-ima.jpg" alt="IMA Imprenta Gráfica Logo" className="h-12 w-auto object-contain rounded-md" />
                <span className="font-display font-bold text-2xl tracking-tight hidden sm:block text-white">
                  IMA <span className="font-medium text-gray-400 text-lg">Imprenta Gráfica</span>
                </span>
                <span className="font-display font-bold text-2xl tracking-tight sm:hidden text-white">
                  IMA
                </span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollTo('servicios')} className="text-gray-300 hover:text-primary-cyan transition-colors font-medium">Servicios</button>
              <button onClick={() => scrollTo('trabajos')} className="text-gray-300 hover:text-primary-magenta transition-colors font-medium">Trabajos</button>
              <button onClick={() => scrollTo('nosotros')} className="text-gray-300 hover:text-primary-yellow transition-colors font-medium">Nosotros</button>
              <a 
                href="https://wa.me/543513892956?text=Hola!%20Me%20gustar%C3%ADa%20solicitar%20un%20presupuesto." 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-primary-black px-5 py-2.5 rounded-full font-medium hover:bg-gray-200 transition-colors flex items-center gap-2"
              >
                Contacto
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white p-2 rounded-md focus:outline-none"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-primary-black border-b border-white/10 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col items-center shadow-lg">
                <button onClick={() => scrollTo('servicios')} className="block w-full py-3 text-center text-lg font-medium text-gray-300">Servicios</button>
                <button onClick={() => scrollTo('trabajos')} className="block w-full py-3 text-center text-lg font-medium text-gray-300">Trabajos</button>
                <button onClick={() => scrollTo('nosotros')} className="block w-full py-3 text-center text-lg font-medium text-gray-300">Nosotros</button>
                <a 
                  href="https://wa.me/543513892956?text=Hola!%20Me%20gustar%C3%ADa%20solicitar%20un%20presupuesto." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full py-3 mt-4 text-center rounded-full text-lg font-medium bg-white text-primary-black"
                >
                  Contactar
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-hero-gradient">
        {/* CMYK Abstract Shapes */}
        <div className="absolute top-20 right-0 w-64 h-64 bg-primary-cyan/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute top-40 left-10 w-72 h-72 bg-primary-magenta/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-10 right-40 w-80 h-80 bg-primary-yellow/10 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="font-display font-bold text-5xl md:text-7xl tracking-tighter mb-6 leading-tight">
              Convertimos tu idea en <span className="text-gradient-cmyk">papel</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Soluciones de diseño, impresión y gráfica para negocios, emprendimientos y eventos en Córdoba Capital.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="https://wa.me/543513892956?text=Hola!%20Me%20gustar%C3%ADa%20solicitar%20un%20presupuesto." 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-white text-primary-black px-8 py-4 rounded-full font-medium text-lg hover:shadow-xl hover:-translate-y-1 transition-all transform flex items-center justify-center gap-2 group"
              >
                Solicitar Presupuesto
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <button 
                onClick={() => scrollTo('servicios')}
                className="w-full sm:w-auto bg-primary-black border border-white/20 text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-white/10 transition-colors shadow-sm"
              >
                Ver Servicios
              </button>
            </div>
            
            {/* Contact Quick Info */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 text-gray-400 font-medium"
            >
              <div className="flex items-center gap-2">
                <MapPinIcon className="w-5 h-5 text-primary-cyan" />
                Córdoba Capital – Alto Alberdi
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary-magenta" />
                <a href="https://wa.me/543513892956?text=Hola!%20Me%20gustar%C3%ADa%20solicitar%20un%20presupuesto." className="hover:text-primary-magenta transition-colors">351 3892956</a>
              </div>
              <div className="flex items-center gap-2">
                <Instagram className="w-5 h-5 text-primary-yellow" />
                <a href="https://instagram.com/ima.imprenta.grafica" target="_blank" rel="noopener noreferrer" className="hover:text-primary-yellow transition-colors">@ima.imprenta.grafica</a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="nosotros" className="py-20 bg-primary-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">¿Por qué elegirnos?</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-cyan via-primary-magenta to-primary-yellow mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((adv, index) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                key={index} 
                className="flex items-center gap-4 bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-colors"
              >
                <div className="flex-shrink-0 bg-white/10 rounded-full p-2">
                  <CheckCircle2 className="w-8 h-8 text-white" />
                </div>
                <span className="text-lg font-medium">{adv}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-24 bg-gray-900 border-t border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">Nuestros Servicios</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">Soluciones integrales para cada necesidad de impresión y diseño.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                key={index} 
                className="bg-primary-black p-8 rounded-3xl shadow-sm border border-white/10 hover:border-white/20 transition-all hover:-translate-y-1 relative overflow-hidden group"
              >
                {/* Subtle top border accent based on CMYK colors based on index */}
                <div className={`absolute top-0 left-0 w-full h-1 
                  ${index % 3 === 0 ? 'bg-primary-cyan' : index % 3 === 1 ? 'bg-primary-magenta' : 'bg-primary-yellow'}
                  transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300
                `}></div>
                
                <div className="bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="font-display text-xl font-bold mb-3 text-white">{service.title}</h3>
                
                {service.description && (
                  <p className="text-gray-400 leading-relaxed">{service.description}</p>
                )}
                
                {service.items && (
                  <ul className="space-y-1 mt-4">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="text-gray-400 flex items-start gap-2 text-sm">
                        <span className="text-gray-600 mt-0.5 text-xs">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="trabajos" className="py-24 bg-primary-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">Galería de Trabajos</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">Te mostramos un poco de lo que hacemos con dedicación y calidad.</p>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {gallery.map((item, index) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={index} 
                className={`w-full rounded-2xl overflow-hidden relative group cursor-pointer ${item.bg} ${item.height} flex flex-col items-center justify-center border border-white/5`}
              >
                {/* Simulated Image Placeholder */}
                <Printer className="w-12 h-12 text-gray-600 mb-4" />
                <span className="font-display font-medium text-gray-500">Imagen de muestra</span>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-primary-black/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                  <h3 className="text-white font-bold text-xl drop-shadow-md transform translate-y-4 group-hover:translate-y-0 transition-transform">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
             <a 
                href="https://instagram.com/ima.imprenta.grafica" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary-cyan font-medium hover:text-cyan-400 transition-colors"
              >
                Ver más en nuestro Instagram <ChevronRight className="w-4 h-4" />
              </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-900 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-white">Lo que dicen nuestros clientes</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((test, index) => (
              <div key={index} className="bg-primary-black p-8 rounded-3xl shadow-sm border border-white/10">
                <div className="mb-6">
                  {/* Quote icon simple representation */}
                  <div className="text-5xl font-serif text-white/10 leading-none h-8">"</div>
                </div>
                <p className="text-gray-300 text-lg mb-8 italic">"{test.text}"</p>
                <div>
                  <h4 className="font-bold text-white">{test.name}</h4>
                  <p className={`text-sm font-medium ${test.color}`}>{test.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-primary-black text-white">
        {/* CMYK Background Effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary-cyan rounded-full blur-[100px]"></div>
          <div className="absolute top-20 right-0 w-80 h-80 bg-primary-magenta rounded-full blur-[100px]"></div>
          <div className="absolute -bottom-40 left-40 w-96 h-96 bg-primary-yellow rounded-full blur-[100px]"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center z-10">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            ¿Tenés una idea?<br/>Nosotros la convertimos en papel.
          </h2>
          <a 
            href="https://wa.me/543513892956?text=Hola!%20Me%20gustar%C3%ADa%20solicitar%20un%20presupuesto." 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex bg-white text-primary-black px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all transform items-center gap-3 group"
          >
            Solicitar presupuesto ahora
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-primary-yellow transition-colors">
              <ChevronRight className="w-5 h-5" />
            </div>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary-black border-t border-white/10 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <img src="/logo-ima.jpg" alt="IMA Imprenta Gráfica Logo" className="h-10 w-auto object-contain rounded-md" />
                <span className="font-display font-bold text-xl tracking-tight text-white">IMA Imprenta Gráfica</span>
              </div>
              <p className="text-gray-400 max-w-sm">
                Tu socio gráfico. Calidad, diseño y rapidez para destacar tu marca.
              </p>
            </div>
            
            <div className="flex flex-col space-y-4 text-gray-400">
              <div className="flex items-start gap-4">
                <MapPinIcon className="w-6 h-6 text-gray-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-white">Ubicación</h4>
                  <p>Alto Alberdi, Córdoba Capital<br/>Argentina</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-gray-500 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-white">WhatsApp</h4>
                  <a href="https://wa.me/543513892956?text=Hola!%20Me%20gustar%C3%ADa%20solicitar%20un%20presupuesto." className="hover:text-primary-magenta transition-colors hover:text-white">351 3892956</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Instagram className="w-6 h-6 text-gray-500 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-white">Instagram</h4>
                  <a href="https://instagram.com/ima.imprenta.grafica" target="_blank" rel="noopener noreferrer" className="hover:text-primary-yellow transition-colors hover:text-white">@ima.imprenta.grafica</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} IMA Imprenta Gráfica. Todos los derechos reservados.
            </p>
            <div className="flex space-x-4">
              {/* Optional footer links could go here */}
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/543513892956?text=Hola!%20Me%20gustar%C3%ADa%20solicitar%20un%20presupuesto."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#128C7E] hover:scale-110 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group border border-white/10"
        aria-label="Contactar por WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
        </svg>
      </a>
    </div>
  );
}
