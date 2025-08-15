export const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Carrier", path: "/carrier" },
  { name: "Contact Us", path: "/contact" },
];

export const stats = [
  { label: "  Jobs posted monthly", value: " 25,000+" },
  { label: " Successful hires", value: "50,000+" },
  { label: "Companies registered", value: "8,000+" },
  { label: "Average time to hire", value: "14 days" },
];

export const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechCorp Inc.",
    type: "Full-time",
    location: "San Francisco, CA (Remote)",
    experience: "3+ years experience",
    salary: "$90,000 - $120,000/year",
    postedDate: "2 days ago",
  },
  {
    id: 2,
    title: "UX Designer",
    company: "Creative Solutions",
    type: "Contract",
    location: "New York, NY",
    experience: "5+ years experience",
    salary: "$45 - $55/hour",
    postedDate: "1 week ago",
  },
  {
    id: 3,
    title: "Data Scientist",
    company: "Analytics Pro",
    type: "Full-time",
    location: "Boston, MA (Hybrid)",
    experience: "2+ years experience",
    salary: "$110,000 - $140,000/year",
    postedDate: "3 days ago",
  },
];

export const menuItems = [
  {
    title: "Home",
    icon: "IoHome",
    to: "/userdashboard",
  },
  {
    title: "Applied jobs",
    icon: "MdSend",
    to: "/userdashboard/applied",
  },
  {
    title: "My Jobs",
    icon: "MdWork",
    to: "/userdashboard/jobs",
  },
  {
    title: "Saved Jobs",
    icon: "MdBookmark",
    to: "/userdashboard/saved",
  },
  {
    title: "All Jobs",
    icon: "MdOutlineWorkOutline",
    to: "/userdashboard/all-jobs",
  },
  {
    title: "Profile",
    icon: "IoIosContact",
    to: "/userdashboard/profile",
  },
];
