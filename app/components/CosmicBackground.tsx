import { motion } from "framer-motion";

export function CosmicBackground() {
  const stars = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: Math.random() * 2 + 1,
    top: Math.random() * 100,
    left: Math.random() * 100,
    delay: Math.random() * 4,
  }));

  const planets = [
    { id: 1, size: 16, color: "bg-blue-400", top: 25, left: 25, duration: 10 },
    { id: 2, size: 24, color: "bg-purple-400", top: 50, right: 25, duration: 20 },
    { id: 3, size: 12, color: "bg-indigo-400", bottom: 25, left: 33, duration: 30 },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="star absolute animate-twinkle"
          style={{
            width: `${star.size * 4}px`,
            height: `${star.size * 4}px`,
            top: `${star.top}%`,
            left: `${star.left}%`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}

      {/* Orbiting Planets */}
      {planets.map((planet) => (
        <div
          key={planet.id}
          className="absolute"
          style={{
            top: planet.top ? `${planet.top}%` : undefined,
            left: planet.left ? `${planet.left}%` : undefined,
            right: planet.right ? `${planet.right}%` : undefined,
            bottom: planet.bottom ? `${planet.bottom}%` : undefined,
          }}
        >
          <motion.div
            className={`planet ${planet.color}`}
            style={{
              width: `${planet.size}px`,
              height: `${planet.size}px`,
            }}
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: planet.duration,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>
      ))}
    </div>
  );
}
