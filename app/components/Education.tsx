import Image from "next/image";
import { MapPin, Calendar } from "lucide-react";
import { LICT, MQ, OCEM } from "@/public/edu institute";

const education = [
  {
    degree: "Master of Information Systems and Manamegement",
    school: "Macquarie University",
    address: "Macquarie Park NSW 2109",
    completionDate: "June 2025",
    logo: MQ,
  },
  {
    degree: "Bachelor of Computer Science and Information Technology",
    school: "Lumbini ICT Campus (Tribhuvan University)",
    address: "Gaindakot-2, Nawalpur, Nepal",
    completionDate: "October 2021",
    logo: LICT,
  },
  {
    degree: "10+2 in Computer Science",
    school: "Oxford Collge of Engineering and Management",
    address: "Gaindakot-2, Nawalpur, Nepal",
    completionDate: "2017",
    logo: OCEM,
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="py-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-blue-600">Education</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            My academic background and qualifications
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up overflow-hidden"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="p-8">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  {/* University Logo */}
                  <div className="flex-shrink-0">
                    <div className="w-28 h-28 bg-gray-50 rounded-full p-4 flex items-center justify-center hover:scale-105 transition-transform duration-300">
                      <Image
                        src={edu.logo || "/placeholder.svg"}
                        alt={edu.school}
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* Education Details */}
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {edu.degree}
                    </h3>
                    <h4 className="text-xl font-semibold text-blue-600 mb-4">
                      {edu.school}
                    </h4>

                    <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 text-gray-600">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{edu.address}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span className="font-medium">
                          {edu.completionDate}
                        </span>
                      </div>
                    </div>
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
