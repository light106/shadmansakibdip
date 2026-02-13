import React from 'react';
import { Project, Skill, SocialLink, Experience, Education, Certification, Award } from './types';
import { Github, Linkedin, Mail, Facebook, Phone, Globe, Cpu, Server, Network, Database, Award as AwardIcon, Music, Zap, BookOpen } from 'lucide-react';

export const HERO_TITLE = "Engr. Shadman Sakib";
export const HERO_SUBTITLE = "Intel Certified Artificial Intelligence Lead Coach @ Government of Bangladesh | ICT National Trainer | Telecommunications Network Specialist | Ex- Banglalink | EdTEch | Programmer @ EMIS, DSHE";
export const HERO_DESC = "Experienced engineering professional specializing in Artificial Intelligence, Machine Learning, and Telecommunications with 14+ years of industry expertise.";

export const ABOUT_TEXT = "A dedicated engineering professional with extensive experience in AI, telecommunications, and educational technology, committed to driving innovation and excellence. As an Intel Certified AI Lead Coach and National Trainer, I empower the next generation with 4IR skills.";
export const CAREER_OBJ = "To obtain a responsible and challenging position that will allow me to learn new technologies and skills while utilizing my previous experiences to improve beyond my current abilities and continue the strong professional relationship with the stakeholders to outshine within the organization.";

export const STATS = [
  { label: "Experience", value: "14+ Years" },
  { label: "Projects", value: "50+ Completed" }
];

export const EXPERTISE_FIELDS = [
  { name: "Artificial Intelligence", icon: <Cpu /> },
  { name: "IP Networking", icon: <Network /> },
  { name: "IT Server Maintenance", icon: <Server /> },
  { name: "Electronic Devices", icon: <Zap /> },
  { name: "DBMS", icon: <Database /> },
  { name: "Telecom Networks", icon: <Globe /> }
];

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    role: "Programmer, EMIS Cell",
    company: "Directorate of Secondary & Higher Education (DSHE), Bangladesh",
    period: "Nov 2025 - Present",
    description: [
      "Modernize the Personnel Data System (PDS) for BCS General Education Cadre officers.",
      "Design and implement an automated Gradation List management system.",
      "Load the updating, cleansing, and maintenance of a centralized institutional database.",
      "Define scope, perform audits, and support implementation of AI-driven initiatives."
    ],
    techFocus: ["EMIS architecture", "Database design", "AI integration", "Software deployment"]
  },
  {
    id: 2,
    role: "National Trainer, ICT",
    company: "National University | Bangladesh",
    period: "Aug 2025 - Present",
    description: [
      "Conducting training sessions for national level ICT educators.",
      "Developing training modules and curriculum for higher education.",
      "Mentoring master trainers for nationwide implementation of digital literacy."
    ],
    techFocus: ["Pedagogy", "Curriculum Development", "ICT Training"]
  },
  {
    id: 3,
    role: "Lecturer & Head of Department (ICT)",
    company: "Ministry of Education / Kalaroa Govt. College",
    period: "Feb 2021 - Present",
    description: [
      "Overseeing development and execution of ICT policies and initiatives.",
      "Intel-certified AI Lead Coach for 4IR initiative (Nov 2022 - Present).",
      "Training on ML, DL, and neural networks using Python.",
      "Organizing ICT fairs and digital literacy workshops."
    ],
    techFocus: ["Network infrastructure", "Biometric systems", "Website development", "APA preparation"]
  },
  {
    id: 4,
    role: "Regional Operations Deputy Manager",
    company: "Banglalink Digital Communications Limited",
    period: "Jan 2014 - Feb 2021",
    description: [
      "Deputy Team Leader for Dhaka North Region.",
      "BSS, Power and Transmission operations.",
      "Network KPI maintenance and performance monitoring.",
      "Strategic dashboard development with data visualization."
    ],
    techFocus: ["Optical fiber monitoring", "Cost-effective strategy", "Business KPI monitoring", "MTTR minimization"]
  },
  {
    id: 5,
    role: "Base Station Sub-system (BSS) Engineer",
    company: "Beta Engineering (Pvt.) Limited",
    period: "Jun 2011 - Dec 2013",
    description: [
      "BTS site location survey and assessment.",
      "Assisting O&M vendors for daily network maintenance.",
      "Network Operations support for Grameenphone infrastructure."
    ],
    techFocus: []
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "CS50AI: Artificial Intelligence with Python",
    field: "Artificial Intelligence",
    institution: "Harvard University (HarvardX)",
    year: "March 2025",
    color: "bg-red-500/10 border-red-500/20 text-red-400"
  },
  {
    degree: "Master of Science",
    field: "Information Technology",
    institution: "Jahangirnagar University",
    year: "May 2021",
    color: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
  },
  {
    degree: "Bachelor of Science",
    field: "Electrical and Electronic Engineering",
    institution: "Khulna University of Engineering and Technology (KUET)",
    year: "June 2011",
    color: "bg-blue-500/10 border-blue-500/20 text-blue-400"
  },
  {
    degree: "Higher Secondary Certificate",
    field: "Science",
    institution: "Satkhira City College, Satkhira",
    year: "September 2006",
    color: "bg-purple-500/10 border-purple-500/20 text-purple-400"
  },
  {
    degree: "Secondary School Certificate",
    field: "Science",
    institution: "Satkhira Government High School",
    year: "June 2004",
    color: "bg-orange-500/10 border-orange-500/20 text-orange-400"
  }
];

