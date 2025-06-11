import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductGrid from "@/components/ProductGrid";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import CustomizeModal from "@/components/CustomizeModal";
import { useToast } from "@/hooks/use-toast";

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: string;
  popular?: boolean;
}

const Index = () => {
  const [cartItems, setCartItems] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCustomizeModalOpen, setIsCustomizeModalOpen] = useState(false);
  const { toast } = useToast();
  const productCategories = [
    {
      id: 1,
      name: "Business Cards",
      description: "Professional business cards",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400",
      price: "From $9.99",
      popular: true
    },
    {
      id: 2,
      name: "Flyers & Brochures",
      description: "Eye-catching marketing materials",
      image: "https://images.unsplash.com/photo-1586953158491-b80360e521e4?w=400",
      price: "From $19.99"
    },
    {
      id: 3,
      name: "Banners & Signs",
      description: "Large format printing",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400",
      price: "From $29.99"
    },
    {
      id: 4,
      name: "Postcards",
      description: "Direct mail campaigns",
      image: "https://images.unsplash.com/photo-1586953208407-bb9b99b4b6a7?w=400",
      price: "From $14.99"
    },
    {
      id: 5,
      name: "Stickers & Labels",
      description: "Custom adhesive products",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400",
      price: "From $7.99"
    },
    {
      id: 6,
      name: "Posters",
      description: "High-quality poster printing",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400",
      price: "From $12.99"
    }
  ];

  const features = [
    "Free Design Tool",
    "Fast Turnaround",
    "Premium Quality",
    "Free Shipping Options"
  ];

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

  const addToCart = (product: any) => {
    const addToCart = (product: Product) => {
    setCartItems(cartItems + 1);
    setSelectedProduct(product);
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
    });
  };
     const openCustomizeModal = (product: any) => {
    setSelectedProduct(product);
    setIsCustomizeModalOpen(true);
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

  const filteredProducts = productCategories.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );
    return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Header */}
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

      {/* Hero Section */}
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

      {/* Product Categories */}
      <section id="products" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Choose Your Product
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From business cards to large format banners, we've got all your printing needs covered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(searchQuery ? filteredProducts : productCategories).map((product) => (
              <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                                            src={product.image} 
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    {product.popular && (
                      <Badge className="absolute top-4 left-4 bg-orange-500">
                        <Star className="h-3 w-3 mr-1" />
                        Popular
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl mb-2">{product.name}</CardTitle>
                  <CardDescription className="text-gray-600 mb-4">
                    {product.description}
                  </CardDescription>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-blue-600">
                      {product.price}
                    </span>
                    <Button 
                      onClick={() => openCustomizeModal(product)}
                      className="bg-blue-600 hover:bg-blue-700"
                    >
                      Customize
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
</div>

          {searchQuery && filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No products found for "{searchQuery}"</p>
              <Button variant="outline" className="mt-4" onClick={() => setSearchQuery("")}>
                Clear Search
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-choose-us" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose UPrinting?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">24</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">24-Hour Turnaround</h3>
              <p className="text-gray-600">Rush orders available with guaranteed delivery times.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Guarantee</h3>
              <p className="text-gray-600">100% satisfaction guarantee or your money back.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Materials</h3>
              <p className="text-gray-600">Only the finest papers and inks for professional results.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of satisfied customers who trust UPrinting for their printing needs.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg" onClick={handleStartDesigning}>
            Start Your Order Today
            <ArrowRight className="ml-2 h-5 w-5" />
</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">UPrinting</h3>
              <p className="text-gray-400">
                Your trusted partner for professional printing services.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection('products')} className="hover:text-white transition-colors">Business Cards</button></li>
                <li><button onClick={() => scrollToSection('products')} className="hover:text-white transition-colors">Flyers</button></li>
                <li><button onClick={() => scrollToSection('products')} className="hover:text-white transition-colors">Banners</button></li>
                <li><button onClick={() => scrollToSection('products')} className="hover:text-white transition-colors">Postcards</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => toast({ title: "Help Center", description: "Help center coming soon!" })} className="hover:text-white transition-colors">Help Center</button></li>
                <li><button onClick={() => toast({ title: "Contact Us", description: "Contact form coming soon!" })} className="hover:text-white transition-colors">Contact Us</button></li>
                <li><button onClick={() => toast({ title: "Order Status", description: "Order tracking coming soon!" })} className="hover:text-white transition-colors">Order Status</button></li>
                <li><button onClick={() => toast({ title: "Returns", description: "Returns policy coming soon!" })} className="hover:text-white transition-colors">Returns</button></li>
              </ul>
</div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => toast({ title: "About Us", description: "About page coming soon!" })} className="hover:text-white transition-colors">About Us</button></li>
                <li><button onClick={() => toast({ title: "Careers", description: "Careers page coming soon!" })} className="hover:text-white transition-colors">Careers</button></li>
                <li><button onClick={() => toast({ title: "Press", description: "Press page coming soon!" })} className="hover:text-white transition-colors">Press</button></li>
                <li><button onClick={() => toast({ title: "Blog", description: "Blog coming soon!" })} className="hover:text-white transition-colors">Blog</button></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 UPrinting. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Customize Modal */}
      {isCustomizeModalOpen && selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Customize {selectedProduct.name}</h3>
              <Button variant="ghost" size="sm" onClick={() => setIsCustomizeModalOpen(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
            
            <img 
              src={selectedProduct.image} 
              alt={selectedProduct.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
<p className="text-gray-600 mb-4">{selectedProduct.description}</p>
            <p className="text-2xl font-bold text-blue-600 mb-6">{selectedProduct.price}</p>
            
            <div className="flex gap-3">
              <Button 
                className="flex-1" 
                onClick={() => {
                  addToCart(selectedProduct);
                  setIsCustomizeModalOpen(false);
                }}
              >
                Add to Cart
              </Button>
              <Button 
                variant="outline" 
                className="flex-1"
                onClick={() => {
                  toast({
                    title: "Design Tool",
                    description: `Opening design tool for ${selectedProduct.name}...`,
                  });
                  setIsCustomizeModalOpen(false);
                }}
              >
                Design Now
              </Button>
            </div>
          </div>
        </div>
      )}
        const openCustomizeModal = (product: Product) => {
    setSelectedProduct(product);
    setIsCustomizeModalOpen(true);
  };

  const closeCustomizeModal = () => {
    setIsCustomizeModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <Header 
        cartItems={cartItems}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      
      <HeroSection />
      
      <ProductGrid 
        searchQuery={searchQuery}
        onCustomizeProduct={openCustomizeModal}
      />
      
      <WhyChooseUs />
      
      <CTASection />
      
      <Footer />

      <CustomizeModal 
        isOpen={isCustomizeModalOpen}
        product={selectedProduct}
        onClose={closeCustomizeModal}
        onAddToCart={addToCart}
      />
    </div>
  );
};

export default Index;
