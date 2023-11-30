import backgroundImg from './images/home-page.png'
import aboutImg from './images/about-me.png'
import projectGreenBinImg from './images/projects/web/GreenBin.png'
import projectRollToRootImg from './images/projects/gaming/roll-to-root.png'
import projectCrowdBanImg from './images/projects/gaming/crowd-ban.png'
import projectCommunity360Img from './images/projects/gaming/community360.png'
import projectminiRTImg from './images/projects/graphics/miniRT.png'
import projectFdFImg from './images/projects/graphics/fdf.png'
import projectMinishellImg from './images/projects/others/minishell.png'
import projectPhiloImg from './images/projects/others/philo.png'

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
    EmailIcon: MdEmail,
    GithubIcon: FaGithub
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
  {
    name: 'GreenBin',
    category: 'web',
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
    name: 'Portfolio',
    category: 'web',
    description:
      'This personal portfolio',
    stack: ['React', 'HTML', 'CSS'],
    img: {
      src: projectGreenBinImg, 
      alt: 'GreenBin Project Image', 
    },
    sourceCode: 'https://github.com/wengcychan/portfolio.git',
    liveDemo: 'https://wengcychan.github.io/portfolio/',
  },
  {
    name: 'Roll to Root',
    category: 'gaming',
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
    category: 'gaming',
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
    category: 'gaming',
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
    category: 'graphics',
    description:
      'Raytracing project',
    stack: ['C'],
    img: {
      src: projectminiRTImg, 
      alt: 'MiniRT Project Image', 
    },
    sourceCode: 'https://github.com/wengcychan/hive-42cursus.git',
    liveDemo: null,
  },
  {
    name: 'FdF',
    category: 'graphics',
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
    category: 'others',
    description:
      'Sort data on a stack',
    stack: ['C' , 'Algorithm' ],
    img: {
      src: projectPhiloImg, 
      alt: 'Philosophers Project Image', 
    },
    sourceCode: 'https://github.com/wengcychan/42cursus-push_swap.git',
    liveDemo: null,
  },
  {
    name: 'Philosophers',
    category: 'others',
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
    category: 'others',
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
]

const skills = [
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
        description: 'Blender',
        Icon: SiBlender
      },
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
      }
    ]
  },
]

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
    EmailIcon: MdEmail,
    PhoneIcon: FaPhoneFlip
  },
}

export { home, about, projects, skills, contact }
