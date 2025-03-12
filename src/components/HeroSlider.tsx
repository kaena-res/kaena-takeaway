
import { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
}

interface HeroSliderProps {
  slides: Slide[];
  autoPlayInterval?: number;
}

const HeroSlider = ({ slides, autoPlayInterval = 5000 }: HeroSliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const autoPlayTimerRef = useRef<number | null>(null);

  const nextSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 700); // Match this to the CSS transition duration
  };

  const prevSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 700); // Match this to the CSS transition duration
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentSlide) return;
    
    setIsAnimating(true);
    setCurrentSlide(index);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 700); // Match this to the CSS transition duration
  };

  // Auto play functionality
  useEffect(() => {
    if (autoPlayInterval) {
      autoPlayTimerRef.current = window.setInterval(() => {
        nextSlide();
      }, autoPlayInterval);
    }

    return () => {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current);
      }
    };
  }, [autoPlayInterval]);

  // Pause auto play on hover
  const pauseAutoPlay = () => {
    if (autoPlayTimerRef.current) {
      clearInterval(autoPlayTimerRef.current);
      autoPlayTimerRef.current = null;
    }
  };

  // Resume auto play
  const resumeAutoPlay = () => {
    if (!autoPlayTimerRef.current && autoPlayInterval) {
      autoPlayTimerRef.current = window.setInterval(() => {
        nextSlide();
      }, autoPlayInterval);
    }
  };

  return (
    <div 
      className="relative w-full h-[85vh] overflow-hidden"
      onMouseEnter={pauseAutoPlay}
      onMouseLeave={resumeAutoPlay}
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`hero-slide ${
            index === currentSlide 
              ? 'opacity-100 z-10' 
              : 'opacity-0 z-0'
          }`}
          style={{ 
            backgroundImage: `url(${slide.image})`,
            transitionDelay: index === currentSlide ? '0ms' : '700ms'
          }}
        >
          <div className="hero-overlay"></div>
          <div className="hero-content text-center px-4">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
              {slide.title}
            </h2>
            <p className="text-xl md:text-2xl max-w-2xl animate-fade-in" style={{ animationDelay: '200ms' }}>
              {slide.subtitle}
            </p>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button 
        className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20 bg-black/20 hover:bg-black/40 text-white rounded-full p-2 transition-all duration-300"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ArrowLeft className="w-6 h-6" />
      </button>
      <button 
        className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20 bg-black/20 hover:bg-black/40 text-white rounded-full p-2 transition-all duration-300"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ArrowRight className="w-6 h-6" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full mx-1 transition-all duration-300 ${
              index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
