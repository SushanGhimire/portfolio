import {
  Aabiskar,
  Jabir,
  Raghib,
  Sagar,
  Srijan,
  Sudarsan,
} from "@/public/testimonials/intex";
import { Quote, Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Sagar Adhikari",
    role: "Team Lead",
    company: "Zebec HQ",
    image: Sagar,
    content:
      "Working with Susan has been an absolute pleasure. He’s an excellent frontend developer, quick to understand the vision and even quicker to bring it to life. What made it even better was his experience with blockchain projects; that background came in handy during some of the more complex projects we had. But above all, it’s his energy that stands out. Susan brings this level of enthusiasm to the team, always ready to share his perspective, suggest improvements, and just push things forward. You can always count on him to show up with fresh ideas and a get-it-done attitude.",
    rating: 5,
  },
  {
    name: "Jabir Khan",
    role: "CEO",
    company: "Intelzy",
    image: Jabir,
    content:
      "Susan is an exceptional frontend developer with a keen eye for design and a deep understanding of user experience. His work at Intelzy consistently reflects a high level of professionalism, creativity, and technical expertise. Susan has a unique ability to turn complex requirements into clean, responsive, and intuitive interfaces. He’s reliable, detail-oriented, and always goes the extra mile to deliver quality results on time. A true asset to any development team.",
    rating: 5,
  },
  {
    name: "Raghib Islam",
    role: "Web3 Tech Strategist, Efficient Project Execution Expert",
    company: "Zebec HQ",
    image: Raghib,
    content:
      "It was a great experience working with Susan. He consistently delivered clean and impressive designs, always on time and with great attention to detail. His ability to handle pressure situations calmly and professionally makes him one of the best co-workers I’ve collaborated with. Highly skilled, reliable, and a true asset to any team.",
    rating: 5,
  },
  {
    name: "Aabishkar Joshi",
    role: "Lead Software Engineer",
    company: "Zebec HQ",
    image: Aabiskar,
    content:
      "I had the pleasure of working with Susan Ghimire on multiple frontend projects. He's a skilled developer with a strong eye for detail and design, and consistently delivered clean, efficient code. Susan is a great team player—reliable, collaborative, and proactive. I highly recommend him for any frontend role.",
    rating: 5,
  },
  {
    name: "Sudarshan Timilsina",
    role: "Junior Frontend Developer",
    company: "Zebec HQ",
    image: Sudarsan,
    content:
      "Learning under Susan, a highly skilled senior frontend engineer, has been an incredible experience. His mentorship shaped the way I think about code quality, UI architecture, and problem-solving. He has a unique ability to simplify complex frontend concepts and always encouraged me to think critically and write clean, maintainable code. His emphasis on best practices and attention to detail gave me a strong foundation in modern frontend development. Beyond technical knowledge, he instilled a mindset of continuous learning and professionalism. Thanks to his guidance, I felt confident stepping into real-world projects. Susan’s mentorship truly accelerated my growth as a frontend engineer",
    rating: 5,
  },
  {
    name: "Srijan Pokhrel",
    role: "Senior Backend Engineer",
    company: "Intelzy",
    image: Srijan,
    content:
      "Working with Susan has been a consistently great experience. He’s reliable, focused, and always delivers quality work. His ability to quickly understand complex codebases and contribute meaningfully to rapid prototyping makes him a tremendous asset to any development team. Susan also excels in team communication; he’s transparent, respectful, and collaborative, which helps projects move smoothly and keeps everyone aligned. On the frontend, Susan brings strong UI/UX knowledge. His designs are intuitive and user-focused, and he consistently pays attention to the small details that make a significant difference in usability. And of course, no review would be complete without mentioning his legendary speed-eating skills. He can finish a full plate of long noodles in just 10 to 13 seconds. A rare mix of talent, speed, and style!",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What <span className="text-blue-600">People</span> Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Testimonials from managers, CEOs, and colleagues I've had the
            pleasure of working with.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index}>
              <div className="bg-white rounded-lg p-6 shadow-lg relative">
                <Quote className="absolute top-4 right-4 w-8 h-8 text-blue-200" />

                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

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
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
