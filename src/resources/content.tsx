import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text} from "@once-ui-system/core";
import Image from 'next/image';

const person: Person = {
  firstName: "Kalaiselvan",
  lastName: "Thangaraj",
  name: `Kalaiselvan Thangaraj`,
  role: "Autonomous Systems Engineer",
  avatar: "/images/avatar.jpg",
  email: "kalaiselvan.thangarajs@gmail.com",
  location: "Europe/Berlin", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "German", "Tamil"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/kalaiselvan-t",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/kalaiselvan-thangaraj/",
  },
  // {
  //   name: "Threads",
  //   icon: "threads",
  //   link: "https://www.threads.com/@once_ui",
  // },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Engineering intelligence into Autonomous Systems</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Formal Verification of AI modules</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/formal-ai-verification",
  },
  subline: (
    <>
      Hi there! I'm Kalaiselvan, an Autonomous Systems engineer
      <br /> specializing in Robotics, AI, and Formal verification
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/kalaiselvan-thangaraj-vasgts",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Kalaiselvan is a passionate robotics and AI researcher dedicated to advancing autonomous systems
        through cutting-edge machine learning techniques. His work focuses on deep learning, reinforcement learning,
        multi-robot coordination, and formal verification of AI modules to ensure safe and reliable systems for real-world applications.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "ThoughtWorks",
        timeframe: "2024 - 2025",
        role: "Research Intern - AI Safety in Autonomous Vehicles",
        achievements: [
          <>
            Built a semantic AI-driven verification pipeline that improved interpretability and robustness of autonomous-vehicle object detection, enabling precise identification and remediation of model failures.
          </>,
          <>
            Modeled the driving environment as an ontology and authored a DSL to generate formal, machine-checkable verification specifications; translated ontology + reasoner output into MILP constraints and verified object detection with the SCIP solver.
          </>,
          <>
            Probed CNN internals using a vision-language model to explain classifications; when verification failed, pinpointed missing features and directed targeted dataset augmentation to improve robustness.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   src: "/images/projects/project-01/cover-01.jpg",
          //   alt: "Once UI Project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        company: "Corning",
        timeframe: "2021 - 2022",
        role: "Robotics Engineer",
        achievements: [
          <>
            Developed software for automating the assembly process of CWDM/DWDM modules, streamlining optical component manufacturing workflows.
          </>,
          <>
            Used ROS2 and MoveIt to program Meca500 robot for multi-station operations including filter pickup, cleaning, active alignment, epoxy dispensing and module assembly.
          </>,
          <>
            Developed a Jupyter widgets-based GUI to operate and control the entire assembly process, providing intuitive real-time monitoring and control capabilities.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Trento",
        description: <>M.Sc Mechatronics Engineering</>,
      },
      {
        name: "Technical University of Trento",
        description: <>M.Sc ICT Innovation</>,
      },
      {
        name: "Kumaraguru College of Technology",
        description: <>B.E Mechatronics Engineering</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical Skills",
    skills: [
      {
        title: "",
        description: (<></>),
        tags: [
          { name: "Python", icon: "" },
          { name: "C++", icon: "" },
          { name: "JavaScript", icon: "" },
          { name: "Rust", icon: "" },
          { name: "Git", icon: "" },
          { name: "Docker", icon: "" },
          { name: "Linux", icon: "" },
          { name: "ROS2", icon: "" },
          { name: "MoveIt", icon: "" },
          { name: "Gazebo", icon: "" },
          { name: "SLAM", icon: "" },
          { name: "MoveIt2", icon: "" },
          { name: "Nav2", icon: "" },
          { name: "PyTorch", icon: "" },
          { name: "TensorFlow", icon: "" },
          { name: "OpenCV", icon: "" },
          { name: "YOLO", icon: "" },
          { name: "Reinforcement Learning", icon: "" },
          { name: "Deep Learning", icon: "" },
          { name: "Vision Language Action Models", icon: "" },
          { name: "MILP", icon: "" },
          { name: "SCIP Solver", icon: "" },
          { name: "Ontologies", icon: "" },
          { name: "DSL Design", icon: "" },
          { name: "Safety Analysis", icon: "" },
          { name: "LiDAR", icon: "" },
          { name: "Cameras", icon: "" },
          { name: "IMU", icon: "" },
          { name: "Meca500 Robot", icon: "" },
          { name: "Arduino/RPi", icon: "" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects`,
  // title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    // {
    //   src: "/images/gallery/horizontal-1.jpg",
    //   alt: "image",
    //   orientation: "horizontal",
    // },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
