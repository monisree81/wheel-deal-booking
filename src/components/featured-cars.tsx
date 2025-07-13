import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Fuel, Users, Settings } from "lucide-react";

const featuredCars = [
  {
    id: 1,
    name: "Tesla Model S",
    type: "Electric Luxury",
    price: 120,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=400&h=300&fit=crop",
    features: ["Electric", "5 Seats", "Autopilot"],
    fuel: "Electric",
    seats: 5,
    transmission: "Auto"
  },
  {
    id: 2,
    name: "BMW X5",
    type: "Premium SUV",
    price: 85,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop",
    features: ["AWD", "7 Seats", "Premium"],
    fuel: "Petrol",
    seats: 7,
    transmission: "Auto"
  },
  {
    id: 3,
    name: "Audi A4",
    type: "Business Sedan",
    price: 65,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=300&fit=crop",
    features: ["Quattro", "4 Seats", "Luxury"],
    fuel: "Petrol",
    seats: 4,
    transmission: "Auto"
  },
];

export const FeaturedCars = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Featured Vehicles
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of premium rental cars
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCars.map((car) => (
            <Card key={car.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-background">
              <div className="relative">
                <img 
                  src={car.image} 
                  alt={car.name}
                  className="w-full h-48 object-cover"
                />
                <Badge 
                  className="absolute top-4 left-4 bg-primary/90 text-primary-foreground"
                >
                  {car.type}
                </Badge>
                <div className="absolute top-4 right-4 flex items-center bg-background/90 rounded-full px-2 py-1">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
                  <span className="text-xs font-medium">{car.rating}</span>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">{car.name}</h3>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Fuel className="h-4 w-4 mr-1" />
                      {car.fuel}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {car.seats}
                    </div>
                    <div className="flex items-center">
                      <Settings className="h-4 w-4 mr-1" />
                      {car.transmission}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {car.features.map((feature, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-primary">${car.price}</span>
                    <span className="text-muted-foreground">/day</span>
                  </div>
                  <Button className="bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 transition-opacity">
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Cars
          </Button>
        </div>
      </div>
    </section>
  );
};