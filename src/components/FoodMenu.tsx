
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Fish, Utensils, Coffee, Wine } from 'lucide-react';

// Define menu categories and items
const menuCategories = [
  {
    id: 'appetizers',
    name: 'Appetizers',
    icon: <Utensils className="w-5 h-5" />,
  },
  {
    id: 'seafood',
    name: 'Seafood',
    icon: <Fish className="w-5 h-5" />,
  },
  {
    id: 'drinks',
    name: 'Drinks',
    icon: <Coffee className="w-5 h-5" />,
  },
  {
    id: 'specials',
    name: 'Chef\'s Specials',
    icon: <Wine className="w-5 h-5" />,
  },
];

// Menu items organized by category
const menuItems = {
  appetizers: [
    { id: 1, name: 'Coconut Shrimp', description: 'Crispy shrimp with a coconut breading', price: '$12' },
    { id: 2, name: 'Tuna Ceviche', description: 'Fresh raw tuna marinated in citrus', price: '$14' },
    { id: 3, name: 'Island Salad', description: 'Mixed greens with local fruits and nuts', price: '$10' },
  ],
  seafood: [
    { id: 4, name: 'Grilled Mahi-Mahi', description: 'Fresh caught mahi-mahi with mango salsa', price: '$24' },
    { id: 5, name: 'Seafood Platter', description: 'Selection of local seafood grilled to perfection', price: '$32' },
    { id: 6, name: 'Coconut Curry Fish', description: 'Local fish in a rich coconut curry sauce', price: '$22' },
  ],
  drinks: [
    { id: 7, name: 'Tropical Smoothie', description: 'Blend of fresh tropical fruits', price: '$7' },
    { id: 8, name: 'Coconut Mojito', description: 'Refreshing cocktail with coconut water and mint', price: '$10' },
    { id: 9, name: 'Island Coffee', description: 'Premium coffee with a hint of vanilla', price: '$5' },
  ],
  specials: [
    { id: 10, name: 'Chef\'s Catch of the Day', description: 'Fresh fish prepared in the chef\'s special style', price: '$28' },
    { id: 11, name: 'Island Feast', description: 'Traditional Cook Islands meal with multiple courses', price: '$38' },
    { id: 12, name: 'Grilled Lobster', description: 'Local lobster grilled with herb butter', price: '$42' },
  ],
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
};

const FoodMenu = () => {
  const [activeCategory, setActiveCategory] = useState('appetizers');

  return (
    <div className="max-w-4xl mx-auto">
      {/* Menu Categories */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {menuCategories.map((category) => (
          <button
            key={category.id}
            className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${
              activeCategory === category.id
                ? 'bg-ocean-500 text-white shadow-md'
                : 'bg-white border border-gray-200 hover:border-ocean-300 hover:bg-ocean-50'
            }`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.icon}
            <span>{category.name}</span>
          </button>
        ))}
      </div>

      {/* Menu Items */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid gap-6"
      >
        {menuItems[activeCategory as keyof typeof menuItems].map((item) => (
          <motion.div
            key={item.id}
            variants={itemVariants}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow p-6"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold mb-2 font-playfair">{item.name}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
              <span className="text-ocean-600 font-semibold">{item.price}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default FoodMenu;
