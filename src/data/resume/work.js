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
const work = [
  {
    name: 'Mobalytics',
    position: 'Data Analyst Intern',
    url: 'https://mobalytics.gg/',
    startDate: '2021-06-01',
    endDate: '2021-08-31',
    summary: 'Analyzed business requirements, developed SQL queries for data extraction, and performed ad-hoc analysis to study market trends. Conducted interviews with PC gaming industry executives, and recommended strategies for product loyalty and pricing.',
    highlights: [
      'Conducted fit-gap analysis using Agile methods for gaming industry companies.',
      'Developed complex SQL for data extraction, applied advanced data cleaning techniques.',
      'Performed market trend analysis and A/B testing for promotional strategies.',
      'Designed SQL database for efficient data management and conducted interviews with industry executives.',
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
    name: 'Amazon Web Service Club @ UW',
    position: 'Club Leader',
    url: 'https://aws.amazon.com/developer/community/students/cloudclubs/',
    startDate: '2023-01-01',
    endDate: '',
    summary: 'Led club events and workshops focusing on AWS services like EC2, S3, Lambda. Integrated AWS machine learning services and SQL database querying into club activities.',
    highlights: [
      'Engineered club events and workshops leveraging AWS services.',
      'Enhanced club activities with real-world applications of AWS machine learning services.',
      'Maintained a technical agenda aligned with industry trends and market events.',
    ],
  },
];

export default work;
