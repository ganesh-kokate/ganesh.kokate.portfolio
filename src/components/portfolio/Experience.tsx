import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Software Developer Intern",
      company: "TechBulls SoftTech",
      location: "Pune",
      duration: "April 2025 - Present",
      type: "Internship",
      achievements: [
        "Built an AI-powered development agent using LangGraph, generating accurate High-Level Design (HLD) from natural language inputs with 95%+ consistency",
        "Validated AI agent performance on 50+ scenarios, ensuring reliability and accuracy",
        "Tuned prompt structure and flow logic, improving HLD generation and reducing manual effort by 60%",
        "Built a secure Document Vault module with Spring Boot and integrated React/Redux UI",
        "Implemented comprehensive security measures and user authentication systems"
      ],
      technologies: ["Spring Boot", "LangGraph", "React", "Redux", "AI/ML", "Security"]
    }
  ];

  return (
    <section id="experience" className="py-20 section-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Work Experience</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground">
              Professional experience in AI-driven software development and secure backend systems
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <Card key={index} className="scale-on-hover border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl font-bold text-foreground mb-2">
                        {experience.title}
                      </CardTitle>
                      <div className="flex items-center space-x-4 text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Building className="h-4 w-4" />
                          <span className="font-medium">{experience.company}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{experience.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col sm:items-end space-y-2">
                      <div className="flex items-center space-x-1 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{experience.duration}</span>
                      </div>
                      <Badge className="bg-gradient-to-r from-primary to-accent text-white w-fit">
                        {experience.type}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4">
                    <ul className="space-y-3">
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-foreground leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-4 border-t border-border">
                      <h4 className="text-sm font-semibold text-foreground mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="skill-badge">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Current Focus */}
          <div className="mt-12 text-center">
            <Card className="border-2 border-gradient bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Currently Seeking</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Full-time opportunities in Backend Development and AI Engineering roles
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <Badge className="bg-primary text-primary-foreground px-4 py-2">Backend Developer</Badge>
                  <Badge className="bg-accent text-accent-foreground px-4 py-2">AI Engineer</Badge>
                  <Badge className="bg-gradient-to-r from-primary to-accent text-white px-4 py-2">Full Stack Developer</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;