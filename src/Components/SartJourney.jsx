const StartJouney = () => {
  const COLORS = {
    lightBg: "#f9f9f9",
    textPrimary: "#333",
    textSecondary: "#666",
    accent: "#ff6b6b",
  };
  return (
    <div className="py-16 text-center bg-slate-950 text-white">
      <h2
        className="text-4xl font-bold mb-4"
        style={{ color: COLORS.secondary }}
      >
        Start Your Journey Today!
      </h2>
      <p className="text-xl mb-8" style={{ color: COLORS.textSecondary }}>
        Join thousands of readers discovering the world's best books.
      </p>
      <button
        className="px-10 py-4 text-lg font-semibold rounded-lg shadow-lg transition-all hover:shadow-xl"
        style={{
          backgroundColor: COLORS.primary,
          color: "",
        }}
      >
        Browse Summaries
      </button>
    </div>
  );
};

export default StartJouney;
