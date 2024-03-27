const skills = [
  {
    title: 'SQL',
    competency: 4,
    category: ['Web Development', 'Databases', 'Languages'],
  },
  {
    title: 'Python',
    competency: 5,
    category: ['Languages', 'Web Development', 'Data Science'],
  },
  {
    title: 'Plotly',
    competency: 5,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'R',
    competency: 5,
    category: ['Languages', 'Data Science'],
  },
  {
    title: 'R Shiny',
    competency: 5,
    category: ['Data Science', 'R'],
  },
  {
    title: 'TensorFlow',
    competency: 4.5,
    category: ['ML Engineering', 'Python'],
  },
  {
    title: 'Mandarin',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'Java',
    competency: 4,
    category: ['Languages', 'Web Development'],
  },
  {
    title: 'Matlab',
    competency: 3,
    category: ['Languages', 'Data Engineering'],
  },
  {
    title: 'AWS Server Deployment',
    competency: 4,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'Cantonese',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'English',
    competency: 4,
    category: ['Languages'],
  },
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
