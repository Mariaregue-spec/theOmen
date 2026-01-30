import React from "react";
import "../index.css";

import fotoXabier from "../assets/home/Xabier.png";
import fotoAlba from "../assets/home/Alba.png";
import fotoMaria from "../assets/home/Maria.png"; 
import fotoAdrian from "../assets/home/Adrian.png";

const equipo = [
  { 
    rol: "Product Owner", 
    alias: "El Patriarca: Administrador de la matanza.",
    foto: fotoXabier 
  },
  { 
    rol: "Developer", 
    alias: "Suturadora: Cosiendo código y piel con precisión quirúrgica.",
    foto: fotoAlba 
  },
  { 
    rol: "Developer", 
    alias: "Ingeniera de la Caldera: Alimentando el fuego del servidor.",
    foto: fotoMaria 
  },
  { 
    rol: "Scrum Master", 
    alias: "Pastor de Almas Condenadas: Mantiene la unidad en mitad del caos sangriento",
    foto: fotoAdrian 
  },
];

const AboutUs = () => {
  return (
    <section className="relative min-h-screen text-white overflow-hidden flex flex-col">
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="public/video/14058980-uhd_4096_2160_30fps (1) (1).mp4" />
        </video>
        <div className="absolute inset-0 bg-black/75"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16 w-full flex flex-col min-h-screen">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 font-omen-title uppercase text-red-700 drop-shadow-[0_2px_10px_rgba(185,28,28,0.5)] tracking-widest">
          El Clan de La Sierra
        </h2>

        <div className="flex-grow flex items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 w-full">
            {equipo.map((miembro, index) => (
              <div
                key={index}
                className="group flex flex-col items-center text-center transition-all duration-500"
              >
                <img
                  src={miembro.foto}
                  alt={miembro.rol}
                  className="w-48 h-64 md:w-56 md:h-80 object-cover mb-6 transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-110 group-hover:drop-shadow-[0_0_30px_rgba(185,28,28,0.4)]"
                />

                <p className="text-amber-600 font-omen-body text-xs font-black uppercase tracking-[0.2em] mb-2">
                  {miembro.rol}
                </p>

                <p className="text-gray-400 font-omen-body text-xs italic leading-tight max-w-[180px]">
                  {miembro.alias}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;