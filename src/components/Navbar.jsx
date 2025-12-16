import { useState, useEffect } from 'react';
import { Menu, X, TrendingUp, ChevronDown, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ openModal }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [loginOpen, setLoginOpen] = useState(false);
    const [njOpen, setNjOpen] = useState(false);

    const [servicesOpen, setServicesOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center gap-2 text-brand-dark font-bold text-2xl">
                            <TrendingUp className="w-8 h-8 text-brand-red" />
                            <span>DivDesh<span className="text-brand-red">.</span></span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {/* Services Dropdown */}
                        <div
                            className="relative group"
                            onMouseEnter={() => setServicesOpen(true)}
                            onMouseLeave={() => setServicesOpen(false)}
                        >
                            <button className="flex items-center gap-1 text-brand-gray hover:text-brand-red font-medium transition-colors">
                                Services <ChevronDown className="w-4 h-4" />
                            </button>

                            <AnimatePresence>
                                {servicesOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        className="absolute top-full left-1/2 -translate-x-1/2 w-[400px] bg-white rounded-xl shadow-xl border border-gray-100 py-4 mt-2 grid grid-cols-2 gap-4 px-6"
                                    >
                                        <div>
                                            <h3 className="font-bold text-brand-red mb-3 uppercase text-xs tracking-wider">Investments</h3>
                                            <div className="flex flex-col space-y-2">
                                                <Link to="/services/mutual-funds" className="text-gray-600 hover:text-brand-red text-sm">Mutual Funds</Link>
                                                <Link to="/services/sif" className="text-gray-600 hover:text-brand-red text-sm">SIF</Link>
                                                <Link to="/services/pms" className="text-gray-600 hover:text-brand-red text-sm">PMS</Link>
                                                <Link to="/services/aif" className="text-gray-600 hover:text-brand-red text-sm">AIF</Link>
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-brand-red mb-3 uppercase text-xs tracking-wider">Insurance</h3>
                                            <div className="flex flex-col space-y-2">
                                                <Link to="/services/health-insurance" className="text-gray-600 hover:text-brand-red text-sm">Health Insurance</Link>
                                                <Link to="/services/term-insurance" className="text-gray-600 hover:text-brand-red text-sm">Term Insurance</Link>
                                                <Link to="/services/ulips" className="text-gray-600 hover:text-brand-red text-sm">ULIPs</Link>
                                                <Link to="/services/motor-insurance" className="text-gray-600 hover:text-brand-red text-sm">Motor Insurance</Link>
                                                <Link to="/services/group-insurance" className="text-gray-600 hover:text-brand-red text-sm">Group Insurance</Link>
                                                <Link to="/services/other-insurance" className="text-gray-600 hover:text-brand-red text-sm">Others</Link>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-brand-gray hover:text-brand-red font-medium transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}

                        {/* Login Dropdown */}
                        <div
                            className="relative group"
                            onMouseEnter={() => setLoginOpen(true)}
                            onMouseLeave={() => {
                                setLoginOpen(false);
                                setNjOpen(false);
                            }}
                        >
                            <button className="flex items-center gap-1 text-brand-gray hover:text-brand-red font-medium transition-colors">
                                Login <ChevronDown className="w-4 h-4" />
                            </button>

                            <AnimatePresence>
                                {loginOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        className="absolute top-full right-0 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2 mt-2"
                                    >
                                        <a
                                            href="https://onedigital.centricity.co.in/login"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-brand-red"
                                        >
                                            Centricity
                                        </a>

                                        <div
                                            className="relative"
                                            onMouseEnter={() => setNjOpen(true)}
                                            onMouseLeave={() => setNjOpen(false)}
                                        >
                                            <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-brand-red flex items-center justify-between">
                                                NJ <ChevronRight className="w-4 h-4" />
                                            </button>

                                            {njOpen && (
                                                <motion.div
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    className="absolute top-0 right-full w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2 mr-2"
                                                >
                                                    <a
                                                        href="https://ewa.njindiaonline.com/ewa/login"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-brand-red"
                                                    >
                                                        NJ E Wealth
                                                    </a>
                                                    <a
                                                        href="https://www.njindiaonline.in/cdesk/login.fin"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-brand-red"
                                                    >
                                                        NJ Client Desk
                                                    </a>
                                                </motion.div>
                                            )}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <button
                            onClick={openModal}
                            className="bg-brand-red text-white px-6 py-2.5 rounded-full font-medium hover:bg-orange-600 transition-colors shadow-lg shadow-brand-red/20"
                        >
                            Book Appointment
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-brand-dark hover:text-brand-red transition-colors"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-2">
                            <div className="py-2">
                                <p className="px-3 py-2 text-sm font-bold text-brand-red uppercase tracking-wider">Investments</p>
                                <Link to="/services/mutual-funds" onClick={() => setIsOpen(false)} className="block px-3 py-1 text-gray-600 hover:text-brand-red pl-6">Mutual Funds</Link>
                                <Link to="/services/sif" onClick={() => setIsOpen(false)} className="block px-3 py-1 text-gray-600 hover:text-brand-red pl-6">SIF</Link>
                                <Link to="/services/pms" onClick={() => setIsOpen(false)} className="block px-3 py-1 text-gray-600 hover:text-brand-red pl-6">PMS</Link>
                                <Link to="/services/aif" onClick={() => setIsOpen(false)} className="block px-3 py-1 text-gray-600 hover:text-brand-red pl-6">AIF</Link>
                            </div>
                            <div className="py-2">
                                <p className="px-3 py-2 text-sm font-bold text-brand-red uppercase tracking-wider">Insurance</p>
                                <Link to="/services/health-insurance" onClick={() => setIsOpen(false)} className="block px-3 py-1 text-gray-600 hover:text-brand-red pl-6">Health Insurance</Link>
                                <Link to="/services/term-insurance" onClick={() => setIsOpen(false)} className="block px-3 py-1 text-gray-600 hover:text-brand-red pl-6">Term Insurance</Link>
                                <Link to="/services/ulips" onClick={() => setIsOpen(false)} className="block px-3 py-1 text-gray-600 hover:text-brand-red pl-6">ULIPs</Link>
                                <Link to="/services/motor-insurance" onClick={() => setIsOpen(false)} className="block px-3 py-1 text-gray-600 hover:text-brand-red pl-6">Motor Insurance</Link>
                                <Link to="/services/group-insurance" onClick={() => setIsOpen(false)} className="block px-3 py-1 text-gray-600 hover:text-brand-red pl-6">Group Insurance</Link>
                                <Link to="/services/other-insurance" onClick={() => setIsOpen(false)} className="block px-3 py-1 text-gray-600 hover:text-brand-red pl-6">Others</Link>
                            </div>

                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-3 py-3 text-base font-medium text-brand-gray hover:text-brand-red hover:bg-gray-50 rounded-md"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="border-t border-gray-100 my-2 pt-2">
                                <p className="px-3 py-2 text-sm font-semibold text-gray-400">Login</p>
                                <a href="https://onedigital.centricity.co.in/login" target="_blank" rel="noopener noreferrer" className="block px-3 py-2 text-brand-gray hover:text-brand-red">Centricity</a>
                                <a href="https://ewa.njindiaonline.com/ewa/login" target="_blank" rel="noopener noreferrer" className="block px-3 py-2 text-brand-gray hover:text-brand-red">NJ E Wealth</a>
                                <a href="https://www.njindiaonline.in/cdesk/login.fin" target="_blank" rel="noopener noreferrer" className="block px-3 py-2 text-brand-gray hover:text-brand-red">NJ Client Desk</a>
                            </div>
                            <button
                                onClick={() => {
                                    setIsOpen(false);
                                    openModal();
                                }}
                                className="block w-full text-center mt-4 bg-brand-red text-white px-6 py-3 rounded-full font-medium hover:bg-orange-600 transition-colors"
                            >
                                Book Appointment
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

Navbar.propTypes = {
    openModal: PropTypes.func.isRequired,
};

export default Navbar;
