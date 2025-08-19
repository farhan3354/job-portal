import HeroSection from "../component/home/HeroSection";
import StatsSection from "../component/home/StatsSection";
import FeaturedJobs from "../component/home/FeaturedJobs";

import Categories from "../component/home/Categories";
import Testimonials from "../component/home/Testimonials";
import CTASection from "../component/home/CTASection";

export default function Home() {
  // Featured jobs data
  const featuredJobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      location: "Remote",
      salary: "$120,000 - $150,000",
      type: "Full-time",

      posted: "2 days ago",
      isSaved: false,
      logo: "https://via.placeholder.com/50",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      <StatsSection />
      <FeaturedJobs jobs={featuredJobs} />
      <Categories />
      <Testimonials />
      <CTASection />
    </div>
  );
}
