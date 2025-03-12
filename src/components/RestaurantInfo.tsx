
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Globe, ExternalLink, Instagram, Heart } from 'lucide-react';

const RestaurantInfo = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
      <div className="flex items-center mb-6 md:mb-0">
        <img 
          src="public/lovable-uploads/5c8a404d-3383-4424-a791-14724d514543.png" 
          alt="Kaena Restaurant" 
          className="w-16 h-16 object-cover rounded-lg mr-4"
        />
        <div className="text-left">
          <h2 className="text-xl font-bold font-playfair">Kaena Restaurant & Bar</h2>
          <p className="text-gray-700 text-sm">Dinner, International, New Zealand</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-left">
        <div className="flex items-center">
          <MapPin className="w-4 h-4 text-ocean-500 mr-2" />
          <span className="text-sm">Arorangi, Rarotonga</span>
        </div>
        <div className="flex items-center">
          <Phone className="w-4 h-4 text-ocean-500 mr-2" />
          <span className="text-sm">68225433</span>
        </div>
        <div className="flex items-center">
          <Globe className="w-4 h-4 text-ocean-500 mr-2" />
          <span className="text-sm">Website</span>
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-3 mt-6 md:mt-0">
        <a 
          href="#" 
          className="flex items-center justify-center bg-ocean-500 text-white px-4 py-2 rounded-md transition hover:bg-ocean-600 text-sm"
        >
          <ExternalLink className="w-4 h-4 mr-2" />
          Kaena Restaurant & Takeaway
        </a>
        <a 
          href="https://instagram.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-md transition hover:from-purple-600 hover:to-pink-600 text-sm"
        >
          <Instagram className="w-4 h-4 mr-2" />
          Visit Instagram
        </a>
        <button 
          className="flex items-center justify-center border border-gray-300 text-gray-700 px-4 py-2 rounded-md transition hover:bg-gray-100 text-sm"
        >
          <Heart className="w-4 h-4 mr-2" />
          Save
        </button>
      </div>
    </div>
  );
};

export default RestaurantInfo;
