const skills = [
  { title: 'SQL', competency: 4, category: ['Web Development', 'Databases', 'Programming Languages'] },
  { title: 'Python', competency: 5, category: ['Programming Languages', 'Web Development', 'Data Science'] },
  { title: 'Plotly', competency: 5, category: ['Data Science', 'Python'] },
  { title: 'R', competency: 5, category: ['Programming Languages', 'Data Science'] },
  { title: 'R Shiny', competency: 5, category: ['Data Science', 'R'] },
  { title: 'TensorFlow', competency: 4.5, category: ['Data Science', 'Python'] },
  { title: 'Mandarin', competency: 4, category: ['Natural Languages'] },
  { title: 'Java', competency: 4, category: ['Programming Languages', 'Web Development'] },
  { title: 'Matlab', competency: 3, category: ['Programming Languages', 'Data Science'] },
  { title: 'AWS Server Deployment', competency: 4, category: ['Tools', 'Web Development'] },
  { title: 'Cantonese', competency: 4, category: ['Natural Languages'] },
  { title: 'English', competency: 4, category: ['Natural Languages'] },
  { title: 'React', competency: 4, category: ['Web Development', 'JavaScript'] },
  { title: 'Agile', competency: 4, category: ['Project Management', 'Software Development'] },
  { title: 'Excel', competency: 5, category: ['Productivity', 'Data Science'] },
  { title: 'VLOOKUP', competency: 5, category: ['Excel', 'Data Science'] },
  { title: 'JavaScript', competency: 4, category: ['Web Development', 'Programming Languages'] },
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
