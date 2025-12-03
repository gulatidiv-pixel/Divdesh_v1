import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, CheckCircle, Heart, DollarSign, FileText, AlertTriangle } from 'lucide-react';
import PropTypes from 'prop-types';

const TermInsurancePage = ({ openModal }) => {
    const whyTermInsurance = [
        {
            icon: <Heart className="w-10 h-10" />,
            title: "Pure Protection",
            desc: "No investment component - just massive coverage at minimal cost"
        },
        {
            icon: <DollarSign className="w-10 h-10" />,
            title: "Affordable",
            desc: "₹1 Crore cover for as low as ₹500-800/month for a 30-year-old"
        },
        {
            icon: <FileText className="w-10 h-10" />,
            title: "Tax Benefits",
            desc: "Premiums deductible under Section 80C, payouts tax-free under 10(10D)"
        }
    ];

    const coverage = [
        { amount: "₹50 Lakhs", ideal: "Single, no dependents" },
        { amount: "₹1 Crore", ideal: "Married with 1 kid" },
        { amount: "₹2 Crore+", ideal: "Multiple dependents, loans" }
    ];

    const riders = [
        "Critical Illness Rider - Lump sum on diagnosis of 30+ diseases",
        "Accidental Death Benefit - Double payout for accidental death",
        "Waiver of Premium - Policy continues even if you can't pay",
        "Income Benefit - Monthly payout instead of lump sum"
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-brand-light to-white">
            {/* Hero */}
            <div className="bg-gradient-to-br from-brand-dark via-gray-900 to-brand-dark text-white pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 right-10 w-96 h-96 bg-brand-red rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <Link to="/" className="inline-flex items-center text-gray-300 hover:text-white mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Home
                    </Link>

                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl">
                                <Shield className="w-12 h-12 text-brand-red" />
                            </div>
                            <div>
                                <span className="text-brand-red font-semibold text-sm uppercase tracking-wider">Ultimate Protection</span>
                                <h1 className="text-5xl md:text-6xl font-bold mt-1">Term Insurance</h1>
                            </div>
                        </div>
                        <p className="text-2xl text-gray-300 leading-relaxed">
                            The purest form of love you can leave behind. Ensure your family's lifestyle doesn't change, even if you're not there.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Why Term Insurance */}
                <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20">
                    <h2 className="text-4xl font-bold text-brand-dark mb-12 text-center">Why Term Insurance?</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {whyTermInsurance.map((item, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center">
                                <div className="inline-flex p-4 bg-brand-red/10 rounded-2xl text-brand-red mb-4">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-brand-dark mb-3">{item.title}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* How Much Coverage */}
                <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20 bg-gradient-to-br from-orange-50 to-brand-red/5 p-12 rounded-3xl">
                    <h2 className="text-4xl font-bold text-brand-dark mb-6">How Much Coverage Do You Need?</h2>
                    <p className="text-xl text-gray-600 mb-8">Rule of Thumb: <span className="font-bold text-brand-red">15-20x your annual income</span></p>
                    <div className="grid md:grid-cols-3 gap-6">
                        {coverage.map((item, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl border-2 border-brand-red/20">
                                <p className="text-3xl font-bold text-brand-red mb-2">{item.amount}</p>
                                <p className="text-gray-600">{item.ideal}</p>
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* Riders */}
                <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20">
                    <h2 className="text-4xl font-bold text-brand-dark mb-6">Boost Your Protection with Riders</h2>
                    <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100">
                        <div className="grid md:grid-cols-2 gap-6">
                            {riders.map((rider, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <CheckCircle className="w-6 h-6 text-brand-red flex-shrink-0 mt-1" />
                                    <span className="text-lg text-gray-700">{rider}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.section>

                {/* Top Insurers */}
                <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
                    <h2 className="text-4xl font-bold text-brand-dark mb-6">Trusted Insurers</h2>
                    <div className="grid md:grid-cols-4 gap-6">
                        {["LIC", "Tata AIA", "HDFC Life", "ICICI Prudential"].map((insurer, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 text-center hover:shadow-lg transition-shadow">
                                <p className="text-xl font-bold text-brand-dark">{insurer}</p>
                                <p className="text-sm text-gray-500 mt-2">98%+ CSR</p>
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* Warning */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 bg-red-50 border-l-4 border-red-500 p-8 rounded-r-2xl">
                    <div className="flex gap-4">
                        <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                        <div>
                            <h3 className="text-xl font-bold text-brand-dark mb-2">Critical: Full Disclosure Required</h3>
                            <p className="text-gray-700">Hiding medical history = Claim rejection. Be 100% honest on your application. We help you navigate pre-existing conditions properly.</p>
                        </div>
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gradient-to-br from-brand-dark to-gray-900 text-white p-12 rounded-3xl text-center">
                    <h2 className="text-3xl font-bold mb-4">Secure Your Family's Future Today</h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Get a personalized term insurance plan that covers your family's needs.
                    </p>
                    <button onClick={openModal} className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white bg-brand-red rounded-full hover:bg-orange-600 transition-all shadow-2xl shadow-brand-red/50 hover:shadow-brand-red/70 hover:-translate-y-1">
                        Get Free Quote
                        <CheckCircle className="ml-3 w-6 h-6" />
                    </button>
                </motion.div>
            </div>
        </div>
    );
};

TermInsurancePage.propTypes = {
    openModal: PropTypes.func.isRequired,
};

export default TermInsurancePage;
