import { Simnyx, Zebec, ZebecCard, ZebecStake } from "@/public/projects";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Zebec Network",
    description:
      "Zebec Network is a decentralized infrastructure platform designed to enable real-time, on-chain payments and seamless value transfer. The ecosystem supports businesses, individuals, and investors by providing instant access to funds and tokens, eliminating delays and reducing reliance on traditional financial intermediaries.",
    image: Zebec,
    technologies: ["Next.js", "TypeScript", "Web3.js", "Tailwind CSS", "Redux"],
    liveUrl: "https://app.zebec.io/",
    githubUrl: "",
    featured: true,
  },
  {
    title: "Zebec Cards",
    description:
      "A responsive web portal built for Zebec Card users to manage and monitor their crypto debit cards. The platform enables users to activate cards, view transaction history, check balances, and manage account details securely. ",
    image: ZebecCard,
    technologies: ["Next.js", "TypeScript", "Web3.js", "Tailwind CSS", "Redux"],
    liveUrl: "https://card.zebec.io",
    githubUrl: "",
    featured: true,
  },
  {
    title: "Zebec Staking",
    description:
      "Zebec Stake is a secure and user-friendly staking platform that allows users to stake their $ZBCN tokens and earn passive rewards through an Annual Percentage Yield (APY).",
    image: ZebecStake,
    technologies: ["Next.js", "TypeScript", "Web3.js", "Tailwind CSS", "Redux"],
    liveUrl: "https://stake.zebec.io",
    githubUrl: "",
    featured: false,
  },
  {
    title: "Simnyx",
    description:
      "Simnyx is a professional IT training institute based in Nepal, offering both in-person and online courses in web development, software engineering, programming, hardware, and networking. The platform is designed to support learners through hands-on project work, performance evaluations, and career placement assistance.",
    image: Simnyx,
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Redux"],
    liveUrl: "https://www.simnyx.com",
    githubUrl: "",
    featured: false,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Featured <span className="text-blue-600">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work, demonstrating my ability to build
            scalable and user-friendly applications.
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
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

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
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      className="flex items-center gap-2 px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-900 hover:text-gray-900 transition-all duration-300 hover:scale-105 font-medium"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}
                </div>
              </div>

              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowRight className="w-5 h-5 text-blue-600" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-full font-medium">
            And many more...
            {/* <ArrowRight className="w-5 h-5" /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
