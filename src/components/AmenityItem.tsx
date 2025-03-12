
import { ReactNode } from 'react';

interface AmenityItemProps {
  icon: ReactNode;
  text: string;
}

const AmenityItem = ({ icon, text }: AmenityItemProps) => {
  return (
    <div className="flex items-center gap-3 text-lg py-2">
      <div className="text-ocean-600">{icon}</div>
      <span>{text}</span>
    </div>
  );
};

export default AmenityItem;
