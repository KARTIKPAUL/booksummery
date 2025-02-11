import React from "react";

const SectionHeading = ({ children }) => (
    <h2 className="text-4xl font-bold text-center mb-12" style={{ color: COLORS.secondary }}>
      {children}
    </h2>
  );

  const CardTitle = ({ children }) => (
    <h3 className="text-2xl font-semibold mb-4" style={{ color: COLORS.primary }}>
      {children}
    </h3>
  );



const Catagories = () => {

    const [inView, setInView] = useState(false);
    
      const handleScroll = () => {
        const heroSection = document.querySelector('.hero-section');
        const rect = heroSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setInView(true);
        }
      };
    
      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

  return (
    <div className="container mx-auto py-16">
      <SectionHeading>Explore by Categories</SectionHeading>
      <div className="grid md:grid-cols-3 gap-8 px-4">
        {["Self-Help", "Business", "Fiction"].map((category, index) => (
          <div
            key={index}
            className="p-8 rounded-lg shadow-md text-center transition-all duration-300 hover:shadow-xl cursor-pointer"
            style={{ backgroundColor: COLORS.lightBg }}
          >
            <CardTitle>{category}</CardTitle>
            <p className="text-lg" style={{ color: COLORS.textSecondary }}>
              {category === "Self-Help" &&
                "Discover strategies to transform your mindset and achieve your goals."}
              {category === "Business" &&
                "Unlock powerful insights into leadership, strategy, and innovation."}
              {category === "Fiction" &&
                "Immerse yourself in stories that inspire and captivate your imagination."}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catagories;
