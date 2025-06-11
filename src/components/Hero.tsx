import Image from "next/image";
import { Trophy, Users, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20 px-6">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/20"></div>
      {/* Container */}
      <div className="relative max-w-7xl mx-auto">
        {/* Logo and headline */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Image
              src="/cineslice-logo.png"
              alt="CineSlice Logo"
              width={200}
              height={60}
              className="object-contain"
              priority
            />
          </div>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Empowering Futures Through Quality Education
          </p>
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <Trophy className="w-5 h-5 text-yellow-400" />
              <span className="text-lg font-semibold">99% Success Rate</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <Users className="w-5 h-5 text-green-400" />
              <span className="text-lg font-semibold">Max 10 Students/Batch</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <Star className="w-5 h-5 text-purple-400" />
              <span className="text-lg font-semibold">Founded 2021</span>
            </div>
          </div>
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Start Your Journey
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300"
            >
              Explore Courses
            </Button>
          </div>
        </div>
      </div>
      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent"></div>
    </section>
  );
};

export default Hero;
