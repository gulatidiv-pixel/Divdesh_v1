import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, TrendingUp, CheckCircle, PieChart, Zap, Lock } from 'lucide-react';
import PropTypes from 'prop-types';

const ULIPsPage = ({ openModal }) => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-brand-light to-white">
            <div className="bg-gradient-to-br from-brand-dark via-gray-900 to-brand-dark text-white pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute bottom-20 left-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <Link to="/" className="inline-flex items-center text-gray-300 hover:text-white mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Home
                    </Link>

                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl">
                                <TrendingUp className="w-12 h-12 text-brand-red" />
                            </div>
                            <div>
                                <span className="text-brand-red font-semibold text-sm uppercase tracking-wider">Invest + Insure</span>
                                <h1 className="text-5xl md:text-6xl font-bold mt-1">ULIPs</h1>
                            </div>
                        </div>
                        <p className="text-2xl text-gray-300 leading-relaxed">
                            Investment + Insurance in one package. A powerful tax-saving tool that has evolved into a wealth builder.
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20">
                    <h2 className="text-4xl font-bold text-brand-dark mb-12">How ULIPs Work</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-gradient-to-br from-brand-red/5 to-orange-50 p-8 rounded-2xl">
                            <PieChart className="w-12 h-12 text-brand-red mb-4" />
                            <h3 className="text-2xl font-bold text-brand-dark mb-4">Investment Component</h3>
                            <p className="text-gray-700 leading-relaxed">Part of your premium is invested in equity, debt, or hybrid funds based on your risk appetite. You control where your money goes.</p>
                        </div>
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
                            <Lock className="w-12 h-12 text-blue-600 mb-4" />
                            <h3 className="text-2xl font-bold text-brand-dark mb-4">Insurance Component</h3>
                            <p className="text-gray-700 leading-relaxed">Provides life cover (minimum 10x annual premium). If something happens to you, your family gets the sum assured.</p>
                        </div>
                    </div>
                </motion.section>

                <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20 bg-white p-12 rounded-3xl shadow-xl border border-gray-100">
                    <h2 className="text-4xl font-bold text-brand-dark mb-8">Modern ULIP Advantages</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            "Zero allocation charges - 100% of premium invested",
                            "Return of mortality charges at maturity",
                            "Wealth boosters - loyalty additions from insurer",
                            "Free fund switching - adapt to market conditions",
                            "Tax-free maturity under Section 10(10D)",
                            "5-year lock-in builds discipline"
                        ].map((benefit, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-brand-red flex-shrink-0 mt-1" />
                                <span className="text-lg text-gray-700">{benefit}</span>
                            </div>
                        ))}
                    </div>
                </motion.section>

                <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20">
                    <h2 className="text-4xl font-bold text-brand-dark mb-6">Top ULIP Providers</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {["Bajaj Allianz", "HDFC Life", "SBI Life"].map((provider, index) => (
                            <div key={index} className="bg-white p-8 rounded-xl border-2 border-gray-100 hover:border-brand-red/30 transition-all text-center">
                                <p className="text-2xl font-bold text-brand-dark mb-2">{provider}</p>
                                <p className="text-gray-600">Wide fund options</p>
                            </div>
                        ))}
                    </div>
                </motion.section>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gradient-to-br from-brand-dark to-gray-900 text-white p-12 rounded-3xl text-center">
                    <Zap className="w-16 h-16 text-brand-red mx-auto mb-6" />
                    <h2 className="text-3xl font-bold mb-4">Ready to Build Wealth with Protection?</h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Let's find a ULIP that matches your investment goals and risk profile.
                    </p>
                    <button onClick={openModal} className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white bg-brand-red rounded-full hover:bg-orange-600 transition-all shadow-2xl shadow-brand-red/50 hover:shadow-brand-red/70 hover:-translate-y-1">
                        Explore ULIP Options
                        <CheckCircle className="ml-3 w-6 h-6" />
                    </button>
                </motion.div>
            </div>
        </div>
    );
};

ULIPsPage.propTypes = {
    openModal: PropTypes.func.isRequired,
};

export default ULIPsPage;
