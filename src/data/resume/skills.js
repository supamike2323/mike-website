const skills = [
  { title: 'Python', competency: 5, category: ['Programming Languages', 'Data Science', 'Machine Learning'] },
  { title: 'SQL', competency: 5, category: ['Databases', 'Data Science'] },
  { title: 'PostgreSQL', competency: 4.5, category: ['Databases', 'Backend Development'] },
  { title: 'Django', competency: 4, category: ['Backend Development', 'Python'] },
  { title: 'PyTorch', competency: 4.5, category: ['Machine Learning', 'Deep Learning'] },
  { title: 'LangGraph', competency: 4, category: ['AI/LLM', 'Data Engineering'] },
  { title: 'Docker', competency: 4, category: ['DevOps', 'Containerization'] },
  { title: 'AWS', competency: 4.5, category: ['Cloud Computing', 'DevOps'] },
  { title: 'Git', competency: 4, category: ['Version Control', 'Development Tools'] },
  { title: 'R', competency: 4.5, category: ['Programming Languages', 'Data Science'] },
  { title: 'R Shiny', competency: 4, category: ['Data Science', 'Web Development'] },
  { title: 'Tableau', competency: 4, category: ['Data Visualization', 'Analytics'] },
  { title: 'D3.js', competency: 3.5, category: ['Data Visualization', 'JavaScript'] },
  { title: 'Java', competency: 4, category: ['Programming Languages', 'Backend Development'] },
  { title: 'JavaScript', competency: 4, category: ['Web Development', 'Programming Languages'] },
  { title: 'React', competency: 4, category: ['Web Development', 'Frontend'] },
  { title: 'Machine Learning', competency: 4.5, category: ['AI/ML', 'Data Science'] },
  { title: 'Computer Vision', competency: 4, category: ['AI/ML', 'Deep Learning'] },
  { title: 'Natural Language Processing', competency: 4, category: ['AI/ML', 'Deep Learning'] },
  { title: 'Multi-Agent Systems', competency: 4, category: ['AI/LLM', 'System Design'] },
  { title: 'English', competency: 5, category: ['Natural Languages'] },
  { title: 'Mandarin', competency: 5, category: ['Natural Languages'] },
  { title: 'Cantonese', competency: 4, category: ['Natural Languages'] },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#d75858',
  '#515dd4',
  '#e47272',
  '#c3423f',
  '#40494e',
  '#cc7b94',
  '#3896e2',
  '#64cb7b',
  '#747fff',

];

const categories = [
  ...new Set(skills.flatMap(({ category }) => category)),
].sort().map((category, index) => ({
  name: category,
  color: colors[index],
}));

export { categories, skills };
