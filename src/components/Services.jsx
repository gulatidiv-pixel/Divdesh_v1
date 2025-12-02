
import { motion } from 'framer-motion';
import { PieChart, TrendingUp, Shield, Briefcase, Landmark } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
    {
        id: "health-insurance",
        icon: <Shield className="w-8 h-8" />,
        title: "Health Insurance",
        description: "Comprehensive health coverage to protect you and your family against medical emergencies."
    },
    {
        id: "term-insurance",
        icon: <Shield className="w-8 h-8" />,
        title: "Term Insurance",
        description: "Secure your family's financial future with pure protection plans that offer high coverage."
    },
    {
        id: "ulips",
        icon: <TrendingUp className="w-8 h-8" />,
        title: "ULIPs",
        description: "Unit Linked Insurance Plans that offer the dual benefit of investment and insurance coverage."
    },
    {
        id: "mutual-funds",
        icon: <PieChart className="w-8 h-8" />,
        title: "Mutual Funds",
        description: "Diversified investment portfolios professionally managed to help you achieve your financial goals."
    },
    {
        id: "pms",
        icon: <Briefcase className="w-8 h-8" />,
        title: "PMS",
        description: "Portfolio Management Services offering customized investment strategies for high net worth individuals."
    },
    {
        id: "aif",
        icon: <Landmark className="w-8 h-8" />,
        title: "AIF",
        description: "Alternative Investment Funds for sophisticated investors looking for non-traditional asset classes."
    }
];

const Services = () => {
    return (
        <section id="services" className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-brand-red font-semibold tracking-wider uppercase text-sm">Our Expertise</span>
                    <h2 className="text-4xl font-bold text-brand-dark mt-2 mb-4">Comprehensive Wealth Solutions</h2>
                    <p className="text-gray-600 text-lg">
                        We offer a full suite of financial services designed to address every aspect of your financial life.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Link to={`/ services / ${service.id} `} key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="group p-8 rounded-2xl bg-gray-50 hover:bg-white border border-gray-100 hover:border-brand-red/20 hover:shadow-xl hover:shadow-brand-red/5 transition-all duration-300 h-full"
                            >
                                <div className="w-14 h-14 rounded-xl bg-brand-red/10 flex items-center justify-center text-brand-red mb-6 group-hover:bg-brand-red group-hover:text-white transition-colors duration-300">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-brand-dark mb-3 group-hover:text-brand-red transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {service.description}
                                </p>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
