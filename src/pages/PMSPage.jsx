import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Briefcase, TrendingUp, BarChart, CheckCircle, Award } from 'lucide-react';
import PropTypes from 'prop-types';

const PMSPage = ({ openModal }) => {
    const strategies = [
        {
            name: "Growth Strategy",
            focus: "High-growth companies",
            risk: "High",
            ideal: "Aggressive investors seeking alpha"
        },
        {
            name: "Value Strategy",
            focus: "Undervalued stocks with potential",
            risk: "Medium-High",
            ideal: "Patient investors looking for long-term gains"
        },
        {
            name: "Multi-Cap Strategy",
            focus: "Mix of large, mid, and small caps",
            risk: "Medium",
            ideal: "Balanced growth seekers"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-brand-light to-white">
            <div className="bg-gradient-to-br from-brand-dark via-gray-900 to-brand-dark text-white pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 right-1/2 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <Link to="/" className="inline-flex items-center text-gray-300 hover:text-white mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Home
                    </Link>

                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl">
                                <Briefcase className="w-12 h-12 text-brand-red" />
                            </div>
                            <div>
                                <span className="text-brand-red font-semibold text-sm uppercase tracking-wider">Elite Investing</span>
                                <h1 className="text-5xl md:text-6xl font-bold mt-1">Portfolio Management Services</h1>
                            </div>
                        </div>
                        <p className="text-2xl text-gray-300 leading-relaxed">
                            Customized investment portfolios for High Net Worth Individuals. Own the stocks, reap the rewards.
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20">
                    <h2 className="text-4xl font-bold text-brand-dark mb-12">Why Choose PMS?</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                            <Award className="w-12 h-12 text-brand-red mb-4" />
                            <h3 className="text-xl font-bold text-brand-dark mb-3">Professional Management</h3>
                            <p className="text-gray-600">Expert fund managers take concentrated bets to generate higher returns (alpha) than the market.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                            <BarChart className="w-12 h-12 text-brand-red mb-4" />
                            <h3 className="text-xl font-bold text-brand-dark mb-3">Direct Ownership</h3>
                            <p className="text-gray-600">Unlike mutual funds, you own the actual stocks in your demat account. Complete transparency.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                            <TrendingUp className="w-12 h-12 text-brand-red mb-4" />
                            <h3 className="text-xl font-bold text-brand-dark mb-3">Customization</h3>
                            <p className="text-gray-600">Portfolios tailored to your specific risk appetite and financial goals.</p>
                        </div>
                    </div>
                </motion.section>

                <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20 bg-gray-50 p-12 rounded-3xl border border-gray-200">
                    <h2 className="text-4xl font-bold text-brand-dark mb-8">Investment Strategies</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {strategies.map((strategy, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                                <h3 className="text-xl font-bold text-brand-dark mb-2">{strategy.name}</h3>
                                <p className="text-sm text-gray-500 mb-4">Focus: {strategy.focus}</p>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="font-semibold text-brand-red">Risk: {strategy.risk}</span>
                                </div>
                                <p className="text-xs text-gray-400 mt-2">Ideal for: {strategy.ideal}</p>
                            </div>
                        ))}
                    </div>
                </motion.section>

                <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20">
                    <h2 className="text-4xl font-bold text-brand-dark mb-6">Top PMS Providers</h2>
                    <div className="grid md:grid-cols-4 gap-6">
                        {["Marcellus", "ASK Investment", "WhiteOak Capital", "Motilal Oswal"].map((provider, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 text-center hover:shadow-lg transition-shadow">
                                <p className="font-bold text-brand-dark">{provider}</p>
                            </div>
                        ))}
                    </div>
                </motion.section>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gradient-to-br from-brand-dark to-gray-900 text-white p-12 rounded-3xl text-center">
                    <h2 className="text-3xl font-bold mb-4">Elevate Your Portfolio</h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Minimum investment: ₹50 Lakhs. Ready to step into the world of elite investing?
                    </p>
                    <button onClick={openModal} className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white bg-brand-red rounded-full hover:bg-orange-600 transition-all shadow-2xl shadow-brand-red/50 hover:shadow-brand-red/70 hover:-translate-y-1">
                        Request PMS Consultation
                        <CheckCircle className="ml-3 w-6 h-6" />
                    </button>
                </motion.div>
            </div>
        </div>
    );
};

PMSPage.propTypes = {
    openModal: PropTypes.func.isRequired,
};

export default PMSPage;
