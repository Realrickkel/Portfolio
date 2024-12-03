import { EXPERIENCEIMG, GITHUBIMG, INSTAGRAMIMG, LINKEDINIMG, PROJECTIMG } from "../utils";

export const navLists = [
    {name: "Projecten",
     link: "/#/#Projects",
     targetid: "Projects",
     targetName: "ProjectsNav",
     image: PROJECTIMG
    }, 
    {name: "Ervaring",
     link: "/#/#Experience",
     targetid: "Experience",
     targetName: "ExperienceNav",
     image: EXPERIENCEIMG
    },
  ];

  export const footerLinks = [
    { name: "Instagram",
      link: 'https://www.instagram.com/realrickkel',
      img: INSTAGRAMIMG
     }, 
     {name: "Linkedin",
      link: 'https://www.linkedin.com/in/rick-van-laarhoven-060821103',
      img: LINKEDINIMG
     }, 
     {name: "GitHub",
      link: 'https://github.com/Realrickkel',
      img: GITHUBIMG
     }
  ];