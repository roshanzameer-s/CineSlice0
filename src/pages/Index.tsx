
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Courses from "@/components/Courses";
import Services from "@/components/Services";
import Founder from "@/components/Founder";
import Advantages from "@/components/Advantages";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ThreeBackground from "@/components/ThreeBackground";
import Additionalservices from "@/components/Additionalservices";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 relative">
      <ThreeBackground />
      <Hero />
      <Stats />
      <Courses />
      <Services />
      <Additionalservices/>
      <Founder />
      <Advantages />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
