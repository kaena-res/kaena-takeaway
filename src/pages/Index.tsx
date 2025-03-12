
import { Utensils, Coffee, Wine, Clock, Phone, MapPin, Globe, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSlider from '../components/HeroSlider';
import InfoCard from '../components/InfoCard';
import AmenityItem from '../components/AmenityItem';
import RestaurantInfo from '../components/RestaurantInfo';

const slides = [
  {
    id: 1,
    image: 'public/lovable-uploads/32878c48-fb79-4dc6-afcb-9ea9312e9f3c.png',
    title: 'Kaena Restaurant & Bar',
    subtitle: 'Experience the flavors of Rarotonga in a beautiful beachside setting',
  },
  {
    id: 2,
    image: 'public/lovable-uploads/aea6c119-7ab0-44ab-a775-c06306bca675.png',
    title: 'Refreshing Tropical Drinks',
    subtitle: 'Enjoy our selection of fresh fruit smoothies and specialty beverages',
  },
  {
    id: 3,
    image: 'public/lovable-uploads/c78077cc-2d6a-491d-987d-9a98159dfb64.png',
    title: 'Crispy Fried Prawns',
    subtitle: 'Delicious deep-fried prawns served with our signature dipping sauce',
  },
  {
    id: 4,
    image: 'public/lovable-uploads/86421bad-b8c7-4f2b-9704-a18b08469646.png',
    title: 'Steamed Fish',
    subtitle: 'Fresh locally-caught fish prepared with traditional Asian flavors',
  },
  {
    id: 5,
    image: 'public/lovable-uploads/aa7eef44-58a6-4e39-88e4-8bd1e5ea5f28.png',
    title: 'Sizzling Hot Plate',
    subtitle: 'Grilled chicken with fried rice, fried egg, and fresh vegetables',
  },
  {
    id: 6,
    image: 'public/lovable-uploads/3d7f1260-01d4-4e4f-9492-3001f55f164c.png',
    title: 'Crispy Calamari Rings',
    subtitle: 'Light and crispy calamari served with our house-made dipping sauce',
  },
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section with Restaurant Identity */}
      <div className="relative">
        <HeroSlider slides={slides} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-30 w-full px-4">
          <h1 className="text-7xl font-bold mb-4 text-white drop-shadow-lg font-playfair">Kaena</h1>
          <h2 className="text-2xl text-white drop-shadow-md">Restaurant, Takeaway & Bar</h2>
        </div>
      </div>
      
      {/* Restaurant Info Card */}
      <div className="bg-white/80 backdrop-blur-sm py-6">
        <div className="container mx-auto px-4">
          <RestaurantInfo />
        </div>
      </div>
      
      {/* Specialty Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2 font-playfair">Specialising in Asian Cuisine</h2>
              <p className="text-xl italic text-ocean-700">"Grilled & Sizzling Style"</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="flex items-center gap-3">
                <Utensils className="w-6 h-6 text-ocean-600" />
                <span className="text-lg">Seafood</span>
              </div>
              <div className="flex items-center gap-3">
                <Wine className="w-6 h-6 text-ocean-600" />
                <span className="text-lg">Bar</span>
              </div>
              <div className="flex items-center gap-3">
                <Coffee className="w-6 h-6 text-ocean-600" />
                <span className="text-lg">Takeaway</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-6 h-6 text-ocean-600" />
                <span className="text-lg">Lunch</span>
              </div>
              <div className="flex items-center gap-3">
                <Utensils className="w-6 h-6 text-ocean-600" />
                <span className="text-lg">Dinner</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-6 h-6 text-ocean-600" />
                <span className="text-lg">International</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-8 text-center font-playfair">Kaena Restaurant & Bar amenities</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <AmenityItem icon={<Utensils className="w-6 h-6" />} text="Seafood" />
              <AmenityItem icon={<Wine className="w-6 h-6" />} text="Bar" />
              <AmenityItem icon={<Coffee className="w-6 h-6" />} text="Takeaway" />
              <AmenityItem icon={<Clock className="w-6 h-6" />} text="Lunch" />
              <AmenityItem icon={<Utensils className="w-6 h-6" />} text="Dinner" />
              <AmenityItem icon={<Globe className="w-6 h-6" />} text="International" />
            </div>
            
            <div className="mt-12 text-center">
              <Link to="/menu" className="btn-primary inline-block">
                View Full Menu
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Info Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-8 text-center font-playfair">Contact Us</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Phone className="w-12 h-12 mx-auto text-ocean-500 mb-4" />
                <h3 className="text-xl font-bold mb-2 font-playfair">Phone</h3>
                <p className="text-gray-600">+682 25433</p>
                <a href="tel:+68225433" className="text-ocean-600 hover:text-ocean-800 mt-2 inline-block">Call Now</a>
              </div>
              
              <div className="text-center">
                <MapPin className="w-12 h-12 mx-auto text-ocean-500 mb-4" />
                <h3 className="text-xl font-bold mb-2 font-playfair">Location</h3>
                <p className="text-gray-600">Arorangi, Rarotonga, Cook Islands</p>
                <Link to="/contact" className="text-ocean-600 hover:text-ocean-800 mt-2 inline-block">View Map</Link>
              </div>
              
              <div className="text-center">
                <Instagram className="w-12 h-12 mx-auto text-ocean-500 mb-4" />
                <h3 className="text-xl font-bold mb-2 font-playfair">Social</h3>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-ocean-600 hover:text-ocean-800 mt-2 inline-block">Visit Instagram</a>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link to="/contact" className="btn-primary">
                Make a Reservation
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
