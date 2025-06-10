import { ExternalLink, Github, ArrowRight } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution built with Next.js, Stripe, and PostgreSQL. Features include user authentication, product management, and order processing.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Material-UI"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Weather Dashboard",
    description:
      "A responsive weather dashboard that displays current conditions and forecasts using multiple weather APIs with beautiful data visualizations.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Vue.js", "Chart.js", "Weather API", "CSS3", "JavaScript"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    title: "Social Media Analytics",
    description:
      "A comprehensive analytics dashboard for social media metrics with data visualization, reporting features, and automated insights.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React", "D3.js", "Python", "FastAPI", "Redis"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Featured <span className="text-blue-600">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work, demonstrating my ability to build scalable and user-friendly applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up ${
                project.featured ? "md:col-span-1" : ""
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {project.featured && (
                <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold rounded-full">
                  FEATURED
                </div>
              )}

              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full font-medium hover:bg-blue-100 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-900 hover:text-gray-900 transition-all duration-300 hover:scale-105 font-medium"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </div>
              </div>

              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowRight className="w-5 h-5 text-blue-600" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-full hover:from-gray-800 hover:to-gray-600 transition-all duration-300 hover:scale-105 font-medium"
          >
            View All Projects
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
