/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Aditya's Portfolio",
  description:
    "Passionate Learner, Grinding Hard for Competitive Programming and Software Development. Self-Learner and Miticulous Person aiming to Create a Technical Impact with Smart-Work",
  og: {
    title: "Aditya Sharma Portfolio",
    type: "website",
    url: "https://rainbowxray.github.io/AdityaSharma.github.io/#/",
  },
};

//Home Page
const greeting = {
  title: "Aditya Sharma",
  logo_name: "AdityaSharma",
  nickname: "psycho_pirate",
  subTitle:
    "Passionate learner, Grinding hard for competitive programming and software development. Self-learner and miticulous student aiming to create a Technical impact with smart-work",
  resumeLink:
    "https://drive.google.com/file/d/1ocGattqkyYsjdgXS95GwRNp62tPwS20C/view?usp=sharing",
  portfolio_repository: "",
  githubProfile: "",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/RainbowXRay",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/aditya-sharma-86aa08205/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:aadityasharma0115@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "Codechef",
  //   link: "https://www.codechef.com/users/psycho_pirate",
  //   fontAwesomeClassname: "fa-solid fa-code",
  //   backgroundColor: "#5B4638"
  // }
];

const skills = {
  data: [
    {
      title: "Competitive Programming",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Solved 1500+ Competitive Programming & DSA Problems",
        "⚡ Experience with Professional Programming Languages such as C, C++, Python, Java",
        "⚡ Certified with Several DSA, Software Development Courses/Projects",
      ],
      softwareSkills: [
        {
          skillName: "C++",
          fontAwesomeClassname: "bxl:c-plus-plus",
          style: {
            backgroundColor: "transparent",
            color: "#00599C",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "cib:java",
          style: {
            backgroundColor: "transparent",
            color: "#007396",
          },
        },
        {
          skillName: "C",
          fontAwesomeClassname: "mdi:language-c",
          style: {
            backgroundColor: "transparent",
            color: "#A8B9CC",
          },
        },
        {
          skillName: "PyPy",
          fontAwesomeClassname: "simple-icons:pypy",
          style: {
            backgroundColor: "transparent",
            color: "#193440",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building Front End Designs Using NodeJs,CSS and JavaScript",
        "⚡ Developing mobile applications using Flutter,JavaScript",
        "⚡ Building Backend Database Applications in NodeJs, SQL",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Learning model Designing on cloud to use on mobile devices",
        "⚡ Have Intermediate Knowledge of Google Cloud, Azure and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "UI/UX Animation & Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF9A00",
          },
        },
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF61F6",
          },
        },
        {
          skillName: "Blender",
          fontAwesomeClassname: "simple-icons:blender",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Maya",
          fontAwesomeClassname: "simple-icons:autodesk",
          style: {
            color: "#0696D7",
          },
        },
        {
          skillName: "Adobe After Effects",
          fontAwesomeClassname: "simple-icons:adobeaftereffects",
          style: {
            color: "#9999FF",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/psycho_pirate",
    },
    {
      siteName: "Leetcode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#FFFF00",
      },
      profileLink: "https://leetcode.com/psycho_pirate/",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#0000FF",
      },
      profileLink: "https://codeforces.com/profile/psycho_pirate",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/adityasharma2031",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Acropolis Institute of Technology and Research",
      subtitle: "Bachelor of Technology CSE",
      logo_path: "clg.png",
      alt_name: "IIITDM Kurnool",
      duration: "2020 - Present",
      descriptions: [
        "⚡ My Semester-Wise CGPA Grades - 1st (9.59), 2nd (9.51), 3rd (9,98). Overall SGPA - (9.70)",
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, OS, OOPS, AI etc.",
        "⚡ Completed Minor Projects alongside Certified DSA Courses from Coding Ninjas, GeeksforGeeks",
      ],
      website_link: "http://aitr.ac.in",
    },
  ],
};

