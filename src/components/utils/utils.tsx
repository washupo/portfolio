// utils.js
import { useState } from "react";

// Ouverture/fermeture modal & menu
export const useOpen = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return { open, handleOpen };
};

// Animation mouvement 3D (hover)
export const handleMouseMove = (e: React.MouseEvent<HTMLImageElement>) => {
  const xAxis = (window.innerWidth / 2 - e.pageX) / 10;
  const yAxis = (window.innerHeight / 2 - e.pageY) / 10;
  e.currentTarget.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
};

