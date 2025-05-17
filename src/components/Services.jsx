import React from 'react';
import { FlaskRound as Flask, Activity, BookOpen, Users } from 'lucide-react';

const Services: React.FC = () => {
    const services = [
        {
            id: 1,
            title: 'IIT-JEE Coaching',
            description: 'Comprehensive preparation for JEE Main & Advanced with specialized focus on Physics, Chemistry & Mathematics.',
            icon: <Flask className="h-12 w-12 text-blue-600" />,
            features: ['Expert faculty from IITs', 'Regular mock tests', 'Doubt clearing sessions', 'Performance analytics']
        },
        {
            id: 2,
            title: 'NEET Preparation',
            description: 'Structured program for NEET aspirants covering Biology, Physics & Chemistry with extensive practical training.',
            icon: <Activity className="h-12 w-12 text-blue-600" />,
            features: ['Subject specialists', 'Lab practice sessions', 'Medical entrance focus', 'Previous years analysis']
        },
        {
            id: 3,
            title: 'Foundation Courses',
            description: 'Strong academic foundation for students from 6th to 10th standard with focus on board exams and competitive aptitude.',
            icon: <BookOpen className="h-12 w-12 text-blue-600" />,
            features: ['Age-appropriate methods', 'Conceptual learning', 'Regular assessments', 'Parent-teacher meetings']
        },
        {
            id: 4,
            title: 'One-on-One Mentorship',
            description: 'Personalized guidance and mentoring programs tailored to individual student needs and learning styles.',
            icon: <Users className="h-12 w-12 text-blue-600" />,
            features: ['Customized study plans', 'Personal attention', 'Progress tracking', 'Weakness improvement']
        }
    ];

    return (
        <section id="services" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">Our Services</h2>
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                        We offer a range of specialized coaching programs designed to help students excel in
                        various competitive examinations and academic pursuits.
                    </p>
                    <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="bg-gray-50 rounded-lg p-6 shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-2"
                        >
                            <div className="flex items-center justify-center mb-6">
                                <div className="bg-blue-100 p-4 rounded-full">
                                    {service.icon}
                                </div>
                            </div>

                            <h3 className="font-bold text-xl text-center text-blue-800 mb-4">{service.title}</h3>
                            <p className="text-gray-700 mb-6 text-center">{service.description}</p>

                            <ul className="space-y-2">
                                {service.features.map((feature, index) => (
                                    <li key={index} className="flex items-start">
                                        <div className="bg-blue-600 rounded-full p-1 mr-2 mt-1">
                                            <div className="w-2 h-2 bg-white rounded-full"></div>
                                        </div>
                                        <span className="text-gray-700">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;