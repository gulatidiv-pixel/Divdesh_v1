import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import PropTypes from 'prop-types';

const ServiceDetail = ({ openModal }) => {
    const { id } = useParams();
    const service = servicesData[id];

    if (!service) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-brand-light">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-brand-dark mb-4">Service Not Found</h2>
                    <Link to="/" className="text-brand-red hover:underline">Go back home</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-brand-light pt-24 pb-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link to="/" className="inline-flex items-center text-gray-500 hover:text-brand-red mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Home
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-3xl shadow-xl overflow-hidden"
                >
                    {/* Header */}
                    <div className="bg-brand-dark text-white p-8 md:p-12 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2" />
                        <div className="relative z-10 flex items-start gap-6">
                            <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                                {service.icon}
                            </div>
                            <div>
                                <h1 className="text-3xl md:text-4xl font-bold mb-4">{service.title}</h1>
                                <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                                    {service.intro}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Content Sections */}
                    <div className="p-8 md:p-12 space-y-12">
                        {service.sections.map((section, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <h2 className="text-2xl font-bold text-brand-dark mb-4 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-brand-red/10 text-brand-red flex items-center justify-center text-sm font-bold">
                                        {index + 1}
                                    </span>
                                    {section.title}
                                </h2>
                                <div className="pl-11">
                                    <p className="text-gray-600 leading-relaxed text-lg whitespace-pre-line">
                                        {section.content}
                                    </p>
                                </div>
                            </motion.div>
                        ))}

                        {/* CTA */}
                        <div className="mt-16 p-8 bg-gray-50 rounded-2xl border border-gray-100 text-center">
                            <h3 className="text-2xl font-bold text-brand-dark mb-4">Ready to get started?</h3>
                            <p className="text-gray-600 mb-8">
                                Let&apos;s discuss the best {service.title} options for your specific needs.
                            </p>
                            <button
                                onClick={openModal}
                                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-brand-red rounded-full hover:bg-orange-600 transition-all shadow-lg shadow-brand-red/25 hover:shadow-xl hover:shadow-brand-red/30 hover:-translate-y-1"
                            >
                                Book a Free Consultation
                                <CheckCircle className="ml-2 w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

ServiceDetail.propTypes = {
    openModal: PropTypes.func.isRequired,
};

export default ServiceDetail;
