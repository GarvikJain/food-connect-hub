import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Leaf, Eye, EyeOff, Building2, Heart, Truck, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent, role: string) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login delay
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Login Successful!",
        description: `Welcome back! Redirecting to your ${role} dashboard...`,
      });
      
      // Navigate based on role
      const routes: Record<string, string> = {
        donor: "/donor",
        recipient: "/recipient",
        volunteer: "/volunteer",
        admin: "/admin",
      };
      navigate(routes[role] || "/");
    }, 1000);
  };

  const roleInfo = [
    {
      id: "donor",
      title: "Food Donor",
      icon: Building2,
      description: "Restaurants, hostels, households, and event organizers",
      color: "text-primary",
    },
    {
      id: "recipient",
      title: "Food Recipient",
      icon: Heart,
      description: "NGOs, shelters, and community kitchens",
      color: "text-accent",
    },
    {
      id: "volunteer",
      title: "Volunteer",
      icon: Truck,
      description: "Logistics partners for pickup and delivery",
      color: "text-success",
    },
    {
      id: "admin",
      title: "Admin",
      icon: Shield,
      description: "Platform administrators and coordinators",
      color: "text-warning",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-hero-gradient rounded-2xl mb-4">
                <Leaf className="w-8 h-8 text-primary-foreground" />
              </div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Welcome Back</h1>
              <p className="text-muted-foreground">
                Sign in to your FoodShare account to continue making a difference.
              </p>
            </div>

            {/* Login Tabs */}
            <Card className="shadow-elevated border-border/50">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl">Sign In</CardTitle>
                <CardDescription>
                  Choose your role and enter your credentials
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="donor" className="w-full">
                  <TabsList className="grid grid-cols-4 mb-6">
                    {roleInfo.map((role) => (
                      <TabsTrigger key={role.id} value={role.id} className="text-xs">
                        <role.icon className="w-4 h-4 mr-1 hidden sm:inline" />
                        {role.title.split(" ")[0]}
                      </TabsTrigger>
                    ))}
                  </TabsList>

                  {roleInfo.map((role) => (
                    <TabsContent key={role.id} value={role.id}>
                      <form onSubmit={(e) => handleLogin(e, role.id)} className="space-y-4">
                        <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg mb-6">
                          <div className={`w-10 h-10 rounded-lg bg-background flex items-center justify-center ${role.color}`}>
                            <role.icon className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="font-medium text-foreground text-sm">{role.title}</p>
                            <p className="text-xs text-muted-foreground">{role.description}</p>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor={`${role.id}-email`}>Email Address</Label>
                          <Input
                            id={`${role.id}-email`}
                            type="email"
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <Label htmlFor={`${role.id}-password`}>Password</Label>
                            <Link to="/forgot-password" className="text-xs text-primary hover:underline">
                              Forgot password?
                            </Link>
                          </div>
                          <div className="relative">
                            <Input
                              id={`${role.id}-password`}
                              type={showPassword ? "text" : "password"}
                              placeholder="Enter your password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
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

                        <Button type="submit" className="w-full" disabled={isLoading}>
                          {isLoading ? "Signing in..." : `Sign in as ${role.title}`}
                        </Button>
                      </form>
                    </TabsContent>
                  ))}
                </Tabs>

                <div className="mt-6 pt-6 border-t border-border text-center">
                  <p className="text-sm text-muted-foreground">
                    Don't have an account?{" "}
                    <Link to="/register" className="text-primary font-medium hover:underline">
                      Create an account
                    </Link>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Login;
