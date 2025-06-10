import { Calendar, MapPin, Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Frontend Engineer (React + Next)",
    company: "Zebec HQ",
    location: "Remote",
    period: "Feb 2022 - Mar 2024",
    achievements: [
      "Built high-performance, scalable web applications using React.js, Next.js, TypeScript, and Tailwind CSS.",
      "Collaborated with cross-functional teams (designers, backend, QA) to deliver seamless UI/U experiences across multiple fintech products.",
      "Optimised frontend performance, reducing average load time by 30% and improving Lighthouse performance scores.",
      "Integrated Apollo GraphQL and Redux Toolkit for efficient data handling and state management.",
      `Conducted code reviews, contributed to frontend architecture decisions, and mentored junior developers on best practices`,
    ],
    color: "from-blue-500 to-purple-600",
  },
  {
    title: "Frontend Developer (React)",
    company: "Intelzy Software",
    location: "Bharatpur, Chitwan, Nepal",
    period: "Oct 2021 - Feb 2022",
    achievements: [
      `Led the frontend development of ICAS, an enterprise-level online billing system handling annual
      transactions of over ₹10 Crores.`,
      `Developed responsive, mobile-first UI components using React.js, HTML5, and CSS3.`,
      `Guided and mentored junior developers to follow clean code principles and implement reusable
      component patterns.`,
      `Collaborated with backend engineers to integrate REST APIs, ensuring fast and secure data
      transactions.`,
    ],
    color: "from-green-500 to-blue-600",
  },
  {
    title: "Frontend Developer (React)",
    company: "Pwnbot System",
    location: "Bharatpur, Chitwan, Nepal",
    period: "Aug 2020 - Oct 2021",
    achievements: [
      `Joined as an intern and transitioned to full-time developer, contributing to 4+ production-grade web
      projects.`,
      `Gained hands-on experience in React, Redux, and Vue.js, improving cross-framework adaptability.`,
      `Improved performance and accessibility scores across multiple client websites through refactoring
      and optimisation.`,
      `Participated in internal hackathons and frontend workshops, continuously sharpening JS and UI
      development skills.`,
    ],
    color: "from-purple-500 to-pink-600",
  },
];

export default function WorkExperience() {
  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Work <span className="text-blue-600">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A journey through my professional career, building innovative
            solutions and leading development teams.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative animate-fade-in-up`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div
                  className={`flex flex-col lg:flex-row gap-8 ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="hidden lg:block absolute left-1/2 top-8 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-blue-500 rounded-full z-10"></div>

                  <div className="lg:w-1/2">
                    <div
                      className={`sticky top-8 ${
                        index % 2 === 0
                          ? "lg:text-right lg:pr-8"
                          : "lg:text-left lg:pl-8"
                      }`}
                    >
                      <div className="inline-flex items-center gap-2 mb-4">
                        <div
                          className={`p-2 rounded-full bg-gradient-to-r ${exp.color}`}
                        >
                          <Briefcase className="w-5 h-5 text-white" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {exp.title}
                      </h3>
                      <p className="text-xl font-semibold text-blue-600 mb-3">
                        {exp.company}
                      </p>
                      <div
                        className={`flex items-center gap-4 mb-2  justify-center ${
                          index % 2 === 0
                            ? "lg:justify-end"
                            : "lg:justify-start"
                        }`}
                      >
                        <div
                          className={`flex items-center gap-2 text-gray-600 `}
                        >
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm font-medium">
                            {exp.period}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:w-1/2">
                    <div
                      className={`${index % 2 === 0 ? "lg:pl-8" : "lg:pr-8"}`}
                    >
                      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                        {/* <p className="text-gray-700 mb-6 leading-relaxed">
                          {exp.description}
                        </p> */}
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                            Key Achievements:
                          </h4>
                          <ul className="space-y-3">
                            {exp.achievements.map((achievement, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-3 group"
                              >
                                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></div>
                                <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                                  {achievement}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
