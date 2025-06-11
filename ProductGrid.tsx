import { useState } from "react";
import { Star } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: string;
  popular?: boolean;
}

interface ProductGridProps {
  searchQuery: string;
  onCustomizeProduct: (product: Product) => void;
}

const ProductGrid = ({ searchQuery, onCustomizeProduct }: ProductGridProps) => {
  const productCategories: Product[] = [
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

  const filteredProducts = productCategories.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
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
                    onClick={() => onCustomizeProduct(product)}
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
            <Button variant="outline" className="mt-4" onClick={() => window.location.reload()}>
              Clear Search
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
