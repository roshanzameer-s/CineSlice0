
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Clock, Users, Award, CheckCircle } from "lucide-react";
import { Film, Shield, Cloud, Code, Video, Palette, Camera } from "lucide-react";

const CourseDetail = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();

  const courseData: Record<string,any> = {
    "vfx": {
      icon: Film,
      title: "Visual Effects (VFX)",
      description: "Master the art of visual effects with industry-standard software and techniques",
      duration: "6 months",
      students: "2,500+",
      level: "Beginner to Advanced",
      color: "from-purple-500 to-indigo-600",
      overview: "Our comprehensive VFX course covers everything from basic compositing to advanced 3D animation. You'll work with industry-standard software and learn from professionals who have worked on major film productions.",
      curriculum: [
        "Introduction to VFX Pipeline",
        "Adobe After Effects Mastery",
        "3D Animation with Blender/Maya",
        "Compositing Techniques",
        "Motion Tracking and Matchmoving",
        "Particle Systems and Simulations",
        "Color Grading and Finishing",
        "Portfolio Development"
      ],
      outcomes: [
        "Create professional-quality visual effects",
        "Master industry-standard software",
        "Build an impressive portfolio",
        "Understand VFX pipeline workflows"
      ]
    },
    "graphic-design": {
      icon: Palette,
      title: "Graphic Designing",
      description: "Create stunning visual designs that communicate effectively and captivate audiences",
      duration: "4 months",
      students: "3,200+",
      level: "Beginner to Intermediate",
      color: "from-pink-500 to-rose-600",
      overview: "Learn the fundamentals of graphic design, typography, color theory, and brand identity. This course combines creative principles with practical software skills to prepare you for a career in design.",
      curriculum: [
        "Design Fundamentals and Principles",
        "Typography and Layout",
        "Color Theory and Psychology",
        "Adobe Creative Suite (Photoshop, Illustrator, InDesign)",
        "Brand Identity and Logo Design",
        "Print and Digital Design",
        "UI/UX Design Basics",
        "Portfolio Creation"
      ],
      outcomes: [
        "Design professional logos and branding",
        "Create print and digital marketing materials",
        "Understand design principles and theory",
        "Build a diverse design portfolio"
      ]
    },
    "video-editing": {
      icon: Video,
      title: "Video Editing",
      description: "Master the art of storytelling through professional video editing techniques",
      duration: "3 months",
      students: "1,800+",
      level: "Beginner to Advanced",
      color: "from-red-500 to-orange-600",
      overview: "From basic cuts to advanced color grading, learn to create compelling video content. This course covers both technical skills and creative storytelling techniques used in film and digital media.",
      curriculum: [
        "Video Editing Fundamentals",
        "Adobe Premiere Pro Mastery",
        "Advanced Cutting Techniques",
        "Color Correction and Grading",
        "Audio Editing and Mixing",
        "Motion Graphics Integration",
        "Workflow Optimization",
        "Final Project Production"
      ],
      outcomes: [
        "Edit professional-quality videos",
        "Master color grading techniques",
        "Understand storytelling through editing",
        "Create engaging video content"
      ]
    },
    "cloud-engineering": {
      icon: Cloud,
      title: "Cloud Engineering",
      description: "Build and manage scalable cloud infrastructure on leading platforms",
      duration: "8 months",
      students: "1,500+",
      level: "Intermediate to Advanced",
      color: "from-cyan-500 to-blue-600",
      overview: "Comprehensive training in cloud platforms including AWS, Azure, and Google Cloud. Learn to design, implement, and manage cloud infrastructure with a focus on scalability and security.",
      curriculum: [
        "Cloud Fundamentals and Architecture",
        "AWS/Azure/GCP Platform Deep Dive",
        "Infrastructure as Code",
        "Container Technologies (Docker/Kubernetes)",
        "DevOps and CI/CD Pipelines",
        "Cloud Security Best Practices",
        "Monitoring and Optimization",
        "Capstone Project"
      ],
      outcomes: [
        "Design scalable cloud architectures",
        "Implement DevOps practices",
        "Manage cloud security and compliance",
        "Prepare for cloud certifications"
      ]
    },
    "programming": {
      icon: Code,
      title: "Programming",
      description: "Learn full-stack development with modern programming languages and frameworks",
      duration: "10 months",
      students: "4,100+",
      level: "Beginner to Advanced",
      color: "from-green-500 to-teal-600",
      overview: "Complete programming bootcamp covering frontend, backend, and full-stack development. Learn popular languages and frameworks while building real-world projects.",
      curriculum: [
        "Programming Fundamentals",
        "HTML, CSS, and JavaScript",
        "React and Modern Frontend",
        "Backend Development (Node.js/Python)",
        "Database Design and Management",
        "API Development and Integration",
        "Version Control and Collaboration",
        "Full-Stack Project Development"
      ],
      outcomes: [
        "Build full-stack web applications",
        "Master modern programming languages",
        "Understand software development lifecycle",
        "Create a professional developer portfolio"
      ]
    },
    "cybersecurity": {
      icon: Shield,
      title: "Cybersecurity",
      description: "Protect organizations from cyber threats with advanced security protocols",
      duration: "7 months",
      students: "950+",
      level: "Intermediate to Advanced",
      color: "from-yellow-500 to-amber-600",
      overview: "Comprehensive cybersecurity training covering threat analysis, risk management, and security implementation. Learn to protect organizations from evolving cyber threats.",
      curriculum: [
        "Cybersecurity Fundamentals",
        "Network Security and Protocols",
        "Ethical Hacking and Penetration Testing",
        "Risk Assessment and Management",
        "Security Compliance and Governance",
        "Incident Response and Forensics",
        "Security Tools and Technologies",
        "Capstone Security Project"
      ],
      outcomes: [
        "Conduct security assessments",
        "Implement security protocols",
        "Respond to security incidents",
        "Prepare for security certifications"
      ]
    },
    "film-making": {
      icon: Camera,
      title: "Film Making",
      description: "Master the art of filmmaking from pre-production to post-production",
      duration: "9 months",
      students: "1,200+",
      level: "Beginner to Advanced",
      color: "from-indigo-500 to-purple-600",
      overview: "Complete filmmaking course covering all aspects of film production. Learn cinematography, directing, screenwriting, and post-production to create compelling films.",
      curriculum: [
        "Film Production Fundamentals",
        "Screenwriting and Story Development",
        "Cinematography and Camera Work",
        "Directing Techniques",
        "Sound Design and Recording",
        "Film Editing and Post-Production",
        "Distribution and Marketing",
        "Final Film Project"
      ],
      outcomes: [
        "Create professional short films",
        "Master cinematography techniques",
        "Understand film production pipeline",
        "Develop a unique directorial voice"
      ]
    },
    "webdevelopment": {
  icon: Code, // or any suitable icon from your library
  title: "Web Development",
  description: "Master modern web technologies and build dynamic, responsive websites and applications",
  duration: "6 months",
  students: "2,000+",
  level: "Beginner to Advanced",
  color: "from-indigo-500 to-purple-600",
  overview: "Comprehensive training in front-end and back-end web development. Learn to create interactive, responsive, and secure web applications using industry-standard tools and frameworks.",
  curriculum: [
    "HTML5 & CSS3 Fundamentals",
    "JavaScript and ES6+",
    "Responsive Web Design",
    "Front-end Frameworks (React, Vue, or Angular)",
    "Back-end Basics (Node.js, Express)",
    "Database Integration (SQL & NoSQL)",
    "RESTful APIs and Web Services",
    "Authentication and Security",
    "Deployment and Hosting",
    "Capstone Project"
  ],
  outcomes: [
    "Build responsive and accessible websites",
    "Develop interactive user interfaces",
    "Integrate back-end services and databases",
    "Deploy and maintain web applications",
    "Prepare for industry certifications"
  ]
}

  };

  const course = courseData[courseId as string];

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Course Not Found</h1>
          <Button onClick={() => navigate("/")} className="bg-blue-600 hover:bg-blue-700">
            Return Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")}
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Courses
          </Button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Course Header */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${course.color} shadow-lg mr-6`}>
              <course.icon className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">{course.title}</h1>
              <p className="text-xl text-gray-600">{course.description}</p>
            </div>
          </div>

          {/* Course Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="p-6 text-center">
                <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900">Duration</h3>
                <p className="text-gray-600">{course.duration}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900">Students Enrolled</h3>
                <p className="text-gray-600">{course.students}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Award className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900">Level</h3>
                <p className="text-gray-600">{course.level}</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <Card>
              <CardHeader>
                <CardTitle>Course Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">{course.overview}</p>
              </CardContent>
            </Card>

            {/* Curriculum */}
            <Card>
              <CardHeader>
                <CardTitle>Curriculum</CardTitle>
                <CardDescription>What you'll learn in this course</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {course.curriculum.map((item: string, index: number) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Learning Outcomes */}
            <Card>
              <CardHeader>
                <CardTitle>Learning Outcomes</CardTitle>
                <CardDescription>Skills you'll gain</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {course.outcomes.map((outcome: string, index: number) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">{outcome}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Enroll Button */}
            <Card>
              <CardContent className="p-6">
                <Button className={`w-full bg-gradient-to-r ${course.color} hover:opacity-90 text-white font-semibold py-3 text-lg`}>
                  Enroll Now
                </Button>
                <p className="text-sm text-gray-600 text-center mt-3">
                  Join thousands of students already enrolled
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
