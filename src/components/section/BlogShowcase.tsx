import { blogs } from "../../data/blogs";
import { Link } from "react-router-dom";
import Icons from "../Icons";

export const BlogShowcase = () => {

  return (
    <div id="blog-showcase" className="my-8">
      <div className="flex flex-col mb-6">
        <span className="text-4xl font-bold">Blogs Recientes</span>
        <span className="mt-2 text-body">
          Explora los antecedentes y aprendizajes más recientes
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-8">
        {blogs.map((blog, index) => (
          <Link key={index} to={`/blog/${index}`} className="block group">
            <div className="bg-white rounded-lg overflow-hidden transition-all duration-300 hover:ring-2 hover:ring-blue-500 hover:shadow-xl shadow-blue-500/20 h-full relative">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-64 object-cover group-hover:scale-105 transform transition-all duration-300"
              />
              <div className="p-6 pb-12 flex flex-col">
                <h3 className="text-xl font-bold text-heading mb-2">
                  {blog.title}
                </h3>
                <p className="text-body-subtle mb-4">{blog.description}</p>
              </div>
              <div className="flex justify-between items-center px-6 pb-6 absolute bottom-0 w-full">
                <div className="text-sm text-body-subtle flex gap-1 items-center">
                  <span className="text-blue-500"><Icons.Time size={16} /></span>
                  <span>{blog.timestamp}</span>
                </div>
                <span className="bg-blue-500/10 text-blue-500 text-sm font-medium px-4 py-1.5 rounded-full">
                  {blog.career}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
