export interface ProjectTag {
  id: string;
  name: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  tags: string[];
  imageUrl: string;
  color: "primary" | "secondary" | "accent" | "dark";
  details: {
    overview: string;
    technologies: string[];
    process: {
      step: number;
      title: string;
      description: string;
    }[];
    results: {
      stat: string;
      value: string;
    }[];
    images: {
      url: string;
      alt: string;
      caption?: string;
    }[];
  };
}

export const projects: Project[] = [
  {
    id: 1,
    title: "A+: The App for Success",
    description: "Mobile Development",
    category: "web ux",
    tags: ["Swift", "AppUI", "MongoDB", "Firebase", "Figma"],
    imageUrl:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    color: "primary",
    details: {
      overview: "A Plus is an app designed to help students.",
      technologies: ["Swift", "AppUI", "MongoDB", "Firebase", "Figma"],
      process: [
        {
          step: 1,
          title: "Research",
          description:
            "Conducted user interviews and competitive analysis to identify pain points.",
        },
        {
          step: 2,
          title: "Wireframing",
          description:
            "Created low and high-fidelity wireframes to test various UI approaches.",
        },
        {
          step: 3,
          title: "Development",
          description:
            "Implemented the designs using React with a focus on performance.",
        },
      ],
      results: [
        {
          stat: "User Satisfaction",
          value: "--%",
        },
        {
          stat: "Time Saved",
          value: "--%",
        },
        {
          stat: "Active Users",
          value: "8+",
        },
        {
          stat: "Productivity Increase",
          value: "--%",
        },
      ],
      images: [
        {
          url: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
          alt: "Horizon App",
          caption:
            "Reimagining Productivity: A modern approach to task management",
        },
        {
          url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
          alt: "Team collaboration",
          caption:
            "Oragnize Easily: Our app will help you manage your schedule with ease.",
        },
      ],
    },
  },
  {
    id: 2,
    title: "Bloom E-commerce",
    description: "Web Development",
    category: "web",
    tags: ["React", "Node.js", "MongoDB", "Express", "Stripe", "AWS"],
    imageUrl:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    color: "secondary",
    details: {
      overview:
        "Bloom is a modern e-commerce platform specializing in plants and gardening supplies. I led the development of their online store, focusing on creating a seamless shopping experience with beautiful product displays and an intuitive checkout process.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe", "AWS"],
      process: [
        {
          step: 1,
          title: "Planning",
          description:
            "Defined the e-commerce architecture and user flows to ensure a smooth shopping experience.",
        },
        {
          step: 2,
          title: "Design",
          description:
            "Created a nature-inspired design that showcases the products in an engaging way.",
        },
        {
          step: 3,
          title: "Development",
          description:
            "Built a scalable platform with secure payment processing and order management.",
        },
      ],
      results: [
        {
          stat: "Conversion Rate",
          value: "4.8%",
        },
        {
          stat: "Revenue Increase",
          value: "68%",
        },
        {
          stat: "Mobile Orders",
          value: "55%",
        },
        {
          stat: "Cart Abandonment",
          value: "-34%",
        },
      ],
      images: [
        {
          url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
          alt: "Bloom E-commerce",
          caption:
            "Nature-inspired shopping experience with a focus on product presentation",
        },
        {
          url: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
          alt: "Mobile shopping experience",
          caption: "Optimized mobile experience for on-the-go plant shopping",
        },
      ],
    },
  },
  {
    id: 3,
    title: "Pulse Dashboard",
    description: "UI Design & Frontend",
    category: "ux app",
    tags: ["React", "D3.js", "Styled Components", "TypeScript", "GraphQL"],
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    color: "accent",
    details: {
      overview:
        "Pulse is an analytics dashboard for enterprise clients that visualizes complex data in an intuitive way. I designed and developed the frontend interface, focusing on creating clear data visualizations and a customizable user experience.",
      technologies: [
        "React",
        "D3.js",
        "Styled Components",
        "TypeScript",
        "GraphQL",
      ],
      process: [
        {
          step: 1,
          title: "Data Analysis",
          description:
            "Worked with data scientists to understand key metrics and visualization needs.",
        },
        {
          step: 2,
          title: "UX Design",
          description:
            "Designed an interface that makes complex data accessible and actionable.",
        },
        {
          step: 3,
          title: "Frontend Development",
          description:
            "Built responsive, interactive visualizations with advanced filtering options.",
        },
      ],
      results: [
        {
          stat: "Data Analysis Time",
          value: "-65%",
        },
        {
          stat: "User Engagement",
          value: "+42%",
        },
        {
          stat: "Enterprise Clients",
          value: "20+",
        },
        {
          stat: "Decision Speed",
          value: "2x Faster",
        },
      ],
      images: [
        {
          url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
          alt: "Pulse Dashboard",
          caption: "Clear visualization of complex business metrics",
        },
        {
          url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
          alt: "Data visualization",
          caption: "Interactive charts and customizable reporting features",
        },
      ],
    },
  },
  {
    id: 4,
    title: "Fitness Tracker",
    description: "Mobile App Development",
    category: "app",
    tags: ["React Native", "Firebase", "Redux", "Expo", "Health API"],
    imageUrl:
      "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    color: "primary",
    details: {
      overview:
        "A comprehensive fitness tracking app that helps users monitor workouts, nutrition, and wellness goals. I designed and developed this cross-platform mobile application focusing on real-time progress tracking and personalized coaching.",
      technologies: ["React Native", "Firebase", "Redux", "Expo", "Health API"],
      process: [
        {
          step: 1,
          title: "User Research",
          description:
            "Conducted user interviews to understand fitness tracking needs and pain points.",
        },
        {
          step: 2,
          title: "Prototyping",
          description:
            "Created interactive prototypes to test user flows and feature usability.",
        },
        {
          step: 3,
          title: "Development",
          description:
            "Built a cross-platform app with seamless health data integration.",
        },
      ],
      results: [
        {
          stat: "Active Users",
          value: "75k+",
        },
        {
          stat: "User Retention",
          value: "68%",
        },
        {
          stat: "App Store Rating",
          value: "4.8/5",
        },
        {
          stat: "Workout Completion",
          value: "+37%",
        },
      ],
      images: [
        {
          url: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
          alt: "Fitness Tracker App",
          caption: "Personalized fitness tracking and goal setting",
        },
        {
          url: "https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
          alt: "Mobile workout tracking",
          caption: "Real-time workout tracking and performance analytics",
        },
      ],
    },
  },
  {
    id: 5,
    title: "Creative Agency",
    description: "Web Design & Development",
    category: "web ux",
    tags: ["HTML5", "CSS3", "JavaScript", "GSAP", "WordPress", "PHP"],
    imageUrl:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    color: "secondary",
    details: {
      overview:
        "A dynamic website for a creative agency showcasing their portfolio and services. I designed and developed a unique web experience with advanced animations and interactive elements to reflect the agency's innovative approach.",
      technologies: ["HTML5", "CSS3", "JavaScript", "GSAP", "WordPress", "PHP"],
      process: [
        {
          step: 1,
          title: "Brand Analysis",
          description:
            "Worked closely with the agency to understand their brand identity and values.",
        },
        {
          step: 2,
          title: "Creative Direction",
          description:
            "Developed a bold design concept with unique interactions and animations.",
        },
        {
          step: 3,
          title: "Development",
          description:
            "Built a custom WordPress theme with advanced frontend animations.",
        },
      ],
      results: [
        {
          stat: "Bounce Rate",
          value: "-45%",
        },
        {
          stat: "Avg. Time on Site",
          value: "3:42",
        },
        {
          stat: "Lead Generation",
          value: "+85%",
        },
        {
          stat: "Design Awards",
          value: "3",
        },
      ],
      images: [
        {
          url: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
          alt: "Creative Agency Website",
          caption:
            "Bold, interactive web presence for a modern creative agency",
        },
        {
          url: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
          alt: "Website on devices",
          caption: "Responsive design adapting to all screen sizes",
        },
      ],
    },
  },
  {
    id: 6,
    title: "Voyage Travel App",
    description: "UX Design & Development",
    category: "ux app",
    tags: ["React Native", "Node.js", "MongoDB", "Google Maps API", "AWS"],
    imageUrl:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    color: "accent",
    details: {
      overview:
        "Voyage is a travel companion app that helps users discover, plan and document their trips. I led the UX design and frontend development, creating an immersive experience that inspires wanderlust while providing practical travel tools.",
      technologies: [
        "React Native",
        "Node.js",
        "MongoDB",
        "Google Maps API",
        "AWS",
      ],
      process: [
        {
          step: 1,
          title: "Travel Research",
          description:
            "Researched traveler needs and pain points throughout the journey.",
        },
        {
          step: 2,
          title: "Experience Design",
          description:
            "Created a visually rich interface with intuitive planning tools.",
        },
        {
          step: 3,
          title: "Implementation",
          description:
            "Developed location-based features and offline functionality for travelers.",
        },
      ],
      results: [
        {
          stat: "Downloads",
          value: "250k+",
        },
        {
          stat: "Trip Completion",
          value: "92%",
        },
        {
          stat: "User Reviews",
          value: "4.7/5",
        },
        {
          stat: "Featured",
          value: "App Store",
        },
      ],
      images: [
        {
          url: "https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
          alt: "Voyage Travel App",
          caption: "Discover, plan and document your travel adventures",
        },
        {
          url: "https://images.unsplash.com/photo-1512100356356-de1b84283e18?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
          alt: "Travel planning",
          caption: "Intuitive trip planning with local recommendations",
        },
      ],
    },
  },
];

export const projectTags: ProjectTag[] = [
  { id: "all", name: "All" },
  { id: "web", name: "Web Design" },
  { id: "ux", name: "UX/UI" },
  { id: "app", name: "App Development" },
];
