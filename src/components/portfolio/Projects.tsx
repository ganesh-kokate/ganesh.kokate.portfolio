import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Video, FileText, MessageSquare } from 'lucide-react';
import meetwiseImage from '@/assets/meetwise-project.jpg';
import pdfgeniusImage from '@/assets/pdfgenius-project.jpg';
import securechatImage from '@/assets/securechat-project.jpg';

const Projects = () => {
  const projects = [
    {
      title: "MeetWise.AI",
      description: "AI-powered video conferencing platform with real-time transcription, meeting summaries, and key decision extraction using advanced LLM integration.",
      image: meetwiseImage,
      icon: <Video className="h-6 w-6" />,
      technologies: [
        "Spring Boot",
        "WebRTC",
        "WebSocket",
        "Deepgram",
        "Groq LLM",
        "JWT",
        "API Gateway",
        "Puppeteer"
      ],
      features: [
        "5+ Spring Boot microservices with centralized API Gateway",
        "Real-time meeting transcripts with 95%+ accuracy",
        "AI-generated meeting summaries and key decisions",
        "JWT-based role-based authentication",
        "Puppeteer bot for automated meeting recording",
        "Non-blocking communication with WebClient"
      ],
      githubUrl: "https://github.com/ganesh-kokate/MeetwiseAi-v2",
      liveUrl: null,
      category: "AI & Backend"
    },
    {
      title: "PDFGenius.AI",
      description: "Smart PDF query platform that enables natural language interaction with PDF documents using advanced AI embeddings and retrieval systems.",
      image: pdfgeniusImage,
      icon: <FileText className="h-6 w-6" />,
      technologies: [
        "Spring Boot",
        "LangChain4J",
        "Groq LLM",
        "AstraDB",
        "REST API",
        "Spring AI",
        "Vector Embeddings"
      ],
      features: [
        "Natural language PDF querying with LangChain4J",
        "Vector embeddings for efficient content retrieval",
        "AstraDB integration for fast search operations",
        "RESTful API design with Spring Boot",
        "AI-powered document understanding",
        "Scalable microservices architecture"
      ],
      githubUrl: "https://github.com/ganesh-kokate",
      liveUrl: null,
      category: "AI & Document Processing"
    },
    {
      title: "SecureChat",
      description: "Real-time secure chat application with end-to-end encryption, WebSocket communication, and comprehensive security measures.",
      image: securechatImage,
      icon: <MessageSquare className="h-6 w-6" />,
      technologies: [
        "Spring Boot",
        "Spring Security 6.0",
        "WebSocket",
        "BCrypt",
        "JWT",
        "Real-time Communication"
      ],
      features: [
        "Real-time WebSocket-based communication",
        "Spring Security 6.0 authentication",
        "BCrypt password encryption",
        "Secure chat room functionality",
        "Session management and user authentication",
        "Message encryption and security best practices"
      ],
      githubUrl: "https://github.com/ganesh-kokate",
      liveUrl: null,
      category: "Security & Real-time"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Showcasing innovative solutions in AI integration, backend development, and secure systems
            </p>
          </div>

          <div className="grid lg:grid-cols-1 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`scale-on-hover border-0 shadow-lg overflow-hidden ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } lg:flex`}
              >
                {/* Project Image */}
                <div className="lg:w-1/2">
                  <div className="relative h-64 lg:h-full">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"></div>
                    <div className="absolute top-4 left-4">
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2">
                        <div className="text-primary">
                          {project.icon}
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white/90 text-foreground backdrop-blur-sm">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="lg:w-1/2">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-2xl font-bold text-foreground mb-2">
                      {project.title}
                    </CardTitle>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Key Features */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {project.features.slice(0, 4).map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-gradient-to-r from-primary to-accent rounded-full mt-2.5 flex-shrink-0"></div>
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="skill-badge text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3 pt-4">
                      <Button
                        className="bg-gradient-to-r from-primary to-accent text-white scale-on-hover"
                        asChild
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          View Code
                        </a>
                      </Button>

                      {project.liveUrl && (
                        <Button variant="outline" className="scale-on-hover" asChild>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>

          {/* View More Projects */}
          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="scale-on-hover border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              asChild
            >
              <a href="https://github.com/ganesh-kokate" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;