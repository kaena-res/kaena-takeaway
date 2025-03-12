
import { ReactNode } from 'react';

interface AmenityItemProps {
  icon: ReactNode;
  text: string;
}

const AmenityItem = ({ icon, text }: AmenityItemProps) => {
  return (
    <div className="amenity-item">
      <div className="text-ocean-500">{icon}</div>
      <span>{text}</span>
    </div>
  );
};

export default AmenityItem;
