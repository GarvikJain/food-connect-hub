import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Leaf, Eye, EyeOff, Building2, Heart, Truck, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleRegister = async (e: React.FormEvent, role: string) => {
    e.preventDefault();
    if (!agreed) {
      toast({
        title: "Terms Required",
        description: "Please agree to the terms and conditions to continue.",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Registration Successful!",
        description: "Your account has been created. Redirecting to login...",
      });
      navigate("/login");
    }, 1500);
  };

  const benefits = [
    "Track your impact with detailed analytics",
    "Connect with verified partners in your area",
    "Real-time notifications for new opportunities",
    "24/7 support from our dedicated team",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            {/* Left Column - Info */}
            <div className="lg:sticky lg:top-28">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-hero-gradient rounded-2xl mb-6">
                <Leaf className="w-8 h-8 text-primary-foreground" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Join the FoodShare Community
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Be part of a movement that's reducing food waste and feeding communities across the city.
              </p>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">{benefit}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-secondary/50 rounded-xl">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Already registered?</span>{" "}
                  <Link to="/login" className="text-primary hover:underline">
                    Sign in to your account
                  </Link>
                </p>
              </div>
            </div>

            {/* Right Column - Form */}
            <Card className="shadow-elevated border-border/50">
              <CardHeader>
                <CardTitle className="text-xl">Create Your Account</CardTitle>
                <CardDescription>
                  Choose your role to get started
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="donor" className="w-full">
                  <TabsList className="grid grid-cols-3 mb-6">
                    <TabsTrigger value="donor" className="text-xs sm:text-sm">
                      <Building2 className="w-4 h-4 mr-1 hidden sm:inline" />
                      Donor
                    </TabsTrigger>
                    <TabsTrigger value="recipient" className="text-xs sm:text-sm">
                      <Heart className="w-4 h-4 mr-1 hidden sm:inline" />
                      Recipient
                    </TabsTrigger>
                    <TabsTrigger value="volunteer" className="text-xs sm:text-sm">
                      <Truck className="w-4 h-4 mr-1 hidden sm:inline" />
                      Volunteer
                    </TabsTrigger>
                  </TabsList>

                  {/* Donor Registration */}
                  <TabsContent value="donor">
                    <form onSubmit={(e) => handleRegister(e, "donor")} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="donor-firstname">First Name</Label>
                          <Input id="donor-firstname" placeholder="John" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="donor-lastname">Last Name</Label>
                          <Input id="donor-lastname" placeholder="Doe" required />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="donor-org">Organization Name</Label>
                        <Input id="donor-org" placeholder="Restaurant / Hostel / Company name" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="donor-type">Donor Type</Label>
                        <select id="donor-type" className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm" required>
                          <option value="">Select type...</option>
                          <option value="restaurant">Restaurant</option>
                          <option value="hostel">Hostel / Hotel</option>
                          <option value="household">Household</option>
                          <option value="event">Event Organizer</option>
                          <option value="corporate">Corporate Cafeteria</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="donor-email">Email Address</Label>
                        <Input id="donor-email" type="email" placeholder="you@organization.com" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="donor-phone">Phone Number</Label>
                        <Input id="donor-phone" type="tel" placeholder="+91 98765 43210" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="donor-address">Pickup Address</Label>
                        <Textarea id="donor-address" placeholder="Full address for food pickup" rows={2} required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="donor-password">Create Password</Label>
                        <div className="relative">
                          <Input
                            id="donor-password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Min. 8 characters"
                            required
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                          >
                            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </button>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <Checkbox id="donor-terms" checked={agreed} onCheckedChange={(checked) => setAgreed(checked === true)} />
                        <label htmlFor="donor-terms" className="text-sm text-muted-foreground leading-tight">
                          I agree to the{" "}
                          <Link to="/terms" className="text-primary hover:underline">Terms of Service</Link>
                          {" "}and{" "}
                          <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
                        </label>
                      </div>

                      <Button type="submit" className="w-full" disabled={isLoading}>
                        {isLoading ? "Creating account..." : "Register as Food Donor"}
                      </Button>
                    </form>
                  </TabsContent>

                  {/* Recipient Registration */}
                  <TabsContent value="recipient">
                    <form onSubmit={(e) => handleRegister(e, "recipient")} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="recipient-org">Organization Name</Label>
                        <Input id="recipient-org" placeholder="NGO / Shelter name" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="recipient-type">Organization Type</Label>
                        <select id="recipient-type" className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm" required>
                          <option value="">Select type...</option>
                          <option value="ngo">NGO</option>
                          <option value="shelter">Homeless Shelter</option>
                          <option value="kitchen">Community Kitchen</option>
                          <option value="orphanage">Orphanage</option>
                          <option value="oldage">Old Age Home</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="recipient-registration">Registration Number</Label>
                        <Input id="recipient-registration" placeholder="NGO/Trust registration number" required />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="recipient-contact">Contact Person</Label>
                          <Input id="recipient-contact" placeholder="Full name" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="recipient-capacity">Daily Capacity</Label>
                          <Input id="recipient-capacity" type="number" placeholder="e.g., 100" required />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="recipient-email">Email Address</Label>
                        <Input id="recipient-email" type="email" placeholder="contact@organization.org" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="recipient-phone">Phone Number</Label>
                        <Input id="recipient-phone" type="tel" placeholder="+91 98765 43210" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="recipient-address">Delivery Address</Label>
                        <Textarea id="recipient-address" placeholder="Full address for food delivery" rows={2} required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="recipient-password">Create Password</Label>
                        <div className="relative">
                          <Input
                            id="recipient-password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Min. 8 characters"
                            required
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                          >
                            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </button>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <Checkbox id="recipient-terms" checked={agreed} onCheckedChange={(checked) => setAgreed(checked === true)} />
                        <label htmlFor="recipient-terms" className="text-sm text-muted-foreground leading-tight">
                          I agree to the{" "}
                          <Link to="/terms" className="text-primary hover:underline">Terms of Service</Link>
                          {" "}and{" "}
                          <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
                        </label>
                      </div>

                      <Button type="submit" className="w-full" disabled={isLoading}>
                        {isLoading ? "Creating account..." : "Register as Food Recipient"}
                      </Button>
                    </form>
                  </TabsContent>

                  {/* Volunteer Registration */}
                  <TabsContent value="volunteer">
                    <form onSubmit={(e) => handleRegister(e, "volunteer")} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="volunteer-firstname">First Name</Label>
                          <Input id="volunteer-firstname" placeholder="John" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="volunteer-lastname">Last Name</Label>
                          <Input id="volunteer-lastname" placeholder="Doe" required />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="volunteer-email">Email Address</Label>
                        <Input id="volunteer-email" type="email" placeholder="you@email.com" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="volunteer-phone">Phone Number</Label>
                        <Input id="volunteer-phone" type="tel" placeholder="+91 98765 43210" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="volunteer-vehicle">Vehicle Type</Label>
                        <select id="volunteer-vehicle" className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm" required>
                          <option value="">Select vehicle...</option>
                          <option value="bike">Two-Wheeler (Bike/Scooter)</option>
                          <option value="car">Car</option>
                          <option value="van">Van / Mini Truck</option>
                          <option value="bicycle">Bicycle</option>
                          <option value="none">No Vehicle (Walking)</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="volunteer-area">Preferred Service Area</Label>
                        <Input id="volunteer-area" placeholder="e.g., Downtown, North City" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="volunteer-availability">Availability</Label>
                        <select id="volunteer-availability" className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm" required>
                          <option value="">Select availability...</option>
                          <option value="weekdays">Weekdays only</option>
                          <option value="weekends">Weekends only</option>
                          <option value="flexible">Flexible / Anytime</option>
                          <option value="evenings">Evenings only</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="volunteer-password">Create Password</Label>
                        <div className="relative">
                          <Input
                            id="volunteer-password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Min. 8 characters"
                            required
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                          >
                            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </button>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <Checkbox id="volunteer-terms" checked={agreed} onCheckedChange={(checked) => setAgreed(checked === true)} />
                        <label htmlFor="volunteer-terms" className="text-sm text-muted-foreground leading-tight">
                          I agree to the{" "}
                          <Link to="/terms" className="text-primary hover:underline">Terms of Service</Link>
                          {" "}and{" "}
                          <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
                        </label>
                      </div>

                      <Button type="submit" className="w-full" disabled={isLoading}>
                        {isLoading ? "Creating account..." : "Register as Volunteer"}
                      </Button>
                    </form>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Register;
