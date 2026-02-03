import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { 
  Leaf, 
  Heart, 
  Users, 
  Truck, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight,
  Building2,
  Home,
  Calendar
} from "lucide-react";
import heroImage from "@/assets/hero-food-sharing.jpg";

const Index = () => {
  const stats = [
    { value: "50K+", label: "Meals Shared", icon: Heart },
    { value: "200+", label: "Active Donors", icon: Building2 },
    { value: "85+", label: "Partner NGOs", icon: Users },
    { value: "30%", label: "Waste Reduced", icon: TrendingUp },
  ];

  const howItWorks = [
    {
      step: "01",
      title: "Donors List Surplus Food",
      description: "Restaurants, hostels, and households list their surplus edible food with pickup details.",
      icon: Building2,
    },
    {
      step: "02",
      title: "Recipients Accept Donations",
      description: "NGOs and shelters browse available food and accept donations matching their needs.",
      icon: Home,
    },
    {
      step: "03",
      title: "Volunteers Coordinate Pickup",
      description: "Our logistics network ensures timely pickup and safe delivery to recipients.",
      icon: Truck,
    },
  ];

  const userTypes = [
    {
      title: "Food Donors",
      description: "Restaurants, hostels, households, and event organizers with surplus food",
      icon: Building2,
      link: "/donor",
      color: "bg-primary/10 text-primary",
    },
    {
      title: "Food Recipients",
      description: "NGOs, shelters, and community kitchens serving those in need",
      icon: Heart,
      link: "/recipient",
      color: "bg-accent/10 text-accent",
    },
    {
      title: "Volunteers",
      description: "Logistics partners helping coordinate pickups and deliveries",
      icon: Truck,
      link: "/volunteer",
      color: "bg-success/10 text-success",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
                <Leaf className="w-4 h-4" />
                Sustainable Food Sharing Platform
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Reducing Food Waste,{" "}
                <span className="text-gradient-primary">Feeding Communities</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                Connect surplus food from restaurants, hostels, and households with NGOs and shelters. 
                Together, we can eliminate hunger and reduce food waste in our city.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/donor" className="flex items-center gap-2">
                    Donate Food
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <Link to="/recipient">Find Food</Link>
                </Button>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-secondary border-2 border-background flex items-center justify-center text-sm font-medium text-muted-foreground"
                    >
                      {["🍕", "🥗", "🍲", "🥘"][i - 1]}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">500+</span> meals shared this week
                </p>
              </div>
            </div>
            
            <div className="relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <div className="relative rounded-3xl overflow-hidden shadow-elevated">
                <img
                  src={heroImage}
                  alt="Community food sharing"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
              </div>
              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-4 shadow-elevated border border-border/50 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-success" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">2.5 tons</p>
                    <p className="text-sm text-muted-foreground">Food saved this month</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="stat-card text-center animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="text-3xl md:text-4xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How FoodShare Works
            </h2>
            <p className="text-muted-foreground text-lg">
              Our simple three-step process ensures surplus food reaches those who need it most.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {howItWorks.map((item, index) => (
              <div
                key={item.step}
                className="card-donation relative animate-fade-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <span className="absolute -top-4 -left-2 text-6xl font-bold text-primary/10">
                  {item.step}
                </span>
                <div className="relative">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* User Types */}
      <section id="about" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Join Our Community
            </h2>
            <p className="text-muted-foreground text-lg">
              Whether you have food to share or need food support, there's a place for you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {userTypes.map((type, index) => (
              <Link
                key={type.title}
                to={type.link}
                className="card-donation group cursor-pointer animate-fade-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className={`w-16 h-16 ${type.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <type.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {type.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">{type.description}</p>
                <div className="flex items-center gap-2 text-primary font-medium">
                  Get Started
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-hero-gradient rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Ready to Make a Difference?
              </h2>
              <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
                Join thousands of donors, recipients, and volunteers working together to create a world without food waste or hunger.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/donor" className="flex items-center gap-2">
                    Start Donating
                    <Heart className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="heroOutline" size="xl" asChild>
                  <Link to="/volunteer">Become a Volunteer</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
