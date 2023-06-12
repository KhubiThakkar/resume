// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Khubi",
  middleName: "",
  lastName: "Thakkar",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/KhubiThakkar",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/khubi.thakkar.7/",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/khu.bee/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/khubi-thakkar/",
    },
    // {
    //   image: "fa-twitter",
    //   url: "https://www.twitter.com/khubithakkar/",
    // },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/khubithakkar.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/profilePhoto.jpeg"),
  imageSize: 375,
  // message:
  //   "My name is Khubi Thakkar. I’m a graduate of 2020 from National University of Sciences and Technology at Islamabad with a degree in Computer Engineering. I'm most passionate about giving back to the community, and my goal is to pursue this passion within the field of software engineering. In my free time I like working on open source projects.",
  message: "My name is Khubi Thakkar. I'm a graduate of 2021 from Faculty of Engineering and Technology, MSU. I am passionate about solving problems and building solutions, my goal is to persue this passion with software engineering. When I am not coding, I like to doodle drawings, journal and catch up with the latest geopolitical events.",
  resume: require("../editable-stuff/KhubiThakkar.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "KhubiThakkar", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: ["Blogger"],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/profilePhoto.jpeg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/profilePhoto.jpeg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "React", value: 65 },
    { name: "Node", value: 75 },
    { name: "JavaScript", value: 75 },
    { name: "SQL", value: 65 },
    { name: "MongoDB", value: 60 },
    { name: "HTML/CSS", value: 55 },
    { name: "C/C++", value: 75 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Organization", value: 90 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time MERN Stack Developer position! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "khubithakkar@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Full Stack Developer',// Here Add Company Name
      companylogo: require('../assets/img/tcs.png'),
      date: 'Aug 2021 – Present',
    },
    {
      role: 'Trainee Engineer',
      companylogo: require('../assets/img/ltts.jpg'),
      date: 'May 2021 – July 2021',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
