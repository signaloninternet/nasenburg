import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

const Hero = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #FFDEE9 50%, ${color})`; // Soft pastel pink
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="relative grid min-h-screen place-content-center overflow-hidden bg-[#FFDEE9] px-4 py-24 text-gray-900" // Background changed to light pastel pink
    >
      <div className="relative z-10 flex flex-col items-center">
        <span className="mb-1.5 inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-sm text-white">
          Gamified Focus Mode!
        </span>
        <h1 className="max-w-3xl bg-gradient-to-br from-gray-800 to-gray-600 bg-clip-text text-center text-3xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight">
          Complete Your Tasks with Ease and Fun
        </h1>
        <p className="my-6 max-w-xl text-center text-base leading-relaxed md:text-lg md:leading-relaxed text-gray-700">
          Join the focus room and turn your productivity into a game. Achieve your goals, earn rewards, and stay motivated.
        </p>
        <motion.button
          style={{
            border,
            boxShadow,
          }}
          whileHover={{
            scale: 1.015,
            backgroundColor: "rgba(31, 41, 55, 0.7)", // Hover darken effect
          }}
          whileTap={{
            scale: 0.985,
          }}
          className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-800/20 px-4 py-2 text-gray-900 hover:text-white transition-colors hover:bg-gray-800/40"
        >
          Join a Session
          <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
        </motion.button>
      </div>

      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars
            radius={50}
            count={2500}
            factor={4}
            fade
            speed={2}
          >
            <pointsMaterial attach="material" color="#000000" size={0.05} />
          </Stars>
        </Canvas>
      </div>
    </motion.section>
  );
};

export default Hero;
