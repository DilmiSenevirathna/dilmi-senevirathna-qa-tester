import { ArrowDownRight, CheckCircle2, Download, Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePicture from "@/assets/profile-picture.png";
import resumeAsset from "@/assets/Dilmi_Senevirathna_Resume.pdf.asset.json";

export const Hero = () => {
  const proofPoints = [
    { value: "2+", label: "Years in QA" },
    { value: "60%", label: "Faster testing" },
    { value: "4", label: "QA case studies" },
  ];

  return (
    <section className="hero-shell relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-20">
      <div className="hero-grid absolute inset-0" aria-hidden="true" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-[1.25fr_.75fr] gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <div className="space-y-7 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/25 rounded-full text-xs font-semibold uppercase text-primary">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-40 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Open to Associate QA opportunities
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[0.95]">
              Dilmi <span className="gradient-text">Senevirathna</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-foreground font-semibold">
              Quality Assurance Engineer
              <span className="text-muted-foreground font-normal"> · Software Engineer</span>
            </p>
            
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Quality Assurance Engineer with over 2 years of experience specializing in test automation, performance testing, and software quality validation. Skilled in Playwright, Selenium, JMeter, and modern testing methodologies.
            </p>

            <div className="flex flex-wrap gap-2">
              {["Playwright", "Selenium", "JMeter", "BrowserStack", "Mabl AI"].map((tool) => (
                <span key={tool} className="tool-chip">{tool}</span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                className="gap-2 shadow-glow"
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
                className="gap-2 bg-card/50"
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Mail className="h-5 w-5" />
                Get in Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-2 pt-1">
              <a
                href="https://github.com/DilSenevirathna"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/dilmi-senevirathna-6b6933228"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:chathuryadilmi@gmail.com"
                className="social-link"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="tel:+94775765299"
                className="social-link"
                aria-label="Phone"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Right content - Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="profile-panel relative w-full max-w-md p-3">
              <div className="aspect-[4/5] overflow-hidden rounded-md bg-secondary border border-border">
                <img 
                  src={profilePicture} 
                  alt="Dilmi Senevirathna" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute left-0 right-0 bottom-0 translate-y-1/2 mx-7 grid grid-cols-3 bg-card border border-border shadow-xl rounded-md overflow-hidden">
                {proofPoints.map((item) => (
                  <div key={item.label} className="px-3 py-4 text-center border-r border-border last:border-r-0">
                    <p className="text-xl md:text-2xl font-extrabold text-primary">{item.value}</p>
                    <p className="text-[10px] uppercase text-muted-foreground mt-1">{item.label}</p>
                  </div>
                ))}
              </div>
              <div className="absolute right-6 top-6 inline-flex items-center gap-2 bg-background/90 border border-border px-3 py-2 rounded-md text-xs font-medium shadow-lg backdrop-blur">
                <CheckCircle2 className="h-4 w-4 text-primary" /> QA focused
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        className="absolute bottom-5 left-1/2 -translate-x-1/2 hidden md:flex items-center gap-2 text-xs uppercase text-muted-foreground hover:text-primary transition-colors"
        onClick={() => document.querySelector("#professional-projects")?.scrollIntoView({ behavior: "smooth" })}
      >
        View QA evidence <ArrowDownRight className="h-4 w-4" />
      </button>
    </section>
  );
};
