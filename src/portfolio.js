import aboutImg from './images/about-me.png'
import projectGreenBinImg from './images/projects/web/GreenBin.png'
import projectHackNextImg from './images/projects/web/HackNext.png'
import projectPortfolioImg from './images/projects/web/Portfolio.png'
import projectPhonebookImg from './images/projects/web/Phonebook.png'
import projectPatientorImg from './images/projects/web/Patientor.png'
import projectBloglistImg from './images/projects/web/Bloglist.png'
import projectRollToRootImg from './images/projects/gaming/roll-to-root.png'
import projectCrowdBanImg from './images/projects/gaming/crowd-ban.png'
import projectCommunity360Img from './images/projects/gaming/community360.png'
import projectminiRTImg from './images/projects/graphics/miniRT.png'
import projectFdFImg from './images/projects/graphics/fdf.png'
import projectPushSwapImg from './images/projects/others/push_swap.png'
import projectMinishellImg from './images/projects/others/minishell.png'
import projectPhiloImg from './images/projects/others/philo.png'
import projectCppImg from './images/projects/others/cpp.png'
import skillsImg from './images/skills.png'

import { FaJs, FaReact, FaHtml5, FaCss3, FaNodeJs, FaUnity, FaGitAlt, FaGithub, FaFigma } from 'react-icons/fa';
import { SiC, SiCplusplus, SiCsharp, SiMongodb, SiBlender, SiCanva, SiGimp, SiTypescript } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { FaPhoneFlip } from "react-icons/fa6";

const navbar = [
  {
    name: 'About',
    href: '#about',
  },
  {
    name: 'Projects',
    href: '#projects',
  },
  {
    name: 'Skills',
    href: '#skills',
  },
  {
    name: 'Contact',
    href: '#contact',
  }
]

const home = {
  name: 'Wing',
  role: 'A Software Developer',
  social: {
    email: 'mailto:wengcychan95@gmail.com',
    github: 'https://github.com/wengcychan',
  },
  icons: {
    EmailIcon: MdEmail,
    GithubIcon: FaGithub
  },
}

const about = {
  descriptions: [
    'Student at coding school Hive Helsinki 📚',
    'Former traffic engineer 🚦',
    'Learning web and game development, along with C and C++ 🖥️',
  ],
  typewriters: [
    'I love solving problems and discovering new things',
    'I am excited to create innovative tech solutions',
  ],
  img: {
    src: aboutImg,
    alt: 'About Me'
  }
}

