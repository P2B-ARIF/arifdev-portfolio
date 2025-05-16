import { motion } from "framer-motion";

const Dots = () => (
  <div className="absolute inset-0 z-0 overflow-hidden">
    {[...Array(300)].map((_, i) => {
      const size = Math.random() * 8 + 2;
      const duration = 5 + Math.random() * 1;
      const delay = Math.random() * 5;
      const color = `hsla(${Math.random() * 360}, 80%, 60%, 0.3)`;

      return (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            backgroundColor: "#fff",
            boxShadow: `0 0 15px ${i % 2 === 0 ? color : "#fff"}, 0 0 20px ${color}`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, Math.random() * 100 - 50],
            x: [0, Math.random() * 100 - 50],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
            delay,
          }}
        />
      );
    })}
  </div>
);

export default Dots;