export const SKILL_CATEGORIES: Skill[] = [
  {
    category: "Programming Languages",
    items: [
      { name: "Python", level: 85 },
      { name: "C/C++", level: 85 },
      { name: "Typescript", level: 90 },
      { name: "HTML/CSS", level: 90 }
    ]
  },
  {
    category: "Technical Skills",
    items: [
      { name: "Machine Learning", level: 95 },
      { name: "Deep Learning", level: 90 },
      { name: "Telecom Networks", level: 95 },
      { name: "Data Visualization", level: 88 }
    ]
  },
  {
    category: "Software & Tools",
    items: [
      { name: "Power BI", level: 90 },
      { name: "MS Excel", level: 92 },
      { name: "SQL/RDBMS", level: 85 },
      { name: "WordPress/Joomla", level: 80 }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Banglalink Mega Project",
    category: "Telecom",
    role: "Project Engineer",
    description: "2G BTS Swap and 3G Rollout for Orascom Telecom Bangladesh (Banglalink).",
    deliverables: [
      "Day-to-day vendor management",
      "Performance monitoring of BTS and Microwave equipment",
      "Provisional Acceptance Testing and Reporting",
      "Equipment performance comparison analysis"
    ],
    date: "Jan 2014 - Feb 2015"
  },
  {
    id: 2,
    title: "Smart Bangladesh Initiative",
    category: "Government/AI",
    role: "AI Lead Coach",
    description: "4th Industrial Revolution (4IR) initiative under Ministry of Education.",
    deliverables: [
      "AI and ML training for government officials",
      "Python-based neural networks implementation",
      "Digital literacy workshops and ICT fairs",
      "Accelerating SDG-4 achievement in education"
    ],
    date: "2023 - Present"
  }
];

export const CERTIFICATIONS: Certification[] = [
  { title: "Project Management Professional", organization: "PMI", details: "PMP Certified, 35 PDUs", icon: <AwardIcon />, color: "text-emerald-400" },
  { title: "Cloud University", organization: "Rackspace", details: "CloudU Certified, Infrastructure", icon: <Globe />, color: "text-blue-400" },
  { title: "AI Lead Coach", organization: "Intel Corporation", details: "Intel Certified, AI4Y Program", icon: <Cpu />, color: "text-purple-400" },
  { title: "Teacher's Training", organization: "Nottingham University", details: "ECPD Certified", icon: <BookOpen />, color: "text-orange-400" },
  { title: "Mobile Backhaul Solutions", organization: "Huawei", details: "4G-LTE & Wi-Fi", icon: <Network />, color: "text-red-400" },
  { title: "Foundation Training", organization: "NAEM", details: "DG Award Winner", icon: <AwardIcon />, color: "text-indigo-400" },
];

export const AWARDS: Award[] = [
  { title: "Director General Award", category: "All Round Performance", description: "198th Foundation Training Course - NAEM", icon: <AwardIcon /> },
  { title: "BASIS Best Freelancer", category: "Winner 2013", description: "Bangladesh Association of Software and Information Services", icon: <AwardIcon /> },
  { title: "Musical Excellence", category: "Multiple Awards", description: "School, College & University Competitions", icon: <Music /> },
  { title: "Table Tennis Champion", category: "Inter Hall Championship", description: "KUET - 2009", icon: <AwardIcon /> }
];

export const SOCIALS: SocialLink[] = [
  { platform: "LinkedIn", url: "https://linkedin.com/in/shadman106", icon: <Linkedin className="w-5 h-5" /> },
  { platform: "Facebook", url: "https://facebook.com/shadman.light", icon: <Facebook className="w-5 h-5" /> },
  { platform: "Email", url: "mailto:shadman106@gmail.com", icon: <Mail className="w-5 h-5" /> },
  { platform: "Phone", url: "tel:+8801962401831", icon: <Phone className="w-5 h-5" /> },
];

export const SYSTEM_INSTRUCTION = `You are an AI assistant for Engr. Shadman Sakib's portfolio.
Data:
- Name: Engr. Shadman Sakib
- Roles: Programmer at EMIS Cell (DSHE), AI Lead Coach, Ex-Banglalink Deputy Manager, National Trainer (ICT).
- Experience: 14+ Years in Telecom & AI.
- Education: HarvardX CS50AI, MSc IT (JU), BSc EEE (KUET).
- Skills: Python, Machine Learning, Telecom Networks, Power BI.
- Projects: Banglalink Mega Project (Telecom), Smart Bangladesh Initiative (AI Training).
- Awards: DG Award (NAEM), BASIS Best Freelancer.
- Interests: Singing, Guitar, Table Tennis.
Goal: Answer questions about Shadman's career, skills, and projects professionally.`;