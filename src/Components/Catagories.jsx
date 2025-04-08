import { FaBook, FaChartLine, FaFeatherAlt, FaArrowRight } from "react-icons/fa";
import { IoLibrary, IoPlanet, IoHeart, IoHardwareChip, IoLockClosed } from "react-icons/io5";
import { Link } from "react-router-dom";

const categories = [
  {
    name: "Self-Help",
    description: "Transform your mindset and achieve personal growth.",
    icon: <FaBook size={32} className="text-blue-500" />,
    color: "bg-blue-500",
    link: "/self-help"
  },
  {
    name: "Business",
    description: "Master leadership, strategy, and innovation.",
    icon: <FaChartLine size={32} className="text-green-500" />,
    color: "bg-green-500",
    link: "/business"
  },
  {
    name: "Fiction",
    description: "Captivating stories that spark imagination.",
    icon: <FaFeatherAlt size={32} className="text-red-500" />,
    color: "bg-red-500",
    link: "/fictions"
  },
  {
    name: "Science",
    description: "Explore universe wonders and discoveries.",
    icon: <IoPlanet size={32} className="text-purple-500" />,
    color: "bg-purple-500",
    link: "/science"
  },
  {
    name: "Technology",
    description: "Cutting-edge innovations and future tech.",
    icon: <IoHardwareChip size={32} className="text-cyan-500" />,
    color: "bg-cyan-500",
    link: "/technology"
  },
  {
    name: "History",
    description: "Journey through time and civilizations.",
    icon: <IoLibrary size={32} className="text-amber-500" />,
    color: "bg-amber-500",
    link: "/history"
  },
  {
    name: "Health",
    description: "Wellness, nutrition, and fitness guides.",
    icon: <IoHeart size={32} className="text-pink-500" />,
    color: "bg-pink-500",
    link: "/health"
  },
  {
    name: "Mystery",
    description: "Thrilling puzzles and enigmatic tales.",
    icon: <IoLockClosed size={32} className="text-indigo-500" />,
    color: "bg-indigo-500",
    link: "/mystery"
  },
  {
    name: "Biography",
    description: "Inspiring lives of remarkable people.",
    icon: <FaFeatherAlt size={32} className="text-emerald-500" />,
    color: "bg-emerald-500",
    link: "/biography"
  }
];

const Categories = () => {
  return (
    <div className="relative py-8 md:py-16 px-4 md:px-16 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="container mx-auto">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white via-sky-300 to-sky-500 tracking-tight">
            Explore by Categories
          </h2>
          <p className="text-lg md:text-xl text-gray-200 mt-2 md:mt-4 max-w-2xl mx-auto px-4">
            Discover diverse literary worlds through our carefully curated collection of categories
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 px-2 md:px-8 lg:px-12">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group bg-gray-800 backdrop-blur-sm rounded-xl shadow-xl p-4 md:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="flex flex-col items-start">
                <div className="mb-4 p-2 md:p-3 rounded-lg bg-opacity-10 group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-yellow-500">{category.name}</h3>
                <p className="text-sm md:text-base text-gray-100 mb-4">{category.description}</p>
                <div className={`w-full h-1 mb-3 ${category.color} opacity-30 group-hover:opacity-100 transition-opacity`} />
                <Link 
                  to={category.link}
                  className={`flex items-center ${category.color} hover:${category.color}/90 text-white px-4 py-2 rounded-lg font-semibold text-sm md:text-base transition-colors`}>
                  Explore
                  <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8 md:mt-16">
          <a 
            href="/genres"
            className="flex items-center justify-center bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 transition-all shadow-lg hover:shadow-xl px-5 py-2 md:px-6 md:py-3 rounded-3xl"
          >
            <span className="px-2 md:px-4 py-1 text-white font-semibold text-sm md:text-base">Learn More</span>
            <FaArrowRight className="text-white text-lg md:text-2xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Categories;