const projects = [
  {
    name: 'GreenBin',
    category: 'Web',
    description:
      'Waste management system',
    stack: ['React', 'HTML', 'CSS'],
    img: { 
      src: projectGreenBinImg, 
      alt: 'GreenBin Project Image', 
    },
    sourceCode: 'https://github.com/wengcychan/greenbin.git',
    liveDemo: 'https://wengcychan.github.io/greenbin/',
  },
  {
    name: 'HackNext',
    category: 'Web',
    description:
      'Post-hackathon Platform',
    stack: ['React', 'TypeScript', 'Bootstrap'],
    img: { 
      src: projectHackNextImg, 
      alt: 'HackNext Project Image', 
    },
    sourceCode: 'https://github.com/wengcychan/hacknext.git',
    liveDemo: 'https://wengcychan.github.io/hacknext/',
  },
  {
    name: 'Portfolio',
    category: 'Web',
    description:
      'This personal portfolio',
    stack: ['React', 'HTML', 'CSS'],
    img: {
      src: projectPortfolioImg, 
      alt: 'Portfolio Project Image', 
    },
    sourceCode: 'https://github.com/wengcychan/wengcychan.github.io.git',
    liveDemo: 'https://wengcychan.github.io/',
  },
  {
    name: 'Patientor',
    category: 'Web',
    description:
      'Medical Record Application',
    stack: ['TypeScript', 'React', 'Material UI'],
    img: {
      src: projectPatientorImg, 
      alt: 'Patientor Project Image', 
    },
    sourceCode: 'https://github.com/wengcychan/fullstackopen-patientor.git',
    liveDemo: 'https://fullstackopen-patientor.onrender.com',
  },
  {
    name: 'Phonebook',
    category: 'Web',
    description:
      'Phonebook App',
    stack: ['React', 'Nodejs', 'MongoDB'],
    img: {
      src: projectPhonebookImg, 
      alt: 'Phonebook Project Image', 
    },
    sourceCode: 'https://github.com/wengcychan/fullstackopen-phonebook.git',
    liveDemo: 'https://fullstackopen-part3-we5l.onrender.com',
  },
  {
    name: 'Bloglist',
    category: 'Web',
    description:
      'Bloglist App',
    stack: ['React', 'Nodejs', 'Jest'],
    img: {
      src: projectBloglistImg, 
      alt: 'Bloglist Project Image', 
    },
    sourceCode: 'https://github.com/wengcychan/fullstackopen-bloglist.git',
  },
  {
    name: 'Roll to Root',
    category: 'Gaming',
    description:
      'Game inspired by French Petanque',
    stack: ['Unity', 'C#'],
    img: {
      src: projectRollToRootImg, 
      alt: 'Roll to Root Project Image', 
    },
    sourceCode: 'https://github.com/wengcychan/roll-to-root.git',
    liveDemo: 'https://wchan.itch.io/roll-to-root',
  },
  {
    name: 'Crowd Ban',
    category: 'Gaming',
    description:
      'Crowd control game',
    stack: ['Unity', 'C#'],
    img: {
      src: projectCrowdBanImg, 
      alt: 'Crowd Ban Project Image', 
    },
    sourceCode: 'https://github.com/wengcychan/crowd-ban.git',
    liveDemo: 'https://wchan.itch.io/crowd-ban',
  },
  {
    name: 'Community360',
    category: 'Gaming',
    description:
      'City planning platform',
    stack: ['Unity3D', 'ArcGIS Maps SDK'],
    img: {
      src: projectCommunity360Img, 
      alt: 'Community360 Project Image', 
    },
    sourceCode: 'https://github.com/wengcychan/community360.git',
    liveDemo: null,
  },
  {
    name: 'MiniRT',
    category: 'Graphics',
    description:
      'Raytracing project',
    stack: ['C'],
    img: {
      src: projectminiRTImg, 
      alt: 'MiniRT Project Image', 
    },
    sourceCode: 'https://github.com/wengcychan/42cursus-miniRT.git',
    liveDemo: null,
  },
  {
    name: 'FdF',
    category: 'Graphics',
    description:
      'Wireframe model of a landscape',
    stack: ['C'],
    img: {
      src: projectFdFImg, 
      alt: 'FdF Project Image', 
    },
    sourceCode: 'https://github.com/wengcychan/42cursus-fdf.git',
    liveDemo: null,
  },
  {
    name: 'Push Swap',
    category: 'Others',
    description:
      'Sort data on a stack',
    stack: ['C' , 'Algorithm' ],
    img: {
      src: projectPushSwapImg, 
      alt: 'Push Swap Project Image', 
    },
    sourceCode: 'https://github.com/wengcychan/42cursus-push_swap.git',
    liveDemo: null,
  },
  {
    name: 'Philosophers',
    category: 'Others',
    description:
      '"Dining Philosophers" problem',
    stack: ['C' , 'Concurrent programming' ],
    img: {
      src: projectPhiloImg, 
      alt: 'Philosophers Project Image', 
    },
    sourceCode: 'https://github.com/wengcychan/42cursus-philo.git',
    liveDemo: null,
  },
  {
    name: 'Minishell',
    category: 'Others',
    description:
      'Custom shell similar to bash',
    stack: ['C' , 'Unix' ],
    img: {
      src: projectMinishellImg, 
      alt: 'Minishell Project Image', 
    },
    sourceCode: 'https://github.com/wengcychan/42cursus-minishell.git',
    liveDemo: null,
  },
  {
    name: 'CPP Modules',
    category: 'Others',
    description:
      'C++ School Projects',
    stack: ['C++'],
    img: {
      src: projectCppImg, 
      alt: 'C++ Project Image', 
    },
    sourceCode: 'https://github.com/wengcychan/42cursus-cpp.git',
    liveDemo: null,
  },
]

const skills = {
  stacks: [
    {
      category: 'Languages',
      stack: [
        {
          description: 'C',
          Icon: SiC
        },
        {
          description: 'C++',
          Icon: SiCplusplus
        },
        {
          description: 'C#',
          Icon: SiCsharp
        },
        {
          description: 'JavaScript',
          Icon: FaJs
        },
        {
          description: 'TypeScript',
          Icon: SiTypescript
        }
      ]
    },
    {
      category: 'Web Development',
      stack: [
        {
          description: 'React',
          Icon: FaReact
        },
        {
          description: 'HTML5',
          Icon: FaHtml5
        },
        {
          description: 'CSS3',
          Icon: FaCss3
        },
        {
          description: 'MongoDB',
          Icon: SiMongodb
        },
        {
          description: 'Nodejs',
          Icon: FaNodeJs
        },
      ]
    },
    {
      category: 'Gaming',
      stack: [
        {
          description: 'Unity',
          Icon: FaUnity
        }
      ] 
    },
    {
      category: 'Version Control',
      stack: [
        {
          description:'Git',
          Icon: FaGitAlt
        },
        {
          description: 'GitHub',
          Icon: FaGithub
        }
      ]
    },
    {
      category: 'Design',
      stack: [
        {
          description: 'Figma',
          Icon: FaFigma
        },
        {
          description: 'Canva',
          Icon: SiCanva
        },
        {
          description: 'Gimp',
          Icon: SiGimp
        },
        {
          description: 'Blender',
          Icon: SiBlender
        }
      ]
    },
  ],
  img: {
    src: skillsImg, 
    alt: 'Skills Background Image', 
  },
}

const contact = {
  descriptions: [
    'I am open to exploring internships or roles as a junior software developer.',
    'Get in touch to discuss project collaborations or just say hi',
    '—  I am eager to chat and learn about potential opportunities!',
  ],
  social: {
    email: {
      text: 'wengcychan95@gmail.com',
      address: 'mailto:wengcychan95@gmail.com'
    },
    phone: {
      text: '+358 41 474 7515',
      address: 'tel:+358414747515'
    }
  },
  icons: {
    EmailIcon: MdEmail,
    PhoneIcon: FaPhoneFlip
  },
}

export { navbar, home, about, projects, skills, contact }
