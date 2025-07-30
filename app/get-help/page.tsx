"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Phone,
  MessageCircle,
  Heart,
  Brain,
  Users,
  Clock,
  Shield,
  Headphones,
  Video,
  BookOpen,
  Activity,
  Zap,
  Target,
  Lightbulb,
} from "lucide-react";
import BreathingExercise from "@/components/breathing-exercise";
import GroundingExercise from "@/components/grounding-exercise";
import MentalHealthQuiz from "@/components/mental-health-quiz";
import ThoughtReframing from "@/components/thought-reframing";

export default function GetHelpPage() {
  const [activeExercise, setActiveExercise] = useState<string | null>(null);

  const crisisResources = [
    {
      name: "AURA Crisis Line",
      description: "24/7 mental health crisis support",
      contact: "+251-911-123456",
      type: "phone",
      available: "24/7",
      icon: Phone,
    },
    {
      name: "Emergency Services",
      description: "For immediate life-threatening situations",
      contact: "911",
      type: "emergency",
      available: "24/7",
      icon: Shield,
    },
    {
      name: "Telegram Support",
      description: "Chat with our support team",
      contact: "@AURA_Support",
      type: "chat",
      available: "9 AM - 9 PM",
      icon: MessageCircle,
    },
  ];

  const selfHelpTools = [
    {
      id: "breathing",
      title: "Breathing Exercise",
      description: "4-7-8 breathing technique for anxiety relief",
      duration: "5-10 minutes",
      difficulty: "Beginner",
      icon: Activity,
      color: "bg-blue-500",
    },
    {
      id: "grounding",
      title: "5-4-3-2-1 Grounding",
      description: "Sensory grounding technique for panic attacks",
      duration: "5-15 minutes",
      difficulty: "Beginner",
      icon: Target,
      color: "bg-green-500",
    },
    {
      id: "quiz",
      title: "Mental Health Check-in",
      description: "Quick assessment of your current mental state",
      duration: "3-5 minutes",
      difficulty: "Easy",
      icon: Brain,
      color: "bg-purple-500",
    },
    {
      id: "reframing",
      title: "Thought Reframing",
      description: "Transform negative thoughts into balanced perspectives",
      duration: "10-20 minutes",
      difficulty: "Intermediate",
      icon: Lightbulb,
      color: "bg-orange-500",
    },
  ];

  const professionalSupport = [
    {
      title: "Individual Counseling",
      description: "One-on-one sessions with licensed therapists",
      duration: "50 minutes",
      cost: "Free for AURA members",
      availability: "Mon-Fri, 9 AM - 6 PM",
      icon: Users,
    },
    {
      title: "Group Therapy",
      description: "Supportive group sessions on various topics",
      duration: "90 minutes",
      cost: "Free",
      availability: "Multiple times weekly",
      icon: Heart,
    },
    {
      title: "Family Counseling",
      description: "Support for families dealing with mental health challenges",
      duration: "60 minutes",
      cost: "Sliding scale",
      availability: "By appointment",
      icon: Users,
    },
  ];

  const handleToolClick = (toolId: string) => {
    setActiveExercise(toolId);
  };

  return (
    <div className="min-h-screen bg-[#FFFFF8] dark:bg-gray-900 pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-[#31960F] to-[#3284FC] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            You're Not Alone
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Whether you need immediate support or want to explore self-help
            tools, we're here to help you on your mental wellness journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4"
            >
              <Phone className="w-5 h-5 mr-2" />
              Crisis Support
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#31960F] font-semibold px-8 py-4 bg-transparent"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Chat with Us
            </Button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Tabs defaultValue="immediate" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-12 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-full p-2">
            <TabsTrigger
              value="immediate"
              className="rounded-full data-[state=active]:bg-red-500 data-[state=active]:text-white"
            >
              <Shield className="w-4 h-4 mr-2" />
              Crisis Support
            </TabsTrigger>
            <TabsTrigger
              value="selfhelp"
              className="rounded-full data-[state=active]:bg-[#31960F] data-[state=active]:text-white"
            >
              <Zap className="w-4 h-4 mr-2" />
              Self-Help Tools
            </TabsTrigger>
            <TabsTrigger
              value="professional"
              className="rounded-full data-[state=active]:bg-[#3284FC] data-[state=active]:text-white"
            >
              <Users className="w-4 h-4 mr-2" />
              Professional Help
            </TabsTrigger>
            <TabsTrigger
              value="resources"
              className="rounded-full data-[state=active]:bg-purple-500 data-[state=active]:text-white"
            >
              <BookOpen className="w-4 h-4 mr-2" />
              Resources
            </TabsTrigger>
          </TabsList>

          {/* Crisis Support Tab */}
          <TabsContent value="immediate" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Immediate Support
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                If you're in crisis or need immediate help, these resources are
                available now
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {crisisResources.map((resource, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-xl rounded-3xl hover-glow bg-white dark:bg-gray-800 transition-all duration-300"
                >
                  <CardContent className="p-8 text-center">
                    <div
                      className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center ${
                        resource.type === "emergency"
                          ? "bg-red-500"
                          : resource.type === "phone"
                          ? "bg-blue-500"
                          : "bg-green-500"
                      }`}
                    >
                      <resource.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {resource.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {resource.description}
                    </p>
                    <div className="space-y-2 mb-6">
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">
                        +251-911-123456
                      </div>{" "}
                      <Badge className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                        <Clock className="w-3 h-3 mr-1" />
                        {resource.available}
                      </Badge>
                    </div>
                    <Button
                      className={`w-full ${
                        resource.type === "emergency"
                          ? "bg-red-600 hover:bg-red-700"
                          : resource.type === "phone"
                          ? "bg-blue-600 hover:bg-blue-700"
                          : "bg-green-600 hover:bg-green-700"
                      } text-white`}
                    >
                      Contact Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-2xl p-6">
              <div className="flex items-start space-x-4">
                <Shield className="w-6 h-6 text-red-600 dark:text-red-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-red-900 dark:text-red-100 mb-2">
                    When to Seek Immediate Help
                  </h3>
                  <ul className="text-red-800 dark:text-red-200 space-y-1 text-sm">
                    <li>• Thoughts of suicide or self-harm</li>
                    <li>• Feeling like you might hurt someone else</li>
                    <li>• Severe panic attacks or anxiety</li>
                    <li>• Psychotic symptoms (hallucinations, delusions)</li>
                    <li>• Substance abuse emergencies</li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Self-Help Tools Tab */}
          <TabsContent value="selfhelp" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Self-Help Tools
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Interactive exercises to help you manage stress, anxiety, and
                difficult emotions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {selfHelpTools.map((tool) => (
                <Card
                  key={tool.id}
                  className="border-0 shadow-xl rounded-3xl hover-glow bg-white dark:bg-gray-800 transition-all duration-300 cursor-pointer"
                  onClick={() => handleToolClick(tool.id)}
                >
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div
                        className={`w-12 h-12 ${tool.color} rounded-full flex items-center justify-center`}
                      >
                        <tool.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                          {tool.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                          {tool.description}
                        </p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {tool.duration}
                          </div>
                          <Badge
                            variant="outline"
                            className="bg-transparent dark:bg-gray-700"
                          >
                            {tool.difficulty}
                          </Badge>
                        </div>
                        <Button className="w-full bg-[#31960F] hover:bg-[#2A7F0C] text-white">
                          Start Exercise
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-2xl p-6">
              <div className="flex items-start space-x-4">
                <Lightbulb className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                    Tips for Self-Help Success
                  </h3>
                  <ul className="text-blue-800 dark:text-blue-200 space-y-1 text-sm">
                    <li>• Find a quiet, comfortable space</li>
                    <li>• Practice regularly for best results</li>
                    <li>• Be patient with yourself - it takes time</li>
                    <li>
                      • Combine tools with professional support when needed
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Professional Help Tab */}
          <TabsContent value="professional" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Professional Support
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Connect with licensed mental health professionals for
                personalized care
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {professionalSupport.map((service, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-xl rounded-3xl hover-glow bg-white dark:bg-gray-800 transition-all duration-300"
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-[#3284FC] rounded-full flex items-center justify-center mx-auto mb-6">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {service.description}
                    </p>
                    <div className="space-y-2 mb-6 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-500 dark:text-gray-400">
                          Duration:
                        </span>
                        <span className="text-gray-900 dark:text-white">
                          {service.duration}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500 dark:text-gray-400">
                          Cost:
                        </span>
                        <span className="text-gray-900 dark:text-white">
                          {service.cost}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500 dark:text-gray-400">
                          Available:
                        </span>
                        <span className="text-gray-900 dark:text-white">
                          {service.availability}
                        </span>
                      </div>
                    </div>
                    <Button className="w-full bg-[#3284FC] hover:bg-[#2A73E3] text-white">
                      Book Appointment
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl p-6">
              <div className="flex items-start space-x-4">
                <Heart className="w-6 h-6 text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">
                    What to Expect
                  </h3>
                  <p className="text-green-800 dark:text-green-200 text-sm">
                    All our mental health professionals are licensed and trained
                    in culturally sensitive care. Your first session will focus
                    on understanding your needs and creating a personalized
                    treatment plan. Everything is confidential and
                    judgment-free.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Resources Tab */}
          <TabsContent value="resources" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Educational Resources
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Learn more about mental health through our curated content
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-0 shadow-lg rounded-2xl hover-glow bg-white dark:bg-gray-800">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Video className="w-8 h-8 text-[#31960F] mr-3" />
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Video Library
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Educational videos on mental health topics
                  </p>
                  <Button
                    variant="outline"
                    className="w-full bg-transparent dark:bg-gray-700"
                  >
                    Browse Videos
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg rounded-2xl hover-glow bg-white dark:bg-gray-800">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Headphones className="w-8 h-8 text-[#3284FC] mr-3" />
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Podcasts
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Mental health discussions and expert interviews
                  </p>
                  <Button
                    variant="outline"
                    className="w-full bg-transparent dark:bg-gray-700"
                  >
                    Listen Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg rounded-2xl hover-glow bg-white dark:bg-gray-800">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <BookOpen className="w-8 h-8 text-purple-500 mr-3" />
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Articles & Guides
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    In-depth articles on mental wellness topics
                  </p>
                  <Button
                    variant="outline"
                    className="w-full bg-transparent dark:bg-gray-700"
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Modals */}
      <BreathingExercise
        isOpen={activeExercise === "breathing"}
        onClose={() => setActiveExercise(null)}
      />
      <GroundingExercise
        isOpen={activeExercise === "grounding"}
        onClose={() => setActiveExercise(null)}
      />
      <MentalHealthQuiz
        isOpen={activeExercise === "quiz"}
        onClose={() => setActiveExercise(null)}
      />
      <ThoughtReframing
        isOpen={activeExercise === "reframing"}
        onClose={() => setActiveExercise(null)}
      />
    </div>
  );
}
