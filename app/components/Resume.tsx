"use client"

import { Download, FileText, Mail, Phone } from "lucide-react"

export default function Resume() {
  const handleDownload = () => {
    // In a real application, this would trigger a download of the actual resume file
    const link = document.createElement("a")
    link.href = "/resume.pdf" // This would be the actual path to your resume
    link.download = "Alex_Johnson_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="resume" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Resume & Contact</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Download my complete resume or get in touch to discuss opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Resume Download Section */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Download Resume</h3>
              <p className="text-gray-600 mb-6">
                Get a detailed overview of my experience, education, and skills in PDF format.
              </p>
              <button
                onClick={handleDownload}
                className="inline-flex items-center gap-3 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                <Download className="w-5 h-5" />
                Download PDF Resume
              </button>
              <p className="text-sm text-gray-500 mt-4">Last updated: December 2024 • 2.1 MB</p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Let's Connect</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Email</p>
                  <a href="mailto:alex@example.com" className="text-blue-600 hover:underline">
                    alex@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Phone</p>
                  <a href="tel:+1234567890" className="text-blue-600 hover:underline">
                    +1 (234) 567-8900
                  </a>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <p className="text-gray-600 mb-4">
                  I'm always interested in new opportunities and exciting projects. Feel free to reach out if you'd like
                  to collaborate!
                </p>
                <div className="flex gap-4">
                  <a
                    href="mailto:alex@example.com"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Send Email
                  </a>
                  <a
                    href="#"
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
