import { Button } from '@/components/ui/button';
import { Github, Linkedin, FileText, ArrowDown } from 'lucide-react';
import heroBackground from '@/assets/hero-background.jpg';
import LeetCodeLogo from "@/assets/leetcode.png";
const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"

      >
        <div className="absolute inset-0 hero-gradient opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <br />
          <br />
          <br />
          <h1 className="text-[100px] sm:text-[120px] md:text-[130px] lg:text-[100px] font-extrabold uppercase text-white fade-in">
            <span className="block">Ganesh Kokate</span>
          </h1>


          <div className="flex items-center justify-center mt-4 fade-in">
            <div className="h-[1px] w-16 bg-blue-500 mr-4"></div>
            <span className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-semibold">
              Backend Developer | Full-Stack Developer | AI Dev
            </span>
            <div className="h-[2px] w-16 bg-blue-500 ml-4"></div>
          </div>
          <br></br>
          <p className="text-lg sm:text-xl text-white/80 mb-12 max-w-2xl mx-auto slide-up">
            Building scalable, AI-driven systems that automate workflows with expertise in
            Spring Boot, microservices, and LangChain technologies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 slide-up">

            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary hero-shadow scale-on-hover"
              asChild
            >
              <a href="https://github.com/ganesh-kokate" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary hero-shadow scale-on-hover"
              asChild
            >
              <a href="https://www.linkedin.com/in/ganesh-santosh-kokate/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary hero-shadow scale-on-hover"
              asChild
            >
              <a
                href="https://leetcode.com/your-username/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={LeetCodeLogo} alt="LeetCode" className="mr-2 h-5 w-5" />
                LeetCode
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary hero-shadow scale-on-hover"
              asChild
            >
              <a href="https://drive.google.com/file/d/1In-1eC7Ot1bfV30wz73cM7vIu_KmV2v7/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <FileText className=" h-5 w-2" />
                Download My Resume
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary hero-shadow scale-on-hover"
              asChild
            >
              <a href="#contact">
                <ArrowDown className="h-5 w-5 mr-2" />
                Get in Touch
              </a>
            </Button>



          </div>

          {/* Scroll indicator */}
          <button
            onClick={scrollToAbout}
            className="inline-flex items-center text-white/70 hover:text-white transition-colors duration-300 animate-bounce"
          >
            <ArrowDown className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;