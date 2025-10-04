export const allServices = [
  {
    id: 1,
    title: "Full-Stack Web Development",
    image: require("../assets/images/services/web-development.webp"),
    desc: "We create powerful, scalable web applications using cutting-edge technologies. From responsive frontends to robust backends, we deliver complete solutions that drive business growth and user engagement.",
    link: "/web-development",
  },
  {
    id: 2,
    title: "App Development",
    image: require("../assets/images/services/app-development.webp"),
    desc: "Transform your ideas into stunning mobile applications that users love. Our native and cross-platform solutions deliver exceptional performance across iOS and Android devices.",
    link: "/app-development",
  },
  {
    id: 3,
    title: "Blockchain Development",
    image: require("../assets/images/services/blockchain.webp"),
    desc: "Leverage the power of blockchain technology to build secure, decentralized applications. We create smart contracts, dApps, and enterprise blockchain solutions that revolutionize business processes.",
  },
  {
    id: 4,
    title: "Artificial Intelligence Development",
    image: require("../assets/images/services/ai.webp"),
    desc: "Unlock the potential of AI and machine learning to automate processes, gain insights, and create intelligent systems that give your business a competitive edge in the digital marketplace.",
  },
];

// Web Development Services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "Custom Website Design",
    image: require("../assets/images/landing page/Custom Website Design.webp"),
    description:
      "Create unique, brand-focused websites that captivate your audience. Our custom designs combine stunning visuals with intuitive user experiences that convert visitors into customers.",
  },
  {
    id: 2,
    title: "E-commerce Solutions",
    image: require("../assets/images/landing page/E-commerce Solutions.webp"),
    description:
      "Launch powerful online stores with advanced features like inventory management, secure payments, and analytics. Our e-commerce platforms are designed to maximize sales and customer satisfaction.",
  },
  {
    id: 3,
    title: "Content Management Systems",
    image: require("../assets/images/landing page/Content Management Systems.webp"),
    description:
      "Empower your team with user-friendly CMS platforms that make content updates effortless. From WordPress to custom solutions, we provide the perfect content management system for your needs.",
  },
  {
    id: 4,
    title: "API Integration",
    image: require("../assets/images/landing page/API Integration.webp"),
    description:
      "Seamlessly connect your website with external services and databases. Our API integrations enable powerful functionality while maintaining security and performance standards.",
  },
  {
    id: 5,
    title: "Website Maintenance & Support",
    image: require("../assets/images/landing page/Website Maintenance & Support.webp"),
    description:
      "Keep your website running smoothly with our comprehensive maintenance services. We handle updates, security patches, performance optimization, and 24/7 monitoring to ensure peak performance.",
  },
];

// App Development Services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    image: require("../assets/images/landing page/iOS App Development.webp"),
    description:
      "Build premium iOS applications that leverage the full potential of Apple's ecosystem. Our native iOS apps deliver exceptional performance, security, and user experience on all Apple devices.",
  },
  {
    id: 2,
    title: "Android App Development",
    image: require("../assets/images/landing page/Android App Development.webp"),
    description:
      "Develop feature-rich Android applications that work flawlessly across all device sizes and Android versions. We optimize for performance, battery life, and user engagement.",
  },
  {
    id: 3,
    title: "Cross-Platform App Development",
    image: require("../assets/images/landing page/Cross-Platform App Development.webp"),
    description:
      "Maximize your reach with cross-platform apps that work perfectly on both iOS and Android. Using React Native and Flutter, we deliver native-like performance with faster development cycles.",
  },
  {
    id: 4,
    title: "UI/UX Design for Apps",
    image: require("../assets/images/landing page/UIUX Design for Apps.webp"),
    description:
      "Create compelling user interfaces that users love. Our design team focuses on usability, accessibility, and visual appeal to ensure your app stands out in crowded app stores.",
  },
  {
    id: 5,
    title: "App Testing & Deployment",
    image: require("../assets/images/landing page/App Testing & Deployment.webp"),
    description:
      "Ensure flawless app performance with comprehensive testing across devices and platforms. We handle the entire deployment process, from App Store submission to post-launch monitoring.",
  },
];

// Service details page content
export const serviceDetailsList = [
  {
    id: 1,
    title: "Full-Stack Web Development",
    shortDescription: "Complete web solutions from concept to deployment",
    heroImage: "/images/services/web-dev.jpg", // Replace with your actual image path
    overview:
      "Transform your digital vision into reality with our comprehensive full-stack web development services. We create powerful, scalable applications that combine stunning user interfaces with robust backend systems, ensuring optimal performance and user experience across all platforms.",
    features: [
      "Modern responsive web applications",
      "Advanced user interface design",
      "Secure API development and integration",
      "Database architecture and optimization",
      "Cloud infrastructure and deployment",
      "Progressive Web App (PWA) development",
      "Single Page Application (SPA) solutions",
      "Custom e-commerce platforms",
    ],
    technologies: [
      {
        name: "Frontend",
        items: ["React.js", "Next.js", "Vue.js", "Angular", "TypeScript"],
      },
      {
        name: "Backend",
        items: ["Node.js", "Express", "Python", "Django", "FastAPI"],
      },
      {
        name: "Databases",
        items: ["PostgreSQL", "MongoDB", "Redis", "Supabase"],
      },
      {
        name: "Cloud",
        items: ["AWS", "Vercel", "Netlify", "DigitalOcean"],
      },
    ],
    process: [
      {
        step: 1,
        title: "Strategy",
        description: "Project planning and technical architecture",
      },
      {
        step: 2,
        title: "Design",
        description: "User experience and interface design",
      },
      {
        step: 3,
        title: "Development",
        description: "Agile development with regular milestones",
      },
      {
        step: 4,
        title: "Testing",
        description: "Comprehensive quality assurance testing",
      },
      {
        step: 5,
        title: "Launch",
        description: "Deployment and performance optimization",
      },
      {
        step: 6,
        title: "Support",
        description: "Ongoing maintenance and feature updates",
      },
    ],
    benefits: [
      "Unified development approach for consistency",
      "Reduced development time and costs",
      "Seamless integration between frontend and backend",
      "Enhanced security and performance",
      "Future-proof scalable architecture",
    ],
  },
  {
    id: 2,
    title: "App Development",
    shortDescription: "Innovative mobile solutions for iOS and Android",
    heroImage: "/images/services/app-dev.jpg",
    overview:
      "Bring your mobile app ideas to life with our expert development team. We specialize in creating engaging, high-performance mobile applications that deliver exceptional user experiences while driving business growth and customer engagement.",
    features: [
      "Native iOS and Android applications",
      "Cross-platform mobile development",
      "Mobile-first user experience design",
      "Offline functionality and data sync",
      "Real-time push notifications",
      "In-app payment processing",
      "Social media and third-party integrations",
      "App store optimization and marketing",
    ],
    technologies: [
      { name: "Native", items: ["Swift", "Kotlin", "Java", "Objective-C"] },
      { name: "Cross-Platform", items: ["React Native", "Flutter", "Xamarin"] },
      { name: "Backend", items: ["Firebase", "AWS Mobile", "Supabase"] },
      { name: "Testing", items: ["Jest", "Detox", "XCUITest"] },
    ],
    process: [
      {
        step: 1,
        title: "Research",
        description: "Market analysis and user research",
      },
      {
        step: 2,
        title: "Prototyping",
        description: "Wireframes and interactive prototypes",
      },
      { step: 3, title: "Design", description: "Mobile UI/UX design system" },
      { step: 4, title: "Development", description: "Feature implementation and testing" },
      { step: 5, title: "Testing", description: "Device testing and optimization" },
      { step: 6, title: "Launch", description: "App store submission and release" },
    ],
    benefits: [
      "Accelerated development timeline",
      "Cost-effective cross-platform solutions",
      "Native device feature integration",
      "Superior user experience design",
      "Enhanced app store performance",
    ],
  },
  {
    id: 3,
    title: "Blockchain Development",
    shortDescription: "Secure decentralized applications and smart contracts",
    heroImage: "/images/services/blockchain.jpg",
    overview:
      "Harness the power of blockchain technology to build secure, transparent, and decentralized applications. Our blockchain solutions create trustless systems with immutable records, enabling new business models and enhanced security for your digital assets.",
    features: [
      "Smart contract development and deployment",
      "Decentralized application (dApp) creation",
      "Custom token and cryptocurrency development",
      "Blockchain network integration",
      "NFT marketplace development",
      "DeFi protocol implementation",
      "Digital wallet integration",
      "Blockchain consulting and strategy",
    ],
    technologies: [
      {
        name: "Blockchains",
        items: ["Ethereum", "Polygon", "BSC", "Arbitrum"],
      },
      { name: "Languages", items: ["Solidity", "Rust", "Go", "JavaScript"] },
      { name: "Frameworks", items: ["Hardhat", "Truffle", "Foundry", "Web3.js"] },
      { name: "Storage", items: ["IPFS", "Arweave", "Pinata"] },
    ],
    process: [
      { step: 1, title: "Analysis", description: "Blockchain use case evaluation" },
      {
        step: 2,
        title: "Design",
        description: "Architecture and smart contract design",
      },
      { step: 3, title: "Development", description: "Smart contract and dApp coding" },
      { step: 4, title: "Security", description: "Code audit and security testing" },
      { step: 5, title: "Deploy", description: "Mainnet deployment and testing" },
      {
        step: 6,
        title: "Integrate",
        description: "Frontend integration and user interface",
      },
    ],
    benefits: [
      "Unprecedented security and transparency",
      "Elimination of third-party intermediaries",
      "Permanent and tamper-proof records",
      "Automated contract execution",
      "Innovative tokenization opportunities",
    ],
  },
  {
    id: 4,
    title: "Artificial Intelligence Development",
    shortDescription: "Smart automation and intelligent solutions",
    heroImage: "/images/services/ai.jpg",
    overview:
      "Unlock the potential of artificial intelligence to transform your business operations. Our AI solutions automate complex processes, provide intelligent insights, and create personalized experiences that drive efficiency and growth.",
    features: [
      "Custom machine learning models",
      "Natural language processing systems",
      "Computer vision applications",
      "Advanced predictive analytics",
      "Intelligent recommendation systems",
      "AI-powered chatbots and assistants",
      "Automated decision-making systems",
      "Deep learning neural networks",
    ],
    technologies: [
      {
        name: "ML Frameworks",
        items: ["TensorFlow", "PyTorch", "Scikit-learn", "XGBoost"],
      },
      { name: "Languages", items: ["Python", "R", "JavaScript", "C++"] },
      { name: "NLP", items: ["OpenAI GPT", "BERT", "spaCy", "Transformers"] },
      { name: "Vision", items: ["OpenCV", "YOLO", "MediaPipe", "TensorFlow Lite"] },
    ],
    process: [
      {
        step: 1,
        title: "Discovery",
        description: "AI opportunity identification and planning",
      },
      {
        step: 2,
        title: "Data",
        description: "Data collection, cleaning, and preparation",
      },
      {
        step: 3,
        title: "Modeling",
        description: "Algorithm selection and model development",
      },
      {
        step: 4,
        title: "Training",
        description: "Model training and validation",
      },
      {
        step: 5,
        title: "Deployment",
        description: "Model deployment and integration",
      },
      {
        step: 6,
        title: "Optimization",
        description: "Performance monitoring and continuous improvement",
      },
    ],
    benefits: [
      "Streamlined business processes",
      "Enhanced user experiences",
      "Data-driven decision making",
      "24/7 intelligent automation",
      "Competitive market advantage",
    ],
  },
];
