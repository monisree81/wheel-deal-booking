import { Card, CardContent } from "@/components/ui/card";
import { Shield, Clock, MapPin, Headphones, CreditCard, Users } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Fully Insured",
    description: "All our vehicles come with comprehensive insurance coverage for your peace of mind."
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock customer service to assist you whenever you need help."
  },
  {
    icon: MapPin,
    title: "Multiple Locations",
    description: "Pick up and drop off your rental car at any of our 50+ convenient locations."
  },
  {
    icon: Headphones,
    title: "Expert Service",
    description: "Our experienced team provides professional and friendly customer service."
  },
  {
    icon: CreditCard,
    title: "Best Prices",
    description: "Competitive rates with no hidden fees. Get the best value for your money."
  },
  {
    icon: Users,
    title: "Trusted by Thousands",
    description: "Join over 10,000 satisfied customers who trust us for their car rental needs."
  }
];

export const FeaturesSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Why Choose RentaCar?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're committed to providing you with the best car rental experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-glow rounded-lg flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};