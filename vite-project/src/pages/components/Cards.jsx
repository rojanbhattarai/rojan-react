
import { Link } from "react-router-dom";

function Cards({ blog }) {
  if (!blog) return null;

  return (
    <div className="max-w-screen-xl mx-auto p-6 sm:p-10 md:p-16">
      <div className="max-w-md mx-auto bg-white shadow-xl rounded-3xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
        
        {/* Dynamic Link */}
        <Link to={`/singlepage/${blog.id}`}>
          <img
            className="w-full h-56 object-cover"
            src={blog.image}
            alt={blog.title}
          />
        </Link>

        <div className="p-6 bg-purple-700 text-white">
          <Link
            to={`/singlepage/${blog.id}`}
            className="text-xl font-semibold hover:text-black block mb-2"
          >
            {blog.title}
          </Link>
          <p className="text-sm leading-relaxed">
            {blog.subtitle}
          </p>
          <div className="mt-4 text-xs text-gray-300">
            By <span className="font-medium text-white">{blog.author || "Unknown"}</span> |
            Location: <span className="text-white">{blog.location || "N/A"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
