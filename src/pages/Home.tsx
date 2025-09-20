import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { 
  ArrowRight, 
  Heart, 
  Shield, 
  Leaf, 
  Zap, 
  Users,
  Star,
  MapPin,
  Calendar,
  MessageCircle,
  Plane,
  Luggage,
  Camera,
  Palmtree
} from "lucide-react";
import travelHeroBackground from "@/assets/travel-hero-background.jpg";
import heroBackground2 from "@/assets/hero-background-2.png";
import beachImage from "@/assets/beach-escape.jpg";
import mountainImage from "@/assets/mountain-trek.jpg";
import culturalImage from "@/assets/cultural-tour.jpg";
import familyImage from "@/assets/family-getaway.jpg";
import cruiseImage from "@/assets/cruise-escape.jpg";
import safariImage from "@/assets/safari-adventure.jpg";
import wellnessImage from "@/assets/wellness-retreat.jpg";
import cityImage from "@/assets/city-tours.jpg";
import customerKiranRanjitha from "@/assets/customer-kiran-ranjitha.png";
import customerChethanSeema from "@/assets/customer-chethan-seema.png";
import customerMadhuMamtha from "@/assets/customer-madhu-mamtha.png";
import customerSuryaVeda from "@/assets/customer-surya-veda.png";
import customerSumitaPrabhakar from "@/assets/customer-sumita-prabhakar.png";
import customerVenkateshChaitra from "@/assets/customer-venkatesh-chaitra.png";
import customerRinilNagma from "@/assets/customer-rinil-nagma.png";
import packageBackground from "@/assets/package-background.png";
import packageIllustration from "@/assets/package-illustration.png";
import familyMemoriesImage from "@/assets/family-memories.png";
import happyFeetLogo from "@/assets/happy-feet-logo.png";

