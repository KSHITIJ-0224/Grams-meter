import { MapPin, Phone, Mail, Clock } from "lucide-react";

const About = () => {
  return (
    <main className="py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-14">
          <p className="font-accent text-gold tracking-[0.3em] uppercase text-sm mb-2 font-bold">Our Story</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground">About Grams & Meters</h1>
        </div>

        <div className="prose prose-lg mx-auto font-body text-muted-foreground space-y-6 mb-16">
          <p className="text-lg leading-relaxed">
            Located in the heart of Mumbai&apos;s textile hub at Lower Parel, <strong className="text-foreground">Grams & Meters</strong> is your exclusive destination for premium shirting and suiting fabrics.
          </p>
          <p className="leading-relaxed">
            We curate the finest fabrics from mills across India and the world — from luxurious Egyptian cotton shirtings to premium Italian wool suitings. Every fabric in our collection is handpicked for quality, texture, and durability.
          </p>
          <p className="leading-relaxed">
            Whether you&apos;re a bespoke tailor, fashion designer, or an individual seeking the perfect fabric for your next outfit, we offer personalized service to help you find exactly what you need.
          </p>
        </div>

        <div className="bg-gradient-to-r from-gold/5 to-gold/10 rounded-lg p-12 mb-16 border border-gold/20">
          <p className="font-accent text-gold-dark tracking-[0.3em] uppercase text-sm mb-4 font-bold">Meet Our Founder</p>
          <h2 className="font-display text-3xl font-bold text-foreground mb-6">Gautam Maniar</h2>
          
          <div className="space-y-6 font-body text-muted-foreground">
            <p className="leading-relaxed">
              With over two decades of expertise in the textile industry, Gautam Maniar founded Grams & Meters with a singular vision: to make premium quality fabrics accessible and affordable to everyone. His deep understanding of fabric quality, sourcing, and market dynamics shaped the foundation of our business.
            </p>
            <p className="leading-relaxed">
              Gautam&apos;s journey began in the bustling textile markets of Mumbai, where he developed an eye for distinguishing exceptional fabrics from ordinary ones. His passion for excellence and commitment to transparency led him to establish relationships with the finest mills across India and internationally. This network of trusted suppliers ensures that every piece of fabric in our store meets the highest standards.
            </p>
            <p className="leading-relaxed">
              What sets Gautam apart is his customer-centric approach. He believes that choosing the perfect fabric should be an experience, not a transaction. His personal attention to detail and willingness to understand each customer&apos;s unique needs has earned him a loyal clientele comprising master craftsmen, fashion designers, and discerning individuals who refuse to compromise on quality.
            </p>
            <p className="leading-relaxed">
              Today, Grams & Meters stands as a testament to Gautam&apos;s dedication to quality, integrity, and service excellence. He continues to personally oversee our collections, ensuring that every fabric we offer reflects the standard of excellence that defines our brand.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-card rounded-lg p-8 shadow-elegant">
            <h3 className="font-display text-xl font-bold text-foreground mb-6">Visit Our Store</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                <p className="font-body text-sm text-muted-foreground">3rd Floor, Shop No. 348, B Wing, Keval Industrial Estate, Senapati Bapat Marg, Lower Parel, Mumbai - 400 013</p>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-gold flex-shrink-0" />
                <p className="font-body text-sm text-muted-foreground">Mon - Sat: 10:00 AM - 8:00 PM</p>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-lg p-8 shadow-elegant">
            <h3 className="font-display text-xl font-bold text-foreground mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <div>
                  <p className="font-body text-sm text-muted-foreground">+91 99675 55595</p>
                  <p className="font-body text-sm text-muted-foreground">+91 99675 55423</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                <p className="font-body text-sm text-muted-foreground">gramsandmeters@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-lg overflow-hidden shadow-elegant h-96">
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.7643857894826!2d72.82297!3d19.01674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9c4c4c4c4c5%3A0x8c0c0c0c0c0c0c0c!2sKeval%20Industrial%20Estate%2C%20Lower%20Parel%2C%20Mumbai%20400%20013!5e0!3m2!1sen!2sin!4v1644556789012"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </main>
  );
};

export default About;
