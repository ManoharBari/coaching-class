import React from "react";
import { Target, Book, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
            About Bright Minds Academy
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Founded in 2010, Bright Minds Academy has established itself as a
              premier coaching institute dedicated to helping students achieve
              academic excellence and succeed in competitive examinations. We
              believe that every student has unique potential, and our goal is
              to help them discover and develop it.
            </p>

            <div className="space-y-6 mt-8">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-blue-800 mb-2">
                    Our Mission
                  </h3>
                  <p className="text-gray-700">
                    To provide high-quality education and mentorship that
                    empowers students to excel academically and develop critical
                    thinking skills for lifelong success.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Lightbulb className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-blue-800 mb-2">
                    Our Vision
                  </h3>
                  <p className="text-gray-700">
                    To be recognized as the leading educational institution that
                    transforms students into confident, knowledgeable
                    individuals ready to tackle any challenge.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Book className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-blue-800 mb-2">
                    Our Approach
                  </h3>
                  <p className="text-gray-700">
                    We combine traditional teaching methods with innovative
                    techniques, focusing on conceptual understanding rather than
                    rote learning, and providing regular assessments for
                    continuous improvement.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="relative">
              <div className="absolute inset-0 bg-blue-200 rounded-lg transform translate-x-4 translate-y-4"></div>
              <div className="relative bg-white p-6 rounded-lg shadow-lg">
                <img
                  src="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg"
                  alt="Founder of Bright Minds Academy"
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                <h3 className="font-bold text-2xl text-blue-800 mb-2">
                  Dr. Aisha Patel
                </h3>
                <p className="text-blue-600 font-medium mb-4">
                  Founder & Academic Director
                </p>
                <p className="text-gray-700 italic">
                  "Education is not just about filling the mind with facts, but
                  lighting a fire that fuels curiosity, critical thinking, and a
                  passion for lifelong learning. At Bright Minds, we don't just
                  prepare students for exams; we prepare them for life."
                </p>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-gray-700">
                    Ph.D. in Physics, 15+ years of teaching experience, former
                    senior faculty at prestigious institutions, and author of
                    multiple academic publications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
