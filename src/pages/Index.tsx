
import { Utensils, Coffee, Wine, Clock, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSlider from '../components/HeroSlider';
import InfoCard from '../components/InfoCard';
import AmenityItem from '../components/AmenityItem';

const slides = [
  {
    id: 1,
    image: 'public/lovable-uploads/40ce9cda-70cf-43b8-95de-24d0f591a828.png',
    title: 'Kaena Restaurant & Bar',
    subtitle: 'Experience the flavors of Rarotonga in a beautiful beachside setting',
  },
  {
    id: 2,
    image: 'public/lovable-uploads/b32850fb-9a42-4c8b-91da-39e00dc7667b.png',
    title: 'Exceptional Dining Experience',
    subtitle: 'Savor our delicious cuisine with panoramic ocean views',
  },
  {
    id: 3,
    image: 'public/lovable-uploads/1f42cd91-847e-4d43-a10e-8dc70f5c4805.png',
    title: 'Truly Authentic Flavors',
    subtitle: 'Local ingredients prepared with international techniques',
  },
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <HeroSlider slides={slides} />
      
      {/* Welcome Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
            <h2 className="section-title">Welcome to Kaena</h2>
            <p className="text-lg text-gray-600 mt-6">
              Located near the Rarotongan Beach Resort, our restaurant offers a perfect blend of local hospitality and international cuisine. Enjoy the tropical ambiance while savoring our carefully crafted dishes made with the freshest local ingredients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <InfoCard
              icon={<Utensils className="w-12 h-12" />}
              title="Exceptional Cuisine"
              description="Experience a fusion of traditional Cook Islands flavors and international culinary techniques."
              delay={100}
            />
            <InfoCard
              icon={<Wine className="w-12 h-12" />}
              title="Beach Bar"
              description="Relax with our selection of tropical cocktails, fine wines, and local beverages while enjoying the ocean view."
              delay={200}
            />
            <InfoCard
              icon={<Coffee className="w-12 h-12" />}
              title="Perfect Atmosphere"
              description="Dine in our open-air setting with the sound of waves and gentle ocean breeze enhancing your experience."
              delay={300}
            />
          </div>
        </div>
      </section>
      
      {/* Specialty Section */}
      <section className="py-20 bg-ocean-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 animate-fade-in">
              <h2 className="text-3xl font-bold mb-6 font-playfair">Specialising in Asian Cuisine</h2>
              <p className="text-lg text-gray-600 mb-8">
                "Grilled & Sizzling Style" - our specialty brings together the best of Asian flavors with the freshest local ingredients. Each dish is carefully prepared to deliver an authentic and memorable dining experience.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <AmenityItem icon={<Utensils className="w-5 h-5" />} text="Seafood" />
                <AmenityItem icon={<Coffee className="w-5 h-5" />} text="Takeaway" />
                <AmenityItem icon={<Wine className="w-5 h-5" />} text="Dinner" />
                <AmenityItem icon={<Clock className="w-5 h-5" />} text="Lunch" />
              </div>
              
              <Link to="/menu" className="btn-primary inline-block">
                View Full Menu
              </Link>
            </div>
            
            <div className="md:w-1/2 animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="public/lovable-uploads/6c835133-4f2e-4fc3-870e-be6586a8d671.png" 
                  alt="Signature Dish" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2 font-playfair">Our Signature Dishes</h3>
                  <p>Fresh ingredients prepared with passion and expertise</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Info Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center mb-16 animate-fade-in">
            <h2 className="section-title">Contact Us</h2>
            <p className="text-lg text-gray-600 mt-6">
              For reservations or inquiries, please contact us using the information below. We look forward to welcoming you at Kaena Restaurant & Bar.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in" style={{ animationDelay: '100ms' }}>
              <Phone className="w-12 h-12 mx-auto text-ocean-500 mb-4" />
              <h3 className="text-xl font-bold mb-2 font-playfair">Phone</h3>
              <p className="text-gray-600">+682 25433</p>
              <a href="tel:+68225433" className="text-ocean-600 hover:text-ocean-800 mt-2 inline-block">Call Now</a>
            </div>
            
            <div className="text-center animate-fade-in" style={{ animationDelay: '200ms' }}>
              <MapPin className="w-12 h-12 mx-auto text-ocean-500 mb-4" />
              <h3 className="text-xl font-bold mb-2 font-playfair">Location</h3>
              <p className="text-gray-600">Near Rarotongan Beach Resort, Arorangi, Rarotonga, Cook Islands</p>
              <Link to="/contact" className="text-ocean-600 hover:text-ocean-800 mt-2 inline-block">View Map</Link>
            </div>
            
            <div className="text-center animate-fade-in" style={{ animationDelay: '300ms' }}>
              <Clock className="w-12 h-12 mx-auto text-ocean-500 mb-4" />
              <h3 className="text-xl font-bold mb-2 font-playfair">Opening Hours</h3>
              <p className="text-gray-600">Monday - Friday: 11:00 AM - 10:00 PM</p>
              <p className="text-gray-600">Saturday - Sunday: 10:00 AM - 11:00 PM</p>
            </div>
          </div>
          
          <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '400ms' }}>
            <Link to="/contact" className="btn-primary">
              Make a Reservation
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
