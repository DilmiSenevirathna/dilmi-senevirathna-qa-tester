import { ExternalLink, Github, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import intajVideoAsset from "@/assets/browserstack-intaj-mobile-testing.mp4.asset.json";
import sufraVideoAsset from "@/assets/sufra-os-digital-qa-report.mp4.asset.json";

const professionalProjects = [
  {
    title: "SUFRA OS – Restaurant Management System | Digital QA Report",
    description:
      "This testing video presents the complete Digital QA Report I developed for the SUFRA OS Restaurant Management System during my previous workplace experience. It provides a reliable, flexible, and maintainable approach to software testing and defect tracking across multiple testing cycles.",
    videoUrl: sufraVideoAsset.url,
    videoType: "video/mp4",
    thumbnail: `${import.meta.env.BASE_URL}thumbnails/sufra_os_thumb.jpg`,
    reportUrl: "https://dilsenevirathna.github.io/Sufra_OS_Full-Testing-Project/index.html",
    github: "https://github.com/DilSenevirathna/Sufra_OS_Full-Testing-Project",
    workedOn: [
      "Documented the complete testing process and system quality evaluation",
      "Created and maintained test scenarios covering key restaurant management workflows",
      "Recorded identified defects, testing results, and supporting evidence",
      "Designed a reusable digital report that is easy to update, manage, and review",
    ],
    learnings: [
      "Improved the efficiency and consistency of reporting across different testing cycles",
      "Strengthened practical experience in defect tracking and quality evaluation",
      "Developed a maintainable QA reporting approach for ongoing product improvement",
    ],
  },
  {
    title: "ArivPay Sign-Up Process - Playwright Test Automation",
    description:
      "This project helped me strengthen my skills in UI automation, test design, and validation of multi-step registration workflows — key areas in ensuring a smooth and reliable user experience.",
    videoUrl: `${import.meta.env.BASE_URL}videos/ariv_pay.webm`,
    videoType: "video/webm",
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
  {
    title: "INTAJ Mobile Application - BrowserStack Automated Testing",
    description:
      "Automated mobile testing of INTAJ, an event-services marketplace connecting clients with photographers, videographers, event planners, and other vendors.",
    videoUrl: intajVideoAsset.url,
    videoType: "video/mp4",
    workedOn: [
      "Executed automated mobile tests across real devices and operating systems using BrowserStack",
      "Validated vendor-side workflows for presenting and managing event-related services",
      "Tested client journeys for discovering and hiring suitable event vendors",
      "Verified invitation card creation and sharing with contacts and groups",
      "Validated invitation delivery through email, WhatsApp, and standard text messages",
    ],
    learnings: [
      "Strengthened cross-device mobile application testing and compatibility analysis",
      "Improved end-to-end validation of multi-role vendor and client workflows",
      "Gained practical experience testing third-party communication and sharing channels",
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
                <video controls preload="metadata" className="w-full h-full object-cover" poster={project.thumbnail}>
                  <source src={project.videoUrl} type={project.videoType} />
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

                {(project.reportUrl || project.github) && (
                  <div className="flex gap-2 mt-auto pt-4">
                    {project.reportUrl && (
                      <Button size="sm" variant="outline" className="gap-2 flex-1" asChild>
                        <a href={project.reportUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                          View Report
                        </a>
                      </Button>
                    )}
                    {project.github && (
                      <Button size="sm" variant="outline" aria-label={`View ${project.title} on GitHub`} asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  </section>
);