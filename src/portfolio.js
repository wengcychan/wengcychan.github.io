import backgroundImg from './images/home-page.png'
import aboutImg from './images/about-me.png'
import { FaJs, FaReact, FaHtml5, FaCss3, FaNodeJs, FaUnity, FaGitAlt, FaGithub, FaFigma } from 'react-icons/fa';
import { SiC, SiCplusplus, SiCsharp, SiMongodb, SiBlender, SiCanva, SiGimp } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { FaPhoneFlip } from "react-icons/fa6";

const home = {
  name: 'Wing',
  role: 'A Software Developer',
  social: {
    email: 'mailto:wengcychan95@gmail.com',
    github: 'https://github.com/wengcychan',
  },
  img: backgroundImg,
  icons: {
    email: FaJs,
    github: FaGithub
  },
}

const about = {
  descriptions: [
    'I am currently studying at Hive Helsinki, transitioning from traffic engineering to software development. I am exploring web and game development, along with C / C++ programming languages.',
    'I love solving problems and discovering new things. I am excited to use what I learn to create innovative tech solutions.',
  ],
  img: aboutImg,
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = {
  "Languages": {
    'C': SiC,
    'C++': SiCplusplus,
    'C#': SiCsharp,
    'JavaScript': FaJs,
  },
  "Web Development": {
    'React': FaReact,
    'HTML5': FaHtml5,
    'CSS3': FaCss3,
    'MongoDB': SiMongodb,
    'Nodejs': FaNodeJs
  },
  "Gaming": {
    'Unity': FaUnity
  },
  "Version Control": {
    'Git': FaGitAlt,
    'GitHub': FaGithub
  },
  "Design": {
    'Blender': SiBlender,
    'Figma': FaFigma,
    'Canva': SiCanva,
    'Gimp': SiGimp
  },
}

const contact = {
  descriptions: [
    'I am open to exploring internships or roles as a junior software developer.',
    'Get in touch to discuss project collaborations or just say hi — I am eager to chat and learn about potential opportunities!',
  ],
  social: {
    email: 'wengcychan95@gmail.com',
    phone: '+358 41 474 7515'
  },
  icons: {
    email: MdEmail,
    phone: FaPhoneFlip
  },
}

export { home, about, projects, skills, contact }
