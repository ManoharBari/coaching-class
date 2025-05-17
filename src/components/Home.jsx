import React from 'react';
import { BookOpen, Users, Award } from 'lucide-react';

const Home = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="relative min-h-screen flex items-center">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <img
                    src="https://images.pexels.com/photos/8199562/pexels-photo-8199562.jpeg"
                    alt="Students in classroom"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-3xl text-white">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                        Empowering Students for a Better Tomorrow
                    </h1>
                    <p className="text-lg md:text-xl mb-8">
                        At Bright Minds Academy, we help students reach their full potential through
                        expert guidance, personalized attention, and innovative teaching methods.
                    </p>
                    <button
                        onClick={() => scrollToSection('courses')}
                        className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition-colors duration-300"
                    >
                        Explore Courses
                    </button>

                    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg flex items-start transition-transform duration-300 hover:scale-105">
                            <BookOpen className="text-blue-400 h-10 w-10 mr-4 flex-shrink-0" />
                            <div>
                                <h3 className="font-bold text-xl mb-2">Expert Faculty</h3>
                                <p>Learn from industry experts and experienced educators</p>
                            </div>
                        </div>

                        <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg flex items-start transition-transform duration-300 hover:scale-105">
                            <Users className="text-blue-400 h-10 w-10 mr-4 flex-shrink-0" />
                            <div>
                                <h3 className="font-bold text-xl mb-2">Small Batches</h3>
                                <p>Personalized attention with limited students per batch</p>
                            </div>
                        </div>

                        <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg flex items-start transition-transform duration-300 hover:scale-105">
                            <Award className="text-blue-400 h-10 w-10 mr-4 flex-shrink-0" />
                            <div>
                                <h3 className="font-bold text-xl mb-2">Result-Oriented</h3>
                                <p>Proven track record of success in competitive exams</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;