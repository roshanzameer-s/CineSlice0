import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mic2, Briefcase, BookOpen, HelpCircle } from "lucide-react";

const Additionalservices = () => {
  const services = [
    {
      icon: Mic2,
      title: "Mock Interviews",
      description: "Practice real interview scenarios with expert feedback to boost your confidence and performance.",
      features: ["Interview Preparation", "Feedback & Tips", "Realistic Scenarios", "Confidence Building"],
      color: "from-blue-600 to-cyan-600"
    },
    {
      icon: Briefcase,
      title: "Job Assistance",
      description: "Personalized support in job searches, resume building, and application strategies.",
      features: ["Resume Review", "Job Search Strategies", "Application Support", "LinkedIn Optimization"],
      color: "from-purple-600 to-pink-600"
    },
    {
      icon: BookOpen,
      title: "Career Guidance",
      description: "Expert advice to help you navigate career choices and set achievable goals.",
      features: ["Career Planning", "Goal Setting", "Skill Assessment", "Industry Insights"],
      color: "from-green-600 to-teal-600"
    },
    {
      icon: HelpCircle,
      title: "One-on-One Assistance",
      description: "Personalized help for problem solving and project development tailored to your needs.",
      features: ["Problem Solving", "Project Development", "Customized Support", "Direct Mentorship"],
      color: "from-orange-600 to-red-600"
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Additional Services</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Beyond education, we offer professional services leveraging our expertise to help you achieve your career goals.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-gray-50 to-white border-0 overflow-hidden">
              <CardHeader className="pb-4">
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br ${service.color} shadow-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors mb-3">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed text-lg">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Additionalservices;
