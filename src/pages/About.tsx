import { Heart, Leaf, Users, Trophy } from 'lucide-react';
import chefPortrait from '@/assets/chef-portrait.jpg';

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-rose-light/20 to-cream py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto slide-up">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              Our <span className="font-greatVibes text-primary">Story</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Since 2020, SweetWhisk Bakery has been dedicated to creating moments of joy
              through the art of baking. What started as a passion project in a home kitchen
              has blossomed into a beloved community bakery.
            </p>
          </div>
        </div>
      </section>

      {/* Chef Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative fade-in">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={chefPortrait}
                  alt="Head Pastry Chef Sarah Martinez"
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="space-y-6 slide-up">
              <h2 className="text-4xl font-bold">
                Meet Our <span className="font-greatVibes text-primary">Head Chef</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Consolata Aron, our founder and head pastry chef, brings over 10 years of
                experience from training in Nairobi to leading kitchens in Lodwar. Her
                philosophy is simple: use the finest ingredients, master traditional
                techniques, and always bake with love.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                "Every cake that leaves our bakery carries a piece of our heart. We don't
                just bake desserts; we create memories that bring people together."
              </p>
              <p className="font-greatVibes text-2xl text-primary">- Consolata Aron</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-cream/50 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 slide-up">
            <h2 className="text-4xl font-bold mb-4">
              Our <span className="font-greatVibes text-primary">Values</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do at SweetWhisk Bakery
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Heart,
                title: 'Quality First',
                description:
                  'We use only premium, locally-sourced ingredients in every creation',
              },
              {
                icon: Leaf,
                title: 'Sustainability',
                description:
                  'Committed to eco-friendly practices and supporting local farmers',
              },
              {
                icon: Users,
                title: 'Community',
                description:
                  'Proud to be part of our neighborhood and give back to our community',
              },
              {
                icon: Trophy,
                title: 'Excellence',
                description:
                  'Continuously perfecting our craft and exceeding expectations',
              },
            ].map((value, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-white shadow-[0_4px_20px_-2px_hsl(340_82%_67%/0.1)] hover-lift"
              >
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
            {[
              { number: '10,000+', label: 'Happy Customers' },
              { number: '50+', label: 'Unique Recipes' },
              { number: '4.9/5', label: 'Average Rating' },
              { number: '15', label: 'Years Experience' },
            ].map((stat, index) => (
              <div key={index} className="fade-in">
                <div className="text-4xl sm:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
