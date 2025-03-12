
import { useEffect, useRef } from 'react';
import { MapPin } from 'lucide-react';

const Map = () => {
  return (
    <div className="relative w-full h-96 bg-ocean-100 overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="public/lovable-uploads/34f77d29-e3b3-48a1-b38c-157088277b46.png" 
          alt="Rarotonga Map" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          <MapPin className="w-8 h-8 text-ocean-600" />
          <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-white p-3 rounded-lg shadow-lg min-w-[200px] text-center">
            <h3 className="font-semibold text-ocean-800">Kaena Restaurant & Bar</h3>
            <p className="text-sm text-gray-600">Main Road Arorangi</p>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rotate-45"></div>
          </div>
        </div>
      </div>
      
      <div className="absolute top-2 right-2 flex flex-col">
        <button className="bg-white w-8 h-8 flex items-center justify-center border border-gray-300 mb-1">+</button>
        <button className="bg-white w-8 h-8 flex items-center justify-center border border-gray-300">-</button>
      </div>
      
      <div className="absolute bottom-2 right-2 text-xs text-gray-600">
        © Leaflet | © OpenStreetMap contributors
      </div>
    </div>
  );
};

export default Map;
