import { Github, Linkedin, Mail, MapPin, ArrowDown } from "lucide-react"
import profile from "../../public/profile.jpg"
import Image from "next/image"

export default function Hero() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 pt-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-fade-in-up">
            <div className="`">
              <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium mb-4 animate-bounce-in">
                👋 Welcome to my portfolio
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-gradient">
                Susan Ghimire
              </span>
            </h1>
            <p className="text-2xl sm:text-3xl text-gray-600 mb-6 font-light">
              Frontend Developer & <br />
              <span className="text-blue-600 font-medium">I build your dream project</span>
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-2xl">
              Passionate about creating exceptional digital experiences with modern technologies. I specialize in React and
              Next.js, with a keen eye for design and user experience.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-5 h-5" />
                <span>Sydney, NSW</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Mail className="w-5 h-5" />
                <span>sushangmi55@gmail.com</span>
              </div>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-12">
              <a
                href="https://github.com/SushanGhimire"
                className="p-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label="GitHub"
                target="_blank"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/susan-ghimire-92602917a/"
                className="p-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label="LinkedIn"
                target="_blank"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:sushangmi55@gmail.com"
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-full hover:from-green-600 hover:to-blue-700 transition-all duration-300 font-medium hover:scale-105 hover:shadow-lg"
              >
                Get In Touch
              </a>
            </div>
            <div className="animate-bounce">
              <ArrowDown className="w-6 h-6 text-gray-400 mx-auto lg:mx-0" />
            </div>
          </div>
          <div className="flex justify-center lg:justify-end animate-fade-in-right">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
                <Image
                  src={profile}
                  alt="Susan Ghimire"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg animate-pulse">
                3+ Years
              </div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-2xl animate-spin-slow">
                ⚡
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
