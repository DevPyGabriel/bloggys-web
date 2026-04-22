import { useParams } from 'react-router-dom'
import { blogs } from "../../data/blogs";

export const BlogDetail = () => {
  const { id } = useParams<{ id: string }>()

  const blog = blogs[parseInt(id || '0')]

  if (!blog) {
    return <div>Blog no encontrado</div>
  }

  return (
    <div className="max-w-7xl mx-auto mb-12">
      <div className="mb-6">
        <img src={blog.image} alt={blog.title} className="w-full lg:h-158 object-cover rounded-lg" />
      </div>
      <div className="mb-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-heading mb-2 sm:mb-4">{blog.title}</h1>
        <div className="flex items-center justify-between mb-4">
          <span className="text-body font-medium">{blog.author}</span>
          <div className="flex items-center gap-4">
            <span className="text-sm text-body-subtle font-medium">{blog.timestamp}</span>
            <span className="bg-blue-500/10 text-blue-500 text-sm font-medium px-4 py-1 rounded-full">
              {blog.career}
            </span>
          </div>
        </div>
        <p className="text-body mb-6">{blog.description}</p>
        <div className="prose max-w-none">
          <p className="text-body leading-relaxed">{blog.fullContent}</p>
        </div>
      </div>
    </div>
  )
}