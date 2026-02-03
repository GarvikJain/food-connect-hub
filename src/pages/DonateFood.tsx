import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { 
  Gift, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  Leaf, 
  Heart,
  TrendingUp,
  Users,
  Building2,
  Home,
  Calendar,
  Star
} from "lucide-react";
import heroImage from "@/assets/hero-food-sharing.jpg";

const DonateFood = () => {
  const donorTypes = [
    {
      icon: Building2,
      title: "Restaurants & Cafes",
      description: "Surplus prepared meals, fresh ingredients, and buffet leftovers",
    },
    {
      icon: Home,
      title: "Households",
      description: "Home-cooked meals, groceries, and celebration leftovers",
    },
    {
      icon: Calendar,
      title: "Event Organizers",
      description: "Wedding meals, corporate event food, party catering",
    },
    {
      icon: Building2,
      title: "Hostels & Hotels",
      description: "Canteen surplus, breakfast buffets, and guest meal leftovers",
    },
  ];

  const steps = [
    {
      number: "1",
      title: "Create an Account",
      description: "Sign up as a food donor with your organization details and pickup location.",
    },
    {
      number: "2",
      title: "List Your Surplus Food",
      description: "Add food details including type, quantity, best-before time, and pickup window.",
    },
    {
      number: "3",
      title: "Get Matched",
      description: "Our system matches your donation with nearby NGOs and shelters in need.",
    },
    {
      number: "4",
      title: "Volunteer Pickup",
      description: "A verified volunteer picks up the food and delivers it to the recipient.",
    },
  ];

  const benefits = [
    { icon: Heart, title: "Feed the Hungry", description: "Your surplus food reaches people who need it most" },
    { icon: Leaf, title: "Reduce Waste", description: "Prevent good food from ending up in landfills" },
    { icon: TrendingUp, title: "Track Impact", description: "See real-time metrics of your contributions" },
    { icon: Star, title: "Get Recognized", description: "Earn badges and certificates for your donations" },
  ];

  const testimonials = [
    {
      quote: "We used to throw away 20kg of food daily. Now it feeds 50+ people every night.",
      author: "Raj Kumar",
      role: "Restaurant Owner",
    },
    {
      quote: "The pickup process is seamless. Volunteers arrive on time and handle everything professionally.",
      author: "Priya Sharma",
      role: "Event Manager",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
                <Gift className="w-4 h-4" />
                Become a Food Donor
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Turn Surplus Food Into{" "}
                <span className="text-gradient-primary">Hope for Others</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                Every meal you donate saves a family from hunger. Join hundreds of donors across the city 
                who are making a real difference by sharing their surplus food.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/register" className="flex items-center gap-2">
                    Start Donating Today
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <Link to="/login">Already a Donor? Login</Link>
                </Button>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground">200+</p>
                  <p className="text-sm text-muted-foreground">Active Donors</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground">50K+</p>
                  <p className="text-sm text-muted-foreground">Meals Shared</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground">2.5 tons</p>
                  <p className="text-sm text-muted-foreground">Food Saved</p>
                </div>
              </div>
            </div>
            
            <div className="relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <div className="relative rounded-3xl overflow-hidden shadow-elevated">
                <img
                  src={heroImage}
                  alt="Food donation"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Can Donate */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Who Can Donate?</h2>
            <p className="text-muted-foreground text-lg">
              Anyone with surplus edible food can become a donor and help feed the community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {donorTypes.map((type, index) => (
              <Card key={index} className="text-center card-donation">
                <CardContent className="pt-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <type.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{type.title}</h3>
                  <p className="text-sm text-muted-foreground">{type.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">How Donation Works</h2>
            <p className="text-muted-foreground text-lg">
              Simple 4-step process to donate your surplus food and make an impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-bold text-primary/10 absolute -top-4 -left-2">{step.number}</div>
                <div className="relative pt-8">
                  <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold mb-4">
                    {step.number}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-border -translate-x-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Donate With Us?</h2>
            <p className="text-muted-foreground text-lg">
              Join a trusted platform that makes food donation easy, impactful, and rewarding.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="card-donation">
                <CardContent className="pt-6">
                  <benefit.icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">What Donors Say</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-donation">
                <CardContent className="pt-6">
                  <p className="text-lg text-foreground italic mb-4">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-semibold">
                      {testimonial.author[0]}
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-hero-gradient rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">
              Ready to Make a Difference?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Start donating today and join the movement to eliminate food waste and hunger in our city.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/register" className="flex items-center gap-2">
                Register as a Donor
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DonateFood;
