const Loader = () => {
  return (
    <div className="fixed inset-0 bg-[#070B14] flex items-center justify-center z-[9999]">

      <div className="flex flex-col items-center">

        <div className="w-20 h-20 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>

        <h2 className="mt-6 text-2xl font-bold text-cyan-400">
          Loading...
        </h2>

      </div>

    </div>
  );
};

export default Loader;