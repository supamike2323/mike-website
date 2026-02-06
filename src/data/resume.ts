export const experiences = [
    {
        title: 'Data Engineering Intern',
        company: 'Cisco Systems',
        location: 'Research Triangle Park, NC',
        period: 'June 2025 – August 2025',
        description: 'Built a multi-agent AI orchestration system (LangGraph + ReAct) that cut SQL workflow runtime by 80% for incremental Annual Contract Value analysis. Developed LangGraph AI agents for parameter extraction, SQL execution, and reporting. Reduced query latency from 20s to 3s by engineering a Pandas + DuckDB caching layer. Designed ML pipeline for prediction on 1M+ transactions using Random Forests and XGBoost. Achieved >0.90 AUC by applying advanced feature engineering. Generated 1.4M labeled training pairs for model training.',
        technologies: ['Python', 'LangGraph', 'ReAct', 'SQL', 'DuckDB', 'Pandas', 'ML (XGBoost/Random Forest)'],
    },
    {
        title: 'Research Assistant – Backend Development',
        company: 'University of Washington - Paul G. Allen School',
        location: 'Seattle, WA',
        period: 'February 2025 - June 2025',
        description: 'Advisor: Prof. Ben Shapiro. Selected as 1 of 20 students for a competitive research internship on AI fairness. Delivered an AIOps backend for investigating AI voice bias. Optimized PostgreSQL schema on AWS RDS for high-performance storage. Developed 20+ RESTful APIs in Django. Fine-tuned WhisperTiny model for accented speech transcription with PyTorch. Deployed containerized environments with Docker and automated CI/CD pipelines via GitLab.',
        technologies: ['Django', 'PostgreSQL', 'AWS RDS', 'PyTorch', 'Docker', 'GitLab CI/CD'],
    },
    {
        title: 'Data Science Intern',
        company: 'Mobalytics',
        location: 'Marina Del Rey, CA',
        period: '2021',
        description: 'Applied K-means clustering and conducted A/B testing on 100M users to analyze gaming behaviors, improving advertisement ROI by 10% through targeted recommendations.',
        technologies: ['K-means', 'A/B Testing', 'Machine Learning', 'Analytics'],
    },
];

export const education = [
    {
        degree: 'Master of Science in Engineering, Systems Engineering',
        school: 'University of Pennsylvania',
        location: 'Philadelphia, PA',
        period: 'August 2025 - December 2026',
        gpa: '???',
    },
    {
        degree: 'Bachelor of Science in Informatics (Data Science Track)',
        school: 'University of Washington',
        location: 'Seattle, WA',
        period: 'August 2021 - August 2025',
        gpa: '3.75/4.0',
    },
    {
        degree: 'Bachelor of Art in Psychology',
        school: 'University of Washington',
        location: 'Seattle, WA',
        period: 'August 2021 - August 2025',
        gpa: '3.9/4.0',
    },
];

export const skills = [
    {
        category: 'ML & AI',
        items: ['PyTorch', 'Scikit-learn', 'Whisper', 'Multi-agent AI (LangGraph, ReAct)', 'Feature Engineering'],
        level: 90,
    },
    {
        category: 'Data Eng',
        items: ['Python', 'SQL (PostgreSQL, Teradata, DuckDB)', 'Pandas', 'NumPy', 'Data Pipelines', 'Warehousing'],
        level: 95,
    },
    {
        category: 'Full Stack',
        items: ['Django', 'RESTful APIs', 'Java', 'JavaScript (ES6)', 'React', 'Flutter', 'Dart'],
        level: 85,
    },
    {
        category: 'Cloud/Ops',
        items: ['AWS (SageMaker, EC2, S3, RDS, Lambda)', 'Docker', 'GitLab CI/CD', 'Workflow Automation'],
        level: 80,
    },
];
