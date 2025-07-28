// data.js
const services = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Custom websites and web applications built with cutting-edge technologies",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    color: "#0066FF",
    icon: "ð",
  },
  {
    id: 2,
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android",
    technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
    color: "#FF6600",
    icon: "ð±",
  },
  {
    id: 3,
    title: "AI & Machine Learning",
    description:
      "Intelligent solutions powered by artificial intelligence and machine learning",
    technologies: ["Python", "TensorFlow", "PyTorch", "OpenAI"],
    color: "#00CC66",
    icon: "ð¤",
  },
  {
    id: 4,
    title: "Cybersecurity",
    description:
      "Comprehensive security solutions to protect your digital assets",
    technologies: ["Penetration Testing", "Security Audits", "Compliance"],
    color: "#FF3366",
    icon: "ð",
  },
  {
    id: 5,
    title: "UI/UX Design",
    description:
      "Beautiful and intuitive user interfaces that enhance user experience",
    technologies: ["Figma", "Adobe XD", "Sketch", "Prototyping"],
    color: "#9966FF",
    icon: "ð¨",
  },
  {
    id: 6,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and deployment solutions",
    technologies: ["AWS", "Google Cloud", "Azure", "Docker"],
    color: "#00CCCC",
    icon: "âï¸",
  },
];
const portfolio = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Full-featured online store with payment integration",
    technologies: ["React", "Node.js", "Stripe"],
    category: "Web Development",
    image: "/api/placeholder/400/300",
    color: "#0066FF",
    icon: "🏒",
  },
  {
    id: 2,
    title: "Healthcare Mobile App",
    description: "Patient management system for healthcare providers",
    technologies: ["React Native", "Firebase"],
    category: "Mobile Development",
    image: "/api/placeholder/400/300",
    color: "#FF6600",
    icon: "🏥",
  },
  {
    id: 3,
    title: "AI Chatbot Solution",
    description: "Intelligent customer support chatbot",
    technologies: ["Python", "NLP", "OpenAI"],
    category: "AI & Machine Learning",
    image: "/api/placeholder/400/300",
    color: "#00CC66",
    icon: "💬",
  },
];

const teamData = [
  {
    id: 1,
    name: "Alex Thompson",
    role: "CEO & Founder",
    expertise: "Full-Stack Development, AI/ML",
    image: "/api/placeholder/200/200",
    avatar: "ð¨âð¼",
    social: {
      linkedin: "https://linkedin.com/in/alexthompson",
      github: "https://github.com/alexthompson",
    },
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "CTO",
    expertise: "System Architecture, Cloud Solutions",
    image: "/api/placeholder/200/200",
    avatar: "ð©âð»",
    social: {
      linkedin: "https://linkedin.com/in/priyapatel",
      github: "https://github.com/priyapatel",
    },
  },
  {
    id: 3,
    name: "David Kim",
    role: "Lead Designer",
    expertise: "UI/UX Design, Branding",
    image: "/api/placeholder/200/200",
    avatar: "ð¨âð¨",
    social: {
      linkedin: "https://linkedin.com/in/davidkim",
      dribbble: "https://dribbble.com/davidkim",
    },
  },
  {
    id: 4,
    name: "Lisa Wang",
    role: "Security Expert",
    expertise: "Cybersecurity, Penetration Testing",
    image: "/api/placeholder/200/200",
    avatar: "ð©âð¬",
    social: {
      linkedin: "https://linkedin.com/in/lisawang",
      twitter: "https://twitter.com/lisawang",
    },
  },
];
const testimonialData = [
  {
    id: 1,
    name: "Sarah Johnson",
    company: "Tech Innovators Inc.",
    rating: 5,
    text: "Aws Infotech delivered an exceptional web application that exceeded our expectations. Their team's expertise in React and Node.js is outstanding.",
    avatar: "ð©âð¼",
  },
  {
    id: 2,
    name: "Michael Chen",
    company: "Digital Solutions Ltd.",
    rating: 5,
    text: "The mobile app they developed for us has been a game-changer. User engagement increased by 300% after launch.",
    avatar: "ð¨âð»",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    company: "StartupHub",
    rating: 5,
    text: "Their AI solutions helped us automate our customer service, reducing response time by 80%. Highly recommended!",
    avatar: "ð©âð¬",
  },
];
export { portfolio, teamData, testimonialData, services };
