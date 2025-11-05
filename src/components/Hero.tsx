import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChefHat } from 'lucide-react';
import heroImage from '@/assets/hero-cake.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-rose-light/20 via-cream to-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-20 lg:py-0">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8 slide-up">
            <div className="inline-flex items-center space-x-2 bg-accent/30 px-4 py-2 rounded-full">
              <ChefHat className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-foreground">
                Freshly Baked Daily
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              Baking Happiness,{' '}
              <span className="font-greatVibes text-primary block mt-2">
                One Slice at a Time
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Discover our handcrafted cakes and pastries made with the finest ingredients
              and a whole lot of love. Every bite tells a delicious story.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="rounded-full group text-lg px-8">
                <Link to="/menu">
                  Order Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-2 border-primary text-lg px-8 hover:bg-primary hover:text-white"
              >
                <Link to="/menu">View Menu</Link>
              </Button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative fade-in">
            <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)]">
              <img
                src={heroImage}
                alt="Beautiful handcrafted cake from SweetWhisk Bakery"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-lg p-6 max-w-xs hidden lg:block hover-lift">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center">
                  <span className="text-2xl">🎂</span>
                </div>
                <div>
                  <p className="font-semibold text-lg">500+</p>
                  <p className="text-muted-foreground text-sm">Happy Customers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
