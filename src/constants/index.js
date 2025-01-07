import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 2 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I'm Shrishti, a Computer Science student at IIIT Sri City with a passion for merging tech and design to create impactful projects. As Design Lead at IOTA and an active member of the design team at IIITS, I focus on web development, UI/UX, and collaborative platforms. Through my work, I've helped improve project efficiency and driven engagement across various initiatives. I love building solutions that make a difference—like BachavSetu, a disaster management app, and SkillHub, a freelancer collaboration platform. I also lead workshops to share my skills and help others grow. Being recognized at national hackathons motivates me to keep innovating and contributing to projects that matter.`;

export const EXPERIENCES = [
  {
    year: "Aug 2023 - Present",
    role: "Design Lead",
    company: "IOTA",
    description: `Directed 5+ collaborative projects, contributing significantly to web development and design, boosting project outcomes by 30%. Led 6+ skill-enhancement workshops, acquiring and honing diverse technical and design skills.`,
    technologies: ["Canva", "Figma", "Adobe Creative Suite"],
  },
  {
    year: "Mar 2023 - Apr 2023",
    role: "Design Core",
    company: "IIIT Sri City",
    description: `Designed posters, merchandise for the Annual Techno-Cultural Fest of IIITS, enhancing branding and visibility. Crafted 10+ social media posts, reaching 80,000+ views and receiving recognition from IIITian Network's social media page`,
    technologies: ["Canva", "Figma", "Adobe Creative Suite"],
  },
];

export const PROJECTS = [
  {
    title: "SkillHub",
    image: project1,
    description:
      "Engineered a Freelancer Collaboration Platform which connects freelancers & employers, enabling the seamless posting of jobs, bidding on projects, and providing reviews for services rendered. Implemented a detailed analytics system for admin, along with providing key insights into the database. Deployed Redux store for better context management across the application and seamless user experience.",
    technologies: [
      "ReactJS",
      "Redux",
      "JavaScript",
      "ExpressJS",
      "NodeJS",
      "MongoDB",
    ],
    link: "https://github.com/codegasms/skillhub",
  },
  {
    title: "Nexus",
    image: project2,
    description:
      "Developed a Student Collaboration Platform which empowers students success by providing them with a platform to connect with others and seek help for their projects.Added a hiring feature, which students can leverage for many benefits. Made a collaborative hiring feature with dynamic state management & live feedback. Integrated WebSockets (socketio) to implement live chat feature, providing real-time communication.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Express",
      "EJS",
      "NodeJS",
      "MongoDB",
    ],
    link: "https://github.com/FSD-Project-Group21/NEXUS",
  },
  {
    title: "Dacoid",
    image: project3,
    description:
      " Created a Dynamic Event Calendar Application that allows users to manage events and view them in an orderly manner in a calendar. Designed the platform to handle CRUD, drag-n-drop & search filtering of events for better user experience. Added support for exporting data in various formats like json & csv",
    technologies: ["NextJS", "TypeScript", "TailwindCSS"],
    link: "https://github.com/shrishti0308/dacoid",
  },
  {
    title: "BachavSetu",
    image: project4,
    description:
      " Built a Disaster Management & Rescue application for the Smart India Hackathon 2024. Applied features to connect Rescue teams with stranded people & streamlines rescue operations and hence reduce casualties by providing support pre & post disaster Built a mesh network using bluetooth to connect stranded people without network connectivity",
    technologies: ["Flutter", "Dart", "Python"],
    link: "https://github.com/dot-config-IIITS/application-SIH-BachavSetu",
  },
];

export const CONTACT = {
  phoneNo: "+91 9555842737 ",
  email: "shrishti.m22@iiits.in",
};
