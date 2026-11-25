import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Stone {
  name: string;
  subtitle: string;
  image: string;
  gradient: string;
}

const stones: Stone[] = [
  {
    name: 'Kadapa Stones',
    subtitle: 'Dark, durable slabs for flooring',
    image: '/api/placeholder/400/600',
    gradient: 'from-gray-900 via-gray-800 to-gray-900',
  },
  {
    name: 'Kota Stones',
    subtitle: 'Built to perfection, backed by time',
    image: '/api/placeholder/400/600',
    gradient: 'from-emerald-900 via-teal-900 to-emerald-900',
  },
  {
    name: 'Marbles',
    subtitle: 'Timeless veined elegance for interiors',
    image: '/api/placeholder/400/600',
    gradient: 'from-gray-100 via-gray-300 to-gray-100',
  },
  {
    name: 'Granites',
    subtitle: 'Strength meets sophistication',
    image: '/api/placeholder/400/600',
    gradient: 'from-amber-900 via-orange-900 to-amber-900',
  },
];

export default function StoneCarousel3D() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-rotate carousel
  useEffect(() => {
    if (isDragging) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % stones.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isDragging]);

  const handleDragEnd = (_: any, info: any) => {
    setIsDragging(false);
    const offset = info.offset.x;
    
    if (offset > 50) {
      setActiveIndex((prev) => (prev - 1 + stones.length) % stones.length);
    } else if (offset < -50) {
      setActiveIndex((prev) => (prev + 1) % stones.length);
    }
  };

  const getCardStyle = (index: number) => {
    const diff = (index - activeIndex + stones.length) % stones.length;
    const normalizedDiff = diff > stones.length / 2 ? diff - stones.length : diff;

    // Calculate position and style based on card position relative to active card
    let x = 0;
    let y = 0;
    let z = 0;
    let rotateY = 0;
    let scale = 1;
    let opacity = 1;
    let zIndex = 0;

    if (normalizedDiff === 0) {
      // Active card - center front
      x = 0;
      y = 0;
      z = 100;
      scale = 1.1;
      zIndex = 50;
      rotateY = 0;
    } else if (normalizedDiff === 1) {
      // Right card
      x = 300;
      y = 20;
      z = -50;
      scale = 0.85;
      zIndex = 40;
      rotateY = -25;
      opacity = 0.7;
    } else if (normalizedDiff === -1) {
      // Left card
      x = -300;
      y = 20;
      z = -50;
      scale = 0.85;
      zIndex = 40;
      rotateY = 25;
      opacity = 0.7;
    } else if (normalizedDiff === 2 || normalizedDiff === -2) {
      // Far cards
      x = normalizedDiff > 0 ? 500 : -500;
      y = 40;
      z = -100;
      scale = 0.6;
      zIndex = 20;
      rotateY = normalizedDiff > 0 ? -35 : 35;
      opacity = 0.3;
    } else {
      // Hidden cards
      x = normalizedDiff > 0 ? 700 : -700;
      y = 60;
      z = -150;
      scale = 0.4;
      zIndex = 10;
      rotateY = normalizedDiff > 0 ? -45 : 45;
      opacity = 0;
    }

    return { x, y, z, rotateY, scale, opacity, zIndex };
  };

  return (
    <section className="relative min-h-screen bg-black py-20 md:py-32 overflow-hidden">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20 px-4"
      >
        <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">
          Explore Our Premium Collections
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Experience the beauty and elegance of natural stones with our interactive 3D showcase
        </p>
      </motion.div>

      {/* 3D Carousel Container */}
      <div
        ref={containerRef}
        className="relative h-[600px] md:h-[700px] perspective-[2000px]"
        style={{ perspective: '2000px' }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          {stones.map((stone, index) => {
            const style = getCardStyle(index);
            const isActive = index === activeIndex;

            return (
              <motion.div
                key={stone.name}
                className="absolute w-[280px] md:w-[350px] lg:w-[400px] h-[420px] md:h-[520px] lg:h-[600px] cursor-pointer"
                style={{
                  transformStyle: 'preserve-3d',
                  zIndex: style.zIndex,
                }}
                animate={{
                  x: style.x,
                  y: style.y,
                  z: style.z,
                  rotateY: style.rotateY,
                  scale: style.scale,
                  opacity: style.opacity,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 100,
                  damping: 20,
                  mass: 1,
                }}
                drag={isActive ? 'x' : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.1}
                onDragStart={() => setIsDragging(true)}
                onDragEnd={handleDragEnd}
                onClick={() => !isActive && setActiveIndex(index)}
                whileHover={isActive ? { scale: 1.12 } : {}}
              >
                {/* Card Container */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                  {/* Background gradient based on stone type */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stone.gradient}`} />
                  
                  {/* Texture overlay */}
                  <div
                    className="absolute inset-0 opacity-40"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                  />

                  {/* Glass reflection effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0"
                    animate={isActive ? { opacity: [0, 0.3, 0] } : {}}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />

                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-end p-8 md:p-10 z-10">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0.6, y: 10 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h3
                        className={`text-3xl md:text-4xl lg:text-5xl font-serif mb-3 ${
                          stone.name === 'Marbles' ? 'text-gray-800' : 'text-white'
                        }`}
                      >
                        {stone.name}
                      </h3>
                      <p
                        className={`text-sm md:text-base ${
                          stone.name === 'Marbles' ? 'text-gray-600' : 'text-gray-300'
                        }`}
                      >
                        {stone.subtitle}
                      </p>

                      {/* View details button - only on active card */}
                      <AnimatePresence>
                        {isActive && (
                          <motion.a
                            href={`#collection/${stone.name.toLowerCase()}`}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ delay: 0.3 }}
                            className={`inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                              stone.name === 'Marbles'
                                ? 'bg-gray-800 text-white hover:bg-gray-900'
                                : 'bg-white text-black hover:bg-gray-100'
                            }`}
                          >
                            View Details
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </motion.a>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </div>

                  {/* 3D depth shadow */}
                  <div
                    className="absolute inset-0 bg-black/30"
                    style={{ transform: 'translateZ(-20px)' }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Navigation dots */}
      <div className="flex justify-center gap-3 mt-12">
        {stones.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? 'bg-emerald-400 w-8'
                : 'bg-gray-600 hover:bg-gray-500'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Instructions */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-center mt-8 text-gray-500 text-sm"
      >
        <p className="hidden md:block">Click or drag the center card to navigate</p>
        <p className="md:hidden">Tap a card to view details</p>
      </motion.div>
    </section>
  );
}
