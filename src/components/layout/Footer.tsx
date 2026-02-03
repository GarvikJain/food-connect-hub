import { Link } from "react-router-dom";
import { Leaf, Heart, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <Leaf className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">FoodShare</span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Connecting surplus food with those who need it most. Together, we can reduce waste and feed communities.
            </p>
            <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
              <Heart className="w-4 h-4 text-accent" />
              <span>Made with love for a better world</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "How It Works", "About Us", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    to="/"
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Portals */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Portals</h4>
            <ul className="space-y-3">
              {[
                { name: "Donor Dashboard", path: "/donor" },
                { name: "Recipient Dashboard", path: "/recipient" },
                { name: "Volunteer Portal", path: "/volunteer" },
                { name: "Admin Panel", path: "/admin" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Mail className="w-4 h-4 text-primary" />
                hello@foodshare.org
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Phone className="w-4 h-4 text-primary" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-start gap-3 text-sm text-primary-foreground/70">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span>123 Green Street<br />Sustainability City, SC 12345</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/50">
            © 2024 FoodShare. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/" className="text-sm text-primary-foreground/50 hover:text-primary-foreground/70 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/" className="text-sm text-primary-foreground/50 hover:text-primary-foreground/70 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
