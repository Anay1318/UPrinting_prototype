import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const HeroSection = () => {
  const { toast } = useToast();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleStartDesigning = () => {
    toast({
      title: "Design Tool Loading",
      description: "Redirecting to our design tool...",
    });
    scrollToSection('products');
  };

  const handleBrowseTemplates = () => {
    toast({
      title: "Templates Gallery",
      description: "Loading template gallery...",
    });
  };

  const features = [
    "Free Design Tool",
    "Fast Turnaround",
    "Premium Quality",
    "Free Shipping Options"
  ];

  return (
    <section id="hero" className="py-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Professional Printing
          <span className="block text-blue-600">Made Simple</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Create stunning print materials with our easy-to-use design tools and premium quality printing services.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <Check className="h-4 w-4 text-green-500" />
              <span className="text-sm font-medium">{feature}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg" onClick={handleStartDesigning}>
            Start Designing Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="px-8 py-4 text-lg" onClick={handleBrowseTemplates}>
            Browse Templates
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
