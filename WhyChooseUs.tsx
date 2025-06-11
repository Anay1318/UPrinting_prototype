import { Check, Star } from "lucide-react";

const WhyChooseUs = () => {
  return (
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
  );
};

export default WhyChooseUs;
