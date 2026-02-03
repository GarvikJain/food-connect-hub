import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Leaf,
  Truck,
  Package,
  Clock,
  CheckCircle2,
  ChevronLeft,
  MapPin,
  User,
  Navigation,
  Phone,
  ArrowRight,
} from "lucide-react";

// Mock data for assigned pickups
const mockAssignments = [
  {
    id: 1,
    foodType: "Cooked Rice & Curry",
    quantity: "20 servings",
    donor: {
      name: "Sunrise Restaurant",
      address: "123 Main Street, Downtown",
      phone: "+1 555-0123",
    },
    recipient: {
      name: "Hope Community Shelter",
      address: "789 Shelter Lane",
      phone: "+1 555-0456",
    },
    pickupTime: "2:00 PM - 3:00 PM",
    status: "pending",
  },
  {
    id: 2,
    foodType: "Fresh Bread",
    quantity: "30 pieces",
    donor: {
      name: "Golden Bakery",
      address: "456 Baker Street",
      phone: "+1 555-0789",
    },
    recipient: {
      name: "Community Kitchen",
      address: "321 Kitchen Road",
      phone: "+1 555-0321",
    },
    pickupTime: "4:00 PM - 5:00 PM",
    status: "picked",
  },
  {
    id: 3,
    foodType: "Vegetable Soup",
    quantity: "15 liters",
    donor: {
      name: "Community Kitchen",
      address: "789 Green Avenue",
      phone: "+1 555-0654",
    },
    recipient: {
      name: "Elder Care Home",
      address: "555 Care Street",
      phone: "+1 555-0987",
    },
    pickupTime: "Yesterday",
    status: "delivered",
  },
];

const VolunteerDashboard = () => {
  const [assignments, setAssignments] = useState(mockAssignments);

  const updateStatus = (id: number, newStatus: string) => {
    setAssignments(assignments.map(a => a.id === id ? { ...a, status: newStatus } : a));
  };

  const getStatusInfo = (status: string) => {
    const info = {
      pending: {
        badge: "bg-warning/15 text-warning border-warning/30",
        label: "Pending Pickup",
        nextAction: "Mark as Picked Up",
        nextStatus: "picked",
      },
      picked: {
        badge: "bg-info/15 text-info border-info/30",
        label: "In Transit",
        nextAction: "Mark as Delivered",
        nextStatus: "delivered",
      },
      delivered: {
        badge: "status-completed",
        label: "Delivered",
        nextAction: null,
        nextStatus: null,
      },
    };
    return info[status as keyof typeof info];
  };

  const stats = {
    pending: assignments.filter(a => a.status === "pending").length,
    inTransit: assignments.filter(a => a.status === "picked").length,
    delivered: assignments.filter(a => a.status === "delivered").length,
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
                <div className="w-10 h-10 bg-gradient-to-br from-success to-success/80 rounded-xl flex items-center justify-center">
                  <Truck className="w-5 h-5 text-success-foreground" />
                </div>
                <div>
                  <h1 className="font-bold text-foreground">Volunteer Dashboard</h1>
                  <p className="text-xs text-muted-foreground">John Doe</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Status Summary */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="stat-card text-center">
            <Clock className="w-6 h-6 text-warning mx-auto mb-2" />
            <p className="text-2xl font-bold text-foreground">{stats.pending}</p>
            <p className="text-sm text-muted-foreground">Pending</p>
          </div>
          <div className="stat-card text-center">
            <Truck className="w-6 h-6 text-info mx-auto mb-2" />
            <p className="text-2xl font-bold text-foreground">{stats.inTransit}</p>
            <p className="text-sm text-muted-foreground">In Transit</p>
          </div>
          <div className="stat-card text-center">
            <CheckCircle2 className="w-6 h-6 text-success mx-auto mb-2" />
            <p className="text-2xl font-bold text-foreground">{stats.delivered}</p>
            <p className="text-sm text-muted-foreground">Delivered</p>
          </div>
        </div>

        {/* Assignments */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Your Pickup Assignments</h2>

          <div className="grid gap-4">
            {assignments.map((assignment) => {
              const statusInfo = getStatusInfo(assignment.status);
              return (
                <div key={assignment.id} className="card-donation">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-foreground text-lg">{assignment.foodType}</h3>
                      <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Package className="w-4 h-4" />
                          {assignment.quantity}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {assignment.pickupTime}
                        </span>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${statusInfo.badge}`}>
                      {statusInfo.label}
                    </span>
                  </div>

                  {/* Route Info */}
                  <div className="bg-secondary/50 rounded-xl p-4 mb-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      {/* Pickup */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm font-medium text-primary">
                          <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                            <span className="text-xs">A</span>
                          </div>
                          PICKUP FROM
                        </div>
                        <div className="pl-8 space-y-1">
                          <p className="font-medium text-foreground">{assignment.donor.name}</p>
                          <p className="text-sm text-muted-foreground flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {assignment.donor.address}
                          </p>
                          <p className="text-sm text-muted-foreground flex items-center gap-1">
                            <Phone className="w-3 h-3" />
                            {assignment.donor.phone}
                          </p>
                        </div>
                      </div>

                      {/* Arrow for desktop */}
                      <div className="hidden md:flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <ArrowRight className="w-6 h-6 text-muted-foreground" />
                      </div>

                      {/* Delivery */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm font-medium text-accent">
                          <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center">
                            <span className="text-xs">B</span>
                          </div>
                          DELIVER TO
                        </div>
                        <div className="pl-8 space-y-1">
                          <p className="font-medium text-foreground">{assignment.recipient.name}</p>
                          <p className="text-sm text-muted-foreground flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {assignment.recipient.address}
                          </p>
                          <p className="text-sm text-muted-foreground flex items-center gap-1">
                            <Phone className="w-3 h-3" />
                            {assignment.recipient.phone}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between">
                    <Button variant="outline" className="gap-2">
                      <Navigation className="w-4 h-4" />
                      Get Directions
                    </Button>
                    {statusInfo.nextAction && (
                      <Button
                        variant={assignment.status === "pending" ? "warning" : "success"}
                        onClick={() => updateStatus(assignment.id, statusInfo.nextStatus!)}
                        className="gap-2"
                      >
                        <CheckCircle2 className="w-4 h-4" />
                        {statusInfo.nextAction}
                      </Button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default VolunteerDashboard;
