import React, { useState } from 'react';
import { ChevronRight, Star } from 'lucide-react';
import coursesData from '../data/coursesData';

const Courses = () => {
    const [filter, setFilter] = useState('All');
    const categories = ['All', ...Array.from(new Set(coursesData.map(course => course.category)))];

    const filteredCourses = filter === 'All'
        ? coursesData
        : coursesData.filter(course => course.category === filter);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="courses" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">Our Courses</h2>
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                        Explore our wide range of courses designed to help students excel in competitive exams
                        and build a strong academic foundation.
                    </p>
                    <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
                </div>

                {/* Category Filters */}
                <div className="flex flex-wrap justify-center mb-10 gap-2">
                    {categories.map((category, index) => (
                        <button
                            key={index}
                            onClick={() => setFilter(category)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${filter === category
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Courses Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredCourses.map((course) => (
                        <CourseCard key={course.id} course={course} onEnroll={() => scrollToSection('contact')} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const CourseCard = ({ course, onEnroll }) => {
    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 flex flex-col h-full">
            {course.featured && (
                <div className="bg-yellow-500 text-white text-xs font-bold px-3 py-1 flex items-center justify-center">
                    <Star className="h-3 w-3 mr-1" />
                    <span>FEATURED</span>
                </div>
            )}

            <div className="p-6 flex-grow">
                <div className="mb-4">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                        {course.category}
                    </span>
                </div>

                <h3 className="font-bold text-xl text-blue-800 mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>

                <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                        <span className="text-sm text-gray-500">Duration:</span>
                        <span className="text-sm font-medium">{course.duration}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-sm text-gray-500">Schedule:</span>
                        <span className="text-sm font-medium">{course.schedule}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-sm text-gray-500">Fees:</span>
                        <span className="text-sm font-medium text-blue-600">{course.fees}</span>
                    </div>
                </div>
            </div>

            <div className="px-6 pb-6">
                <button
                    onClick={onEnroll}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md flex items-center justify-center transition-colors duration-300 font-medium"
                >
                    Enroll Now
                    <ChevronRight className="h-4 w-4 ml-1" />
                </button>
            </div>
        </div>
    );
};

export default Courses;
