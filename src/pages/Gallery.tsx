import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import gallery4 from '@/assets/gallery-4.jpg';
import gallery5 from '@/assets/gallery-5.jpg';
import gallery6 from '@/assets/gallery-6.jpg';

const galleryImages = [
  {
    id: 1,
    src: gallery1,
    alt: 'Elegant multi-tier wedding cake',
    span: 'md:row-span-2',
  },
  {
    id: 2,
    src: gallery2,
    alt: 'Colorful cupcakes on display',
    span: 'md:col-span-2',
  },
  {
    id: 3,
    src: gallery3,
    alt: 'Birthday celebration cake',
    span: '',
  },
  {
    id: 4,
    src: gallery4,
    alt: 'Fresh artisan breads and pastries',
    span: 'md:col-span-2',
  },
  {
    id: 5,
    src: gallery5,
    alt: 'Elegant dessert table setup',
    span: 'md:col-span-2',
  },
  {
    id: 6,
    src: gallery6,
    alt: 'Cake decorating process',
    span: 'md:row-span-2',
  },
];

const Gallery = () => {
  return (
    <div className="min-h-screen pt-24 pb-20 bg-gradient-to-b from-background via-cream/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 slide-up">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            Our <span className="font-greatVibes text-primary">Gallery</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our collection of beautiful creations. Each piece tells a story of
            craftsmanship, creativity, and the joy of celebrating life's special moments.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid md:grid-cols-3 auto-rows-auto gap-6 fade-in">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ${image.span}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-lg font-medium">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="mt-20 text-center bg-gradient-to-br from-rose-light/30 to-cream rounded-3xl p-12 slide-up">
          <h2 className="text-3xl font-bold mb-4">Follow Our Sweet Journey</h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Get daily inspiration and behind-the-scenes peeks at our baking process.
            Follow us on Instagram for the latest creations!
          </p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-primary text-white px-8 py-3 font-medium hover:bg-primary/90 transition-colors"
          >
            Follow @SweetWhiskBakery
          </a>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
