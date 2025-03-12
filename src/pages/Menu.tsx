
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FoodMenu from '../components/FoodMenu';
import { Wine, Utensils } from 'lucide-react';

const Menu = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Menu Hero */}
      <section className="pt-20 bg-ocean-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl font-bold mb-6 font-playfair">Our Menu</h1>
            <p className="text-lg text-gray-600">
              Experience the unique flavors of our carefully crafted dishes, combining traditional Cook Islands cuisine with international influences. All our ingredients are sourced locally when possible to ensure the freshest dining experience.
            </p>
          </div>
        </div>
      </section>
      
      {/* Food Menu Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FoodMenu />
        </div>
      </section>
      
      {/* Special Offers */}
      <section className="py-16 bg-ocean-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="section-title">Special Offers</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden animate-fade-in" style={{ animationDelay: '100ms' }}>
              <div className="bg-ocean-500 text-white p-4">
                <h3 className="text-xl font-bold font-playfair">Sunset Dinner Special</h3>
              </div>
              <div className="p-6">
                <div className="flex items-start mb-4">
                  <Wine className="w-5 h-5 text-ocean-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium">Every evening from 5 PM to 7 PM</h4>
                    <p className="text-gray-600">
                      Enjoy a complimentary glass of wine with any main course during our sunset hours.
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-4">*Subject to availability. Please mention this offer when making your reservation.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="bg-ocean-500 text-white p-4">
                <h3 className="text-xl font-bold font-playfair">Family Feast</h3>
              </div>
              <div className="p-6">
                <div className="flex items-start mb-4">
                  <Utensils className="w-5 h-5 text-ocean-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium">Perfect for groups of 4 or more</h4>
                    <p className="text-gray-600">
                      Our Chef's selection of appetizers, main courses, and desserts at a special price.
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-4">*Advance booking recommended. Please inform us of any dietary restrictions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Chef's Note */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl font-bold mb-6 font-playfair">A Note from Our Chef</h2>
            <p className="text-lg text-gray-600 italic">
              "At Kaena, we're passionate about creating memorable dining experiences. Our menu is a reflection of the rich cultural heritage of the Cook Islands and the finest culinary traditions from around the world. We invite you to savor each dish and enjoy the journey."
            </p>
            <div className="mt-6">
              <p className="font-bold">Chef Michael Koronui</p>
              <p className="text-gray-600">Head Chef, Kaena Restaurant & Bar</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Menu;
