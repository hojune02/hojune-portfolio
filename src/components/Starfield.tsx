import type { CSSProperties } from "react";

type Star = {
  id: number;
  left: number;
  top: number;
  size: number;
  opacity: number;
  delay: number;
  duration: number;
};

function seededValue(index: number, salt: number) {
  const value = Math.sin(index * 91.7 + salt * 37.1) * 43758.5453;

  return value - Math.floor(value);
}

const stars: Star[] = Array.from({ length: 75 }, (_, index) => ({
  id: index,
  left: seededValue(index, 1) * 100,
  top: seededValue(index, 2) * 100,
  size: 1 + seededValue(index, 3) * 2,
  opacity: 0.25 + seededValue(index, 4) * 0.65,
  delay: seededValue(index, 5) * -8,
  duration: 3 + seededValue(index, 6) * 5,
}));

export default function Starfield() {
  return (
    <div className="starfield" aria-hidden="true">
      {stars.map((star) => {
        const style: CSSProperties = {
          left: `${star.left}%`,
          top: `${star.top}%`,
          width: `${star.size}px`,
          height: `${star.size}px`,
          opacity: star.opacity,
          animationDelay: `${star.delay}s`,
          animationDuration: `${star.duration}s`,
        };

        return (
          <span
            className="starfield__star"
            style={style}
            key={star.id}
          />
        );
      })}
    </div>
  );
}