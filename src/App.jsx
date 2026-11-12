import React, { useState } from 'react';
import { ShoppingCart, Menu, Search, Star, ArrowRight, Cpu, Printer, Car, ShieldCheck } from 'lucide-react';

const productos = [
  {
    id: 1,
    nombre: 'Resina 3D Alta Precisión (1KG)',
    categoria: 'Impresión 3D',
    precio: 85000,
    calificacion: 4.8,
    reviews: 142,
    imagen: 'https://images.unsplash.com/photo-1631557088924-a7199c017d74?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    etiqueta: 'Más Vendido'
  },
  {
    id: 2,
    nombre: 'Láminas FEP Premium (Pack x5)',
    categoria: 'Accesorios 3D',
    precio: 45000,
    calificacion: 4.9,
    reviews: 89,
    imagen: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 3,
    nombre: 'Tarjeta Gráfica AMD Radeon RX 9060 XT',
    categoria: 'Componentes PC',
    precio: 2150000,
    calificacion: 5.0,
    reviews: 34,
    imagen: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    etiqueta: 'Nuevo'
  },
  {
    id: 4,
    nombre: 'Radio KBT KDV-170BTC Bluetooth',
    categoria: 'Accesorios Auto',
    precio: 280000,
    calificacion: 4.6,
    reviews: 56,
    imagen: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  }
];

// Función para formatear a COP
const formatearCOP = (valor) => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
  }).format(valor);
};

