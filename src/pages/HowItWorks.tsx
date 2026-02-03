import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { 
  Building2, 
  Heart, 
  Truck, 
  CheckCircle2, 
  ArrowRight,
  ArrowDown,
  Clock,
  MapPin,
  Shield,
  Users,
  Leaf,
  BarChart3,
  Bell
} from "lucide-react";

const HowItWorks = () => {
  const mainSteps = [
    {
      step: 1,
      title: "Donors List Surplus Food",
      description: "Restaurants, hostels, households, and event organizers log into their dashboard and create a food listing with details like food type, quantity, best-before time, and pickup location.",
      icon: Building2,
      color: "bg-primary/10 text-primary",
      details: [
        "Add food type and description",
        "Specify quantity and serving size",
        "Set best-before time window",
        "Provide pickup address and timing",
      ],
    },
    {
      step: 2,
      title: "System Matches with Recipients",
      description: "Our intelligent matching system notifies nearby NGOs and shelters about available food based on their capacity, dietary preferences, and location.",
      icon: Bell,
      color: "bg-warning/10 text-warning",
      details: [
        "Real-time notifications to recipients",
        "Location-based matching",
        "Capacity and preference filtering",
        "Multiple recipients can be matched",
      ],
    },
    {
      step: 3,
      title: "Recipients Accept Donations",
      description: "NGOs and shelters review available donations and accept those that match their needs. They can also reject with a reason if it doesn't fit their requirements.",
      icon: Heart,
      color: "bg-accent/10 text-accent",
      details: [
        "View available food listings",
        "Check donor ratings and history",
        "Accept or reject with feedback",
        "Track daily capacity limits",
      ],
    },
    {
      step: 4,
      title: "Volunteers Coordinate Pickup",
      description: "Our verified volunteer network receives pickup assignments. They collect food from donors and safely transport it to the designated recipient location.",
      icon: Truck,
      color: "bg-success/10 text-success",
      details: [
        "Receive pickup assignments",
        "Navigate to donor location",
        "Verify food quality on pickup",
        "Update status in real-time",
      ],
    },
    {
      step: 5,
      title: "Food Reaches Those in Need",
      description: "Volunteers deliver the food to recipients who confirm receipt. The entire transaction is logged for transparency and impact tracking.",
      icon: CheckCircle2,
      color: "bg-primary/10 text-primary",
      details: [
        "Delivery confirmation",
        "Quality verification by recipient",
        "Transaction logged in system",
        "Impact metrics updated",
      ],
    },
  ];

  const features = [
    {
      icon: Clock,
      title: "Real-Time Tracking",
      description: "Track your donation from listing to delivery with live status updates.",
    },
    {
      icon: Shield,
      title: "Verified Network",
      description: "All donors, recipients, and volunteers are verified for safety and trust.",
    },
    {
      icon: MapPin,
      title: "Smart Matching",
      description: "AI-powered matching ensures food reaches the nearest and most suitable recipient.",
    },
    {
      icon: BarChart3,
      title: "Impact Dashboard",
      description: "See your contribution to food waste reduction and community feeding.",
    },
  ];

  const roles = [
    {
      title: "Food Donors",
      icon: Building2,
      description: "Share your surplus food",
      responsibilities: [
        "Create accurate food listings",
        "Ensure food is safe and edible",
        "Be available during pickup window",
        "Maintain food hygiene standards",
      ],
      cta: "Start Donating",
      link: "/donate-food",
    },
    {
      title: "Food Recipients",
      icon: Heart,
      description: "Receive food for your community",
      responsibilities: [
        "Maintain updated capacity information",
        "Respond to donations promptly",
        "Confirm receipt of deliveries",
        "Provide feedback on food quality",
      ],
      cta: "Find Food",
      link: "/find-food",
    },
    {
      title: "Volunteers",
      icon: Truck,
      description: "Help transport food safely",
      responsibilities: [
        "Accept pickup assignments",
        "Verify food quality on pickup",
        "Transport food safely and timely",
        "Update status at each stage",
      ],
      cta: "Join as Volunteer",
      link: "/register",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 via-transparent to-accent/5">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
              <Leaf className="w-4 h-4" />
              Our Process
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              How FoodShare Works
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A simple, transparent process that connects surplus food with those who need it most. 
              From listing to delivery, every step is designed for efficiency and trust.
            </p>
          </div>
        </div>
      </section>

      {/* Main Process Steps */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {mainSteps.map((step, index) => (
              <div key={step.step} className="relative">
                {/* Step Card */}
                <div className="flex gap-6 mb-8">
                  <div className="flex-shrink-0">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${step.color}`}>
                      <step.icon className="w-8 h-8" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-medium text-muted-foreground">Step {step.step}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                    <p className="text-muted-foreground mb-4">{step.description}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {step.details.map((detail, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0" />
                          {detail}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Connector Arrow */}
                {index < mainSteps.length - 1 && (
                  <div className="flex justify-center mb-8">
                    <ArrowDown className="w-6 h-6 text-muted-foreground/40" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Platform Features</h2>
            <p className="text-muted-foreground text-lg">
              Built with technology that makes food sharing seamless and trustworthy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="card-donation text-center">
                <CardContent className="pt-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Roles Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Your Role in the Process</h2>
            <p className="text-muted-foreground text-lg">
              Everyone has a part to play in reducing food waste and feeding communities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {roles.map((role, index) => (
              <Card key={index} className="card-donation">
                <CardContent className="pt-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                    <role.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-1">{role.title}</h3>
                  <p className="text-muted-foreground mb-4">{role.description}</p>
                  
                  <h4 className="text-sm font-medium text-foreground mb-3">Key Responsibilities:</h4>
                  <ul className="space-y-2 mb-6">
                    {role.responsibilities.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <Button className="w-full" asChild>
                    <Link to={role.link}>{role.cta}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              {[
                {
                  q: "Is the food safe to consume?",
                  a: "Yes, all donors agree to our food safety guidelines. Food must be within its best-before period and properly stored. Volunteers also verify food quality at pickup.",
                },
                {
                  q: "How quickly is food delivered?",
                  a: "Most donations are picked up and delivered within 2-4 hours of listing. Our system prioritizes time-sensitive items.",
                },
                {
                  q: "Is there any cost involved?",
                  a: "No, FoodShare is completely free for all users. Donors, recipients, and volunteers all use the platform at no cost.",
                },
                {
                  q: "How are volunteers verified?",
                  a: "All volunteers undergo ID verification and background checks before being approved. They also receive food handling training.",
                },
              ].map((faq, index) => (
                <Card key={index} className="card-donation">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                    <p className="text-muted-foreground">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-hero-gradient rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Join our community today and be part of the solution to food waste and hunger.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/register" className="flex items-center gap-2">
                  Create an Account
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorks;
