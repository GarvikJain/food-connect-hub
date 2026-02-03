import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Leaf,
  Heart,
  Package,
  Clock,
  CheckCircle2,
  XCircle,
  ChevronLeft,
  MapPin,
  Calendar,
  User,
  TrendingUp,
  AlertCircle,
} from "lucide-react";

// Mock data for assigned pickups
const mockPickups = [
  {
    id: 1,
    foodType: "Cooked Rice & Curry",
    quantity: "20 servings",
    donor: "Sunrise Restaurant",
    pickupTime: "Today, 2:00 PM",
    location: "123 Main Street, Downtown",
    status: "pending",
  },
  {
    id: 2,
    foodType: "Fresh Bread",
    quantity: "30 pieces",
    donor: "Golden Bakery",
    pickupTime: "Today, 4:00 PM",
    location: "456 Baker Street",
    status: "accepted",
  },
  {
    id: 3,
    foodType: "Vegetable Soup",
    quantity: "15 liters",
    donor: "Community Kitchen",
    pickupTime: "Yesterday, 6:00 PM",
    location: "789 Green Avenue",
    status: "received",
  },
];

const RecipientDashboard = () => {
  const [pickups, setPickups] = useState(mockPickups);
  const [rejectModal, setRejectModal] = useState<number | null>(null);
  const [rejectReason, setRejectReason] = useState("");

  const handleAccept = (id: number) => {
    setPickups(pickups.map(p => p.id === id ? { ...p, status: "accepted" } : p));
  };

  const handleReject = (id: number) => {
    setPickups(pickups.filter(p => p.id !== id));
    setRejectModal(null);
    setRejectReason("");
  };

  const stats = [
    { label: "Daily Capacity", value: "100", unit: "servings", icon: Package, progress: 65 },
    { label: "Received Today", value: "65", unit: "servings", icon: Heart, progress: 65 },
  ];

  const getStatusBadge = (status: string) => {
    const styles = {
      pending: "bg-warning/15 text-warning border-warning/30",
      accepted: "status-active",
      received: "status-completed",
    };
    const labels = {
      pending: "Pending Review",
      accepted: "Accepted",
      received: "Received",
    };
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${styles[status as keyof typeof styles]}`}>
        {labels[status as keyof typeof labels]}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <ChevronLeft className="w-5 h-5" />
                <span className="hidden sm:inline">Back</span>
              </Link>
              <div className="h-6 w-px bg-border" />
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-accent to-accent/80 rounded-xl flex items-center justify-center">
                  <Heart className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <h1 className="font-bold text-foreground">Recipient Dashboard</h1>
                  <p className="text-xs text-muted-foreground">Hope Community Shelter</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Capacity Stats */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {stats.map((stat) => (
            <div key={stat.label} className="card-donation">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-2xl font-bold text-foreground">
                      {stat.value} <span className="text-sm font-normal text-muted-foreground">{stat.unit}</span>
                    </p>
                  </div>
                </div>
                <span className="text-lg font-semibold text-primary">{stat.progress}%</span>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <div
                  className="h-full bg-hero-gradient rounded-full transition-all duration-500"
                  style={{ width: `${stat.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Info Banner */}
        <div className="bg-info/10 border border-info/20 rounded-2xl p-4 mb-8 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-info mt-0.5" />
          <div>
            <p className="font-medium text-foreground">Daily capacity tracking</p>
            <p className="text-sm text-muted-foreground">
              You've received 65 of your 100 daily serving capacity. 35 servings remaining.
            </p>
          </div>
        </div>

        {/* Pickup Requests */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Food Pickup Requests</h2>

          <div className="grid gap-4">
            {pickups.map((pickup) => (
              <div key={pickup.id} className="card-donation">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-foreground text-lg">{pickup.foodType}</h3>
                        <p className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                          <User className="w-4 h-4" />
                          {pickup.donor}
                        </p>
                      </div>
                      {getStatusBadge(pickup.status)}
                    </div>
                    <div className="grid sm:grid-cols-3 gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Package className="w-4 h-4" />
                        {pickup.quantity}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {pickup.pickupTime}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {pickup.location}
                      </div>
                    </div>
                  </div>
                  
                  {pickup.status === "pending" && (
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        onClick={() => setRejectModal(pickup.id)}
                        className="gap-2 text-destructive hover:text-destructive"
                      >
                        <XCircle className="w-4 h-4" />
                        Reject
                      </Button>
                      <Button variant="success" onClick={() => handleAccept(pickup.id)} className="gap-2">
                        <CheckCircle2 className="w-4 h-4" />
                        Accept
                      </Button>
                    </div>
                  )}
                  
                  {pickup.status === "accepted" && (
                    <Button variant="default" className="gap-2">
                      <CheckCircle2 className="w-4 h-4" />
                      Mark as Received
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reject Modal */}
        {rejectModal && (
          <div className="fixed inset-0 bg-foreground/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-card rounded-2xl p-6 max-w-md w-full shadow-elevated animate-fade-up">
              <h3 className="text-xl font-semibold text-foreground mb-4">Reject Food Pickup</h3>
              <p className="text-muted-foreground mb-4">
                Please provide a reason for rejecting this food donation.
              </p>
              <textarea
                className="input-field min-h-[100px] mb-4"
                placeholder="e.g., Capacity full, dietary restrictions, etc."
                value={rejectReason}
                onChange={(e) => setRejectReason(e.target.value)}
              />
              <div className="flex justify-end gap-3">
                <Button variant="outline" onClick={() => setRejectModal(null)}>
                  Cancel
                </Button>
                <Button variant="destructive" onClick={() => handleReject(rejectModal)}>
                  Confirm Rejection
                </Button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default RecipientDashboard;
