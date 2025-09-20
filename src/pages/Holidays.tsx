import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, 
  ArrowRight, 
  MapPin,
  Award,
  CheckCircle,
  Star,
  Globe,
  Users,
  Shield
} from "lucide-react";
import beachImage from "@/assets/beach-escape.jpg";
import mountainImage from "@/assets/mountain-trek.jpg";
import culturalImage from "@/assets/cultural-tour.jpg";
import familyImage from "@/assets/family-getaway.jpg";
import heroBackground from "@/assets/travel-hero-background.jpg";

const Holidays = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const packages = [
    {
      title: "Kerala",
      image: beachImage,
      link: "/enquiry",
      description: "Experience the serene backwaters, lush greenery, and pristine beaches of God's Own Country."
    },
    {
      title: "Kashmir", 
      image: mountainImage,
      link: "/enquiry",
      description: "Discover the paradise on earth with snow-capped mountains, beautiful valleys, and pristine lakes."
    },
    {
      title: "Shimla Manali",
      image: mountainImage,
      link: "/enquiry",
      description: "Enjoy the cool mountain breeze, scenic landscapes, and adventure activities in the Himalayas."
    },
    {
      title: "Rajasthan",
      image: culturalImage,
      link: "/enquiry",
      description: "Explore the royal heritage, magnificent palaces, and vibrant culture of the Desert State."
    },
    {
      title: "Goa",
      image: beachImage,
      link: "/enquiry",
      description: "Relax on golden beaches, enjoy water sports, and experience the vibrant nightlife."
    },
    {
      title: "Ooty",
      image: mountainImage,
      link: "/enquiry",
      description: "Escape to the Queen of Hill Stations with pleasant weather, tea gardens, and scenic beauty."
    },
    {
      title: "Agra",
      image: culturalImage,
      link: "/enquiry",
      description: "Visit the iconic Taj Mahal and explore the rich Mughal heritage of this historic city."
    },
    {
      title: "Andaman",
      image: beachImage,
      link: "/enquiry",
      description: "Dive into crystal clear waters, pristine beaches, and untouched natural beauty."
    },
    {
      title: "Himachal Pradesh",
      image: mountainImage,
      link: "/enquiry",
      description: "Experience adventure sports, apple orchards, and breathtaking mountain views."
    }
  ];

  const filteredPackages = packages.filter(pkg =>
    pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    pkg.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-gradient-to-br from-black/60 to-black/40 bg-blend-overlay bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center">
            {/* Breadcrumb */}
            <div className="flex items-center justify-center gap-2 text-white/80 mb-6">
              <Link to="/" className="hover:text-white transition-colors">HOME</Link>
              <ArrowRight className="w-4 h-4" />
              <span className="text-white">PACKAGES</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
              PACKAGES
            </h1>
            
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                type="text"
                placeholder="Search destinations, packages..."
                className="pl-10 pr-4 py-3 bg-white/95 border-0"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-primary font-medium mb-2">EXCLUSIVE BENEFITS</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Discover Our Premium Services
            </h2>
          </div>

          <Tabs defaultValue="privilege" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-12">
              <TabsTrigger value="privilege" className="text-lg py-3">Happy Privilege Pass</TabsTrigger>
              <TabsTrigger value="partners" className="text-lg py-3">Our Service Partners</TabsTrigger>
            </TabsList>

            <TabsContent value="privilege" className="space-y-12">
              {/* Membership Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: "ELITE CLUB",
                    subtitle: "MEMBERSHIP",
                    duration: "1 YEAR MEMBERSHIP",
                    features: ["2N/3D YEARLY", "India", "Only Accommodation", "3,4 & 5 Star Properties"],
                    color: "from-blue-500 to-blue-600",
                    icon: Award
                  },
                  {
                    title: "ELITE ACCESS",
                    subtitle: "MEMBERSHIP", 
                    duration: "1 YEAR MEMBERSHIP",
                    features: ["5N/6D YEARLY", "India", "Only Accommodation", "3,4 & 5 Star Properties"],
                    color: "from-primary to-primary-hover",
                    icon: Star
                  },
                  {
                    title: "PLATINUM PLUS",
                    subtitle: "MEMBERSHIP",
                    duration: "3 YEAR MEMBERSHIP", 
                    features: ["5N/6D YEARLY", "India", "Only Accommodation", "3,4 & 5 Star Properties"],
                    color: "from-gray-400 to-gray-600",
                    icon: Shield
                  },
                  {
                    title: "SIGNATURE",
                    subtitle: "MEMBERSHIP",
                    duration: "5 YEAR MEMBERSHIP",
                    features: ["6N/7D YEARLY", "India + Asia", "Only Accommodation", "3,4 & 5 Star Properties"], 
                    color: "from-orange-500 to-orange-600",
                    icon: Globe
                  }
                ].map((membership, index) => {
                  const IconComponent = membership.icon;
                  return (
                    <Card key={index} className="relative overflow-hidden border-0 shadow-medium hover:shadow-strong transition-all duration-300 hover:-translate-y-2">
                      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${membership.color}`}></div>
                      <CardContent className="p-6 text-center">
                        <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${membership.color} flex items-center justify-center`}>
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="font-bold text-lg text-foreground mb-1">{membership.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{membership.subtitle}</p>
                        <p className="text-xs text-primary font-medium mb-4">{membership.duration}</p>
                        <ul className="space-y-2">
                          {membership.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Premium Package Section */}
              <div className="bg-gradient-to-br from-accent/10 to-primary/5 rounded-2xl p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    PREMIUM HOLIDAY PACKAGE MEMBERSHIP
                  </h3>
                  <div className="text-lg text-muted-foreground mb-2">
                    Membership Price <span className="line-through">₹1,59,999/-</span>
                  </div>
                  <div className="text-2xl font-bold text-primary">
                    Enroll Now for SPECIAL OFFER ₹86,999 + GST
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-4">DOMESTIC DESTINATIONS</h4>
                    <div className="space-y-3">
                      {["GOA (3N/4D)", "KERALA (3N/4D)", "SHIMLA MANALI (3N/4D)"].map((dest, index) => (
                        <div key={index} className="flex items-center">
                          <MapPin className="w-5 h-5 text-primary mr-3" />
                          <span className="text-foreground">{dest}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-4">INTERNATIONAL DESTINATIONS</h4>
                    <div className="space-y-3">
                      {["BLISSFUL BALI (3N/4D)", "TREMENDOUS THAILAND (3N/4D)", "SUPER SRILANKA (3N/4D)"].map((dest, index) => (
                        <div key={index} className="flex items-center">
                          <Globe className="w-5 h-5 text-accent mr-3" />
                          <span className="text-foreground">{dest}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="text-center mt-8">
                  <Button variant="hero" size="lg" asChild>
                    <Link to="/enquiry">
                      Enroll Now
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="partners" className="space-y-8">
              <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Our Trusted Service Partners
                </h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  We collaborate with the best in the industry to ensure your travel experience is nothing short of exceptional.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Premium Hotels & Resorts",
                    description: "Partnerships with 5-star properties worldwide",
                    icon: Shield,
                    features: ["Luxury Accommodations", "Exclusive Rates", "Priority Booking", "Premium Amenities"]
                  },
                  {
                    title: "Airlines & Transportation",
                    description: "Reliable travel with trusted carriers",
                    icon: Globe,
                    features: ["Major Airlines", "Private Transfers", "Cruise Partners", "Local Transport"]
                  },
                  {
                    title: "Local Experience Partners", 
                    description: "Authentic local experiences and guides",
                    icon: Users,
                    features: ["Expert Guides", "Cultural Tours", "Adventure Activities", "Local Cuisine"]
                  },
                  {
                    title: "Travel Insurance Partners",
                    description: "Comprehensive coverage for peace of mind",
                    icon: Shield,
                    features: ["Medical Coverage", "Trip Cancellation", "Baggage Protection", "24/7 Support"]
                  },
                  {
                    title: "Technology Partners",
                    description: "Seamless booking and travel management",
                    icon: Star,
                    features: ["Mobile App", "Real-time Updates", "Digital Itineraries", "Online Support"]
                  },
                  {
                    title: "Financial Partners",
                    description: "Flexible payment and financing options",
                    icon: Award,
                    features: ["EMI Options", "Secure Payments", "Multiple Currencies", "Travel Rewards"]
                  }
                ].map((partner, index) => {
                  const IconComponent = partner.icon;
                  return (
                    <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mr-4">
                            <IconComponent className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-bold text-foreground">{partner.title}</h4>
                            <p className="text-sm text-muted-foreground">{partner.description}</p>
                          </div>
                        </div>
                        <ul className="space-y-2">
                          {partner.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              <div className="text-center mt-12">
                <Button variant="outline" size="lg" asChild>
                  <Link to="/contact">
                    Partner With Us
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
             </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Main Packages Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-2">PACKAGES</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              CHECKOUT OUR PACKAGES
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPackages.map((pkg) => (
              <Card key={pkg.title} className="group overflow-hidden border-0 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={pkg.image} 
                    alt={pkg.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{pkg.title}</h3>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                    {pkg.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-muted-foreground text-sm">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{pkg.title}</span>
                    </div>
                    <Button variant="default" size="sm" asChild>
                      <Link to={pkg.link}>
                        Read More
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our travel experts specialize in creating completely customized itineraries. 
              Tell us your dreams, and we'll make them reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/enquiry">
                  Create Custom Trip
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">
                  Speak to Expert
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Holidays;