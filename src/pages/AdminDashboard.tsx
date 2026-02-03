import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Leaf,
  Shield,
  Users,
  Building2,
  Heart,
  Truck,
  Package,
  TrendingUp,
  TrendingDown,
  ChevronLeft,
  Calendar,
  Download,
  Bell,
  Search,
} from "lucide-react";

// Mock data
const mockSummary = {
  donors: 234,
  recipients: 89,
  volunteers: 156,
  totalTransactions: 1847,
  foodSaved: "12.5 tons",
  wasteReduction: "32%",
};

const mockRecentTransactions = [
  {
    id: 1,
    donor: "Sunrise Restaurant",
    recipient: "Hope Shelter",
    food: "Rice & Curry",
    quantity: "20 servings",
    status: "delivered",
    date: "Today, 2:30 PM",
  },
  {
    id: 2,
    donor: "Golden Bakery",
    recipient: "Community Kitchen",
    food: "Fresh Bread",
    quantity: "50 pieces",
    status: "in_transit",
    date: "Today, 1:45 PM",
  },
  {
    id: 3,
    donor: "Hotel Grand",
    recipient: "Elder Care",
    food: "Lunch Buffet",
    quantity: "35 servings",
    status: "pending",
    date: "Today, 12:00 PM",
  },
  {
    id: 4,
    donor: "Campus Hostel",
    recipient: "Street Kitchen",
    food: "Vegetables",
    quantity: "25 kg",
    status: "delivered",
    date: "Yesterday",
  },
];

const mockCampaigns = [
  { name: "World Food Day Drive", participants: 45, status: "active" },
  { name: "Zero Waste Week", participants: 128, status: "completed" },
  { name: "Holiday Giving", participants: 23, status: "upcoming" },
];

const AdminDashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const getStatusBadge = (status: string) => {
    const styles = {
      pending: "bg-warning/15 text-warning border-warning/30",
      in_transit: "bg-info/15 text-info border-info/30",
      delivered: "status-active",
    };
    const labels = {
      pending: "Pending",
      in_transit: "In Transit",
      delivered: "Delivered",
    };
    return (
      <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${styles[status as keyof typeof styles]}`}>
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
                <div className="w-10 h-10 bg-gradient-to-br from-foreground to-foreground/80 rounded-xl flex items-center justify-center">
                  <Shield className="w-5 h-5 text-background" />
                </div>
                <div>
                  <h1 className="font-bold text-foreground">Admin Dashboard</h1>
                  <p className="text-xs text-muted-foreground">System Overview</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="icon">
                <Bell className="w-4 h-4" />
              </Button>
              <Button variant="outline" className="gap-2">
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Export</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
          <div className="stat-card">
            <Building2 className="w-5 h-5 text-primary mb-2" />
            <p className="text-2xl font-bold text-foreground">{mockSummary.donors}</p>
            <p className="text-xs text-muted-foreground">Donors</p>
          </div>
          <div className="stat-card">
            <Heart className="w-5 h-5 text-accent mb-2" />
            <p className="text-2xl font-bold text-foreground">{mockSummary.recipients}</p>
            <p className="text-xs text-muted-foreground">Recipients</p>
          </div>
          <div className="stat-card">
            <Truck className="w-5 h-5 text-success mb-2" />
            <p className="text-2xl font-bold text-foreground">{mockSummary.volunteers}</p>
            <p className="text-xs text-muted-foreground">Volunteers</p>
          </div>
          <div className="stat-card">
            <Package className="w-5 h-5 text-info mb-2" />
            <p className="text-2xl font-bold text-foreground">{mockSummary.totalTransactions}</p>
            <p className="text-xs text-muted-foreground">Transactions</p>
          </div>
          <div className="stat-card">
            <TrendingUp className="w-5 h-5 text-primary mb-2" />
            <p className="text-2xl font-bold text-foreground">{mockSummary.foodSaved}</p>
            <p className="text-xs text-muted-foreground">Food Saved</p>
          </div>
          <div className="stat-card">
            <TrendingDown className="w-5 h-5 text-success mb-2" />
            <p className="text-2xl font-bold text-foreground">{mockSummary.wasteReduction}</p>
            <p className="text-xs text-muted-foreground">Waste Reduced</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Transactions */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-foreground">Recent Transactions</h2>
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-9 pr-4 py-2 text-sm border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <div className="card-donation overflow-hidden p-0">
              <table className="w-full">
                <thead className="bg-secondary/50">
                  <tr>
                    <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-4 py-3">
                      Transaction
                    </th>
                    <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-4 py-3 hidden md:table-cell">
                      Food
                    </th>
                    <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-4 py-3">
                      Status
                    </th>
                    <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-4 py-3 hidden sm:table-cell">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {mockRecentTransactions.map((tx) => (
                    <tr key={tx.id} className="hover:bg-secondary/30 transition-colors">
                      <td className="px-4 py-4">
                        <div>
                          <p className="font-medium text-foreground text-sm">{tx.donor}</p>
                          <p className="text-xs text-muted-foreground">→ {tx.recipient}</p>
                        </div>
                      </td>
                      <td className="px-4 py-4 hidden md:table-cell">
                        <div>
                          <p className="text-sm text-foreground">{tx.food}</p>
                          <p className="text-xs text-muted-foreground">{tx.quantity}</p>
                        </div>
                      </td>
                      <td className="px-4 py-4">{getStatusBadge(tx.status)}</td>
                      <td className="px-4 py-4 text-sm text-muted-foreground hidden sm:table-cell">
                        {tx.date}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Awareness Campaigns */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">Awareness Campaigns</h2>
              <div className="space-y-3">
                {mockCampaigns.map((campaign) => (
                  <div key={campaign.name} className="card-donation">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-foreground text-sm">{campaign.name}</h4>
                      <span
                        className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                          campaign.status === "active"
                            ? "bg-success/15 text-success"
                            : campaign.status === "upcoming"
                            ? "bg-warning/15 text-warning"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {campaign.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="w-4 h-4" />
                      {campaign.participants} participants
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Monthly Summary */}
            <div className="card-donation">
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-foreground">Monthly Summary</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Food Collected</span>
                  <span className="font-medium text-foreground">4.2 tons</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Meals Served</span>
                  <span className="font-medium text-foreground">8,420</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">New Donors</span>
                  <span className="font-medium text-foreground">+23</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">CO₂ Saved</span>
                  <span className="font-medium text-success">2.1 tons</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
