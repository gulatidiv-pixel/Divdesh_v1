import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, PieChart, CheckCircle, TrendingUp, Clock, Target } from 'lucide-react';
import PropTypes from 'prop-types';

const MutualFundsPage = ({ openModal }) => {
    const fundTypes = [
        {
            timeframe: "1-3 Years",
            type: "Liquid / Debt Funds",
            returns: "6-8% p.a.",
            risk: "Low",
            ideal: "Emergency fund, short-term goals"
        },
        {
            timeframe: "3-5 Years",
            type: "Hybrid / Balanced Funds",
            returns: "10-12% p.a.",
            risk: "Medium",
            ideal: "Car, vacation, wedding"
        },
        {
            timeframe: "5+ Years",
            type: "Flexi-cap / Index Funds",
            returns: "12-15% p.a.",
            risk: "High",
            ideal: "Retirement, child education"
        }
    ];

    const topAMCs = ["SBI Mutual Fund", "ICICI Prudential", "HDFC Mutual Fund", "Nippon India", "Axis Mutual Fund", "Quant Mutual Fund"];

    return (
        <div className="min-h-screen bg-gradient-to-b from-brand-light to-white">
            <div className="bg-gradient-to-br from-brand-dark via-gray-900 to-brand-dark text-white pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-1/2 w-96 h-96 bg-green-500 rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <Link to="/" className="inline-flex items-center text-gray-300 hover:text-white mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Home
                    </Link>

                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl">
                                <PieChart className="w-12 h-12 text-brand-red" />
                            </div>
                            <div>
                                <span className="text-brand-red font-semibold text-sm uppercase tracking-wider">Wealth Creation</span>
                                <h1 className="text-5xl md:text-6xl font-bold mt-1">Mutual Funds</h1>
                            </div>
                        </div>
                        <p className="text-2xl text-gray-300 leading-relaxed">
                            The democratization of wealth. You don't need to be a Wall Street expert to grow your money like one.
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20">
                    <h2 className="text-4xl font-bold text-brand-dark mb-6">How Mutual Funds Work</h2>
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-12 rounded-3xl border border-green-100">
                        <p className="text-xl text-gray-700 leading-relaxed mb-6">
                            Think of it like a potluck dinner. You and thousands of others pool money together. A professional Fund Manager uses that money to buy a diversified buffet of stocks and bonds. You get a slice of the profits proportional to what you put in.
                        </p>
                        <div className="grid md:grid-cols-3 gap-6 mt-8">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-3">1</div>
                                <p className="font-semibold text-brand-dark">You Invest</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-3">2</div>
                                <p className="font-semibold text-brand-dark">Expert Manages</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-3">3</div>
                                <p className="font-semibold text-brand-dark">You Earn Returns</p>
                            </div>
                        </div>
                    </div>
                </motion.section>

                <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20">
                    <h2 className="text-4xl font-bold text-brand-dark mb-8">Choose Based on Your Goal</h2>
                    <div className="space-y-6">
                        {fundTypes.map((fund, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-brand-red hover:shadow-xl transition-shadow">
                                <div className="grid md:grid-cols-5 gap-6 items-center">
                                    <div>
                                        <Clock className="w-8 h-8 text-brand-red mb-2" />
                                        <p className="font-bold text-brand-dark text-lg">{fund.timeframe}</p>
                                    </div>
                                    <div className="md:col-span-2">
                                        <p className="text-2xl font-bold text-brand-dark">{fund.type}</p>
                                        <p className="text-gray-600 mt-1">{fund.ideal}</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-sm text-gray-500 mb-1">Expected Returns</p>
                                        <p className="text-2xl font-bold text-green-600">{fund.returns}</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-sm text-gray-500 mb-1">Risk Level</p>
                                        <span className={`inline-block px-4 py-2 rounded-full font-semibold ${fund.risk === 'Low' ? 'bg-green-100 text-green-700' :
                                                fund.risk === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                                                    'bg-red-100 text-red-700'
                                            }`}>{fund.risk}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.section>

                <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20">
                    <h2 className="text-4xl font-bold text-brand-dark mb-6">SIP: The Smart Way to Invest</h2>
                    <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <Target className="w-12 h-12 text-brand-red mb-4" />
                                <h3 className="text-2xl font-bold text-brand-dark mb-4">Systematic Investment Plan</h3>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    Invest a fixed amount every month (as low as ₹500). Benefits:
                                </p>
                                <ul className="space-y-2">
                                    {["Rupee cost averaging", "Discipline & consistency", "Power of compounding", "No market timing needed"].map((benefit, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-gray-700">
                                            <CheckCircle className="w-5 h-5 text-brand-red flex-shrink-0" />
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-gradient-to-br from-brand-red/5 to-orange-50 p-8 rounded-xl">
                                <p className="text-sm text-gray-600 mb-2">Example: ₹10,000/month SIP for 20 years @ 12% p.a.</p>
                                <p className="text-4xl font-bold text-brand-red mb-2">₹99.9 Lakhs</p>
                                <p className="text-sm text-gray-600">Your investment: ₹24 Lakhs | Returns: ₹75.9 Lakhs</p>
                            </div>
                        </div>
                    </div>
                </motion.section>

                <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
                    <h2 className="text-4xl font-bold text-brand-dark mb-6">Top Fund Houses We Work With</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        {topAMCs.map((amc, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 text-center hover:shadow-lg transition-shadow">
                                <p className="font-bold text-brand-dark">{amc}</p>
                            </div>
                        ))}
                    </div>
                </motion.section>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gradient-to-br from-brand-dark to-gray-900 text-white p-12 rounded-3xl text-center">
                    <TrendingUp className="w-16 h-16 text-brand-red mx-auto mb-6" />
                    <h2 className="text-3xl font-bold mb-4">Start Your Wealth Journey Today</h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Let's build a mutual fund portfolio aligned with your financial goals.
                    </p>
                    <button onClick={openModal} className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white bg-brand-red rounded-full hover:bg-orange-600 transition-all shadow-2xl shadow-brand-red/50 hover:shadow-brand-red/70 hover:-translate-y-1">
                        Start Investing
                        <CheckCircle className="ml-3 w-6 h-6" />
                    </button>
                </motion.div>
            </div>
        </div>
    );
};

MutualFundsPage.propTypes = {
    openModal: PropTypes.func.isRequired,
};

export default MutualFundsPage;
