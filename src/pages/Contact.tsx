import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Header */}
      <section className="bg-gradient-to-b from-rose-light/20 to-cream py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto slide-up">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              Get in <span className="font-greatVibes text-primary">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We'd love to hear from you! Whether you have questions, want to place an
              order, or discuss a custom creation, reach out to us.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 slide-up">
              <h2 className="text-3xl font-bold mb-8">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="(123) 456-7890"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                    placeholder="Tell us about your order or inquiry..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full rounded-full"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = 'mailto:hello@sweetwhisk.com';
                  }}
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8 fade-in">
              {/* Info Cards */}
              <div className="space-y-6">
                {[
                  {
                    icon: MapPin,
                    title: 'Visit Us',
                    content: '123 Baker Street, Sweet City, SC 12345',
                  },
                  {
                    icon: Phone,
                    title: 'Call Us',
                    content: '(123) 456-7890',
                    link: 'tel:+1234567890',
                  },
                  {
                    icon: Mail,
                    title: 'Email Us',
                    content: 'hello@sweetwhisk.com',
                    link: 'mailto:hello@sweetwhisk.com',
                  },
                  {
                    icon: Clock,
                    title: 'Opening Hours',
                    content: 'Mon-Sat: 8:00 AM - 7:00 PM\nSunday: 9:00 AM - 5:00 PM',
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-6 rounded-2xl bg-white shadow-md hover-lift"
                  >
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-muted-foreground whitespace-pre-line">
                          {item.content}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden shadow-xl h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2176328079285!2d-73.98784968459395!3d40.75797517932738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258fbd5ec7547%3A0x6c2d05298c3d0601!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SweetWhisk Bakery Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
