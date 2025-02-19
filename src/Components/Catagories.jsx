import { FaBook, FaChartLine, FaFeatherAlt, FaArrowRight } from "react-icons/fa";
import { IoLibrary, IoPlanet, IoHeart, IoHardwareChip, IoLockClosed } from "react-icons/io5";
import { Link } from "react-router-dom";

const categories = [
  {
    name: "Self-Help",
    description: "Transform your mindset and achieve personal growth.Discover diverse literary worlds through our carefully curated collection of categories",
    icon: <FaBook size={40} className="text-blue-500" />,
    color: "bg-blue-500",
    link: "/self-help"
  },
  {
    name: "Business",
    description: "Master leadership, strategy, and innovation.Discover diverse literary worlds through our carefully curated collection of categories",
    icon: <FaChartLine size={40} className="text-green-500" />,
    color: "bg-green-500",
    link: "/business"
  },
  {
    name: "Fiction",
    description: "Captivating stories that spark imagination.Discover diverse literary worlds through our carefully curated collection of categories",
    icon: <FaFeatherAlt size={40} className="text-red-500" />,
    color: "bg-red-500",
    link: "/fictions"
  },
  {
    name: "Science",
    description: "Explore universe wonders and discoveries.Discover diverse literary worlds through our carefully curated collection of categories",
    icon: <IoPlanet size={40} className="text-purple-500" />,
    color: "bg-purple-500",
    link: "/science"
  },
  {
    name: "Technology",
    description: "Cutting-edge innovations and future tech.Discover diverse literary worlds through our carefully curated collection of categories",
    icon: <IoHardwareChip size={40} className="text-cyan-500" />,
    color: "bg-cyan-500",
    link: "/technology"
  },
  {
    name: "History",
    description: "Journey through time and civilizations.Discover diverse literary worlds through our carefully curated collection of categories",
    icon: <IoLibrary size={40} className="text-amber-500" />,
    color: "bg-amber-500",
    link: "/history"
  },
  {
    name: "Health",
    description: "Wellness, nutrition, and fitness guides.Discover diverse literary worlds through our carefully curated collection of categories",
    icon: <IoHeart size={40} className="text-pink-500" />,
    color: "bg-pink-500",
    link: "/health"
  },
  {
    name: "Mystery",
    description: "Thrilling puzzles and enigmatic tales.Discover diverse literary worlds through our carefully curated collection of categories",
    icon: <IoLockClosed size={40} className="text-indigo-500" />,
    color: "bg-indigo-500",
    link: "/mystery"
  },
  {
    name: "Biography",
    description: "Inspiring lives of remarkable people.Discover diverse literary worlds through our carefully curated collection of categories",
    icon: <FaFeatherAlt size={40} className="text-emerald-500" />,
    color: "bg-emerald-500",
    link: "/biography"
  }
];

const Categories = () => {
  return (
    <div className="relative py-20 px-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white via-sky-300 to-sky-500 tracking-tigh">
            Explore by Categories
          </h2>
          <p className="text-xl text-gray-200 mt-4 max-w-2xl mx-auto">
            Discover diverse literary worlds through our carefully curated collection of categories
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 mb-20 px-20">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group bg-gray-800 backdrop-blur-sm rounded-xl shadow-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="flex flex-col items-start">
                <div className="mb-6 p-4 rounded-lg bg-opacity-10 group-hover:scale-110 transition-transform text-center">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold  mb-2 text-yellow-500">{category.name}</h3>
                <p className="text-gray-100 mb-6 text-left">{category.description}</p>
                <div className={`w-full h-1 mb-4 ${category.color} opacity-30 group-hover:opacity-100 transition-opacity`} />
                <Link 
                to ={category.link}
                className={`flex items-center ${category.color} hover:${category.color}/90 text-white px-6 py-2 rounded-lg font-semibold transition-colors`}>
                  Explore
                  <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <a 
            href="/genres"
            className="flex items-center justify-center bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 transition-all shadow-lg hover:shadow-2xl hover:scale-110 animate-bounce-slow px-6 py-3 rounded-3xl"
          >
          <span className="px-5 py-1 text-white font-semibold">Learn More  </span>  <FaArrowRight  className="text-white text-3xl" />
          </a>
        </div>
      </div>

      {/* Decorative elements */}
      {/* <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-20 left-20 w-48 h-48 bg-purple-500 rounded-full mix-blend-screen blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-blue-500 rounded-full mix-blend-screen blur-3xl animate-float-delayed" />
      </div> */}
    </div>
  );
};

export default Categories;