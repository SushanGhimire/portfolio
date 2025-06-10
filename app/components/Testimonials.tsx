import { Quote, Star } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO",
    company: "TechCorp Inc.",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "Alex is an exceptional developer who consistently delivers high-quality solutions. His technical expertise and leadership skills have been instrumental in our company's growth.",
    rating: 5,
  },
  {
    name: "Michael Rodriguez",
    role: "CTO",
    company: "StartupXYZ",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "Working with Alex was a game-changer for our development team. His ability to architect scalable solutions and mentor junior developers is truly remarkable.",
    rating: 5,
  },
  {
    name: "Emily Johnson",
    role: "Product Manager",
    company: "Digital Agency Pro",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "Alex has an incredible eye for detail and user experience. He transformed our design concepts into beautiful, functional applications that exceeded our expectations.",
    rating: 5,
  },
  {
    name: "David Kim",
    role: "Engineering Manager",
    company: "InnovateTech",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "Alex's problem-solving skills and technical depth are outstanding. He consistently finds elegant solutions to complex challenges and delivers projects on time.",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What People Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Testimonials from managers, CEOs, and colleagues I've had the pleasure of working with.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg relative">
              <Quote className="absolute top-4 right-4 w-8 h-8 text-blue-200" />

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.content}"</p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
