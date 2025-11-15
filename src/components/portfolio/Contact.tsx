import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Code, 
  Instagram,
  Twitter,
  Send,
  MessageCircle
} from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "ganeshkokate2025@gmail.com",
      href: "mailto:ganeshkokate2025@gmail.com",
      color: "text-primary"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      label: "Phone",
      value: "+91 7218061686",
      href: "tel:+917218061686",
      color: "text-accent"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      label: "Location",
      value: "Pune, Maharashtra, India",
      href: null,
      color: "text-primary"
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="h-5 w-5" />,
      url: "https://github.com/ganesh-kokate",
      username: "@ganesh-kokate",
      color: "hover:text-gray-900 dark:hover:text-white",
      bgColor: "hover:bg-gray-100 dark:hover:bg-gray-800"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      url: "https://www.linkedin.com/in/ganesh-santosh-kokate/",
      username: "Ganesh Santosh Kokate",
      color: "hover:text-blue-600",
      bgColor: "hover:bg-blue-50"
    },
    {
      name: "LeetCode",
      icon: <Code className="h-5 w-5" />,
      url: "https://leetcode.com/u/Ganeshkokate/",
      username: "@Ganeshkokate",
      color: "hover:text-orange-500",
      bgColor: "hover:bg-orange-50"
    },
    {
      name: "Instagram",
      icon: <Instagram className="h-5 w-5" />,
      url: "https://www.instagram.com/code__buddy__/",
      username: "@code__buddy__",
      color: "hover:text-pink-500",
      bgColor: "hover:bg-pink-50"
    },
    {
      name: "Twitter",
      icon: <Twitter className="h-5 w-5" />,
      url: "https://x.com/GaneshKokate_",
      username: "@GaneshKokate_",
      color: "hover:text-blue-400",
      bgColor: "hover:bg-blue-50"
    }
  ];

  return (
    <section id="contact" className="py-20 section-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to collaborate on innovative projects or discuss opportunities in backend development and AI engineering
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Contact Information */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10">
                    <MessageCircle className="h-6 w-6 text-primary" />
                  </div>
                  <span>Contact Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`${contact.color} mt-1`}>
                      {contact.icon}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-foreground mb-1">{contact.label}</p>
                      {contact.href ? (
                        <a 
                          href={contact.href}
                          className="text-muted-foreground hover:text-primary transition-colors duration-200"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{contact.value}</p>
                      )}
                    </div>
                  </div>
                ))}

                <div className="pt-6 border-t border-border">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    I'm always interested in discussing new opportunities, innovative projects, 
                    and collaborations. Whether you're looking for a backend developer, AI engineer, 
                    or want to connect about technology, feel free to reach out!
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-accent/10 to-primary/10">
                    <Send className="h-6 w-6 text-accent" />
                  </div>
                  <span>Quick Actions</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-primary to-accent text-white scale-on-hover"
                  asChild
                >
                  <a href="mailto:ganeshkokate2025@gmail.com">
                    <Mail className="mr-2 h-5 w-5" />
                    Send Email
                  </a>
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline"
                  className="w-full scale-on-hover"
                  asChild
                >
                  <a href="tel:+917218061686">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now
                  </a>
                </Button>

                <div className="pt-4">
                  <p className="text-sm font-medium text-foreground mb-3">Looking for:</p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">Full-time Backend Developer roles</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-sm text-muted-foreground">AI Engineer opportunities</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">Freelance consulting projects</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-sm text-muted-foreground">Technical collaborations</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Social Links */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-foreground text-center">
                Connect on Social Platforms
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex flex-col items-center p-4 rounded-lg border border-border transition-all duration-300 ${social.bgColor} ${social.color} scale-on-hover group`}
                  >
                    <div className="mb-2 group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </div>
                    <span className="font-medium text-sm mb-1">{social.name}</span>
                    <span className="text-xs text-muted-foreground text-center">
                      {social.username}
                    </span>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Footer */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground">
              © 2025 Ganesh Santosh Kokate. Built with React, TypeScript, and Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;