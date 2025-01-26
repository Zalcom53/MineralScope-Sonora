"use client"; // Necesario para componentes interactivos
import React from "react";
import Link from "next/link";
import { BackgroundLines } from "@/components/ui/background-lines";

export default function BackgroundLinesDemo() {
  return (
    <BackgroundLines className="flex items-center justify-center min-h-screen w-full px-4">
      <div className="max-w-4xl w-full mx-auto p-4 relative z-20">
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-6xl font-sans font-bold tracking-tight mb-4 md:mb-8">
          Mineral Scope Sonora
        </h2>
        
        <div className="max-w-2xl mx-auto">
          <p className="text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center leading-relaxed md:leading-loose mb-6">
            Un proyecto de la Universidad de Sonora hecho por la Licenciatura en Ciencias de la Computación.
          </p>
          
          <div className="flex justify-center mb-8">
            <Link href="/control">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded transition-all duration-300 transform hover:scale-105">
                Conoce más
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Imagen del logo */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <img 
          src="/unison-logo.png" 
          alt="Logo Universidad de Sonora" 
          className="w-20 h-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
        />
      </div>
    </BackgroundLines>
  );
}