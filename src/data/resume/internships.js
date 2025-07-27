/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const internships = [
  {
    name: 'Cisco',
    position: 'Data Engineering Intern',
    url: 'https://www.cisco.com/',
    startDate: '2025-06-01',
    endDate: '2025-08-31',
    summary: 'Building a Multi-Agent AI System with LangGraph at Cisco RTP. Architecting an LLM-powered data analysis assistant featuring structured agent orchestration, SQL tool integration, memory state tracking, and dynamic user interactions for business analytics.',
    highlights: [
      'Developed Multi-Agent AI System using LangGraph for automated data analysis',
      'Built LLM-powered assistant with structured agent orchestration and SQL integration',
      'Implemented memory state tracking and dynamic user interactions',
      'Created business analytics tools for iACV forecasting and renewal tracking',
    ],
  },
  {
    name: 'University of Washington - Paul G. Allen School',
    position: 'Software Backend Developer',
    url: 'https://www.cs.washington.edu/',
    startDate: '2025-02-01',
    endDate: '',
    summary: 'Developing and optimizing PostgreSQL databases on AWS RDS, building RESTful APIs in Django, and fine-tuning machine learning models for accented speech transcription using PyTorch.',
    highlights: [
      'Developed PostgreSQL database on AWS RDS with indexing and partitioning for large-scale transcription data',
      'Designed RESTful APIs in Django to streamline model inference and transcription services',
      'Fine-tuned WhisperTiny model for accented speech transcription using PyTorch',
      'Built containerized environments with Docker and automated CI/CD pipelines on GitLab',
      'Deployed scalable solutions on AWS using EC2, S3, and Lambda',
    ],
  },
  {
    name: 'University of Washington Information School',
    position: 'Teaching Assistant - Database Design and Management',
    url: 'https://ischool.uw.edu',
    startDate: '2024-12-01',
    endDate: '',
    summary: 'Teaching SQL, database design, and optimization concepts to undergraduate students in INFO 430.',
    highlights: [
      'Conduct SQL labs covering subqueries, joins, indexing, and query optimization',
      'Guide students in Entity-Relationship modeling and relational algebra',
      'Lead discussions on query evaluation, execution plans, and spatial databases',
      'Hold office hours to help with debugging SQL queries and understanding ACID properties',
    ],
  },
  {
    name: 'Mobalytics',
    position: 'Data Analyst Intern',
    url: 'https://mobalytics.gg/',
    startDate: '2021-06-01',
    endDate: '2021-08-31',
    summary: 'Applied machine learning and statistical analysis to understand PC gaming user behavior and improve business metrics.',
    highlights: [
      'Applied K-means clustering with regression trees to analyze PC gaming shopper behaviors',
      'Created SQL database design with 2K+ optimized queries using indexing and partitioning',
      'Conducted A/B testing on 100M users to analyze promotion strategies and user retention',
      'Improved advertisement ROI by 10% through targeted recommendations for senior management',
    ],
  },
  {
    name: 'Cowy Farm',
    position: 'Data Analyst',
    url: 'https://twitter.com/COWYFARM',
    startDate: '2020-01-01',
    endDate: '2021-01-01',
    summary: 'Co-founded a tech venture focused on trading IP addresses. Generated go-to-market strategies, utilized Python for data analysis, and contributed to a 33% customer conversion rate in 2020.',
    highlights: [
      'Developed and traded Internet Protocol (IP) addresses, increasing revenue by 50%.',
      'Utilized Python matplotlib and plotly for data analysis from SQL Server Data Warehouse.',
      'Achieved a 33% customer conversion rate in 2020 through effective data analysis.',
      'Developed E-commerce webpages and utilized SQL querying and MongoDB for data management.',
    ],
  },
  {
    name: 'AWS Club @ UW',
    position: 'President',
    url: 'https://aws.amazon.com/developer/community/students/cloudclubs/',
    startDate: '2023-01-01',
    endDate: '',
    summary: 'Lead club events and workshops focusing on AWS services like EC2, S3, Lambda. Design and execute educational sessions on cloud infrastructure and machine learning.',
    highlights: [
      'Design and execute club events, workshops, and sessions using AWS services',
      'Focus on infrastructure as code, database optimization, and real-world applications',
      'Integrate AWS machine learning services and SQL querying into educational content',
      'Maintain technical agenda aligned with industry trends and market events',
    ],
  },
  {
    name: 'UW Information School Advancement Team',
    position: 'Student Office Assistant',
    startDate: '2023-09-15',
    endDate: '2024-06-15',
    summary: 'The Advancement Student Assistant works with the Advancement team, providing administrative support for our fundraising and alumni relations efforts.',
    highlights: [
      'Primary responsibilities include data entry, prepping and execution of Advancement events, and filing contact reports. The Advancement Student Assistant must be detail-oriented and be proficient in Excel. They should be able to work with multiple data sets and should be familiar with the following functions and concepts: VLOOKUP, pivot tables, and text to columns. They should also be a clear communicator with demonstrated experience in writing and copyediting. Experience in customer service is also integral to the role as the Advancement Student Assistant will come in contact with key stakeholders, alumni and donors at events.'
    ],
  },
];

export default internships;