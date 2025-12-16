import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, CheckCircle, Building, Heart, Shield } from 'lucide-react';
import PropTypes from 'prop-types';

const GroupInsurancePage = ({ openModal }) => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-brand-light to-white">
            <div className="bg-gradient-to-br from-brand-dark via-gray-900 to-brand-dark text-white pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 right-10 w-96 h-96 bg-green-500 rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <Link to="/" className="inline-flex items-center text-gray-300 hover:text-white mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Home
                    </Link>

                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl">
                                <Users className="w-12 h-12 text-brand-red" />
                            </div>
                            <div>
                                <span className="text-brand-red font-semibold text-sm uppercase tracking-wider">Corporate Solutions</span>
                                <h1 className="text-5xl md:text-6xl font-bold mt-1">Group Insurance</h1>
                            </div>
                        </div>
                        <p className="text-2xl text-gray-300 leading-relaxed">
                            Comprehensive health and life coverage for your employees. A happy team is a productive team.
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20">
                    <h2 className="text-4xl font-bold text-brand-dark mb-12">Benefits for Employers & Employees</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                            <Heart className="w-12 h-12 text-brand-red mb-4" />
                            <h3 className="text-xl font-bold text-brand-dark mb-3">Employee Retention</h3>
                            <p className="text-gray-600">Show your employees you care. Health benefits are a top factor in job satisfaction.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                            <Building className="w-12 h-12 text-brand-red mb-4" />
                            <h3 className="text-xl font-bold text-brand-dark mb-3">Tax Benefits</h3>
                            <p className="text-gray-600">Premiums paid by the employer are treated as business expenses.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                            <Shield className="w-12 h-12 text-brand-red mb-4" />
                            <h3 className="text-xl font-bold text-brand-dark mb-3">Comprehensive Cover</h3>
                            <p className="text-gray-600">Covers pre-existing diseases from day one and maternity benefits.</p>
                        </div>
                    </div>
                </motion.section>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gradient-to-br from-brand-dark to-gray-900 text-white p-12 rounded-3xl text-center">
                    <h2 className="text-3xl font-bold mb-4">Protect Your Workforce</h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Get a customized group insurance plan tailored to your company's size and needs.
                    </p>
                    <button onClick={openModal} className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white bg-brand-red rounded-full hover:bg-orange-600 transition-all shadow-2xl shadow-brand-red/50 hover:shadow-brand-red/70 hover:-translate-y-1">
                        Request Corporate Quote
                        <CheckCircle className="ml-3 w-6 h-6" />
                    </button>
                </motion.div>
            </div>
        </div>
    );
};

GroupInsurancePage.propTypes = {
    openModal: PropTypes.func.isRequired,
};

export default GroupInsurancePage;
