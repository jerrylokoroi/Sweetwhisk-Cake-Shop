import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import chocolateCake from '@/assets/featured-chocolate.jpg';
import strawberryCake from '@/assets/featured-strawberry.jpg';
import vanillaCake from '@/assets/featured-vanilla.jpg';

const featuredCakes = [
  {
    id: 1,
    name: 'Chocolate Dream',
    description: 'Rich Belgian chocolate layers with creamy ganache',
    price: 'KES 2500',
    image: chocolateCake,
  },
  {
    id: 2,
    name: 'Strawberry Delight',
    description: 'Fresh strawberries with vanilla cream and light sponge',
    price: 'KES 2000',
    image: strawberryCake,
  },
  {
    id: 3,
    name: 'Classic Vanilla',
    description: 'Timeless vanilla cake with buttercream frosting',
    price: 'KES 1500',
    image: vanillaCake,
  },
];

const FeaturedCakes = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredCakes.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredCakes.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredCakes.length) % featuredCakes.length);
  };

  const currentCake = featuredCakes[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 slide-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Featured <span className="font-greatVibes text-primary">Creations</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our signature cakes, handcrafted with premium ingredients
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Carousel */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative h-80 md:h-96 overflow-hidden">
                <img
                  src={currentCake.image}
                  alt={currentCake.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold mb-2">{currentCake.name}</h3>
                    <p className="text-muted-foreground text-lg">
                      {currentCake.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-primary">
                      {currentCake.price}
                    </span>
                    <Button size="lg" className="rounded-full">
                      Order Now
                    </Button>
                  </div>

                  {/* Indicators */}
                  <div className="flex space-x-2">
                    {featuredCakes.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`h-2 rounded-full transition-all ${
                          index === currentIndex
                            ? 'w-8 bg-primary'
                            : 'w-2 bg-primary/30 hover:bg-primary/50'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-accent transition-colors"
            aria-label="Previous cake"
          >
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-accent transition-colors"
            aria-label="Next cake"
          >
            <ChevronRight className="w-6 h-6 text-foreground" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCakes;
