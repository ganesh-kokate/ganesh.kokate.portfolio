import { Card, CardContent } from '@/components/ui/card';
import { Code, Database, Brain, Server } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Server className="h-8 w-8 text-primary" />,
      title: "Backend Development",
      description: "Expert in Spring, Spring Boot, microservices, and secure REST APIs"
    },
    {
      icon: <Brain className="h-8 w-8 text-accent" />,
      title: "AI Integration",
      description: "Experienced with LangChain, LangGraph, and AI-driven systems"
    },
    {
      icon: <Database className="h-8 w-8 text-primary" />,
      title: "Database Design",
      description: "Proficient in MySQL, PostgreSQL, MongoDB, AstraDB"
    },
    {
      icon: <Code className="h-8 w-8 text-accent" />,
      title: "Full Stack",
      description: "Angular frontend development and Spring Boot for Backend with modern web technologies"
    }
  ];

  return (
    <section id="about" className="py-20 section-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              I'm a passionate Backend & AI Developer from Pune, Maharashtra, with expertise in building
              scalable, secure systems that leverage artificial intelligence to automate complex workflows.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image Placeholder */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="w-full max-w-md mx-auto bg-gradient-to-br from-primary to-accent rounded-2xl p-1">
                  <div className="bg-background rounded-2xl p-8 text-center">
                    <div className="w-48 h-48 mx-auto bg-gradient-to-br from-primary/10 to-accent/10 rounded-full flex items-center justify-center mb-6">
                      <Code className="h-24 w-24 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Ganesh Santosh Kokate</h3>
                    <p className="text-muted-foreground">Backend & AI Developer</p>
                    <p className="text-sm text-muted-foreground mt-2">Pune, Maharashtra</p>
                  </div>
                </div>
              </div>
            </div>

            {/* About Content */}
            <div className="order-1 lg:order-2">
              <div className="space-y-6">
                <p className="text-foreground leading-relaxed">
                  I am Ganesh Kokate, a passionate and results-driven Backend Engineer with expertise in Java, Spring Boot, and modern backend technologies. With a strong foundation in microservices architecture, I have experience building scalable and secure applications. My technical repertoire spans Spring WebFlux, Hibernate, REST APIs, and WebRTC, complemented by a solid understanding of data structures and algorithms.
                </p>

                <p className="text-foreground leading-relaxed">
                  I have contributed to various impactful projects, including the development of an e-commerce platform prototype with event-driven communication using Kafka, and secure chat platforms utilizing WebSocket and Spring Security. My latest endeavors involve building innovative applications like PDFGenius.AI for intelligent PDF querying and MeetWise.AI, a collaborative meeting platform.
                </p>

                <p className="text-foreground leading-relaxed">
                  Beyond professional projects, I’ve built an active Java developer community of over **100,000+ members** on Instagram and Telegram, sharing knowledge and fostering engagement among programming enthusiasts.                </p>

                <div className="grid sm:grid-cols-2 gap-4 mt-8">
                  {highlights.map((highlight, index) => (
                    <Card key={index} className="border-0 shadow-md scale-on-hover">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0">
                            {highlight.icon}
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-2">{highlight.title}</h4>
                            <p className="text-sm text-muted-foreground">{highlight.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;