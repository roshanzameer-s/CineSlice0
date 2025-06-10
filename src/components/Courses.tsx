
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Film, Shield, Cloud, Code, Video, Palette, Camera , Aperture, Monitor} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Courses = () => {
  const navigate = useNavigate();

  const courses = [
    {
      id: "vfx",
      icon: Film,
      title: "Visual Effects (VFX)",
      description: "Industry-standard software training with project-based learning and portfolio development",
      features: ["3D Animation", "Compositing", "Motion Graphics", "Portfolio Building"],
      color: "from-purple-500 to-indigo-600"
    },
    {
      id: "graphic-design",
      icon: Palette,
      title: "Graphic Designing",
      description: "Creative design principles, professional software mastery, and brand identity development",
      features: ["Adobe Creative Suite", "Brand Design", "UI/UX Basics", "Print Design"],
      color: "from-pink-500 to-rose-600"
    },
    {
      id: "video-editing",
      icon: Video,
      title: "Video Editing",
      description: "Professional editing techniques, post-production workflows, and creative storytelling",
      features: ["Professional Editing", "Color Grading", "Audio Sync", "Creative Storytelling"],
      color: "from-red-500 to-orange-600"
    },
    {
      id: "cloud-engineering",
      icon: Cloud,
      title: "Cloud Engineering",
      description: "Cloud platform expertise, infrastructure management, and DevOps practices",
      features: ["AWS/Azure/GCP", "DevOps", "Infrastructure", "Automation"],
      color: "from-cyan-500 to-blue-600"
    },
    {
      id: "programming",
      icon: Code,
      title: "Programming",
      description: "Frontend, backend, and full-stack development with modern technologies",
      features: ["Frontend Dev", "Backend Dev", "Full-Stack", "Modern Frameworks"],
      color: "from-green-500 to-teal-600"
    },
    {
      id: "cybersecurity",
      icon: Shield,
      title: "Cybersecurity",
      description: "Security protocols, threat analysis, and risk management for modern enterprises",
      features: ["Threat Analysis", "Security Protocols", "Risk Management", "Penetration Testing"],
      color: "from-yellow-500 to-amber-600"
    },
    {
      id: "film-making",
      icon: Camera,
      title: "Film Making",
      description: "Production techniques, cinematography, and creative direction for professionals",
      features: ["Cinematography", "Production", "Creative Direction", "Post-Production"],
      color: "from-indigo-500 to-purple-600"
    },
    {
      id: "webdevelopment",
      icon: Aperture,
      title: "Web Development",
      description: "Complete Frontend and Backend Development with Databases",
      features: ["MERN", "MEAN", "Frontend Developer", "Backend Developer"],
      color: "from-yellow-500 to-amber-600"
    },
    {
      id: "csfundamentals",
      icon: Monitor,
      title: "CS Fundamentals",
      description: "Computer Fundamental Subjects with Complete SDE",
      features: ["OOPS", "Operating Systems", "Computer Networks","Database Management Systems"],
      color: "from-yellow-500 to-amber-600"
    }
  ];

  const handleLearnMore = (courseId: string) => {
    navigate(`/course/${courseId}`);
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Core Programs</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Choose from our carefully crafted programs designed to meet industry demands. Each course is taught by experts with real-world experience.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 overflow-hidden">
              <CardHeader className="pb-4">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${course.color} shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <course.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                  {course.title}
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {course.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  {course.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button 
                  onClick={() => handleLearnMore(course.id)}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-xl transition-all duration-300"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
