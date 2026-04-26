import React, { useState, useEffect } from "react";
import { motion } from "motion/react";

const SplashScreen = ({ onFinish }: { onFinish: () => void }) => {
  const [showElephants, setShowElephants] = useState(false);
  const text = "ANNAPURNA CATERERS";
  const letters = Array.from(text);

  useEffect(() => {
    const elephantTimer = setTimeout(() => setShowElephants(true), 2000);
    const finishTimer = setTimeout(() => onFinish(), 6000);
    return () => {
      clearTimeout(elephantTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)", transition: { duration: 1.2, ease: "easeInOut" } }}
      className="fixed inset-0 z-[9999] bg-[#FFF9F2] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Mandala Pattern */}
      <div className="absolute inset-0 mandala-pattern opacity-5 pointer-events-none" />
      
      {/* Top Traditional Toran */}
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute top-0 left-0 w-full h-16 pattern-toran z-20 animate-toran" 
      />

      {/* Center Rangoli Spinning Background */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1.2, opacity: 0.15 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute w-[500px] h-[500px] pattern-rangoli animate-rangoli pointer-events-none"
      />

      <div className="flex flex-col items-center max-w-6xl w-full z-10">
        
        {/* Letter by Letter Text */}
        <div className="flex flex-col items-center mb-12">
          {/* English Text */}
          <div className="flex flex-wrap justify-center px-4 space-x-1 md:space-x-2">
            {letters.map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0, rotateX: -90 }}
                animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100
                }}
                className="text-2xl md:text-5xl font-black text-primary tracking-tighter drop-shadow-md font-serif italic"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </div>
          
          {/* Telugu Text (Appears after English) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.8, y: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="text-primary telugu-text text-lg md:text-2xl mt-2 font-bold"
          >
            అన్నపూర్ణ క్యాటరర్స్
          </motion.div>
        </div>

        {/* Elephants Container */}
        <div className="relative w-full h-32 md:h-64 flex justify-center items-center">
          {/* Elephant from Left */}
          <motion.div
            initial={{ x: "-100%", opacity: 0, rotate: -5 }}
            animate={showElephants ? { x: "-20%", opacity: 1, rotate: 0 } : {}}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute w-40 md:w-80 pointer-events-none translate-x-[-50%]"
          >
            <img
              src="/assets/images/elephant right.png"
              alt="Elephant"
              className="w-full h-auto object-contain mix-blend-multiply drop-shadow-lg"
            />
          </motion.div>

          {/* Elephant from Right */}
          <motion.div
            initial={{ x: "100%", opacity: 0, rotate: 5 }}
            animate={showElephants ? { x: "20%", opacity: 1, rotate: 0 } : {}}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="absolute w-40 md:w-80 pointer-events-none translate-x-[50%]"
          >
            <img
              src="/assets/images/elephant left.png"
              alt="Elephant"
              className="w-full h-auto object-contain mix-blend-multiply drop-shadow-lg"
            />
          </motion.div>
        </div>

        {/* Decorative Gold Elements */}
        <div className="mt-12 flex flex-col items-center">
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={showElephants ? { width: "200px", opacity: 1 } : {}}
            transition={{ delay: 1, duration: 1.2, ease: "circOut" }}
            className="h-1 gold-gradient rounded-full shadow-lg"
          />
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={showElephants ? { opacity: 1 } : {}}
            transition={{ delay: 1.8 }}
            className="flex items-center space-x-4 mt-4"
          >
            <div className="w-8 h-[1px] bg-accent" />
            <span className="text-primary font-bold tracking-[0.4em] text-[10px] md:text-xs">
              SINCE 1998
            </span>
            <div className="w-8 h-[1px] bg-accent" />
          </motion.div>
        </div>
      </div>
      
      {/* Bottom Pattern */}
      <div className="absolute bottom-0 left-0 w-full h-8 pattern-leaf-border opacity-20 pointer-events-none" />
    </motion.div>
  );
};

export default SplashScreen;
