
import { Utensils, Coffee, Wine, Clock, Phone, MapPin, Globe, Instagram, Facebook, Mail, Clock as TimeClock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSlider from '../components/HeroSlider';
import RestaurantInfo from '../components/RestaurantInfo';
import Map from '../components/Map';

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
      </div>
      
      {/* Restaurant Info Card */}
      <div className="bg-white/80 backdrop-blur-sm py-6 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <RestaurantInfo />
        </div>
      </div>
      
      {/* Specialty Section */}
      <section className="container mx-auto py-16 px-4">
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 mb-12 shadow-sm">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2 font-playfair">Specialising in Asian Cuisine</h2>
            <p className="text-xl italic text-ocean-700 mt-2">"Grilled & Sizzling Style"</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
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
            <div className="flex items-center gap-3">
              <TimeClock className="w-6 h-6 text-ocean-600" />
              <span className="text-lg">Cook Island</span>
            </div>
          </div>
        </div>
        
        {/* Location Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-lg overflow-hidden shadow-sm mb-12">
          <h2 className="text-3xl font-bold py-6 text-center font-playfair">Kaena Restaurant & Bar location</h2>
          <Map />
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-4 font-playfair">Arorangi, Rarotonga</h3>
            <p className="text-gray-700">
              Located near the Rarotongan Beach Resort, our restaurant offers a perfect blend of local hospitality and international cuisine.
            </p>
          </div>
        </div>
        
        {/* Contact Us Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-lg overflow-hidden shadow-sm">
          <h2 className="text-3xl font-bold py-6 text-center font-playfair">Contact Us</h2>
          
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-4 text-center">Booking / Enquiries</h3>
            
            <div className="max-w-xl mx-auto space-y-4">
              <div className="flex items-center justify-center gap-2">
                <Mail className="w-5 h-5 text-ocean-600" />
                <span>Email: </span>
                <a href="mailto:kaenarestaurant@gmail.com" className="text-ocean-600 hover:underline">
                  kaenarestaurant@gmail.com
                </a>
              </div>
              
              <div className="flex items-center justify-center gap-2">
                <Phone className="w-5 h-5 text-ocean-600" />
                <span>Phone: </span>
                <a href="tel:+68225433" className="text-ocean-600 hover:underline">
                  +682-25433
                </a>
              </div>
              
              <div className="flex items-center justify-center gap-2">
                <Facebook className="w-5 h-5 text-ocean-600" />
                <span>Facebook: </span>
                <a href="#" className="text-ocean-600 hover:underline">
                  Kaena Restaurant & Takeaway
                </a>
              </div>
              
              <div className="flex items-center justify-center gap-2">
                <Instagram className="w-5 h-5 text-ocean-600" />
                <span>Instagram: </span>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-ocean-600 hover:underline">
                  @kaenacookisland
                </a>
              </div>
              
              <div className="flex items-center justify-center gap-2">
                <MapPin className="w-5 h-5 text-ocean-600" />
                <span>Address: </span>
                <span>Near Rarotongan Beach Resort, Arorangi, Rarotonga, Cook Islands</span>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <Link to="/contact" className="bg-ocean-500 hover:bg-ocean-600 text-white px-6 py-3 rounded-md transition-all duration-300">
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
