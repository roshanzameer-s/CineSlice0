
import { CheckCircle, X } from "lucide-react";

const Advantages = () => {
  const comparison = [
    {
      feature: "",
      traditional: "No Perfect Skill",
      cineslice: "Perfect Skill"
    },
    {
      feature: "",
      traditional: "Recorded Sessions",
      cineslice: "Live Online Sessions"
    },
    {
      feature: "",
      traditional: "No Handson Training",
      cineslice: "Handson Training"
    },
    {
      feature: "",
      traditional: "High Price and no Premium quality",
      cineslice: "Low Price and Premium quality"
    },
    {
      feature: "",
      traditional: "No Careeer Guidance",
      cineslice: "Careeer Guidance & more"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Cineslice Stands Apart</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            See the clear difference between traditional free learning and our premium, structured approach to education.
          </p>
        </div>
        
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
            <div className="p-8 bg-gray-50 lg:col-span-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-4"></h3>
            </div>
            <div className="p-8 bg-red-50 lg:col-span-1">
              <h3 className="text-2xl font-bold text-red-700 mb-4 flex items-center gap-2">
                <X className="w-6 h-6" />
                Traditional Learning
              </h3>
            </div>
            <div className="p-8 bg-green-50 lg:col-span-1">
              <h3 className="text-2xl font-bold text-green-700 mb-4 flex items-center gap-2">
                <CheckCircle className="w-6 h-6" />
                Cineslice Premium
              </h3>
            </div>
          </div>
          
          {comparison.map((item, index) => (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-t border-gray-100">
              <div className="p-6 bg-gray-50">
                <h4 className="font-semibold text-gray-900 text-lg">{item.feature}</h4>
              </div>
              <div className="p-6 bg-red-50">
                <p className="text-red-700 flex items-start gap-2">
                  <X className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  {item.traditional}
                </p>
              </div>
              <div className="p-6 bg-green-50">
                <p className="text-green-700 flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  {item.cineslice}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
