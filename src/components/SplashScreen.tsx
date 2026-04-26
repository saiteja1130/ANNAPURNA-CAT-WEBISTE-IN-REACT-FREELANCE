import React, { useState, useEffect } from "react";
import { motion } from "motion/react";

const SplashScreen = ({ onFinish }: { onFinish: () => void }) => {
  const [showElephants, setShowElephants] = useState(false);
  const text = "ANNAPURNA CATERERS";
  const letters = Array.from(text);

  useEffect(() => {
    // Show elephants after text animation is mostly complete
    const elephantTimer = setTimeout(() => setShowElephants(true), 2000);
    const finishTimer = setTimeout(() => onFinish(), 5500);
    return () => {
      clearTimeout(elephantTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)", transition: { duration: 1, ease: "easeInOut" } }}
      className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="flex flex-col items-center max-w-6xl w-full">
        
        {/* Letter by Letter Text */}
        <div className="flex flex-wrap justify-center px-4 space-x-1 md:space-x-2 mb-12">
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
              className="text-xl md:text-5xl font-black text-primary tracking-tighter drop-shadow-sm font-serif italic"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </div>

        {/* Elephants Container - Positioned UNDER the text */}
        <div className="relative w-full h-32 md:h-64 flex justify-center items-center">
          {/* Elephant from Left */}
          <motion.div
            initial={{ x: "-100%", opacity: 0, rotate: -5 }}
            animate={showElephants ? { x: "-20%", opacity: 1, rotate: 0 } : {}}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute w-36 md:w-80 pointer-events-none translate-x-[-50%]"
          >
            <img
              src="/assets/images/elephant right.jpeg"
              alt="Elephant"
              className="w-full h-auto object-contain mix-blend-multiply"
            />
          </motion.div>

          {/* Elephant from Right */}
          <motion.div
            initial={{ x: "100%", opacity: 0, rotate: 5 }}
            animate={showElephants ? { x: "20%", opacity: 1, rotate: 0 } : {}}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="absolute w-36 md:w-80 pointer-events-none translate-x-[50%]"
          >
            <img
              src="/assets/images/elephant left.jpeg"
              alt="Elephant"
              className="w-full h-auto object-contain mix-blend-multiply"
            />
          </motion.div>
        </div>

        {/* Decorative Gold Line */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={showElephants ? { width: "150px", opacity: 1 } : {}}
          transition={{ delay: 1, duration: 1.2, ease: "circOut" }}
          className="h-1 gold-gradient mt-12 rounded-full shadow-lg"
        />
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={showElephants ? { opacity: 0.6 } : {}}
          transition={{ delay: 1.5 }}
          className="mt-4 text-primary font-bold tracking-[0.3em] text-[10px] md:text-xs"
        >
          SINCE 1998
        </motion.p>
      </div>
    </motion.div>
  );
};

export default SplashScreen;
