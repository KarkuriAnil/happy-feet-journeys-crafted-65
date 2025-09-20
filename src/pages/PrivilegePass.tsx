import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, MapPin, Calendar, Users, Star, Gift } from "lucide-react";
import heroBackground from "@/assets/travel-hero-background.jpg";

const PrivilegePass = () => {
  const membershipTiers = [
    {
      name: "ELITE CLUB",
      subtitle: "MEMBERSHIP",
      duration: "1 YEAR MEMBERSHIP",
      details: ["2N/3D YEARLY", "India", "Only Accommodation", "3,4 & 5 Star Properties"],
      badgeColor: "border-blue-500",
      ribbonColor: "bg-blue-500"
    },
    {
      name: "ELITE ACCESS", 
      subtitle: "MEMBERSHIP",
      duration: "1 YEAR MEMBERSHIP",
      details: ["5N/6D YEARLY", "India", "Only Accommodation", "3,4 & 5 Star Properties"],
      badgeColor: "border-cyan-500",
      ribbonColor: "bg-cyan-500"
    },
    {
      name: "PLATINUM PLUS",
      subtitle: "MEMBERSHIP", 
      duration: "3 YEAR MEMBERSHIP",
      details: ["5N/6D YEARLY", "India", "Only Accommodation", "3,4 & 5 Star Properties"],
      badgeColor: "border-slate-400",
      ribbonColor: "bg-slate-400"
    },
    {
      name: "SIGNATURE",
      subtitle: "MEMBERSHIP",
      duration: "5 YEAR MEMBERSHIP", 
      details: ["6N/7D YEARLY", "India + Asia", "Only Accommodation", "3,4 & 5 Star Properties"],
      badgeColor: "border-orange-500",
      ribbonColor: "bg-orange-500"
    }
  ];

  const domesticDestinations = [
    "GOA (3N/4D)",
    "KERALA (3N/4D)", 
    "SHIMLA MANALI (3N/4D)",
    "RAJASTHAN (3N/4D)",
    "HIMACHAL (3N/4D)"
  ];

  const internationalDestinations = [
    "BLISSFUL BALI (3N/4D)",
    "TREMENDOUS THAILAND (3N/4D)",
    "SUPER SRILANKA (3N/4D)",
    "MAGICAL MALDIVES (3N/4D)",
    "DUBAI DELIGHTS (3N/4D)"
  ];

  const membershipBenefits = [
    "Cheaper than online prices on everything related to holidays",
    "Special discounts on hotels, resorts, and holiday packages",
    "Priority booking and customer service",
    "Exclusive access to premium properties",
    "Flexible cancellation policies",
    "24/7 customer support",
    "Complimentary upgrades when available",
    "Special rates on domestic and international flights"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        className="relative py-32 px-4 text-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroBackground})`
        }}
      >
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            HAPPY PRIVILEGE PASS
          </h1>
          <nav className="flex items-center justify-center space-x-2 text-white/80">
            <span>HOME</span>
            <span>→</span>
            <span className="text-white">HAPPY PRIVILEGE PASS</span>
          </nav>
        </div>
      </section>

      {/* Membership Details Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary font-medium mb-4 uppercase tracking-wider">MEMBERSHIP</p>
            <h2 className="text-4xl font-bold text-foreground mb-8">MEMBERSHIP DETAILS</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {membershipTiers.map((tier, index) => (
              <div key={index} className="text-center">
                {/* Circular Badge with Ribbon */}
                <div className="relative mb-8">
                  <div className={`w-40 h-40 mx-auto rounded-full border-4 ${tier.badgeColor} bg-white flex flex-col items-center justify-center shadow-lg`}>
                    <h3 className="text-sm font-bold text-foreground leading-tight">{tier.name}</h3>
                    <p className="text-xs text-muted-foreground">{tier.subtitle}</p>
                  </div>
                  {/* Ribbon */}
                  <div className={`absolute -bottom-4 left-1/2 transform -translate-x-1/2 ${tier.ribbonColor}`}>
                    <div className="w-16 h-8 flex items-center justify-center relative">
                      <div className="absolute -left-2 top-0 w-0 h-0 border-t-4 border-r-4 border-b-4 border-transparent border-r-current opacity-70"></div>
                      <div className="absolute -right-2 top-0 w-0 h-0 border-t-4 border-l-4 border-b-4 border-transparent border-l-current opacity-70"></div>
                    </div>
                  </div>
                </div>

                {/* Membership Details */}
                <div className="space-y-2">
                  <h4 className="text-lg font-bold text-foreground">{tier.name} {tier.duration}</h4>
                  <div className="space-y-1">
                    {tier.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Holiday Package Section */}
      <section className="py-16 px-4 bg-accent/10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <p className="text-primary font-medium mb-4 uppercase tracking-wider">PACKAGES</p>
            <h2 className="text-4xl font-bold text-foreground mb-8">PREMIUM HOLIDAY PACKAGE MEMBERSHIP</h2>
            
            <div className="bg-primary/10 p-6 rounded-lg mb-8 max-w-4xl mx-auto">
              <p className="text-2xl font-bold text-foreground mb-4">
                Membership Price <span className="line-through text-muted-foreground">₹1,59,999/-</span> 
                <span className="text-primary ml-2">Enroll Now for SPECIAL OFFER ₹86,999 + GST</span>
              </p>
              <p className="text-lg text-muted-foreground mb-2">
                <strong>Enjoy 3N/4D Land Package With Any Of The Below Destinations For 1 Couple / 2 Adults</strong>
              </p>
              <p className="text-primary font-medium">
                Both International & Domestic complementary holidays are valid for 2 years from the date of enrollment
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Domestic Destinations */}
            <Card className="p-6">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <MapPin className="w-6 h-6 text-primary" />
                DOMESTIC DESTINATIONS
              </h3>
              <div className="space-y-3">
                {domesticDestinations.map((destination, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-accent/20 rounded-lg">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <span className="text-foreground font-medium">{destination}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* International Destinations */}
            <Card className="p-6">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <MapPin className="w-6 h-6 text-primary" />
                INTERNATIONAL DESTINATIONS
              </h3>
              <div className="space-y-3">
                {internationalDestinations.map((destination, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-accent/20 rounded-lg">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <span className="text-foreground font-medium">{destination}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Membership Benefits */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-8 flex items-center justify-center gap-3">
              <Gift className="w-8 h-8 text-primary" />
              Membership Benefits
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {membershipBenefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-accent/10 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="px-8 py-4 text-lg">
              Enroll Now
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Premium Travel Journey?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of satisfied members who have unlocked exclusive travel experiences with Happy Privilege Pass
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="px-8 py-4">
              View All Benefits
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4 border-white text-white hover:bg-white hover:text-primary">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivilegePass;