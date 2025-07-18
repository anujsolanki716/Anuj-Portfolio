import { Project, Skill, Experience, Certification, SocialLink, ContactInfo } from '@/types';

export const personalInfo = {
  name: 'Anuj Solanki',
  title: 'Full-Stack Developer | AI Enthusiast | Problem Solver',
  tagline: 'Crafting scalable solutions at the intersection of web and intelligence.',
  about: `I'm a recent B.Tech CSE-AI graduate passionate about building innovative solutions that bridge the gap between web development and artificial intelligence. With a strong foundation in both frontend and backend technologies, I specialize in creating scalable applications that solve real-world problems.`,
  education: {
    degree: 'B.Tech CSE-AI',
    institution: 'IIMT College of Engineering',
    duration: 'Oct - 2021 – Jun - 2025',
    cgpa: '6.98',
    twelfth: {
      percentage: '77%',
      institution: 'SMT. Krishna Devi Inter College',
      duration: '2020 – 2021'
    }
  }
};

export const projects: Project[] = [
  {
    id: 'krishi-mitra',
    title: 'Krishi Mitra App',
    description: 'Digital assistant for farmers using modern web technology and Gemini AI. Provides real-time agricultural advice, weather updates, and crop management solutions.',
    technologies: ['React', 'Node.js', 'Gemini AI', 'MongoDB', 'Express'],
    githubUrl: 'https://github.com/anujsolanki716/Krishi-Mitra-App',
    liveUrl: 'https://krishi-mitra-app.vercel.app/',
    image: '/projects/krishi-mitra.jpg',
    featured: true
  },
  {
    id: 'sahkarya',
    title: 'Sahkarya Web App',
    description: 'Connects citizens with authorities using React and IoT technology. Enables real-time communication and issue reporting between citizens and government officials.',
    technologies: ['React', 'MongoDB', 'IoT', 'Node.js', 'Express'],
    githubUrl: 'https://github.com/anujsolanki716/Sahkarya/tree/main/Sahkarya-main',
    image: '/projects/sahkarya.jpg',
    featured: true
  },
  {
    id: 'stock-prediction',
    title: 'Stock Price Prediction',
    description: 'ML-based stock price prediction system using machine learning algorithms with Streamlit interface and Django backend.',
    technologies: ['Python', 'Machine Learning', 'Streamlit', 'Django', 'Pandas', 'Scikit-learn'],
    githubUrl: 'https://github.com/anujsolanki716/Stock-Price-Prediction/tree/main/StocK-price-Prediction',
    image: '/projects/stock-prediction.jpg',
    featured: true
  }
];

export const skills: Skill[] = [
  // Languages
  { name: 'Python', category: 'language', proficiency: 90, icon: '🐍' },
  { name: 'C++', category: 'language', proficiency: 85, icon: '⚡' },
  { name: 'Java', category: 'language', proficiency: 80, icon: '☕' },
  { name: 'JavaScript', category: 'language', proficiency: 88, icon: '🟨' },
  { name: 'SQL', category: 'language', proficiency: 85, icon: '🗄️' },
  { name: 'MongoDB', category: 'language', proficiency: 85, icon: '🍃' },

  
  // Frameworks
  { name: 'React', category: 'framework', proficiency: 85, icon: '⚛️' },
  { name: 'Node.js', category: 'framework', proficiency: 80, icon: '🟢' },
  { name: 'Spring Boot', category: 'framework', proficiency: 75, icon: '🍃' },
  { name: 'Django', category: 'framework', proficiency: 78, icon: '🐍' },
  
  // Tools
  { name: 'Git', category: 'tool', proficiency: 90, icon: '📝' },
  { name: 'GitHub', category: 'tool', proficiency: 88, icon: '🐙' },
  // { name: 'MongoDB', category: 'tool', proficiency: 85, icon: '🍃' },
  { name: 'Streamlit', category: 'tool', proficiency: 80, icon: '📊' },
  
  // Concepts
  { name: 'TypeScript', category: 'concept', proficiency: 82, icon: '🔷' },
  { name: 'OOPs', category: 'concept', proficiency: 90, icon: '🏗️' },
  { name: 'DBMS', category: 'concept', proficiency: 85, icon: '💾' },
  { name: 'OS', category: 'concept', proficiency: 80, icon: '💻' },
  { name: 'Computer Networks', category: 'concept', proficiency: 82, icon: '🌐' },
  { name: 'Machine Learning', category: 'concept', proficiency: 85, icon: '🤖' },
  { name: 'AI', category: 'concept', proficiency: 88, icon: '✨' }
];

export const experience: Experience[] = [
  {
    id: 'oasis-infobyte',
    title: 'Web Development Intern',
    company: 'Oasis Infobyte',
    duration: 'May 2023 – July 2023',
    description: 'Built responsive web applications and gained real-world design skills. Worked on frontend development using modern technologies.',
    technologies: ['React', 'JavaScript', 'HTML', 'CSS', 'Git']
  }
];

export const certifications: Certification[] = [
  {
    id: 'cisco-cybersecurity',
    name: 'Cisco Cyber Security',
    issuer: 'Cisco Networking Academy',
    date: '2023',
    url: 'https://drive.google.com/file/d/1_s1lfvbKFjB1-6bp53RilQCNEL_on07v/view?usp=sharing'
  },
  {
    id: 'namma-yatri',
    name: 'Namma Yatri Open Mobility Challenge',
    issuer: 'Namma Yatri',
    date: '2023',
    url: 'https://unstop.com/certificate-preview/6b30c050-a098-41ad-a7f7-68e5120d7a97'
  }
];

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/anujsolanki716',
    icon: 'github'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/anuj-solanki-05b764287/',
    icon: 'linkedin'
  },
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/u/anuj_solanki716/',
    icon: 'code'
  }
];

export const contactInfo: ContactInfo = {
  email: 'anujsolanki716@gmail.com',
  phone: '+91 6397890589',
  location: 'Greater Noida, Uttar Pradesh',
  linkedin: 'https://www.linkedin.com/in/anuj-solanki-05b764287/'
}; 