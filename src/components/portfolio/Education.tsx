import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Calendar, MapPin, Star, BookOpen } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Dr. D.Y. Patil Pratishthan's College of Engineering",
      duration: "2022 - 2025",
      location: "Pune, Maharashtra",
      grade: "CGPA: 7.7",
      status: "Pursuing",
      description: "Comprehensive computer science program with focus on software engineering, data structures, algorithms, and modern development practices.",
      highlights: [
        "Strong foundation in computer science fundamentals",
        "Practical experience in software development projects",
        "Active participation in coding competitions and hackathons",
        "Focus on backend development and AI technologies"
      ],
      color: "primary"
    },
    {
      degree: "Diploma in Computer Technology",
      institution: "Government Polytechnic Solapur",
      duration: "2019 - 2022",
      location: "Solapur, Maharashtra",
      grade: "85.43%",
      status: "Completed",
      description: "Specialized technical education in computer technology with hands-on experience in programming, database management, and web development.",
      highlights: [
        "Strong academic performance with 85.43% marks",
        "Practical training in multiple programming languages",
        "Web development and database management projects",
        "Foundation for advanced computer science studies"
      ],
      color: "accent"
    }
  ];

  const relevantCourses = [
    "Data Structures & Algorithms",
    "Software Engineering",
    "Database Management Systems",
    "Computer Networks",
    "Operating Systems",
    "Web Technologies",
    "Object-Oriented Programming",
    "System Design",
    "Machine Learning Fundamentals",
    "Microservices Architecture"
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Education</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground">
              Academic foundation in computer science and technology
            </p>
          </div>

          <div className="space-y-8 mb-16">
            {educationData.map((edu, index) => (
              <Card key={index} className="scale-on-hover border-0 shadow-lg overflow-hidden">
                <div className="relative">
                  {/* Background Gradient */}
                  <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${
                    edu.color === 'primary' ? 'from-primary to-primary/70' : 'from-accent to-accent/70'
                  }`}></div>
                  
                  <CardHeader className="pb-4 pt-6">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className={`p-2 rounded-lg ${
                            edu.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'
                          }`}>
                            <GraduationCap className={`h-6 w-6 ${
                              edu.color === 'primary' ? 'text-primary' : 'text-accent'
                            }`} />
                          </div>
                          <Badge className={
                            edu.status === 'Pursuing' 
                              ? 'bg-gradient-to-r from-primary to-accent text-white' 
                              : 'bg-gradient-to-r from-accent to-primary text-white'
                          }>
                            {edu.status}
                          </Badge>
                        </div>
                        
                        <CardTitle className="text-xl font-bold text-foreground mb-2">
                          {edu.degree}
                        </CardTitle>
                        
                        <div className="space-y-2 text-muted-foreground">
                          <div className="flex items-center space-x-2">
                            <BookOpen className="h-4 w-4" />
                            <span className="font-medium">{edu.institution}</span>
                          </div>
                          
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-1">
                              <Calendar className="h-4 w-4" />
                              <span>{edu.duration}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin className="h-4 w-4" />
                              <span>{edu.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Star className={`h-5 w-5 ${
                          edu.color === 'primary' ? 'text-primary' : 'text-accent'
                        }`} />
                        <span className="text-lg font-bold text-foreground">{edu.grade}</span>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {edu.description}
                    </p>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Key Highlights:</h4>
                      <ul className="space-y-2">
                        {edu.highlights.map((highlight, highlightIndex) => (
                          <li key={highlightIndex} className="flex items-start space-x-3">
                            <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                              edu.color === 'primary' ? 'bg-primary' : 'bg-accent'
                            }`}></div>
                            <span className="text-muted-foreground">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>

          {/* Relevant Coursework */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-foreground flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <span>Relevant Coursework</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {relevantCourses.map((course, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="skill-badge text-xs p-2 text-center"
                  >
                    {course}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;