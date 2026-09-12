import { ExternalLink, Github, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const professionalProjects = [
  {
    title: "Sufra OS - Full Performance Testing Project",
    description:
      "This project helped me strengthen my skills in ensuring software reliability, responsiveness, and stability under varying user loads.",
    videoUrl: `${import.meta.env.BASE_URL}videos/sufra_os.webm`,
    thumbnail: `${import.meta.env.BASE_URL}thumbnails/sufra_os_thumb.jpg`,
    reportUrl: "https://dilsenevirathna.github.io/Sufra_OS_Full-Testing-Project/index.html",
    github: "https://github.com/DilSenevirathna/Sufra_OS_Full-Testing-Project",
    workedOn: [
      "Designed and executed load and stress tests using Apache JMeter",
      "Measured response time, throughput, and error rate under different conditions",
      "Analyzed performance bottlenecks and suggested improvements",
      "Created detailed performance reports to visualize results and insights",
    ],
    learnings: [
      "Improved understanding of performance testing lifecycle",
      "Learned to interpret metrics to evaluate system health",
      "Strengthened analytical mindset in identifying and solving performance issues",
    ],
  },
  {
    title: "ArivPay Sign-Up Process - Playwright Test Automation",
    description:
      "This project helped me strengthen my skills in UI automation, test design, and validation of multi-step registration workflows — key areas in ensuring a smooth and reliable user experience.",
    videoUrl: `${import.meta.env.BASE_URL}videos/ariv_pay.webm`,
    thumbnail: `${import.meta.env.BASE_URL}thumbnails/ariv_pay_thumb.jpg`,
    reportUrl: "https://dilsenevirathna.github.io/ArivPay_SignUp_process_PlaywrightsTest/",
    github: "https://github.com/DilSenevirathna/ArivPay_SignUp_process_PlaywrightsTestrepo",
    workedOn: [
      "Automated the four-step registration process of ArivPay using Playwright",
      "Validated input fields, error handling, and user feedback messages",
      "Implemented end-to-end tests covering both valid and invalid scenarios",
      "Designed test structure and scripts following the Page Object Model (POM) for scalability",
      "Generated and hosted test execution reports using GitHub Pages",
      "Tools: Playwright, TypeScript/JavaScript, GitHub Actions, HTML Reports",
    ],
    learnings: [
      "Enhanced understanding of modern automation frameworks",
      "Practiced modular test design and data-driven testing approaches",
      "Gained experience in reporting and version control using GitHub",
    ],
  },
];

export const ProfessionalProjects = () => (
  <section id="professional-projects" className="py-24 bg-muted/30">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16 animate-fade-up">
        <p className="inline-block px-6 py-2 bg-primary/10 backdrop-blur-sm rounded-full text-sm font-semibold mb-4 text-primary border border-primary/20">
          Real-World QA Experience
        </p>
        <h2 className="text-4xl md:text-6xl font-bold mb-4">
          Professional <span className="gradient-text">Projects</span>
        </h2>
        <div className="w-24 h-1.5 gradient-primary mx-auto rounded-full" />
        <p className="text-muted-foreground mt-6 text-lg max-w-3xl mx-auto">
          Performance testing and test automation projects completed for production software products.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {professionalProjects.map((project) => (
          <Card key={project.title} className="p-6 border-2 hover:shadow-xl transition-all group flex flex-col">
            <div className="space-y-6 flex-1 flex flex-col">
              <div className="relative rounded-lg overflow-hidden shadow-lg bg-muted aspect-video mb-4">
                <video controls className="w-full h-full object-cover" poster={project.thumbnail}>
                  <source src={project.videoUrl} type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className="space-y-4 flex-1 flex flex-col">
                <div>
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center mb-3 group-hover:animate-pulse-glow">
                    <Play className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">What I Worked On</h4>
                  <ul className="space-y-1 text-muted-foreground text-sm">
                    {project.workedOn.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Key Learnings</h4>
                  <ul className="space-y-1 text-muted-foreground text-sm">
                    {project.learnings.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-2 mt-auto pt-4">
                  <Button size="sm" variant="outline" className="gap-2 flex-1" asChild>
                    <a href={project.reportUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      View Report
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" aria-label={`View ${project.title} on GitHub`} asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  </section>
);