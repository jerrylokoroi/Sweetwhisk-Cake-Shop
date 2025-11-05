import Hero from '@/components/Hero';
import FeaturedCakes from '@/components/FeaturedCakes';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Heart, Leaf, Clock } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedCakes />

      {/* Why Choose Us Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 slide-up">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Why Choose <span className="font-greatVibes text-primary">SweetWhisk?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're committed to bringing you the finest baked goods with unmatched quality and care
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Heart,
                title: 'Made with Love',
                description: 'Every cake is handcrafted with passion and the finest ingredients',
              },
              {
                icon: Leaf,
                title: 'Eco-Friendly',
                description: 'Sustainable packaging and locally sourced ingredients',
              },
              {
                icon: Clock,
                title: 'Fresh Daily',
                description: 'Baked fresh every morning to ensure maximum flavor and quality',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-gradient-to-b from-white to-cream hover-lift"
              >
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-rose-light/40 via-cream to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8 slide-up">
            <h2 className="text-4xl sm:text-5xl font-bold">
              Ready to Experience{' '}
              <span className="font-greatVibes text-primary block mt-2">
                Pure Sweetness?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Order your favorite cakes today and taste the difference that quality makes
            </p>
            <Button asChild size="lg" className="rounded-full text-lg px-10">
              <Link to="/menu">Browse Our Menu</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
