import { Download, Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePicture from "@/assets/profile-picture.png";
import resumeAsset from "@/assets/Dilmi_Senevirathna_Resume_v6.pdf.asset.json";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center gradient-hero relative overflow-hidden pt-20">
      {/* Precision background accents */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 border border-primary/10 -top-48 -left-48 rotate-12"></div>
        <div className="absolute w-96 h-96 border border-accent/10 -bottom-48 -right-48 -rotate-12"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-foreground space-y-6 animate-fade-up">
            <div className="inline-block px-4 py-2 bg-card/80 backdrop-blur-sm rounded-full border border-primary/25 text-sm font-medium text-primary mb-4 shadow-md">
              👋 Welcome to my portfolio
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Dilmi
              <br />
              <span className="gradient-text">Senevirathna</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-foreground font-light">
              QA Engineer | Software Engineer
            </p>
            
            <p className="text-lg text-muted-foreground max-w-xl">
              Quality Assurance Engineer with over 2 years of experience specializing in test automation, performance testing, and software quality validation. Skilled in Playwright, Selenium, JMeter, and modern testing methodologies.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                variant="secondary"
                className="gap-2 shadow-lg hover:shadow-xl transition-shadow"
                asChild
              >
                <a href={resumeAsset.url} download="Dilmi_Senevirathna_Resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="h-5 w-5" />
                  Download CV
                </a>
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="gap-2 border-border bg-card/70 text-foreground hover:bg-secondary hover:text-secondary-foreground backdrop-blur-sm"
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Mail className="h-5 w-5" />
                Get in Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/DilSenevirathna"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card/70 border border-border backdrop-blur-sm rounded-full hover:border-primary hover:bg-primary/10 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 text-foreground" />
              </a>
              <a
                href="https://www.linkedin.com/in/dilmi-senevirathna-6b6933228"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card/70 border border-border backdrop-blur-sm rounded-full hover:border-primary hover:bg-primary/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-foreground" />
              </a>
              <a
                href="mailto:chathuryadilmi@gmail.com"
                className="p-3 bg-card/70 border border-border backdrop-blur-sm rounded-full hover:border-primary hover:bg-primary/10 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5 text-foreground" />
              </a>
              <a
                href="tel:+94775765299"
                className="p-3 bg-card/70 border border-border backdrop-blur-sm rounded-full hover:border-primary hover:bg-primary/10 transition-colors"
                aria-label="Phone"
              >
                <Phone className="h-5 w-5 text-foreground" />
              </a>
            </div>
          </div>

          {/* Right content - Profile Image */}
          <div className="flex justify-center animate-fade-in">
            <div className="relative">
              <div className="w-72 h-72 md:w-80 md:h-80 lg:w-[340px] lg:h-[340px] rounded-full overflow-hidden border-4 border-primary/35 shadow-2xl animate-float ring-4 ring-border ring-offset-4 ring-offset-background bg-card">
                <img 
                  src={profilePicture} 
                  alt="Dilmi Senevirathna" 
                  className="w-full h-full object-contain"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-28 h-28 border border-accent/30 rotate-12"></div>
              <div className="absolute -bottom-6 -left-6 w-36 h-36 border border-primary/30 -rotate-12"></div>
              <div className="absolute top-1/2 -right-3 w-6 h-6 bg-accent/60 rounded-sm"></div>
              <div className="absolute top-1/4 -left-2 w-4 h-4 bg-primary/60 rounded-sm"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-border rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full"></div>
        </div>
      </div>
    </section>
  );
};
