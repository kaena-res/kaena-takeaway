
import { PhoneCall, Mail, MapPin, ExternalLink, Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-ocean-50 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-xl font-bold mb-4 font-playfair text-ocean-600">Kaena Restaurant & Bar</h3>
            <p className="text-gray-600 mb-4">
              Located near the Rarotongan Beach Resort, our restaurant offers a perfect blend of local hospitality and international cuisine.
            </p>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-bold mb-4 font-playfair text-ocean-600">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a href="tel:+68225433" className="contact-link">
                  <PhoneCall className="w-4 h-4" />
                  <span>+682 25433</span>
                </a>
              </li>
              <li>
                <a href="mailto:kaenarestaurant@gmail.com" className="contact-link">
                  <Mail className="w-4 h-4" />
                  <span>kaenarestaurant@gmail.com</span>
                </a>
              </li>
              <li className="contact-link">
                <MapPin className="w-4 h-4" />
                <span>Near Rarotongan Beach Resort, Arorangi, Rarotonga, Cook Islands</span>
              </li>
            </ul>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-xl font-bold mb-4 font-playfair text-ocean-600">Opening Hours</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Monday - Friday: 11:00 AM - 10:00 PM</li>
              <li>Saturday - Sunday: 10:00 AM - 11:00 PM</li>
            </ul>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-xl font-bold mb-4 font-playfair text-ocean-600">Follow Us</h3>
            <div className="flex space-x-4 mb-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-ocean-600 hover:text-ocean-800 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-ocean-600 hover:text-ocean-800 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
            <Link to="/contact" className="btn-outline btn-icon">
              Book a Table
              <ExternalLink className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} Kaena Restaurant & Takeaway. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
