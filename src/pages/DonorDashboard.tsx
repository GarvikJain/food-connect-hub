import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Leaf,
  Plus,
  Package,
  Clock,
  CheckCircle2,
  TrendingUp,
  Trash2,
  MapPin,
  Calendar,
  ChevronLeft,
  Edit,
  Eye,
} from "lucide-react";

// Mock data for food listings
const mockListings = [
  {
    id: 1,
    foodType: "Cooked Rice & Curry",
    quantity: "20 servings",
    bestBefore: "2024-01-15 18:00",
    location: "123 Main Street, Downtown",
    status: "active",
    createdAt: "2024-01-15 10:30",
  },
  {
    id: 2,
    foodType: "Fresh Vegetables",
    quantity: "15 kg",
    bestBefore: "2024-01-16 12:00",
    location: "456 Green Avenue",
    status: "picked",
    createdAt: "2024-01-14 14:00",
  },
  {
    id: 3,
    foodType: "Bread & Pastries",
    quantity: "50 pieces",
    bestBefore: "2024-01-15 20:00",
    location: "789 Baker Street",
    status: "completed",
    createdAt: "2024-01-13 09:00",
  },
];

const DonorDashboard = () => {
  const [showForm, setShowForm] = useState(false);
  const [listings, setListings] = useState(mockListings);
  const [formData, setFormData] = useState({
    foodType: "",
    quantity: "",
    bestBefore: "",
    location: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newListing = {
      id: listings.length + 1,
      ...formData,
      status: "active",
      createdAt: new Date().toISOString(),
    };
    setListings([newListing, ...listings]);
    setFormData({ foodType: "", quantity: "", bestBefore: "", location: "" });
    setShowForm(false);
  };

  const stats = [
    { label: "Total Donated", value: "125 kg", icon: Package, color: "text-primary" },
    { label: "Active Listings", value: "3", icon: Clock, color: "text-warning" },
    { label: "Completed", value: "28", icon: CheckCircle2, color: "text-success" },
    { label: "Waste Prevented", value: "18 kg", icon: TrendingUp, color: "text-accent" },
  ];

  const getStatusBadge = (status: string) => {
    const styles = {
      active: "status-active",
      picked: "bg-info/15 text-info border-info/30",
      completed: "status-completed",
    };
    const labels = {
      active: "Active",
      picked: "Being Picked Up",
      completed: "Completed",
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
                <div className="w-10 h-10 bg-hero-gradient rounded-xl flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="font-bold text-foreground">Donor Dashboard</h1>
                  <p className="text-xs text-muted-foreground">Sunrise Restaurant</p>
                </div>
              </div>
            </div>
            <Button variant="default" onClick={() => setShowForm(true)} className="gap-2">
              <Plus className="w-4 h-4" />
              <span className="hidden sm:inline">New Listing</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-card">
              <stat.icon className={`w-6 h-6 ${stat.color} mb-2`} />
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* New Listing Form */}
        {showForm && (
          <div className="card-donation mb-8 animate-fade-up">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-foreground">Create Food Listing</h2>
              <button
                onClick={() => setShowForm(false)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                ✕
              </button>
            </div>
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Food Type</label>
                <input
                  type="text"
                  placeholder="e.g., Cooked Rice, Fresh Vegetables"
                  className="input-field"
                  value={formData.foodType}
                  onChange={(e) => setFormData({ ...formData, foodType: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Quantity</label>
                <input
                  type="text"
                  placeholder="e.g., 20 servings, 15 kg"
                  className="input-field"
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Best Before</label>
                <input
                  type="datetime-local"
                  className="input-field"
                  value={formData.bestBefore}
                  onChange={(e) => setFormData({ ...formData, bestBefore: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Pickup Location</label>
                <input
                  type="text"
                  placeholder="Full address for pickup"
                  className="input-field"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  required
                />
              </div>
              <div className="md:col-span-2 flex justify-end gap-3 mt-2">
                <Button type="button" variant="outline" onClick={() => setShowForm(false)}>
                  Cancel
                </Button>
                <Button type="submit" variant="default">
                  Create Listing
                </Button>
              </div>
            </form>
          </div>
        )}

        {/* Listings */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-foreground">Your Food Listings</h2>
            <div className="flex gap-2">
              <button className="px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-lg">
                All
              </button>
              <button className="px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary rounded-lg transition-colors">
                Active
              </button>
              <button className="px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary rounded-lg transition-colors">
                Completed
              </button>
            </div>
          </div>

          <div className="grid gap-4">
            {listings.map((listing) => (
              <div key={listing.id} className="card-donation">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-foreground text-lg">{listing.foodType}</h3>
                      {getStatusBadge(listing.status)}
                    </div>
                    <div className="grid sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Package className="w-4 h-4" />
                        {listing.quantity}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        Best before: {listing.bestBefore}
                      </div>
                      <div className="flex items-center gap-2 sm:col-span-2">
                        <MapPin className="w-4 h-4" />
                        {listing.location}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="text-muted-foreground">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-muted-foreground">
                      <Edit className="w-4 h-4" />
                    </Button>
                    {listing.status === "active" && (
                      <Button variant="ghost" size="icon" className="text-destructive">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default DonorDashboard;
