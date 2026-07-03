import { Link } from "react-router";

function NotFound() {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-white">
      <h1 className="text-7xl font-bold">404</h1>

      <p className="mt-3">Page Not Found</p>

      <Link
        to="/"
        className="mt-8 px-6 py-3 bg-cyan-500 rounded-lg"
      >
        Back Home
      </Link>
    </div>
  );
}

export default NotFound;