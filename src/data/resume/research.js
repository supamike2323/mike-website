/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the institution
 * @property {string} position - Position title
 * @property {string} url - Institution website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const research = [
  {
    name: 'University of Washington',
    position: 'Research Assistant - AI Content Moderation',
    url: 'https://www.washington.edu/',
    startDate: '2024-01-01',
    endDate: '2024-12-01',
    summary: 'Collaborated with faculty on a CSCW-submitted study exploring how video creators navigate online hate and how AI tools can support counter-speech strategies.',
    highlights: [
      'Designed and developed prototype for creators (including those with visual impairments) to detect toxic comments',
      'Conducted 20+ in-depth interviews with diverse content creators and influencers',
      'Helped run surveys, data analysis, and iterative tool development',
      'Contributed to research on AI-assisted content moderation and counter-speech strategies',
    ],
  },
  {
    name: 'The Chinese University of Hong Kong (Shenzhen)',
    position: 'Research Assistant',
    url: 'https://www.cuhk.edu.cn/en',
    startDate: '2024-06-01',
    endDate: '2024-09-01',
    summary: 'Conducted computer vision and data science research on agricultural applications and market analysis.',
    highlights: [
      'Improved YOLOv5 model for macadamia nut detection, achieving 98% accuracy rate',
      'Applied Forward Difference-in-Differences and Propensity Score Matching on 500MB JD.com sales data',
      'Developed PCA techniques for sales pattern analysis with R² above 0.8',
      'Analyzed BBC Ukraine news articles using CRF and LSTM models for oil price prediction (RMSE: 2.1)',
    ],
  },
];

export default research;