const Home = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/919845742597?text=Hi%20Happy%20Feet%20Holidays,%20I%27d%20like%20help%20planning%20a%20trip.", "_blank");
  };

  const experiences = [
    {
      title: "Beach Escapes",
      description: "Pristine shores, luxury resorts, and endless azure waters await your perfect coastal getaway.",
      image: beachImage,
      link: "/enquiry"
    },
    {
      title: "Mountain Treks",
      description: "Conquer majestic peaks and discover breathtaking vistas on our expertly guided adventures.",
      image: mountainImage,
      link: "/enquiry"
    },
    {
      title: "Cultural Tours",
      description: "Immerse yourself in rich heritage, ancient traditions, and authentic local experiences.",
      image: culturalImage,
      link: "/enquiry"
    },
    {
      title: "Family Getaways",
      description: "Create lasting memories with activities designed for every member of your family.",
      image: familyImage,
      link: "/enquiry"
    },
    {
      title: "Luxury Cruises",
      description: "Sail the oceans in style with premium cruise experiences and world-class amenities.",
      image: cruiseImage,
      link: "/enquiry"
    },
    {
      title: "Safari Adventures",
      description: "Witness wildlife in their natural habitat with thrilling safari expeditions across Africa.",
      image: safariImage,
      link: "/enquiry"
    },
    {
      title: "Wellness Retreats",
      description: "Rejuvenate your mind, body, and soul with holistic wellness experiences in serene locations.",
      image: wellnessImage,
      link: "/enquiry"
    },
    {
      title: "City Tours",
      description: "Explore vibrant urban landscapes, architectural marvels, and cosmopolitan culture.",
      image: cityImage,
      link: "/enquiry"
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Passion for Travel",
      description: "Travel is about experiences, stories, and moments that last a lifetime."
    },
    {
      icon: Heart,
      title: "Customer Delight", 
      description: "Every trip is crafted with care to exceed expectations—beyond satisfaction to joyful memories."
    },
    {
      icon: Shield,
      title: "Integrity & Trust",
      description: "Transparency, honesty, and ethical practices guide all our actions."
    },
    {
      icon: Leaf,
      title: "Sustainability & Responsibility",
      description: "Eco-friendly travel that supports local communities."
    },
    {
      icon: Zap,
      title: "Innovation & Creativity",
      description: "Unique itineraries and personalized services for extraordinary experiences."
    },
    {
      icon: Users,
      title: "Teamwork & Collaboration",
      description: "A united team and strong local partnerships ensure seamless travel."
    }
  ];

  const testimonials = [
    {
      quote: "Happy Feet Holidays made our trip so smooth and memorable. Everything was perfectly planned – from transport to hotel stays. Truly hassle-free travel!",
      name: "Kiran & Ranjitha",
      location: "Bengaluru",
      rating: 5,
      image: customerKiranRanjitha
    },
    {
      quote: "A wonderful experience! The team was so helpful and always available. I didn't have to worry about anything, just enjoyed my vacation.",
      name: "Rinil & Nagma",
      location: "Mangalore",
      rating: 5,
      image: customerRinilNagma
    },
    {
      quote: "Affordable packages with amazing service. Our family trip was unforgettable thanks to Happy Feet Holidays.",
      name: "Venkatesh & Chaitra",
      location: "Chennai",
      rating: 5,
      image: customerVenkateshChaitra
    },
    {
      quote: "Happy Feet Holidays gave us memories for a lifetime. Great coordination, lovely team, and the best travel experience.",
      name: "Surya & Veda",
      location: "Mumbai",
      rating: 5,
      image: customerSuryaVeda
    },
    {
      quote: "Our trip with Happy Feet Holidays was absolutely fantastic. Right from the beginning, the team was very responsive and guided us with the best options for hotels, transport, and sightseeing. Everything was so well-coordinated that we never felt stressed about anything. It was truly a hassle-free experience, and we could focus only on enjoying ourselves. We came back with beautiful memories, and we will definitely book with them again!",
      name: "Chethan & Seema",
      location: "Pune",
      rating: 5,
      image: customerChethanSeema
    },
    {
      quote: "I cannot thank Happy Feet Holidays enough for organizing such a smooth and enjoyable vacation for our family. The itinerary was perfectly balanced with sightseeing, relaxation, and activities for the kids. The hotel recommendations were spot-on, and the local travel arrangements were always on time. What I loved the most was their personal touch – they kept checking in to make sure we were comfortable. Highly professional service with a warm, friendly approach!",
      name: "Madhu & Mamtha",
      location: "Coorg",
      rating: 5,
      image: customerMadhuMamtha
    },
    {
      quote: "We booked our Manali trip with Happy Feet Holidays, and it was one of the best decisions we ever made. The entire process was so smooth – no hidden charges, no last-minute confusion. The team was transparent, flexible, and super helpful in every step. The sightseeing was well-planned, and our driver was very professional. Overall, it felt like traveling with family, not just a travel agency. Highly recommended to everyone looking for a trustworthy holiday planner!",
      name: "Sumita & Prabhakar",
      location: "Manali",
      rating: 5,
      image: customerSumitaPrabhakar
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={travelHeroBackground} 
            alt="Travel Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Animated Travel Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Plane className="absolute top-20 left-10 w-12 h-12 text-white/40 animate-bounce" style={{ animationDelay: '0s' }} />
          <Palmtree className="absolute top-32 right-16 w-16 h-16 text-white/50 animate-pulse" style={{ animationDelay: '1s' }} />
          <Camera className="absolute bottom-40 left-20 w-10 h-10 text-white/40 animate-bounce" style={{ animationDelay: '2s' }} />
          <Luggage className="absolute bottom-32 right-24 w-14 h-14 text-white/45 animate-pulse" style={{ animationDelay: '0.5s' }} />
          <Plane className="absolute top-1/2 right-10 w-8 h-8 text-white/35 animate-bounce transform rotate-45" style={{ animationDelay: '1.5s' }} />
          <Palmtree className="absolute top-1/4 left-1/4 w-10 h-10 text-white/40 animate-pulse" style={{ animationDelay: '0.8s' }} />
          <Camera className="absolute top-3/4 right-1/3 w-12 h-12 text-white/45 animate-bounce" style={{ animationDelay: '1.2s' }} />
          <Luggage className="absolute top-16 right-1/4 w-8 h-8 text-white/40 animate-pulse" style={{ animationDelay: '2.5s' }} />
          <Plane className="absolute bottom-1/4 left-1/3 w-10 h-10 text-white/35 animate-bounce transform -rotate-12" style={{ animationDelay: '1.8s' }} />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <img 
              src={happyFeetLogo} 
              alt="Happy Feet Holidays Logo"
              className="w-24 h-24 md:w-32 md:h-32 object-contain"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-yellow-300">Happy Feet Holidays</span>{" "}
            <span className="text-blue-300">
              Unforgettable Memories.
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
            Tailor-made journeys, premium stays, and seamless logistics—crafted with heart.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="cta" size="xl" className="glow-effect" asChild>
              <Link to="/enquiry">
                Enquire Now
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              onClick={handleWhatsAppClick}
              className="bg-white/20 text-white border-white/30 hover:bg-white hover:text-primary backdrop-blur-sm glow-effect"
            >
              Talk on WhatsApp
              <MessageCircle className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Happy Feet Family Memories Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-primary/5 via-accent/10 to-primary/15">
        <div className="relative z-10 container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center lg:justify-start">
              <img 
                src={familyMemoriesImage} 
                alt="Happy Feet Holidays - Creating Family Memories"
                className="max-w-md w-full h-auto rounded-2xl shadow-strong glow-effect"
              />
            </div>
            
            <div className="text-foreground">
              <div className="flex items-center mb-4">
                <img 
                  src={happyFeetLogo} 
                  alt="Happy Feet Logo"
                  className="w-12 h-12 mr-3"
                />
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-ocean bg-clip-text text-transparent shimmer">
                  HAPPY FEET HOLIDAYS
                </h2>
              </div>
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground mb-6">
                No toy or gadget can replace the magic of a holiday spent together watching your child's eyes 
                light up at a new sight, holding hands while exploring unknown streets, and sharing laughter 
                over simple joys.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                <strong className="text-primary">Happy Feet Holidays</strong> designs trips that aren't just vacations, 
                but the threads that weave your family's most beautiful memories.
              </p>
              <div className="mt-8">
                <Button variant="hero" size="lg" className="glow-effect" asChild>
                  <Link to="/enquiry">
                    Create Memories
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Highlights */}
      <section className="py-20 bg-gradient-to-b from-background via-secondary/20 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 shimmer bg-clip-text text-transparent">
              Discover Your Perfect Experience
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From serene beaches to adventurous mountains, we curate experiences that create lasting memories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {experiences.map((experience) => (
              <Card key={experience.title} className="group overflow-hidden border-0 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2 glow-effect hover:glow-effect">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={experience.image} 
                    alt={experience.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-semibold mb-1">{experience.title}</h3>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-6 line-clamp-3">
                    {experience.description}
                  </p>

                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-gradient-ocean hover:text-white transition-all duration-300 shimmer border-2" 
                    asChild
                  >
                    <Link to={experience.link}>
                      Click to Get Offer
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-background via-primary/5 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <img 
                src={happyFeetLogo} 
                alt="Happy Feet Logo"
                className="w-16 h-16 mr-4"
              />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground shimmer bg-clip-text text-transparent">
                Why Choose Happy Feet Holidays?
              </h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our commitment to excellence ensures every journey exceeds expectations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="text-center group">
                  <div className={`w-20 h-20 bg-gradient-ocean rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-medium transition-all duration-300 float-animation glow-effect`} style={{ animationDelay: `${index * 0.2}s` }}>
                    <Icon className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 shimmer bg-clip-text text-transparent">
              What Our Travelers Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Real experiences from our delighted customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-all duration-300 glow-effect hover:glow-effect">
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-6">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-primary/20"
                    />
                  </div>
                  
                  <div className="flex justify-center mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <blockquote className="text-lg text-foreground mb-6 italic leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="space-y-1">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground flex items-center justify-center">
                      <MapPin className="w-3 h-3 mr-1" />
                      {testimonial.location}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="hero" size="lg" className="shimmer glow-effect" asChild>
              <Link to="/enquiry">
                Start Your Journey
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;