import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { 
  Leaf, 
  Heart, 
  Users, 
  Target,
  Eye,
  Award,
  Globe,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Mail,
  Phone,
  MapPin
} from "lucide-react";

const About = () => {
  const stats = [
    { value: "50K+", label: "Meals Shared" },
    { value: "200+", label: "Active Donors" },
    { value: "85+", label: "Partner NGOs" },
    { value: "150+", label: "Volunteers" },
  ];

  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "We believe every person deserves access to nutritious food. Our work is driven by empathy for those facing food insecurity.",
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "We're committed to reducing food waste and its environmental impact, creating a more sustainable food ecosystem.",
    },
    {
      icon: Users,
      title: "Community",
      description: "We bring together donors, recipients, and volunteers to create a network of caring individuals and organizations.",
    },
    {
      icon: Award,
      title: "Transparency",
      description: "Every donation is tracked and reported. We believe in complete transparency about where food goes and its impact.",
    },
  ];

  const team = [
    {
      name: "Dr. Ananya Sharma",
      role: "Founder & CEO",
      bio: "Former food policy researcher with 10+ years in community development",
    },
    {
      name: "Rahul Mehta",
      role: "Head of Operations",
      bio: "Logistics expert with experience in NGO supply chain management",
    },
    {
      name: "Priya Patel",
      role: "Community Manager",
      bio: "Social worker dedicated to connecting communities with resources",
    },
    {
      name: "Arjun Kumar",
      role: "Technology Lead",
      bio: "Software engineer passionate about tech for social good",
    },
  ];

  const milestones = [
    { year: "2021", title: "FoodShare Founded", description: "Started with 5 donors and 3 NGOs in one neighborhood" },
    { year: "2022", title: "City-Wide Expansion", description: "Expanded to cover all major areas of the city" },
    { year: "2023", title: "50K Meals Milestone", description: "Celebrated sharing 50,000 meals with the community" },
    { year: "2024", title: "Volunteer Network", description: "Built a network of 150+ active volunteers" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 via-transparent to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
              <Leaf className="w-4 h-4" />
              About FoodShare
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Mission to End Hunger and Food Waste
            </h1>
            <p className="text-lg text-muted-foreground">
              FoodShare is a city-wide platform connecting surplus food from donors with communities in need. 
              We believe that no good food should go to waste while people go hungry.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <Card className="card-donation">
              <CardContent className="pt-6">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To create an efficient, technology-driven platform that connects surplus food from 
                  restaurants, households, and organizations with NGOs and shelters serving those in need. 
                  We aim to reduce food waste by 50% while ensuring no one in our city goes hungry.
                </p>
              </CardContent>
            </Card>

            <Card className="card-donation">
              <CardContent className="pt-6">
                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-4">
                  <Eye className="w-7 h-7 text-accent" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  A world where surplus food is never wasted and every person has access to nutritious meals. 
                  We envision communities where food sharing is normalized, sustainable practices are celebrated, 
                  and technology bridges the gap between abundance and need.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-muted-foreground text-lg">
              The principles that guide everything we do at FoodShare.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="card-donation text-center">
                <CardContent className="pt-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story / Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Journey</h2>
            <p className="text-muted-foreground text-lg">
              From a small neighborhood initiative to a city-wide movement.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />
              
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex gap-6 pb-8">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center font-bold z-10">
                    {milestone.year}
                  </div>
                  <div className="pt-2">
                    <h3 className="font-semibold text-foreground mb-1">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Team</h2>
            <p className="text-muted-foreground text-lg">
              Dedicated individuals working together to make food sharing a reality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="card-donation text-center">
                <CardContent className="pt-6">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-primary">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="font-semibold text-foreground">{member.name}</h3>
                  <p className="text-sm text-primary mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Impact</h2>
              <p className="text-muted-foreground text-lg">
                Together, we're making a measurable difference in our community.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="card-donation text-center">
                <CardContent className="pt-6">
                  <TrendingUp className="w-10 h-10 text-success mx-auto mb-4" />
                  <p className="text-3xl font-bold text-foreground mb-2">2.5 tons</p>
                  <p className="text-muted-foreground">Food saved from waste this month</p>
                </CardContent>
              </Card>
              
              <Card className="card-donation text-center">
                <CardContent className="pt-6">
                  <Globe className="w-10 h-10 text-primary mx-auto mb-4" />
                  <p className="text-3xl font-bold text-foreground mb-2">5,000 kg</p>
                  <p className="text-muted-foreground">CO₂ emissions prevented</p>
                </CardContent>
              </Card>
              
              <Card className="card-donation text-center">
                <CardContent className="pt-6">
                  <Heart className="w-10 h-10 text-accent mx-auto mb-4" />
                  <p className="text-3xl font-bold text-foreground mb-2">10,000+</p>
                  <p className="text-muted-foreground">People fed every month</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Get in Touch</h2>
              <p className="text-muted-foreground text-lg">
                Have questions? We'd love to hear from you.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="card-donation text-center">
                <CardContent className="pt-6">
                  <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-medium text-foreground mb-1">Email Us</h3>
                  <p className="text-sm text-muted-foreground">hello@foodshare.org</p>
                </CardContent>
              </Card>
              
              <Card className="card-donation text-center">
                <CardContent className="pt-6">
                  <Phone className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-medium text-foreground mb-1">Call Us</h3>
                  <p className="text-sm text-muted-foreground">+91 98765 43210</p>
                </CardContent>
              </Card>
              
              <Card className="card-donation text-center">
                <CardContent className="pt-6">
                  <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-medium text-foreground mb-1">Visit Us</h3>
                  <p className="text-sm text-muted-foreground">123 Green Street, City</p>
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
              Join Our Mission
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Whether you want to donate food, receive support, or volunteer your time, there's a place for you in our community.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/register" className="flex items-center gap-2">
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/how-it-works">Learn How It Works</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