const certifications = {
  certifications: [
    // {
    //   title: "Machine Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "stanford_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
    //   alt_name: "Stanford University",
    //   color_code: "#8C151599",
    // },
    // {
    //   title: "Deep Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    {
      title: "IoT",
      subtitle: "- Laura Quintana",
      logo_path: "ciscoo.png",
      certificate_link:
        "https://drive.google.com/file/d/1vB-rn8f73zT4I6WRjRrnaHtOzvv3c3nl/view?usp=sharing",
      alt_name: "CISCO",
      color_code: "#FFC0CB",
    },
    {
      title: "Microsoft AI ",
      subtitle: "- Amit Aggarwal",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1MRYX5DbJtZznbWzYBbflBz_0fYJtsLOZ/view?usp=sharing",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "AWS Security",
      subtitle: "- Maureen Lonergan",
      logo_path: "aws.png",
      certificate_link:
        "https://drive.google.com/file/d/1thjUTgSD164c0ixu6TsIosmu1uOIYvCZ/view?usp=sharing",
      alt_name: "AWS",
      color_code: "#0C9D5899",
    },
    {
      title: "TCS MasterCraft",
      subtitle: "- Vijaylaxmi Gopal",
      logo_path: "tcs.png",
      certificate_link:
        "https://drive.google.com/file/d/1PBODCIfEyOeZVQsiu9rVfuQOk_OMJSRr/view?usp=sharing",
      alt_name: "deeplearning.ai",
      color_code: "#00FFFF",
    },
    {
      title: "Python Bootcamp",
      subtitle: "- SS Code Academy",
      logo_path: "udemy1.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1uwnJkDTTcM7h9k9MECqXmihm1ByMgCOn/view?usp=sharing",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Kuberenetes on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Cryptography",
      subtitle: "- Saurabh Mukhopadhyay",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1vAmE2nQR4IiITKoAzGZLSoO81Vj4L0C8/view?usp=sharing",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many well estabilished organisations as Web Dev, ML, Cloud, Tech, Digital Intern. I look forward to get involved with many more Technical communities.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Technical Content Writer",
          company: "GeeksforGeeks",
          company_url: "https://www.geeksforgeeks.org/",
          logo_path: "GeeksforGeeks.png",
          duration: "Sept 2021 - Jan 2022",
          location: "Noida, Uttarpradesh",
          description:
            "Published a Few Articles related to Python Programming and DSA concepts. Although Some of them were overridden by newly published articles.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "CP Ranks",
      experiences: [
        {
          title: "Codechef Ranks",
          company: "Codechef",
          company_url: "https://www.codechef.com/",
          logo_path: "cc.jpg",
          // duration: "Sept 2021 - Jan 2022",
          // location: "Noida, Uttarpradesh",
          description: [
            "⚡ 4 Star, Max Rating (1876)",
            "⚡ Sept Starters - #161 / 11000+",
            "⚡ Feb Starters - #125 / 6100+",
            "⚡ Medicaps Codechef DSA Contest - WINNER (#1)",
            "⚡ NSUT Codechef Contest - Runner Up (#2)",
            "⚡ Problems Solved - 300+ ⚡",
          ],
          color: "#00FF00",
        },
        {
          title: "Leetcode Ranks",
          company: "Leetcode",
          company_url: "https://leetcode.com/",
          logo_path: "lc.png",
          description: [
            "⚡ 3 Star, Max Rating (1684)",
            "⚡ Biweekly 75 - #621 / 16000+",
            "⚡ Monthly Badges - Nov, Jan, Mar, Apr",
            "⚡ Problems Solved - 450+ ⚡",
          ],
          color: "#FF0000",
        },
        {
          title: "Codeforces Ranks",
          company: "Codeforces",
          company_url: "https://codeforces.com/",
          logo_path: "cf.png",
          description: [
            "⚡ Pupil, Max Rating (1203)",
            "⚡ Round 764 - #2733 / 12000+",
            "⚡ April Fools 2022 - #681 / 8200+",
            "⚡ Problems Solved - 280+ ⚡",
          ],
          color: "#FFFF00",
        },
        {
          title: "Other Ranks",
          company: "Google, Techgig",
          // company_url: "https://codeforces.com/",
          logo_path: "google_logo.png",
          description: [
            "⚡ Google CodeJam Qualifying Round 2022 - #2200 / 37000+",
            "⚡ TechgGig Code Gladiators Finalist - #1250 / 1.5 Lakh+",
            "⚡ Google Kickstart 2022 - <3000 / 18000+⚡",
          ],
          color: "#FF0000",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Web Development Intern",
          company: "Adaan Digital Solutions",
          company_url: "https://www.adaan.com",
          logo_path: "adaan.jpg",
          duration: "Apr 2021 - Aug 2021",
          location: "New Delhi",
          description:
            "I worked on Software management of Large scale websites. Worked on different real life projects and successfully completed all tasks and tracks within deadline",
          color: "#ee3c26",
        },
        {
          title: "Digital Marketing Intern",
          company: "Primite Marketing",
          company_url: "https://primite.co.in/",
          logo_path: "pm.jpg",
          duration: "May 2021 - June 2021",
          location: "Work From Home",
          description:
            "Primite Marketing is a oragnization helping brands to increase outreach and we provide a wide range of digital marketing services. ",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Microsoft Student Partner",
          company: "Microsoft",
          company_url: "https://www.microsoft.com/",
          logo_path: "microsoft_logo.png",
          duration: "Sept 2020 - Apr 2021",
          location: "Hyderabad, Telangana",
          description:
            "This program is for university students to gain the awareness and use of Azure tools in Project development. Through this, Cloud Computing concepts are introduced.",
          color: "#D83B01",
        },
        {
          title: "GeeksforGeeks Campus Ambassador",
          company: "GeeksforGeeks",
          company_url: "https://www.geeksforgeeks.org/",
          logo_path: "GeeksforGeeks.png",
          duration: "May 2021 - April 2022",
          location: "Noida, Uttar Pradesh",
          description:
            "My responsibility was to Conduct Workshops and Seminars with an aim to create an ecosystem for CS around the campus by spreading its benefits.",
          color: "#000000",
        },
        {
          title: "Google Cloud Explore",
          company: "Google",
          company_url: "https://about.google/",
          logo_path: "google_logo.png",
          duration: "Sept 2021 - Dec 2021",
          location: "Hyderabad, Telangana",
          description:
            "Cloud Architecture & Infrastructure program sponsored by Google for University Students. The curriculum offered Beginner, Intermediate & Advanced Cloud Learning Tracks",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  // title: "Publications",
  // description:
  //   "I have worked on and published a few research papers and publications of my own.",
  // avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "ss (3).png",
    description: "",
  },
  // blogSection: {
  //   title: "Blogs",
  //   subtitle:
  //     "For individual fundament al empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
  //   link: "https://ashutoshhathidara.wordpress.com",
  //   avatar_image_path: "blogs_image.svg",
  // },
  addressSection: {
    title: "Address",
    subtitle: "81/47, Agrawal Nagar, Indore, MP 452001",
    avatar_image_path: "address_image.svg",
    // location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 7389147115",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  contactPageData,
};
