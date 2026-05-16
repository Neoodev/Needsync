import type {
  Service,
  ProcessStep,
  Project,
  TeamMember,
  Testimonial,
  FaqItem,
} from "@/types";

export const SERVICES: Service[] = [
  {
    icon: "🛠️",
    title: "Custom Software Development",
    desc: "We build tailored software designed for your business. No templates—just systems that work the way you do.",
  },
  {
    icon: "🌐",
    title: "Web & System Development",
    desc: "From internal management systems to full-scale web platforms—fast, secure, and scalable.",
  },
  {
    icon: "📱",
    title: "Mobile Application Development",
    desc: "Intuitive, high-performing mobile applications that keep your business connected anytime, anywhere.",
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    desc: "Clean, user-friendly, responsive interfaces that enhance experience and improve engagement.",
  },
  {
    icon: "⚙️",
    title: "Software Maintenance",
    desc: "Eliminate repetitive tasks by automating workflows—saving time and reducing operational costs.",
  },
  {
    icon: "⚙️",
    title: "Branding & Digital Solutions",
    desc: "Eliminate repetitive tasks by automating workflows—saving time and reducing operational costs.",
  },
  {
    icon: "⚙️",
    title: "IT Consultation",
    desc: "Eliminate repetitive tasks by automating workflows—saving time and reducing operational costs.",
  },
  {
    icon: "⚙️",
    title: "Custom Business Solutions",
    desc: "Eliminate repetitive tasks by automating workflows—saving time and reducing operational costs.",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    num: "01",
    title: "Research",
    desc: "This phase focuses on identifying client needs, market trends, and project objectives. The team gathers insights and explores innovative ideas to build a strong project foundation.",
  },
  {
    num: "02",
    title: "Planning",
    desc: "The project structure, system architecture, features, timelines, and strategies are carefully planned to ensure organized development and execution.",
  },
  {
    num: "03",
    title: "Tasking",
    desc: "Responsibilities are assigned to team members based on expertise to ensure an efficient and productive workflow.",
  },
  {
    num: "04",
    title: "Production",
    desc: "The development phase begins where ideas are transformed into actual systems, applications, designs, and functional outputs.",
  },
  {
    num: "05",
    title: "Review",
    desc: "The final output undergoes testing, evaluation, and feedback collection to ensure quality assurance before deployment or delivery.",
  },
  {
    num: "06",
    title: "Deployment",
    desc: "We launch your system and provide ongoing support to keep everything running.",
  },
];

export const PROJECTS: Project[] = [
  {
    tag: "Retail",
    title: "Inventory Management System",
    client: "Retail Business",
    problem: "Manual tracking caused errors and delays",
    solution: "Automated real-time inventory tracking",
    result: "Reduced stock errors by 40% and improved operational efficiency",
  },
  {
    tag: "Education",
    title: "Student Information System",
    client: "Educational Institution",
    problem: "Disorganized records and manual processes",
    solution: "Centralized student data management system",
    result: "Streamlined admin tasks and improved data accessibility",
  },
  {
    tag: "Service",
    title: "Appointment Booking App",
    client: "Service-Based Business",
    problem: "Inefficient booking and missed appointments",
    solution: "Mobile app with scheduling and notifications",
    result: "Increased booking efficiency and reduced no-shows",
  },
  {
    tag: "Analytics",
    title: "Business Analytics Dashboard",
    client: "Startup Company",
    problem: "Lack of data insights for decision-making",
    solution: "Real-time data visualization dashboard",
    result: "Enabled smarter and faster business decisions",
  },
];

export const TEAM: TeamMember[] = [
  {
    initials: "JD",
    name: "John Doe",
    role: "Founder / Lead Dev",
    desc: "Leads development and ensures high-quality system architecture.",
  },
  {
    initials: "JS",
    name: "Jane Smith",
    role: "UI/UX Designer",
    desc: "Designs intuitive, user-friendly interfaces for all projects.",
  },
  {
    initials: "MC",
    name: "Michael Cruz",
    role: "Backend Developer",
    desc: "Handles server-side logic, databases, and system performance.",
  },
  {
    initials: "AR",
    name: "Anna Reyes",
    role: "Project Manager",
    desc: "Ensures projects are delivered on time and aligned with expectations.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "NeedSynq transformed our outdated system into a modern, automated platform. Our workflow is now faster and more efficient.",
    name: "Business Owner",
    role: "Retail Industry",
  },
  {
    quote:
      "The team was professional, responsive, and delivered exactly what we needed. Highly recommended for any business looking to modernize.",
    name: "Startup Founder",
    role: "Tech Startup",
  },
  {
    quote:
      "Our experience with NeedSynq was smooth from start to finish. The system they built exceeded our expectations completely.",
    name: "Operations Manager",
    role: "Service Company",
  },
];

export const FAQS: FaqItem[] = [
  {
    q: "How long does a project take?",
    a: "Project timelines vary by complexity, but most systems are completed within a few weeks to a few months. We give you a clear timeline during planning.",
  },
  {
    q: "Do you offer support after deployment?",
    a: "Yes—we provide ongoing support and maintenance to ensure your system runs smoothly long after launch.",
  },
  {
    q: "Can you customize existing systems?",
    a: "Absolutely. We can enhance or modify existing systems—adding features, improving performance, or updating the UI.",
  },
  {
    q: "Do you work with startups?",
    a: "We love working with startups and early-stage businesses. Our flexible approach fits any budget and growth stage without compromising quality.",
  },
];

export const WHY_ITEMS: string[] = [
  "Client-centered solutions",
  "Modern and scalable technologies",
  "Creative and innovative approach",
  "Efficient project workflow",
  "Strong focus on quality assurance",
];

export const NAV_LINKS = [
  "Services",
  "Process",
  "Projects",
  "About",
  "Contact",
] as const;
export type NavLink = (typeof NAV_LINKS)[number];
