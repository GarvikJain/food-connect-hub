import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { 
  Heart, 
  Search, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Users,
  Shield,
  Truck,
  Calendar,
  Phone,
  Building2
} from "lucide-react";
import heroImage from "@/assets/hero-food-sharing.jpg";

const FindFood = () => {
  const recipientTypes = [
    {
      icon: Users,
      title: "NGOs",
      description: "Non-profit organizations serving underprivileged communities",
    },
    {
      icon: Building2,
      title: "Shelters",
      description: "Homeless shelters and temporary housing facilities",
    },
    {
      icon: Heart,
      title: "Community Kitchens",
      description: "Free meal programs and soup kitchens",
    },
    {
      icon: Users,
      title: "Orphanages & Old Age Homes",
      description: "Residential care facilities for children and elderly",
    },
  ];

  const steps = [
    {
      number: "1",
      title: "Register Your Organization",
      description: "Sign up with your NGO registration number and verification documents.",
    },
    {
      number: "2",
      title: "Browse Available Food",
      description: "View real-time listings of surplus food from verified donors nearby.",
    },
    {
      number: "3",
      title: "Accept Donations",
      description: "Choose donations that match your capacity and dietary requirements.",
    },
    {
      number: "4",
      title: "Receive Delivery",
      description: "Our volunteer network delivers the food safely to your location.",
    },
  ];

  const features = [
    { 
      icon: Shield, 
      title: "Verified Donors", 
      description: "All food donors are verified and follow food safety guidelines" 
    },
    { 
      icon: Clock, 
      title: "Fresh & Timely", 
      description: "Food is delivered within its best-before window for freshness" 
    },
    { 
      icon: Truck, 
      title: "Free Delivery", 
      description: "Our volunteer network handles all pickup and delivery at no cost" 
    },
    { 
      icon: Calendar, 
      title: "Flexible Scheduling", 
      description: "Accept donations that fit your daily capacity and schedule" 
    },
  ];

  const availableFood = [
    {
      type: "Cooked Meals",
      donor: "City Spice Restaurant",
      quantity: "50 portions",
      time: "Pickup by 9 PM today",
      distance: "2.3 km away",
    },
    {
      type: "Fresh Vegetables",
      donor: "Green Mart Groceries",
      quantity: "20 kg assorted",
      time: "Pickup by tomorrow 10 AM",
      distance: "1.5 km away",
    },
    {
      type: "Bakery Items",
      donor: "Daily Bread Bakery",
      quantity: "100 pieces",
      time: "Pickup by 8 PM today",
      distance: "3.1 km away",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5" />
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full text-accent text-sm font-medium">
                <Heart className="w-4 h-4" />
                For NGOs & Community Organizations
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Access Free Nutritious Food for{" "}
                <span className="text-gradient-primary">Your Community</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                Connect with restaurants, hotels, and households to receive surplus edible food 
                for your organization. All donations are free and delivered by our volunteer network.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/register" className="flex items-center gap-2">
                    Register Your Organization
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <Link to="/login">Already Registered? Login</Link>
                </Button>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground">85+</p>
                  <p className="text-sm text-muted-foreground">Partner NGOs</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground">10K+</p>
                  <p className="text-sm text-muted-foreground">People Fed Daily</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground">100%</p>
                  <p className="text-sm text-muted-foreground">Free Service</p>
                </div>
              </div>
            </div>
            
            <div className="relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <div className="relative rounded-3xl overflow-hidden shadow-elevated">
                <img
                  src={heroImage}
                  alt="Community food distribution"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Can Receive */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Who Can Receive Food?</h2>
            <p className="text-muted-foreground text-lg">
              Registered non-profit organizations and community service centers can join our network.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recipientTypes.map((type, index) => (
              <Card key={index} className="text-center card-donation">
                <CardContent className="pt-6">
                  <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <type.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{type.title}</h3>
                  <p className="text-sm text-muted-foreground">{type.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Available Food */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Available Food Near You</h2>
            <p className="text-muted-foreground text-lg">
              Here's a sample of what's currently available. Register to see all listings.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {availableFood.map((food, index) => (
              <Card key={index} className="card-donation">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-success/10 text-success text-xs font-medium rounded-full">
                      Available
                    </span>
                    <span className="text-xs text-muted-foreground">{food.distance}</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{food.type}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{food.donor}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Search className="w-4 h-4" />
                      <span>{food.quantity}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{food.time}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4" asChild>
                    <Link to="/register">Register to Accept</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">How to Get Food</h2>
            <p className="text-muted-foreground text-lg">
              Simple process to start receiving food donations for your organization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-bold text-accent/10 absolute -top-4 -left-2">{step.number}</div>
                <div className="relative pt-8">
                  <div className="w-10 h-10 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold mb-4">
                    {step.number}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose FoodShare?</h2>
            <p className="text-muted-foreground text-lg">
              A trusted platform designed to make food access easy and reliable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="card-donation">
                <CardContent className="pt-6">
                  <feature.icon className="w-10 h-10 text-accent mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Registration Requirements</h2>
              <p className="text-muted-foreground text-lg">
                To ensure food reaches genuine organizations, we require the following:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="card-donation">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-foreground mb-4">Required Documents</h3>
                  <ul className="space-y-3">
                    {[
                      "Valid NGO/Trust registration certificate",
                      "PAN card of the organization",
                      "Address proof of operation",
                      "Contact details of authorized person",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-donation">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-foreground mb-4">Verification Process</h3>
                  <ul className="space-y-3">
                    {[
                      "Submit registration form with documents",
                      "Verification call within 24 hours",
                      "Physical verification visit (if required)",
                      "Account activation within 48 hours",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-hero-gradient rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">
              Start Receiving Food Today
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Register your organization and connect with local donors to receive free, nutritious food.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/register" className="flex items-center gap-2">
                  Register Now
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/contact" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FindFood;
