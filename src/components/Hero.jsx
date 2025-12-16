import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import PropTypes from 'prop-types';

const Hero = ({ openModal }) => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-light pt-20">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gray-100 to-transparent opacity-50 pointer-events-none" />
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-dark/5 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-brand-red/10 text-brand-red font-semibold text-sm mb-6">
                            Your Trusted Wealth Partner
                        </span>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-brand-dark">
                            Grow your wealth with <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-orange-600">
                                clarity & confidence
                            </span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
                            Thoughtful wealth solutions. Built around your goals. Powered by 20 years of experience. Delivered with a personal touch.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={openModal}
                                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-brand-red rounded-full hover:bg-orange-600 transition-all shadow-lg shadow-brand-red/25 hover:shadow-xl hover:shadow-brand-red/30 hover:-translate-y-1"
                            >
                                Start Your Journey
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </button>
                            <a
                                href="#services"
                                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-brand-dark bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-all hover:border-brand-red/30"
                            >
                                Explore Services
                            </a>
                        </div>

                        <div className="mt-12 flex items-center gap-8">
                            <div>
                                <p className="text-3xl font-bold text-brand-dark">20+</p>
                                <p className="text-sm text-gray-500">Years of Experience</p>
                            </div>
                            <div className="w-px h-12 bg-gray-200" />
                            <div>
                                <p className="text-3xl font-bold text-brand-dark">1K+</p>
                                <p className="text-sm text-gray-500">Happy Clients</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-brand-dark/20">
                            <img
                                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80"
                                alt="Financial planning meeting"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent" />

                            {/* Floating Card */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 1, duration: 0.5 }}
                                className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <p className="font-semibold text-brand-dark">Portfolio Growth</p>
                                    <span className="text-green-500 font-bold">+12.4%</span>
                                </div>
                                <div className="w-full bg-gray-100 rounded-full h-2">
                                    <div className="bg-brand-red h-2 rounded-full w-[75%]" />
                                </div>
                            </motion.div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -z-10 top-10 -right-10 w-full h-full border-2 border-brand-red/20 rounded-2xl" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

Hero.propTypes = {
    openModal: PropTypes.func.isRequired,
};

export default Hero;
