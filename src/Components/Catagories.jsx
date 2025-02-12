import { FaBook, FaChartLine, FaFeatherAlt } from "react-icons/fa";
import Cards from "./Cards";

const categories = [
  {
    name: "Self-Help",
    description:
      "Discover strategies to transform your mindset and achieve your goals.",
    icon: <FaBook size={40} className="text-blue-500" />,
  },
  {
    name: "Business",
    description:
      "Unlock powerful insights into leadership, strategy, and innovation.",
    icon: <FaChartLine size={40} className="text-green-500" />,
  },
  {
    name: "Fiction",
    description:
      "Immerse yourself in stories that inspire and captivate your imagination.",
    icon: <FaFeatherAlt size={40} className="text-red-500" />,
  },
  {
    name: "Science",
    description:
      "Explore groundbreaking discoveries and the wonders of the universe.",
    icon: <FaBook size={40} className="text-purple-500" />,
  },
  //{
  //   name: "History",
  //   description:
  //     "Uncover the events and figures that shaped our world through time.",
  //   icon: <FaChartLine size={40} className="text-orange-500" />,
  // },
];


const Categories = () => {
  return (
    <div className="container mx-auto py-16 px-6 bg-gray-900">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white via-sky-300 to-sky-500 tracking-tigh">Explore by Categories</h2>
        <p className="text-lg text-gray-100 mt-2">Here You Can Describe & Explore All Types Of Books Whatever you can interested</p>
      </div>
      
      <div className="grid md:grid-cols-4 gap-8">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 text-center border border-gray-200 flex flex-col justify-evenly h-64 transition-transform transform hover:scale-105"
          >
            <div className="flex flex-col items-center">
              <div className="mb-4">{category.icon}</div>
              <h3 className="text-2xl font-semibold text-yellow-500">{category.name}</h3>
              <p className="text-md text-gray-600 mt-2">{category.description}</p>
            </div>
            <div className="w-12 h-12 rounded-full flex items-center justify-center mt-4 self-center bg-gray-100 text-gray-600 hover:bg-gray-200 transition">
              <span className="text-xl">→</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
