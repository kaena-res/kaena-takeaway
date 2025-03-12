
import { ReactNode } from 'react';

interface InfoCardProps {
  icon?: ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const InfoCard = ({ icon, title, description, delay = 0 }: InfoCardProps) => {
  return (
    <div 
      className="info-card animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      {icon && (
        <div className="flex justify-center mb-4 text-ocean-500">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-bold mb-2 text-center font-playfair">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

export default InfoCard;
