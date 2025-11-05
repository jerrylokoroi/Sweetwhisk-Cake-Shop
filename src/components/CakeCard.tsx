import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

interface CakeCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
}

const CakeCard = ({ name, description, price, image }: CakeCardProps) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_-2px_hsl(340_82%_67%/0.1)] hover:shadow-[0_8px_30px_-4px_hsl(340_82%_67%/0.2)] transition-all duration-300 hover:-translate-y-2">
      {/* Image */}
      <div className="relative h-64 overflow-hidden bg-cream">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
            {name}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-2">
            {description}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">{price}</span>
          <Button size="sm" className="rounded-full group/btn">
            <ShoppingCart className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CakeCard;
