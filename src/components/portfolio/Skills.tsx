import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Server,
  Globe,
  Database,
  Code,
  Settings,
  Brain,
  Coffee,
  Layers
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Development",
      icon: <Server className="h-6 w-6" />,
      skills: ["Spring", "Spring Boot", "Spring WebFlux", "Hibernate", "REST APIs", "Microservices"],
      color: "text-primary"
    },
    {
      title: "Frontend Development",
      icon: <Globe className="h-6 w-6" />,
      skills: ["Angular", "HTML", "CSS", "JavaScript", "TypeScript"],
      color: "text-accent"
    },
    {
      title: "Databases",
      icon: <Database className="h-6 w-6" />,
      skills: ["MySQL", "PostgreSQL", "MongoDB", "AstraDB"],
      color: "text-primary"
    },
    {
      title: "Programming Languages",
      icon: <Code className="h-6 w-6" />,
      skills: ["Java", "Python", "C", "C++"],
      color: "text-accent"
    },
    {
      title: "AI & ML Technologies",
      icon: <Brain className="h-6 w-6" />,
      skills: ["LangChain4J", "LangGraph", "LangSmith", "Groq LLM", "Spring AI"],
      color: "text-primary"
    },
    {
      title: "Tools & Technologies",
      icon: <Settings className="h-6 w-6" />,
      skills: ["Docker", "Kafka", "Zipkin", "Postman", "GitHub", "WebRTC", "JWT"],
      color: "text-accent"
    },
    {
      title: "Testing & Quality",
      icon: <Layers className="h-6 w-6" />,
      skills: ["JUnit", "Spring Security", "BCrypt", "API Testing"],
      color: "text-primary"
    },
    {
      title: "Legacy Development",
      icon: <Server className="h-6 w-6" />,
      skills: ["Spring (XML Config)", "MyBatis", "AngularJS", "JAX-RS", "JSP/Servlets"],
      color: "text-gray-400"
    }
    ,
    {
      title: "Other Skills",
      icon: <Coffee className="h-6 w-6" />,
      skills: ["Data Structures & Algorithms", "System Design", "Microservices Architecture"],
      color: "text-accent"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Technical Skills</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building modern, scalable applications with AI integration
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="scale-on-hover border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center space-x-3">
                    <div className={category.color}>
                      {category.icon}
                    </div>
                    <span className="text-lg font-semibold">{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="skill-badge text-xs px-3 py-1 font-medium"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Featured Technologies */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-8">Featured Technologies</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {["Spring Boot", "LangChain", "Docker", "PostgreSQL", "Angular", "Kafka"].map((tech, index) => (
                <Badge
                  key={index}
                  className="bg-gradient-to-r from-primary to-accent text-white px-6 py-2 text-base font-semibold scale-on-hover"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;