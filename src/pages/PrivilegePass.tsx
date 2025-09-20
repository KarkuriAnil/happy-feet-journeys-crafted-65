import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Shield, Globe, CheckCircle } from "lucide-react";

const PrivilegePass = () => {
  const membershipTiers = [
    {
      name: "ELITE ACCESS",
      subtitle: "MEMBERSHIP",
      duration: "1 YEAR MEMBERSHIP",
      price: "5N/6D YEARLY",
      color: "bg-teal-500",
      icon: Star,
      features: ["Premium hotel bookings", "Priority customer support", "Exclusive deals", "India coverage"]
    },
    {
      name: "PLATINUM PLUS", 
      subtitle: "MEMBERSHIP",
      duration: "3 YEAR MEMBERSHIP",
      price: "5N/6D YEARLY",
      color: "bg-slate-500",
      icon: Shield,
      features: ["All Elite benefits", "Extended validity", "Premium destinations", "India coverage"]
    },
    {
      name: "SIGNATURE",
      subtitle: "MEMBERSHIP", 
      duration: "5 YEAR MEMBERSHIP",
      price: "6N/7D YEARLY",
      color: "bg-orange-500", 
      icon: Globe,
      features: ["All Platinum benefits", "International coverage", "VIP treatment", "India + Asia coverage"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-gradient-subtle">
        <div className="container mx-auto max-w-4xl">
          <p className="text-primary font-medium mb-4 uppercase tracking-wider">EXCLUSIVE BENEFITS</p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Discover Our Premium Services
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Unlock exclusive travel experiences with our Happy Privilege Pass memberships
          </p>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {membershipTiers.map((tier, index) => {
              const IconComponent = tier.icon;
              return (
                <Card key={index} className="relative overflow-hidden border-2 hover:shadow-lg transition-all duration-300">
                  <div className={`h-1 ${tier.color}`} />
                  <CardHeader className="text-center pt-8">
                    <div className={`w-16 h-16 rounded-full ${tier.color} mx-auto mb-4 flex items-center justify-center`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-foreground">{tier.name}</CardTitle>
                    <CardDescription className="text-muted-foreground font-medium">
                      {tier.subtitle}
                    </CardDescription>
                    <Badge variant="outline" className="text-primary border-primary mx-auto mt-2">
                      {tier.duration}
                    </Badge>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="mb-6">
                      <p className="text-lg font-semibold text-foreground flex items-center justify-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        {tier.price}
                      </p>
                    </div>
                    <div className="space-y-3 mb-6">
                      {tier.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <Button className="w-full" variant="outline">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-accent/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-8">Why Choose Happy Privilege Pass?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-left">
              <h3 className="text-xl font-semibold text-foreground mb-4">Exclusive Discounts</h3>
              <p className="text-muted-foreground">
                Enjoy special rates on hotels, flights, and tour packages that are only available to our privilege pass members.
              </p>
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold text-foreground mb-4">Priority Support</h3>
              <p className="text-muted-foreground">
                Get dedicated customer support with faster response times and personalized assistance for all your travel needs.
              </p>
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold text-foreground mb-4">Flexible Booking</h3>
              <p className="text-muted-foreground">
                Enjoy more flexible cancellation policies and easier booking modifications with your privilege status.
              </p>
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold text-foreground mb-4">Global Coverage</h3>
              <p className="text-muted-foreground">
                Access our network of partners across India and Asia for seamless travel experiences wherever you go.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivilegePass;