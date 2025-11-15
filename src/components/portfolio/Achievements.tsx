import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Code, Users, Award, Target, Star } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "350+ LeetCode Problems",
      description: "Solved over 350 algorithmic challenges, demonstrating strong problem-solving skills and data structures knowledge",
      category: "Programming",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Top 5% NPTEL Certification",
      description: "Ranked in the top 5% for Programming in Java certification from IIT Kharagpur (NPTEL)",
      category: "Certification",
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "100K+ Community Members",
      description: "Built and grew an engaged Java developer community of over 100,000 members across Instagram and Telegram",
      category: "Community",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "95% AI Accuracy",
      description: "Achieved 95%+ accuracy in AI-powered HLD generation system, validated on 50+ real-world scenarios",
      category: "AI Development",
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "60% Efficiency Improvement",
      description: "Reduced manual development effort by 60% through innovative AI agent implementation and workflow automation",
      category: "Innovation",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Security Expert",
      description: "Implemented comprehensive security measures including JWT authentication, BCrypt encryption, and Spring Security",
      category: "Security",
      color: "text-accent",
      bgColor: "bg-accent/10"
    }
  ];

  return (
    <section id="achievements" className="py-20 section-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Achievements & Recognition</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Highlighting key milestones, certifications, and community contributions in software development
            </p>
          </div>



          {/* Detailed Achievements */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="scale-on-hover border-0 shadow-lg overflow-hidden">
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 rounded-xl ${achievement.bgColor} flex items-center justify-center mb-4`}>
                    <div className={achievement.color}>
                      {achievement.icon}
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="skill-badge text-xs">
                      {achievement.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-bold text-foreground">
                    {achievement.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <Card className="border-2 border-gradient bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Connect with the Community</h3>
                <p className="text-muted-foreground mb-6">
                  Join our growing community of Java developers and stay updated with the latest in backend development
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Badge className="bg-gradient-to-r from-primary to-accent text-white px-6 py-3 text-base scale-on-hover cursor-pointer">
                    Instagram: @code__buddy__
                  </Badge>
                  <Badge className="bg-gradient-to-r from-accent to-primary text-white px-6 py-3 text-base scale-on-hover cursor-pointer">
                    Telegram Community
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;