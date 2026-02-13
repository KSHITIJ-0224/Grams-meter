import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hi, I'm ${form.name}.\nPhone: ${form.phone}\n\n${form.message}`
    );
    window.open(`https://wa.me/919967555595?text=${msg}`, "_blank");
    toast.success("Redirecting to WhatsApp...");
    setForm({ name: "", phone: "", message: "" });
  };

  return (
    <main className="py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-14">
          <p className="font-accent text-gold tracking-[0.3em] uppercase text-sm mb-2">Get In Touch</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground">Contact Us</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="font-display text-xl font-bold mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 border border-border rounded bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/50"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full px-4 py-3 border border-border rounded bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/50"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 border border-border rounded bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 resize-none"
              />
              <button
                type="submit"
                className="w-full py-4 bg-gold text-accent-foreground font-body font-bold tracking-wider uppercase text-sm rounded hover:bg-gold-dark transition-colors"
              >
                Send via WhatsApp
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <h3 className="font-display text-xl font-bold">Store Details</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                <p className="font-body text-sm text-muted-foreground">3rd Floor, Shop No. 348, B Wing, Keval Industrial Estate, Senapati Bapat Marg, Lower Parel, Mumbai - 400 013</p>
              </div>
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

            <div className="mt-8 rounded-lg overflow-hidden border border-border">
              <iframe
                title="Store Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.1!2d72.827!3d19.007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDAwJzI1LjIiTiA3MsKwNDknMzcuMiJF!5e0!3m2!1sen!2sin!4v1!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
