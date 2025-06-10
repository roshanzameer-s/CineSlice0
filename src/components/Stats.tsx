
import { TrendingUp, Users, Award, Target } from "lucide-react";

const Stats = () => {
  const stats = [
    {
      icon: Award,
      value: "99%",
      label: "Success Rate",
      description: "Students complete and get certified",
      color: "text-green-600"
    },
    {
      icon: Users,
      value: "10",
      label: "Max Batch Size",
      description: "Personalized attention guaranteed",
      color: "text-blue-600"
    },
    {
      icon: Target,
      value: "7",
      label: "Core Programs",
      description: "High-demand technology skills",
      color: "text-purple-600"
    },
    {
      icon: TrendingUp,
      value: "2021",
      label: "Founded",
      description: "Years of educational excellence",
      color: "text-orange-600"
    }
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Cineslice?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our proven track record speaks for itself. We've revolutionized skill-based education with exceptional results.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-white to-gray-100 shadow-md mb-4`}>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-gray-700 mb-2">{stat.label}</div>
              <div className="text-sm text-gray-500">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
