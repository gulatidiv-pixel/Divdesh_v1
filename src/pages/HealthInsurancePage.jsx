import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, CheckCircle, Heart, Users, TrendingUp, AlertCircle } from 'lucide-react';
import PropTypes from 'prop-types';

const HealthInsurancePage = ({ openModal }) => {
    const benefits = [
        "Cashless hospitalization at 10,000+ network hospitals",
        "No room rent limits - choose your comfort",
        "Coverage for pre-existing diseases after waiting period",
        "Annual health check-ups included",
        "Restoration of sum insured if exhausted",
        "Lifetime renewability guaranteed"
    ];

    const topInsurers = [
        { name: "HDFC Ergo", rating: "98.5%", highlight: "Best claim settlement" },
        { name: "Niva Bupa", rating: "97.2%", highlight: "Comprehensive coverage" },
        { name: "Care Health", rating: "96.8%", highlight: "Quick processing" }
    ];

    const plans = [
        {
            name: "Individual Health Plan",
            coverage: "₹5L - ₹1Cr",
            ideal: "Young professionals",
            features: ["Personal coverage", "Tax benefits u/s 80D", "Affordable premiums"]
        },
        {
            name: "Family Floater",
            coverage: "₹10L - ₹2Cr",
            ideal: "Families with kids",
            features: ["Entire family covered", "Shared sum insured", "Cost-effective"]
        },
        {
            name: "Super Top-Up",
            coverage: "₹10L - ₹1Cr",
            ideal: "Additional protection",
            features: ["Boosts existing cover", "Low premium", "High deductible"]
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-brand-light to-white">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-brand-dark via-gray-900 to-brand-dark text-white pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-brand-red rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <Link to="/" className="inline-flex items-center text-gray-300 hover:text-white mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Home
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl">
                                <Shield className="w-12 h-12 text-brand-red" />
                            </div>
                            <div>
                                <span className="text-brand-red font-semibold text-sm uppercase tracking-wider">Protection First</span>
                                <h1 className="text-5xl md:text-6xl font-bold mt-1">Health Insurance</h1>
                            </div>
                        </div>
                        <p className="text-2xl text-gray-300 leading-relaxed">
                            Your financial bodyguard against medical emergencies. Because healthcare is expensive, but peace of mind shouldn't be.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Why You Need It */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h2 className="text-4xl font-bold text-brand-dark mb-6">Why Health Insurance is Non-Negotiable</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                            <Heart className="w-12 h-12 text-brand-red mb-4" />
                            <h3 className="text-xl font-bold text-brand-dark mb-3">Medical Inflation</h3>
                            <p className="text-gray-600">Healthcare costs rise 10-15% annually. A simple surgery can cost ₹5-10 lakhs today.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                            <Users className="w-12 h-12 text-brand-red mb-4" />
                            <h3 className="text-xl font-bold text-brand-dark mb-3">Family Protection</h3>
                            <p className="text-gray-600">One hospitalization shouldn't wipe out your life savings or retirement plans.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                            <TrendingUp className="w-12 h-12 text-brand-red mb-4" />
                            <h3 className="text-xl font-bold text-brand-dark mb-3">Tax Benefits</h3>
                            <p className="text-gray-600">Save up to ₹25,000 (₹50,000 for senior citizens) under Section 80D.</p>
                        </div>
                    </div>
                </motion.section>

                {/* Key Benefits */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 bg-gradient-to-br from-brand-red/5 to-orange-50 p-12 rounded-3xl"
                >
                    <h2 className="text-4xl font-bold text-brand-dark mb-8">What You Get</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-brand-red flex-shrink-0 mt-1" />
                                <span className="text-lg text-gray-700">{benefit}</span>
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* Plan Types */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h2 className="text-4xl font-bold text-brand-dark mb-6">Choose Your Plan</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {plans.map((plan, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border-2 border-gray-100 hover:border-brand-red/30 transition-all hover:shadow-xl">
                                <h3 className="text-2xl font-bold text-brand-dark mb-2">{plan.name}</h3>
                                <p className="text-3xl font-bold text-brand-red mb-1">{plan.coverage}</p>
                                <p className="text-sm text-gray-500 mb-6">Ideal for {plan.ideal}</p>
                                <ul className="space-y-3">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-gray-600">
                                            <div className="w-1.5 h-1.5 bg-brand-red rounded-full"></div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* Top Insurers */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h2 className="text-4xl font-bold text-brand-dark mb-6">Our Trusted Partners</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {topInsurers.map((insurer, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                                <h3 className="text-xl font-bold text-brand-dark mb-2">{insurer.name}</h3>
                                <p className="text-2xl font-bold text-brand-red mb-1">{insurer.rating}</p>
                                <p className="text-sm text-gray-600">{insurer.highlight}</p>
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* Important Note */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 bg-orange-50 border-l-4 border-brand-red p-8 rounded-r-2xl"
                >
                    <div className="flex gap-4">
                        <AlertCircle className="w-6 h-6 text-brand-red flex-shrink-0 mt-1" />
                        <div>
                            <h3 className="text-xl font-bold text-brand-dark mb-2">Before You Buy - Checklist</h3>
                            <ul className="space-y-2 text-gray-700">
                                <li>✓ Does it cover pre-existing diseases after a short waiting period?</li>
                                <li>✓ Are there sub-limits on specific treatments?</li>
                                <li>✓ Is there a co-payment clause? (Avoid if possible!)</li>
                                <li>✓ How wide is the network of cashless hospitals?</li>
                            </ul>
                        </div>
                    </div>
                </motion.section>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-brand-dark to-gray-900 text-white p-12 rounded-3xl text-center"
                >
                    <h2 className="text-3xl font-bold mb-4">Ready to Protect Your Family?</h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Let's find the perfect health insurance plan that fits your needs and budget.
                    </p>
                    <button
                        onClick={openModal}
                        className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white bg-brand-red rounded-full hover:bg-orange-600 transition-all shadow-2xl shadow-brand-red/50 hover:shadow-brand-red/70 hover:-translate-y-1"
                    >
                        Get Free Consultation
                        <CheckCircle className="ml-3 w-6 h-6" />
                    </button>
                </motion.div>
            </div>
        </div>
    );
};

HealthInsurancePage.propTypes = {
    openModal: PropTypes.func.isRequired,
};

export default HealthInsurancePage;
