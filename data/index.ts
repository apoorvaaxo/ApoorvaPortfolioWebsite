import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Education", link: "#education" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Avatar: A 3D Customiser Website",
    des: "An immersive platform for 3D customization, blending AI designs with interactive personalization using React.js and Three.js.",
    img: "/avatar.svg",
    iconLists: ["/three.svg"],
    link: "https://github.com/apoorvaaxo/Avatar-3D-Customiser-Website",
  },
  {
    id: 2,
    title: "Aurora: Your Daily Weather Guide",
    des: "A weather app built with React, offering current weather updates with a dynamic and visually appealing interface.",
    img: "/aurora.svg",
    iconLists: [ "/tail.svg"],
    link: "https://github.com/apoorvaaxo/Aurora-Your-Daily-Weather-Guide",
  },
  {
    id: 3,
    title: "Sorting Algorithms Visualizer",
    des: "A tool developed with OpenGL and Python to visually demonstrate sorting algorithms, enhancing understanding through real-time visualizations.",
    img: "/sortingvis.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://github.com/apoorvaaxo/SortingVisualiser",
  },
  {
    id: 4,
    title: "Nike Shopping Website | Figma Prototype",
    des: "A Nike-themed shopping website recreated using Figma, featuring GSAP animations and Three.js 3D effects.",
    img: "/nikeshopping.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://www.figma.com/design/CJavDzkuQQve6py2B4XTrG/UX-UI-Project-internship?node-id=0-1&t=x80upopvhpnJeGc5-1",
  },
  {
    id: 5,
    title: "ProjectBoost",
    des: "A simple rocket game for beginners, focused on fun and basic game development using foundational skills.",
    img: "/projectboost.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/apoorvaaxo/Nike-Shopping-Website-",
  },
  {
    id: 6,
    title: "Park-EZ App | Figma Prototype",
    des: "A convenient app that helps users find the nearest available parking spot in real time. With easy navigation and a clean interface, Park-EZ simplifies the parking experience.",
    img: "/parkez.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://www.figma.com/design/NEl7sOCDr1SIpC2Aii0W9k/SIH?node-id=0-1&t=Igbp1tzTSnwMOveD-1",
  },
];


export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const MySkills = [
  {
    id: 1,
    title: "ReactJS",
    
    className: "md:col-span-2",
    thumbnail: "/reactjs.svg",
  },
  {
    id: 2,
    title: "  Figma",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/figma.svg",
  },
  {
    id: 3,
    title: "Vite",
    
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/vite.svg",
  },
  {
    id: 4,
    title: "ThreeJS",
    
    className: "md:col-span-2",
    thumbnail: "/threejs.svg",
  },
  {
    id: 5,
    title: "NextJS",
    
    className: "md:col-span-2",
    thumbnail: "/nextjs.svg",
  },
  {
    id: 6,
    title: "Creative Web Design",
    
    className: "md:col-span-2",
    thumbnail: "/creativetechnology.svg",
  },
  {
    id: 7,
    title: "Color Theory",
    
    className: "md:col-span-2",
    thumbnail: "/colortheory.svg",
  },
  {
    id:8,
    title: "Probelm Solving",
    
    className: "md:col-span-2",
    thumbnail: "/problemsolving.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link:"https://github.com/apoorvaaxo"
  },
  
  {
    id: 2,
    img: "/link.svg",
    link:"https://www.linkedin.com/in/apoorva-viresh-d-45a320259/"
  },
];