
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Video, Headphones, Code2 } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Video,
      title: "Freelancing Video Editing",
      description: "Professional video production and post-production services for businesses and creators",
      features: ["Corporate Videos", "Marketing Content", "Post-Production", "Creative Direction"],
      color: "from-blue-600 to-cyan-600"
    },
    {
      icon: Headphones,
      title: "Sound Editing Services",
      description: "High-quality audio post-production, sound design, and music production services",
      features: ["Audio Post-Production", "Sound Design", "Music Production", "Audio Enhancement"],
      color: "from-purple-600 to-pink-600"
    },
    {
      icon: Code2,
      title: "Coding Solutions",
      description: "Custom software development, web applications, and mobile app development services",
      features: ["Custom Software", "Web Development", "Mobile Apps", "Technical Consulting"],
      color: "from-green-600 to-teal-600"
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Professional Services</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Beyond education, we offer professional services leveraging our expertise to help businesses achieve their goals.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

export default Services;
