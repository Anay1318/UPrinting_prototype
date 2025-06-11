import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const { toast } = useToast();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
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
  );
};

export default Footer;
