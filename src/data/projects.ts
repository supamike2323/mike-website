export interface Project {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  date: string;
  desc: string;
  link?: string;
  technologies?: string[];
  github?: string;
  publication?: {
    title: string;
    authors: string;
    venue: string;
    year: number;
    url: string;
  };
  details?: {
    overview?: string;
    challenges?: string[];
    achievements?: string[];
    learnings?: string[];
  };
}

const projects: Project[] = [
  {
    id: 'cisco-multiagent-ai',
    title: 'Multi-Agent AI System with LangGraph',
    subtitle: 'Data Engineering Intern at Cisco',
    image: '/images/projects/cisco-ai.png',
    date: '2025-06-01',
    desc: 'Built a multi-agent AI orchestration system (LangGraph + ReAct) that cut SQL workflow runtime by 80% for incremental Annual Contract Value analysis. Reduced query latency from 20s to 3s by engineering a Pandas + DuckDB caching layer.',
    technologies: ['Python', 'LangGraph', 'ReAct', 'SQL', 'DuckDB', 'Pandas'],
  },
  {
    id: 'uw-speech-transcription',
    title: 'Accented Speech Transcription System',
    subtitle: 'PostgreSQL + Django + PyTorch at UW Allen School',
    image: '/images/projects/speech-ai.png',
    date: '2025-02-01',
    desc: 'Developed PostgreSQL database on AWS RDS and fine-tuned WhisperTiny model for accented speech transcription using PyTorch, with RESTful APIs in Django.',
    technologies: ['PostgreSQL', 'Django', 'PyTorch', 'AWS', 'Machine Learning'],
  },
  {
    id: 'story-tree',
    title: 'Story-Tree',
    subtitle: 'A collaborative story writing website',
    image: '/images/projects/storytree.png',
    date: '2024-03-20',
    desc: 'A collaborative story writing website in which users can create or branch stories with others.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
  },
  {
    id: 'yolo-macadamia-detection',
    title: 'YOLOv5 Macadamia Nut Detection',
    subtitle: 'Computer Vision Research at CUHK Shenzhen',
    image: '/images/projects/yolo-nuts.png',
    date: '2024-06-01',
    desc: 'Improved YOLOv5 model for agricultural applications, achieving 98% accuracy in macadamia nut detection with computer vision techniques.',
    technologies: ['YOLOv5', 'Computer Vision', 'PyTorch', 'OpenCV'],
  },
  {
    id: 'Pet-Diagosis-Chatbot',
    title: 'Petpals - A Pet Diagnosis Chatbot',
    subtitle: 'Pet Diagnosis Chatbot + Map + Forum',
    link: 'https://miked232.shinyapps.io/final-project-info201',
    image: '/images/projects/pet.png',
    date: '2024-06-15',
    desc: 'Made an AI-powered Chatbot for pet disease diagnosis with a forum for users to communicate about their pets.',
    technologies: ['AI/ML', 'Chatbot', 'React', 'Forum Development'],
  },
  {
    id: 'ai-content-moderation',
    title: 'AI Content Moderation Research',
    subtitle: 'CSCW Research on Counter-Speech Strategies',
    image: '/images/projects/content-mod.png',
    date: '2024-01-01',
    desc: 'Designed prototype for creators to detect toxic comments and conducted 20+ interviews with content creators. Research published in CSCW on AI-assisted content moderation.',
    technologies: ['Research', 'AI/ML', 'User Interviews', 'Prototype Design'],
    publication: {
      title: 'Empowering Creators in the Fight Against Online Hate: A Qualitative Exploration of AI-Mediated Counterspeech Tools',
      authors: 'Phoebe Yiqing Huang, Jiaming Deng, Yingchen Yang, and Spencer Williams',
      venue: 'Proc. ACM Hum.-Comput. Interact. 9, 7, Article CSCW408 (November 2025), 28 pages',
      year: 2025,
      url: 'https://osf.io/ynqw4_v1/'
    },
  },
  {
    id: 'NBA-Dataset',
    title: 'NBA Dataset analysis with Rshiny',
    subtitle: 'Basketball data analysis on the 2021-2022 NBA season.',
    link: 'https://miked232.shinyapps.io/final-project-info201',
    image: '/images/projects/basketball.png',
    date: '2023-06-01',
    desc: 'Used Rshiny and plotly to conduct graphs, used 3 different plot models to evaluate three different research questions.',
    technologies: ['R', 'Shiny', 'Plotly', 'Data Analysis'],
  },
  {
    id: 'mobalytics-gaming-analytics',
    title: 'PC Gaming User Behavior Analysis',
    subtitle: 'Machine Learning & A/B Testing at Mobalytics',
    image: '/images/projects/gaming-analytics.png',
    date: '2021-06-01',
    desc: 'Applied K-means clustering and conducted A/B testing on 100M users to analyze gaming behaviors, improving advertisement ROI by 10% through targeted recommendations.',
    technologies: ['K-means', 'A/B Testing', 'Machine Learning', 'Analytics'],
  },
];

export default projects;