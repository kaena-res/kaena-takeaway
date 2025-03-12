
import { useEffect, useRef } from 'react';
import { MapPin } from 'lucide-react';

const Map = () => {
  // For demonstration purposes, we'll use a simple map placeholder
  // In a real application, you would integrate with a map service like Google Maps, Mapbox, or Leaflet
  
  return (
    <div className="relative w-full h-96 bg-ocean-100 rounded-lg overflow-hidden animate-fade-in">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <MapPin className="w-12 h-12 text-ocean-500 mx-auto animate-float" />
          <h3 className="text-xl font-medium mt-2">Kaena Restaurant & Bar</h3>
          <p className="text-gray-600">Near Rarotongan Beach Resort, Arorangi, Rarotonga</p>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-ocean-100/50"></div>
    </div>
  );
};

export default Map;
