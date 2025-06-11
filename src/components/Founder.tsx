import { Card, CardContent } from "@/components/ui/card";
import { Quote, Trophy, Target, Users, Star, Camera } from "lucide-react";

const Founder = () => {
  const teamMembers = [
    { name: "Cheif Executive Officer", role: "Subramanyam Chowdary", color: "from-blue-500 to-cyan-500", image: "/ceosubbu.jpg" },
    { name: "Co-Founder", role: "Bhavya Sree", color: "from-pink-500 to-rose-500", image: "/bhavya.png" },
    { name: "Chief Technology Officer", role: "Roshan Zameer", color: "from-purple-500 to-pink-500", image: "/roshan.jpg" },
    { name: "Cheif Operating Officer", role: "Mohith", color: "from-green-500 to-emerald-500", image: "/mohith.jpg" },
    { name: "Cheif Financial Officer", role: "Rajesh", color: "from-pink-500 to-rose-500", image: "/mohith.jpg" },
    { name: "Project Manager", role: "Balaji", color: "from-orange-500 to-red-500", image: "/balaji.jpg" },
    { name: "Head of Growth", role: "Arshad", color: "from-indigo-500 to-purple-500", image: "/arshad.jpg" },
    { name: "Social Media Manager", role: "Sai Lalith", color: "from-blue-500 to-cyan-500", image: "/sai-lalith.jpg" },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Camera className="w-12 h-12 text-yellow-400" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Meet Our Team
            </h2>
          </div>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Passionate educators and innovators driving the future of digital learning
          </p>
        </div>

        {/* CEO Section */}
        <div className="max-w-5xl mx-auto mb-16">
          <Card className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-lg border-yellow-400/30 overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
                <div className="flex-shrink-0">
                  <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 p-1 shadow-2xl">
                    <div className="w-full h-full rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                      <img
                        src="/subbu.png"
                        alt="Subramanyam Chowdary, CEO"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex-1 text-center lg:text-left">
                  <div className="flex items-center gap-2 justify-center lg:justify-start mb-2">
                    <Trophy className="w-6 h-6 text-yellow-400" />
                    <h3 className="text-2xl md:text-3xl font-bold">Subramanyam Chowdary</h3>
                  </div>
                  <p className="text-lg md:text-xl text-black-200 mb-6">Chief Executive Officer & Founder</p>
                  <div className="mb-6">
                    <Quote className="w-6 h-6 md:w-8 md:h-8 text-yellow-400 mb-4 mx-auto lg:mx-0" />
                    <p className="text-base md:text-lg leading-relaxed text-black-100 italic">
                      "Leading a team of 11 exceptional individuals, we're revolutionizing education and creating opportunities that transform lives across the digital landscape."
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                    <div className="flex items-center gap-3 justify-center lg:justify-start">
                      <Trophy className="w-5 h-5 md:w-6 md:h-6 text-black-400" />
                      <span className="text-sm md:text-base text-black-100">Visionary Leader</span>
                    </div>
                    <div className="flex items-center gap-3 justify-center lg:justify-start">
                      <Target className="w-5 h-5 md:w-6 md:h-6 text-green-400" />
                      <span className="text-sm md:text-base text-black-100">Mission-Driven</span>
                    </div>
                    <div className="flex items-center gap-3 justify-center lg:justify-start">
                      <Users className="w-5 h-5 md:w-6 md:h-6 text-purple-400" />
                      <span className="text-sm md:text-base text-black-100">Team Builder</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Team Members Grid */}
        <div className="mb-8">
          <div className="flex items-center justify-center gap-3 mb-12">
            <Users className="w-8 h-8 text-blue-400" />
            <h3 className="text-2xl md:text-3xl font-bold text-center">Our Amazing Team</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${member.color} p-1 mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <div className="w-full h-full rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.role}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-white">{member.name}</h4>
                  <p className="text-sm text-blue-200">{member.role}</p>
                  <div className="flex justify-center mt-3">
                    <Star className="w-4 h-4 text-yellow-400" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="text-center bg-white/10 backdrop-blur-lg rounded-lg p-6">
            <div className="text-3xl font-bold text-yellow-400 mb-2">7</div>
            <div className="text-blue-200">Total Team Members</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-lg rounded-lg p-6">
            <div className="text-3xl font-bold text-green-400 mb-2">2+</div>
            <div className="text-blue-200">Combined Years Experience</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-lg rounded-lg p-6">
            <div className="text-3xl font-bold text-purple-400 mb-2">100+</div>
            <div className="text-blue-200">Students Impacted</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
