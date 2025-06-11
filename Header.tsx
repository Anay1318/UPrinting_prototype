import { useState } from "react";
import { ShoppingCart, Search, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

interface HeaderProps {
  cartItems: number;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

const Header = ({ cartItems, searchQuery, setSearchQuery, isMobileMenuOpen, setIsMobileMenuOpen }: HeaderProps) => {
  const { toast } = useToast();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      toast({
        title: "Search Results",
        description: `Searching for "${searchQuery}"...`,
      });
      console.log("Searching for:", searchQuery);
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

  const handleUserLogin = () => {
    toast({
      title: "Login Required",
      description: "Please sign in to your account.",
    });
  };

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="text-2xl font-bold text-blue-600 cursor-pointer" onClick={() => scrollToSection('hero')}>
              UPrinting
            </div>
            <nav className="hidden md:flex space-x-6">
              <button onClick={() => scrollToSection('products')} className="text-gray-700 hover:text-blue-600 transition-colors">Products</button>
              <button onClick={handleStartDesigning} className="text-gray-700 hover:text-blue-600 transition-colors">Design Tool</button>
              <button onClick={handleBrowseTemplates} className="text-gray-700 hover:text-blue-600 transition-colors">Templates</button>
              <button onClick={() => scrollToSection('why-choose-us')} className="text-gray-700 hover:text-blue-600 transition-colors">Pricing</button>
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <form onSubmit={handleSearch} className="hidden md:flex items-center space-x-2">
              <Search className="h-4 w-4 text-gray-400" />
              <Input 
                placeholder="Search products..." 
                className="w-64" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
            <Button variant="ghost" size="sm" onClick={handleUserLogin}>
              <User className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="relative" onClick={() => toast({ title: "Cart", description: `You have ${cartItems} items in your cart.` })}>
              <ShoppingCart className="h-4 w-4" />
              {cartItems > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs">
                  {cartItems}
                </Badge>
              )}
            </Button>
            <Button className="md:hidden" variant="ghost" size="sm" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-2">
              <button onClick={() => { scrollToSection('products'); setIsMobileMenuOpen(false); }} className="text-left text-gray-700 hover:text-blue-600 transition-colors py-2">Products</button>
              <button onClick={() => { handleStartDesigning(); setIsMobileMenuOpen(false); }} className="text-left text-gray-700 hover:text-blue-600 transition-colors py-2">Design Tool</button>
              <button onClick={() => { handleBrowseTemplates(); setIsMobileMenuOpen(false); }} className="text-left text-gray-700 hover:text-blue-600 transition-colors py-2">Templates</button>
              <button onClick={() => { scrollToSection('why-choose-us'); setIsMobileMenuOpen(false); }} className="text-left text-gray-700 hover:text-blue-600 transition-colors py-2">Pricing</button>
              <form onSubmit={handleSearch} className="flex items-center space-x-2 mt-4">
                <Search className="h-4 w-4 text-gray-400" />
                <Input 
                  placeholder="Search products..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </form>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
