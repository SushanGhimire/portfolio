"use client";

import {
  Download,
  ExternalLink,
  FileText,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";

export default function Resume() {
  const handleDownload = () => {
    // In a real application, this would trigger a download of the actual resume file
    const link = document.createElement("a");
    link.href = "public/Susan_Resume.pdf"; // This would be the actual path to your resume
    link.download = "susan_ghimire_resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Resume & <span className="text-blue-600">Contact</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Download my complete resume or get in touch to discuss
            opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Resume Download Section */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Download Resume
              </h3>
              <p className="text-gray-600 mb-6">
                Get a detailed overview of my experience, education, and skills
                in PDF format.
              </p>
              <a
                href="/Susan_Resume.pdf"
                target="_blank"
                download
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 font-medium"
              >
                <Download className="w-5 h-5" />
                Download My Resume
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Let's Connect
            </h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Email</p>
                  <a
                    href="mailto:sushangmi55@gmail.com"
                    className="text-blue-600 hover:underline"
                  >
                    sushangmi55@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Phone</p>
                  <a
                    href="tel:++61 452284122"
                    className="text-blue-600 hover:underline"
                  >
                    +61 452284122
                  </a>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <p className="text-gray-600 mb-4">
                  I'm always interested in new opportunities and exciting
                  projects. Feel free to reach out if you'd like to collaborate!
                </p>
                <div className="flex gap-4">
                  <a
                    href="mailto:alex@example.com"
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Send Email
                  </a>

                  <a
                    href="https://www.linkedin.com/in/susan-ghimire-92602917a/"
                    className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                    aria-label="LinkedIn"
                    target="_blank"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
