import React, { useState } from 'react';
import mainImage from './icons/main-bg.avif';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
  };

  return (
    <section className="relative h-[90vh]">
      <div className="absolute inset-0">
        <img
          src={mainImage}
          alt="Imagem principal"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex flex-col justify-end h-full pb-20">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-8">
            Treine Calistenia
          </h1>

          <form onSubmit={handleSubmit} className="flex gap-4 max-w-md">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Seu email..."
              className="px-4 py-3 flex-1 rounded-lg bg-white"
              required
            />
            <button className="text-white bg-black px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-900 transition-colors">
              Matricule-se
              <ArrowRight className="h-5 w-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
