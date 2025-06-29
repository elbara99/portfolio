import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '0cb3bfc3-2253-4594-a4b3-bdca4a4d043e',
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Portfolio Contact from ${formData.name}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Message Sent Successfully!",
          description: "Thank you for reaching out. I'll get back to you soon!",
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Failed to Send",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Let's Build Something Together!
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded"></div>
          <p className="text-lg text-gray-400 mt-6 max-w-2xl mx-auto">
            Ready to turn your ideas into reality? Let's connect and discuss how we can work together.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-slate-800/20 border-slate-700/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="bg-slate-700/50 border-slate-600/50 text-white placeholder-gray-400 focus:border-primary"
                  />
                </div>
                
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="bg-slate-700/50 border-slate-600/50 text-white placeholder-gray-400 focus:border-primary"
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    rows={5}
                    className="bg-slate-700/50 border-slate-600/50 text-white placeholder-gray-400 focus:border-primary"
                  />
                </div>
                
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-slate-800/20 border-slate-700/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a 
                      href="mailto:elbaraemoueffek@gmail.com"
                      className="text-white hover:text-primary transition-colors duration-200"
                    >
                      elbaraemoueffek@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                    <Github className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">GitHub</p>
                    <a 
                      href="https://github.com/elbara99"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-primary transition-colors duration-200"
                    >
                      github.com/elbara99
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                    <Linkedin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">LinkedIn</p>
                    <a 
                      href="https://www.linkedin.com/in/elbara-mouaffak-781655206/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-primary transition-colors duration-200"
                    >
                      Elbara on LinkedIn
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <div className="text-center p-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border border-slate-700/50">
              <h3 className="text-2xl font-semibold text-white mb-4">Ready to Start?</h3>
              <p className="text-gray-400 mb-6">
                Whether you need a modern website, AI automation, or custom development solutions, 
                I'm here to help bring your vision to life.
              </p>
              <Button className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-3">
                Let's Discuss Your Project
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
