"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function AboutParty() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);
  const [particles, setParticles] = useState([]);
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  const games = [
    {
      id: 1,
      name: "Game 1",
      description: "An exciting game full of challenges!",
    },
    {
      id: 2,
      name: "Game 2",
      description: "Test your skills in this thrilling adventure!",
    },
    { id: 3, name: "Game 3", description: "A spooky experience awaits you!" },
    { id: 4, name: "Game 4", description: "Can you solve the mystery?" },
    { id: 5, name: "Game 5", description: "The ultimate Halloween challenge!" },
  ];

  const openModal = (game) => {
    setSelectedGame(game);
    setIsModalOpen(true);
    triggerSmoke();
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedGame(null);
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    setParticles([]);
  };

  const triggerSmoke = () => {
    const newParticles = [];
    const particleCount = 150;

    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: Math.random(),
        x: 50,
        y: 50,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.6 - 0.4,
        life: Math.random() * 6000 + 4000,
        maxLife: Math.random() * 6000 + 4000,
        size: Math.random() * 150 + 100,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.6 + 0.4,
      });
    }

    setParticles(newParticles);
  };

  useEffect(() => {
    if (!isModalOpen || particles.length === 0) return;

    const animate = () => {
      setParticles((prevParticles) => {
        const updated = prevParticles
          .map((particle) => ({
            ...particle,
            x: particle.x + particle.vx,
            y: particle.y + particle.vy,
            rotation: particle.rotation + particle.rotationSpeed,
            life: particle.life - 16,
            opacity:
              particle.opacity * (particle.life / particle.maxLife) * 0.98,
          }))
          .filter((particle) => particle.life > 0);

        if (updated.length > 0) {
          animationRef.current = requestAnimationFrame(animate);
        }
        return updated;
      });
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isModalOpen, particles.length]);

  return (
    <section
      id="about-party"
      className="relative min-h-screen text-white py-20 overflow-hidden w-full"
    >
      {/* Background and overlay removed - will be on parent container */}

      {/* Decorative Skull - Left Side (positioned relative to viewport) */}
      <div
        className="absolute animate-float"
        style={{
          top: "30%",
          left: "0%",
          transform: "translateY(-50%)",
          zIndex: 1,
          animationDelay: "1s",
        }}
      >
        <Image
          src="/about_party/skull.png"
          alt="Skull"
          width={512}
          height={512}
          className="object-contain"
          style={{
            height: "60vh",
            width: "auto",
            maxHeight: "600px",
          }}
        />
      </div>

      {/* Decorative Spider - Inside skull's eye hole */}
      <div
        className="absolute animate-float"
        style={{
          top: "24%",
          left: "8%",
          transform: "translate(0, -70%)",
          zIndex: 1,
          animationDelay: "0.5s",
        }}
      >
        <Image
          src="/about_party/spider.png"
          alt="Spider"
          width={150}
          height={150}
          className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
          style={{ width: "auto", height: "auto" }}
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full h-full">
        <div className="flex flex-col items-center justify-center min-h-[80vh] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title Section with Arrows and Pumpkin */}
          <div className="text-center mb-8 md:mb-12 relative">
            {/* Pumpkin Scarecrow - Positioned to the right */}
            <div
              className="absolute hidden lg:block animate-float"
              style={{
                top: "30%",
                right: "-230px",
                transform: "translateY(-50%)",
                zIndex: -999,
                animationDelay: "0.5s",
              }}
            >
              <Image
                src="/about_party/pumpkin.png"
                alt="Pumpkin Scarecrow"
                width={400}
                height={600}
                className="object-contain"
                style={{
                  height: "50vh",
                  width: "auto",
                  maxHeight: "500px",
                }}
              />
            </div>

            {/* Title with Arrows */}
            <div className="flex flex-col items-center gap-4">
              <h2 className="jolly-lodger-regular text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-orange-500 uppercase tracking-wide">
                Join Us
              </h2>
              <div className="flex items-center gap-4 md:gap-8">
                <span className="jolly-lodger-regular text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-orange-500">
                  →
                </span>
                <h2 className="jolly-lodger-regular text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-red-500 uppercase tracking-wide">
                  This Year&apos;s Halloween Party!
                </h2>
                <span className="jolly-lodger-regular text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-orange-500">
                  ←
                </span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="max-w-5xl mx-auto text-center mb-12 md:mb-16 px-4">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white leading-relaxed uppercase tracking-wide">
              Our Halloween party this year will be an unforgettable experience,
              filled with spooky decorations, eerie music, thrilling games, and
              costume contests. Join us for a night of magic and fright!
            </p>
          </div>

          {/* Games Checklist */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 lg:gap-12">
            {games.map((game) => (
              <button
                key={game.id}
                onClick={() => openModal(game)}
                className="flex items-center gap-3 bg-black/40 backdrop-blur-sm px-4 py-2 md:px-6 md:py-3 rounded-lg border border-orange-500/30 hover:border-orange-500/60 transition-all hover:scale-105 cursor-pointer"
              >
                <div className="relative w-6 h-6 md:w-8 md:h-8 shrink-0">
                  <Image
                    src="/about_party/tick-square.png"
                    alt="Checkmark"
                    width={32}
                    height={32}
                    className="w-full h-full"
                  />
                </div>
                <span className="jolly-lodger-regular text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white">
                  {game.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Modal with Smoke Effect */}
      {isModalOpen && selectedGame && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="relative bg-gradient-to-b from-gray-900 to-black border-4 border-orange-500 rounded-2xl p-8 md:p-12 max-w-2xl w-full mx-4 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Smoke Particles */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {particles.map((particle) => (
                <div
                  key={particle.id}
                  className="absolute"
                  style={{
                    left: `${particle.x}%`,
                    top: `${particle.y}%`,
                    width: `${particle.size}px`,
                    height: `${particle.size}px`,
                    transform: `translate(-50%, -50%) rotate(${particle.rotation}deg)`,
                    opacity: particle.opacity,
                    transition: "all 0.016s linear",
                  }}
                >
                  <div
                    className="w-full h-full rounded-full"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(150,150,150,0.4) 50%, rgba(100,100,100,0) 100%)",
                      filter: "blur(15px)",
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-orange-500 hover:text-orange-400 text-4xl font-bold z-10"
            >
              ×
            </button>

            {/* Modal Content */}
            <div className="relative z-10 text-center">
              <h2 className="jolly-lodger-regular text-4xl sm:text-5xl md:text-6xl text-orange-500 mb-6 uppercase">
                {selectedGame.name}
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-white mb-8">
                {selectedGame.description}
              </p>
              <div className="flex justify-center gap-4">
                <button
                  onClick={closeModal}
                  className="jolly-lodger-regular bg-orange-500 hover:bg-orange-600 text-black px-8 py-3 rounded-full text-2xl uppercase transition-all hover:scale-105"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
