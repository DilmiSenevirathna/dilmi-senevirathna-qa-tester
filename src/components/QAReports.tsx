import { ExternalLink, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import pwPdf from "@/assets/reports/QA_Test_Report_Playwright_E2E_DilmiSenevirathna.pdf.asset.json";
import pwThumb from "@/assets/reports/QA_Test_Report_Playwright_E2E_DilmiSenevirathna-thumb.jpg.asset.json";
import cyPdf from "@/assets/reports/QA_Test_Report_Cypress_E2E_DilmiSenevirathna.pdf.asset.json";
import cyThumb from "@/assets/reports/QA_Test_Report_Cypress_E2E_DilmiSenevirathna-thumb.jpg.asset.json";
import selPdf from "@/assets/reports/QA_Test_Report_Selenium_Regression_DilmiSenevirathna.pdf.asset.json";
import selThumb from "@/assets/reports/QA_Test_Report_Selenium_Regression_DilmiSenevirathna-thumb.jpg.asset.json";
import bsPdf from "@/assets/reports/QA_Test_Report_BrowserStack_CrossBrowser_DilmiSenevirathna.pdf.asset.json";
import bsThumb from "@/assets/reports/QA_Test_Report_BrowserStack_CrossBrowser_DilmiSenevirathna-thumb.jpg.asset.json";
import apiPdf from "@/assets/reports/QA_Test_Report_ShowOff_API_Testing_DilmiSenevirathna.pdf.asset.json";
import apiThumb from "@/assets/reports/QA_Test_Report_ShowOff_API_Testing_DilmiSenevirathna-thumb.jpg.asset.json";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const QAReports = () => {
  const testReports = [
    { title: "Playwright E2E – SauceDemo Web App", description: "End-to-end test summary report built with the Playwright automation framework.", pdf: pwPdf.url, thumb: pwThumb.url },
    { title: "Cypress E2E – SauceDemo Web App", description: "End-to-end test summary report built with the Cypress automation framework.", pdf: cyPdf.url, thumb: cyThumb.url },
    { title: "Selenium Regression – SauceDemo Web App", description: "Functional regression test report using a Selenium WebDriver automation suite.", pdf: selPdf.url, thumb: selThumb.url },
    { title: "BrowserStack Cross-Browser – SauceDemo Web App", description: "Cross-browser and cross-device compatibility report using BrowserStack Automate & Live.", pdf: bsPdf.url, thumb: bsThumb.url },
    { title: "API Testing – ShowOff API", description: "RESTful API test summary report using a Postman / Newman automation suite.", pdf: apiPdf.url, thumb: apiThumb.url },
  ];

  const certifications = [
    {
      title: "Cost of Software Quality",
      date: "February 2024",
      url: "https://drive.google.com/file/d/1U2e58T7ftRppektEqXWGoglfTYcX42TF/view?usp=sharing",
    },
    {
      title: "Foundation of Successful Automation",
      date: "February 2024",
      url: "https://drive.google.com/file/d/1sT6MziIed9BOd8noZjXYcWtLX5Oebyva/view?usp=drive_link",
    },
    {
      title: "Quality Assurance Techniques and Methodologies",
      date: "March 2024",
      url: "https://drive.google.com/file/d/1PZL21BNbwgvXv4c8fH0CLqsDrl6BB6yF/view?usp=drive_link",
    },
    {
      title: "API Test Automation with Postman",
      date: "March 2024",
      url: "https://drive.google.com/file/d/1GB0VlYlKxwMhawa7nO9gJW4rj2V8JCyt/view?usp=drive_link",
    },
    {
      title: "Continuous Testing",
      date: "March 2024",
      url: "https://drive.google.com/file/d/1DQEADRzn0jwHyMb4fj1rB34gfXvaHarN/view?usp=drive_link",
    },
    {
      title: "Web Element Locator Strategies",
      date: "April 2024",
      url: "https://drive.google.com/file/d/19afDi6S2fz9Ap6jayPIEI161zcIUEYnp/view?usp=drive_link",
    },
    {
      title: "Codeless Test Automation with Selenium IDE",
      date: "April 2024",
      url: "https://drive.google.com/file/d/1SP_2bj1oMv2kpwrRVRHhrE0UstGKHgv-/view?usp=drive_link",
    },
  ];

  return (
    <section id="qa-reports" className="py-24 bg-gradient-to-b from-background via-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-block px-6 py-2 bg-primary/10 backdrop-blur-sm rounded-full text-sm font-semibold mb-4 text-primary border border-primary/20">
            🎯 Quality Assurance Expertise
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            QA Reports & <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-24 h-1.5 gradient-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 text-lg max-w-3xl mx-auto">
            Comprehensive quality assurance portfolio showcasing automated testing, performance validation, and professional certifications in software testing methodologies
          </p>
        </div>

        <Tabs defaultValue="reports" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="reports">Test Reports</TabsTrigger>
            <TabsTrigger value="certifications">Certifications</TabsTrigger>
          </TabsList>
          {/* Test Reports */}
          <TabsContent value="reports" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testReports.map((report, index) => (
                <Card
                  key={index}
                  className="p-6 overflow-hidden border-2 hover:shadow-xl transition-all hover:-translate-y-2 group"
                >
                  <a href={report.pdf} target="_blank" rel="noopener noreferrer" className="block aspect-[3/4] -mx-6 -mt-6 mb-4 overflow-hidden bg-muted border-b border-border">
                    <img src={report.thumb} alt={`${report.title} cover`} loading="lazy" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300" />
                  </a>
                  <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">
                    {report.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm line-clamp-3">
                    {report.description}
                  </p>
                  <Button size="sm" variant="outline" className="gap-2 w-full" asChild>
                    <a href={report.pdf} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      Preview Report
                    </a>
                  </Button>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Certifications */}
          <TabsContent value="certifications" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <Card
                  key={index}
                  className="p-6 border-2 hover:shadow-xl transition-all hover:-translate-y-2 group"
                >
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center mb-4 group-hover:animate-pulse-glow">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{cert.date}</p>
                  <Button size="sm" className="gap-2 w-full" asChild>
                    <a href={cert.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      View Certificate
                    </a>
                  </Button>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