export default function App() {
  const [menuMovilAbierto, setMenuMovilAbierto] = useState(false);
  const [carritoCount, setCarritoCount] = useState(0);

  const agregarAlCarrito = () => {
    setCarritoCount(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-200 flex flex-col selection:bg-indigo-500/30">
      {/* Navegación */}
      <nav className="fixed w-full top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center flex-shrink-0 cursor-pointer">
              <div className="text-indigo-500 mr-2 flex items-center">
                <Cpu size={28} strokeWidth={2.5} />
              </div>
              <span className="text-2xl font-black tracking-tighter text-white">
                LEXNOVA
              </span>
            </div>

            {/* Menú Escritorio */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-slate-400 hover:text-indigo-400 font-medium transition-colors">Tecnología</a>
              <a href="#" className="text-slate-400 hover:text-indigo-400 font-medium transition-colors">Impresión 3D</a>
              <a href="#" className="text-slate-400 hover:text-indigo-400 font-medium transition-colors">Motor</a>
              <a href="#" className="text-slate-400 hover:text-indigo-400 font-medium transition-colors">Soporte</a>
            </div>

            {/* Iconos */}
            <div className="flex items-center space-x-5">
              <button className="text-slate-400 hover:text-white transition-colors hidden sm:block">
                <Search size={22} />
              </button>
              <button className="text-slate-400 hover:text-indigo-400 transition-colors relative group">
                <ShoppingCart size={22} className="group-hover:scale-110 transition-transform" />
                {carritoCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[18px] text-center shadow-lg shadow-indigo-500/30">
                    {carritoCount}
                  </span>
                )}
              </button>
              <button 
                className="text-slate-400 md:hidden hover:text-white transition-colors"
                onClick={() => setMenuMovilAbierto(!menuMovilAbierto)}
              >
                {menuMovilAbierto ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Menú Móvil */}
        {menuMovilAbierto && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-6 space-y-1 shadow-2xl">
            <a href="#" className="block px-3 py-3 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800">Tecnología y PC</a>
            <a href="#" className="block px-3 py-3 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800">Impresión 3D</a>
            <a href="#" className="block px-3 py-3 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800">Accesorios Motor</a>
            <a href="#" className="block px-3 py-3 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800">Soporte y Contacto</a>
          </div>
        )}
      </nav>

      <main className="flex-grow pt-16">
        
        {/* Sección Hero */}
        <section className="relative overflow-hidden">
          {/* Elementos decorativos de fondo */}
          <div className="absolute inset-0 bg-slate-950 z-0" />
          <div className="absolute top-1/4 -right-32 w-[30rem] h-[30rem] bg-indigo-600/20 rounded-full mix-blend-screen filter blur-[100px] z-0" />
          <div className="absolute bottom-0 -left-32 w-[25rem] h-[25rem] bg-cyan-600/20 rounded-full mix-blend-screen filter blur-[100px] z-0" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 flex flex-col items-center text-center">
            <span className="inline-flex items-center py-1 px-3 rounded-full bg-slate-900 border border-slate-800 text-indigo-400 text-sm font-semibold tracking-wider mb-8 shadow-inner shadow-white/5">
              <span className="w-2 h-2 rounded-full bg-indigo-500 mr-2 animate-pulse"></span>
              NUEVO ECOSISTEMA LEXNOVA
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 max-w-4xl text-white">
              Lleva tu Setup al <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-400 bg-300% animate-gradient">
                Siguiente Nivel
              </span>
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-slate-400 max-w-2xl mb-10 font-light leading-relaxed">
              Desde impresión 3D de alta precisión hasta rendimiento extremo en PC y accesorios para tu vehículo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl shadow-[0_0_20px_rgba(79,70,229,0.4)] hover:shadow-[0_0_30px_rgba(79,70,229,0.6)] transition-all flex items-center justify-center group">
                Explorar Catálogo
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl border border-slate-700 transition-all">
                Ver Ofertas
              </button>
            </div>
          </div>
        </section>

        {/* Categorías Rápidas */}
        <section className="py-10 border-y border-slate-800/50 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {['PC Gaming', 'Impresión 3D', 'Auto', 'Motocicletas'].map((cat, i) => (
              <div key={i} className="flex flex-col items-center p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 cursor-pointer transition-colors group">
                {i === 0 && <Cpu className="text-slate-400 group-hover:text-indigo-400 mb-2" size={28} />}
                {i === 1 && <Printer className="text-slate-400 group-hover:text-indigo-400 mb-2" size={28} />}
                {i === 2 && <Car className="text-slate-400 group-hover:text-indigo-400 mb-2" size={28} />}
                {i === 3 && <ShieldCheck className="text-slate-400 group-hover:text-indigo-400 mb-2" size={28} />}
                <span className="text-sm font-semibold text-slate-300 group-hover:text-white">{cat}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Sección de Productos */}
        <section className="py-20 bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Destacados</h2>
                <p className="text-slate-400 text-lg">Lo mejor en tecnología y accesorios.</p>
              </div>
              <a href="#" className="hidden md:flex items-center text-indigo-400 font-semibold hover:text-indigo-300">
                Ver Todo <ArrowRight className="ml-1" size={18} />
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {productos.map((producto) => (
                <div key={producto.id} className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-indigo-500/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.5)] hover:-translate-y-1 transition-all duration-300 group flex flex-col">
                  {/* Contenedor Imagen */}
                  <div className="relative aspect-square overflow-hidden bg-slate-800">
                    {producto.etiqueta && (
                      <span className="absolute top-3 left-3 z-10 bg-indigo-600 text-white text-xs font-bold px-2.5 py-1 rounded-md shadow-lg shadow-indigo-900/50">
                        {producto.etiqueta}
                      </span>
                    )}
                    <img 
                      src={producto.imagen} 
                      alt={producto.nombre} 
                      className="w-full h-full object-cover object-center group-hover:scale-110 group-hover:opacity-80 transition-all duration-500"
                    />
                    {/* Capa Acción Rápida */}
                    <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6 backdrop-blur-[2px]">
                      <button 
                        onClick={agregarAlCarrito}
                        className="bg-white text-slate-900 font-bold px-6 py-2.5 rounded-full shadow-xl hover:bg-indigo-50 hover:scale-105 transform translate-y-4 group-hover:translate-y-0 transition-all"
                      >
                        Añadir al Carro
                      </button>
                    </div>
                  </div>
                  
                  {/* Detalles */}
                  <div className="p-5 flex flex-col flex-grow">
                    <p className="text-xs font-semibold text-indigo-400 mb-2 uppercase tracking-wider">{producto.categoria}</p>
                    <h3 className="text-lg font-bold text-white mb-2 leading-snug line-clamp-2">
                      <a href="#" className="hover:text-indigo-300 transition-colors">{producto.nombre}</a>
                    </h3>
                    
                    {/* Calificación */}
                    <div className="flex items-center mb-4 mt-auto">
                      <div className="flex text-amber-400">
                        <Star size={14} fill="currentColor" />
                        <Star size={14} fill="currentColor" />
                        <Star size={14} fill="currentColor" />
                        <Star size={14} fill="currentColor" />
                        <Star size={14} fill="currentColor" className={producto.calificacion < 5 ? "text-slate-600" : ""} />
                      </div>
                      <span className="text-xs text-slate-500 ml-2 font-medium">({producto.reviews})</span>
                    </div>

                    <div className="flex items-center justify-between border-t border-slate-800 pt-4">
                      <span className="text-xl md:text-2xl font-black text-white">{formatearCOP(producto.precio)}</span>
                      <button 
                        onClick={agregarAlCarrito}
                        className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-indigo-600 hover:text-white transition-colors shadow-sm"
                        aria-label="Agregar al carrito"
                      >
                        <ShoppingCart size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10 text-center md:hidden">
              <button className="px-6 py-3 bg-slate-900 border border-slate-700 text-white font-semibold rounded-xl w-full hover:bg-slate-800 transition-colors">
                Ver Todo el Catálogo
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center flex-shrink-0 mb-4">
                 <div className="text-indigo-500 mr-2">
                  <Cpu size={24} strokeWidth={2.5} />
                </div>
                <span className="text-xl font-black tracking-tight text-white">
                  LEXNOVA
                </span>
              </div>
              <p className="text-sm mb-6 text-slate-500">
                Soluciones avanzadas en tecnología, impresión 3D y componentes de alto rendimiento para Colombia.
              </p>
              <div className="flex space-x-4">
 
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Productos</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Componentes PC</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Resinas y Filamentos</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Accesorios Automotrices</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Impresoras 3D</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Soporte</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Centro de Ayuda</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Garantías</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Envíos</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Contacto</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Newsletter</h4>
              <p className="text-sm mb-4 text-slate-500">Recibe ofertas exclusivas y novedades de productos.</p>
              <div className="flex flex-col space-y-2">
                <input 
                  type="email" 
                  placeholder="Tu correo electrónico" 
                  className="bg-slate-900 border border-slate-800 text-white px-4 py-2.5 rounded-lg w-full focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm transition-all"
                />
                <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2.5 rounded-lg transition-colors font-semibold shadow-lg shadow-indigo-600/20">
                  Suscribirse
                </button>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800/50 text-sm flex flex-col md:flex-row justify-between items-center text-slate-600">
            <p>&copy; 2026 Lexnova. Todos los derechos reservados.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-slate-300 transition-colors">Políticas de Privacidad</a>
              <a href="#" className="hover:text-slate-300 transition-colors">Términos de Servicio</a>
            </div>
          </div>
        </div>
      </footer>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 6s ease infinite;
        }
        .bg-300\\% {
          background-size: 300% 300%;
        }
      `}} />
    </div>
  );
}