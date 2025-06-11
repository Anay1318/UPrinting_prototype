import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: string;
  popular?: boolean;
}

interface CustomizeModalProps {
  isOpen: boolean;
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

const CustomizeModal = ({ isOpen, product, onClose, onAddToCart }: CustomizeModalProps) => {
  const { toast } = useToast();

  if (!isOpen || !product) return null;

  const handleAddToCart = () => {
    onAddToCart(product);
    onClose();
  };

  const handleDesignNow = () => {
    toast({
      title: "Design Tool",
      description: `Opening design tool for ${product.name}...`,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">Customize {product.name}</h3>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>
        
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        
        <p className="text-gray-600 mb-4">{product.description}</p>
        <p className="text-2xl font-bold text-blue-600 mb-6">{product.price}</p>
        
        <div className="flex gap-3">
          <Button className="flex-1" onClick={handleAddToCart}>
            Add to Cart
          </Button>
          <Button variant="outline" className="flex-1" onClick={handleDesignNow}>
            Design Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CustomizeModal;
