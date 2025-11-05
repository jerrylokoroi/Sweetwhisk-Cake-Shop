import CakeCard from '@/components/CakeCard';
import chocolateCake from '@/assets/featured-chocolate.jpg';
import strawberryCake from '@/assets/featured-strawberry.jpg';
import vanillaCake from '@/assets/featured-vanilla.jpg';
import redVelvetCake from '@/assets/menu-redvelvet.jpg';
import lemonTart from '@/assets/menu-lemon.jpg';
import macaron from '@/assets/menu-macaron.jpg';
import cheesecake from '@/assets/menu-cheesecake.jpg';
import tiramisu from '@/assets/menu-tiramisu.jpg';
import rainbowCake from '@/assets/menu-rainbow.jpg';

const menuItems = [
  {
    id: 1,
    name: 'Chocolate Dream',
    description: 'Rich Belgian chocolate layers with creamy ganache and chocolate shavings',
    price: 'KES 2500',
    image: chocolateCake,
  },
  {
    id: 2,
    name: 'Strawberry Delight',
    description: 'Fresh strawberries with vanilla cream and light sponge cake',
    price: 'KES 2000',
    image: strawberryCake,
  },
  {
    id: 3,
    name: 'Classic Vanilla',
    description: 'Timeless vanilla cake with smooth buttercream frosting',
    price: 'KES 1500',
    image: vanillaCake,
  },
  {
    id: 4,
    name: 'Red Velvet',
    description: 'Velvety red cake with cream cheese frosting and cocoa notes',
    price: 'KES 2500',
    image: redVelvetCake,
  },
  {
    id: 5,
    name: 'Lemon Tart',
    description: 'Zesty lemon curd in buttery pastry shell with fresh lemon',
    price: 'KES 2000',
    image: lemonTart,
  },
  {
    id: 6,
    name: 'Caramel Macarons',
    description: 'Delicate French macarons with salted caramel filling',
    price: 'KES 1500',
    image: macaron,
  },
  {
    id: 7,
    name: 'Blueberry Cheesecake',
    description: 'Creamy cheesecake with fresh blueberry compote topping',
    price: 'KES 2500',
    image: cheesecake,
  },
  {
    id: 8,
    name: 'Tiramisu',
    description: 'Italian classic with coffee-soaked ladyfingers and mascarpone',
    price: 'KES 2000',
    image: tiramisu,
  },
  {
    id: 9,
    name: 'Rainbow Layer Cake',
    description: 'Colorful layers of moist sponge cake with vanilla frosting',
    price: 'KES 1500',
    image: rainbowCake,
  },
];

const Menu = () => {
  return (
    <div className="min-h-screen pt-24 pb-20 bg-gradient-to-b from-background via-cream/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 slide-up">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            Our Delicious <span className="font-greatVibes text-primary">Menu</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our handcrafted selection of cakes and pastries, made fresh daily with
            premium ingredients and lots of love
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 fade-in">
          {menuItems.map((item) => (
            <CakeCard
              key={item.id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>

        {/* Custom Orders Section */}
        <div className="mt-20 text-center bg-gradient-to-br from-rose-light/30 to-cream rounded-3xl p-12 slide-up">
          <h2 className="text-3xl font-bold mb-4">Looking for Something Special?</h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            We create custom cakes for weddings, birthdays, and all special occasions.
            Contact us to discuss your dream cake!
          </p>
          <a
            href="mailto:hello@sweetwhisk.com"
            className="inline-flex items-center justify-center rounded-full bg-primary text-white px-8 py-3 font-medium hover:bg-primary/90 transition-colors"
          >
            Request Custom Order
          </a>
        </div>
      </div>
    </div>
  );
};

export default Menu;
