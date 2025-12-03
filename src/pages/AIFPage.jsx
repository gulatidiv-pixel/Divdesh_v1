import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Landmark, Rocket, Building, TrendingUp, CheckCircle, AlertTriangle } from 'lucide-react';
import PropTypes from 'prop-types';

const AIFPage = ({ openModal }) => {
    const categories = [
        {
            cat: "Category I",
            icon: <Rocket className="w-8 h-8 text-brand-red" />,
            types: "Venture Capital, SME Funds, Social Ventures",
            desc: "Invests in startups, early-stage ventures, or sectors the government considers socially or economically desirable."
        },
        {
            cat: "Category II",
            icon: <Building className="w-8 h-8 text-brand-red" />,
            types: "Private Equity, Debt Funds, Real Estate Funds",
            desc: "Funds that don't fall under Cat I or III. They don't undertake leverage or borrowing other than for day-to-day operations."
        },
        {
            cat: "Category III",
            icon: <TrendingUp className="w-8 h-8 text-brand-red" />,
            types: "Hedge Funds, PIPEs",
            desc: "Funds that employ diverse or complex trading strategies and may employ leverage including investment in listed or unlisted derivatives."
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-brand-light to-white">
            <div className="bg-gradient-to-br from-brand-dark via-gray-900 to-brand-dark text-white pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <Link to="/" className="inline-flex items-center text-gray-300 hover:text-white mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Home
                    </Link>

                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl">
                                <Landmark className="w-12 h-12 text-brand-red" />
                            </div>
                            <div>
                                <span className="text-brand-red font-semibold text-sm uppercase tracking-wider">Sophisticated Investing</span>
                                <h1 className="text-5xl md:text-6xl font-bold mt-1">Alternative Investment Funds</h1>
                            </div>
                        </div>
                        <p className="text-2xl text-gray-300 leading-relaxed">
                            Beyond stocks and bonds. Access exclusive opportunities in Private Equity, Venture Capital, and Hedge Funds.
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20">
                    <h2 className="text-4xl font-bold text-brand-dark mb-12">Understanding AIF Categories</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {categories.map((cat, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-brand-red/30 transition-all">
                                <div className="mb-6 bg-brand-red/5 w-16 h-16 rounded-xl flex items-center justify-center">
                                    {cat.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-brand-dark mb-2">{cat.cat}</h3>
                                <p className="text-brand-red font-semibold mb-4 text-sm">{cat.types}</p>
                                <p className="text-gray-600 leading-relaxed">{cat.desc}</p>
                            </div>
                        ))}
                    </div>
                </motion.section>

                <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20 bg-gray-900 text-white p-12 rounded-3xl">
                    <h2 className="text-4xl font-bold mb-8">Why Consider AIFs?</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-2xl font-bold mb-4 text-brand-red">Diversification</h3>
                            <p className="text-gray-300 leading-relaxed mb-6">
                                Low correlation with public markets. When stocks crash, AIFs (like hedge funds or real estate) can provide stability or even positive returns.
                            </p>
                            <h3 className="text-2xl font-bold mb-4 text-brand-red">High Return Potential</h3>
                            <p className="text-gray-300 leading-relaxed">
                                Access to high-growth startups (VC) or distressed assets with turnaround potential that aren't available to retail investors.
                            </p>
                        </div>
                        <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <AlertTriangle className="w-5 h-5 text-yellow-400" />
                                Important Considerations
                            </h3>
                            <ul className="space-y-4 text-gray-300">
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 bg-brand-red rounded-full mt-2 flex-shrink-0"></span>
                                    Minimum Investment: ₹1 Crore
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 bg-brand-red rounded-full mt-2 flex-shrink-0"></span>
                                    Liquidity: Often locked for 3-7 years
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 bg-brand-red rounded-full mt-2 flex-shrink-0"></span>
                                    Complexity: Requires deep understanding of the underlying assets
                                </li>
                            </ul>
                        </div>
                    </div>
                </motion.section>

                <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
                    <h2 className="text-4xl font-bold text-brand-dark mb-6">Top AIF Managers</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {["Kotak Investment Advisors", "IIFL Asset Management", "Avendus Capital"].map((manager, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 text-center hover:shadow-lg transition-shadow">
                                <p className="font-bold text-brand-dark text-lg">{manager}</p>
                            </div>
                        ))}
                    </div>
                </motion.section>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gradient-to-br from-brand-dark to-gray-900 text-white p-12 rounded-3xl text-center">
                    <h2 className="text-3xl font-bold mb-4">Access Exclusive Opportunities</h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        For the sophisticated investor looking to diversify beyond the ordinary.
                    </p>
                    <button onClick={openModal} className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white bg-brand-red rounded-full hover:bg-orange-600 transition-all shadow-2xl shadow-brand-red/50 hover:shadow-brand-red/70 hover:-translate-y-1">
                        Discuss AIF Opportunities
                        <CheckCircle className="ml-3 w-6 h-6" />
                    </button>
                </motion.div>
            </div>
        </div>
    );
};

AIFPage.propTypes = {
    openModal: PropTypes.func.isRequired,
};

export default AIFPage;
