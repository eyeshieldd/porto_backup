/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Eyeshieldd",
  title: "Bonjour!!, I'm Johan Aji Setiawan",
  subTitle: emoji(
    "I'am Fullstack Developer,  i have knowledge, skills and have experiance in Dumbways Bootcamp for 6 weeks, Backend and Fullstack Developer in softwere house by building Website App Using Express js, React js and Codeigniter "
  ),
  resumeLink:
    "https://drive.google.com/file/d/1i48Edu7e5kp8sTrSsBzg1H2yMF3kzjXl/view?usp=sharing",
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Your Social Media Link

const socialMediaLinks = {
  github: "https://github.com/eyeshieldd",
  linkedin: "https://www.linkedin.com/in/johan-aji-setiawan/",
  gmail: "johanajisetiawan1118@gmail.com",
  gitlab: "https://gitlab.com/eyeshieldd",
  display: true, // Set true to display this section, defaults to false
};

// Your Skills Section

const skillsSection = {
  // title: "What i do",
  // subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end & highly performance for Back end for your web and mobile applications"
    ),
    emoji("⚡ Integration of third party services such as Firebase/AWS "),
  ],

  /* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react",
    },

    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },

    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node",
    },
    {
      skillName: "php",
      fontAwesomeClassname: "fab fa-php",
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm",
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-square",
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Your education background

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "SMK Negeri 1 Purwokerto",
      logo: require("./assets/images/smk.png"),
      subHeader: "Teknik Komputer Jaringan",
      duration: "2013-2016",
      descBullets: ["Learning Mikrotik And fundamental of Networking"],
    },
    {
      schoolName: "Universitas Amikom Yogyakarta",
      logo: require("./assets/images/amikom.png"),
      subHeader: "D3 Teknik Informatika (GPA 3.6)",
      duration: "2016-2019",
      descBullets: ["Learning Fundamental of Programming"],
    },
    {
      schoolName: "Praxis Academy",
      logo: require("./assets/images/praxis.png"),
      subHeader: "Python Developer",
      duration: "2018",
      descBullets: ["Learning Basic of Python using flask"],
    },
    {
      schoolName: "Dumbways Bootcamp",
      logo: require("./assets/images/dum.png"),
      subHeader: "Fullstack Developer",
      duration: "2019",
      descBullets: [
        "Learning to develop web and mobile app with javascript using express, redux and react js",
      ],
    },
  ],
};

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Express JS", //Insert stack or technology you have experience in
      progressPercentage: "80%", //Insert relative proficiency in percentage
    },
    {
      Stack: "React JS",
      progressPercentage: "70%",
    },
    {
      Stack: "Redux",
      progressPercentage: "60%",
    },
    {
      Stack: "Codeigniter",
      progressPercentage: "80%",
    },
    {
      Stack: "PostgreSQL",
      progressPercentage: "60%",
    },
    {
      Stack: "MySQL",
      progressPercentage: "60%",
    },
    {
      Stack: "GIT",
      progressPercentage: "60%",
    },
  ],
  displayCodersrank: false, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Your top 3 work experiences

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Backend Developer",
      company: "Circlelabs",
      companylogo: require("./assets/images/circle.png"),
      date: "September 2019 – Juni 2020",
      desc: "CircleLabs is a softwere house in yogyakarta",
      descBullets: [
        "Create more website using codeigniter framework and javascript",
      ],
    },
    {
      role: "Fullstack Developer",
      company: "Breef Studio",
      companylogo: require("./assets/images/breef.png"),
      date: "August 2020 - Present",
      desc: "Breef Studio is a softwere house number #1 in jakarta ",
      descBullets: [
        "Create more website for company using javascript and SEO Friendly ",
      ],
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "saadpasta", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true, // Set false to hide this section, defaults to true
};

// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "I'am only contributed a little bit but I am very proud of it :)",
  projects: [
    {
      image: require("./assets/images/pmiapp.jpg"),
      link: "https://badiklatpmi.or.id/",
    },
    {
      image: require("./assets/images/borobudur.jpg"),
      link: "https://mow.borobudurpedia.id/",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {
  title: emoji("Certification"),
  // subtitle:
  //   "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "SKKNI KOMINFO",
      // subtitle:
      //   "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/kominfo.png"),

      footerLink: [
        {
          name: "Certification",
          // url:
          //   "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing",
        },
      ],
    },
    {
      title: "Fullstack Certification",
      // subtitle:
      //   "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/dum.png"),

      footerLink: [
        {
          name: "Certification",
          // url:
          //   "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en",
        },
      ],
    },

    {
      title: "Cisco CCNA",
      // subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/ccna.jpg"),
      footerLink: [
        {
          name: "Certification",
          // url: "https://pakistan-olx-1.firebaseapp.com/",
        },
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?",
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies.",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo",
  ],
  display: true, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+62-8976869093",
  emailAddress: "johanajisetiawan1118@gmail.com",
};

//Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true, // Set true to display this section, defaults to false
};
export {
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
};
