import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import logoFull from '../assets/logo-full.png';

const Footer = () => {
    return (
        <footer className="bg-brand-dark text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <div className="mb-6 inline-block bg-white p-3 rounded-xl shadow-lg">
                            <img src={logoFull} alt="DivDesh Logo" className="h-10 w-auto" />
                        </div>
                        <p className="text-gray-400 leading-relaxed mb-4">
                            Empowering your financial future with expert wealth management strategies tailored to your unique goals.
                        </p>
                        <p className="text-sm font-semibold text-brand-red mb-6">
                            AMFI-registered Mutual Fund Distributor
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-brand-red transition-colors"><Facebook className="w-5 h-5" /></a>
                            <a href="#" className="text-gray-400 hover:text-brand-red transition-colors"><Twitter className="w-5 h-5" /></a>
                            <a href="#" className="text-gray-400 hover:text-brand-red transition-colors"><Linkedin className="w-5 h-5" /></a>
                            <a href="#" className="text-gray-400 hover:text-brand-red transition-colors"><Instagram className="w-5 h-5" /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-gray-400 hover:text-brand-red transition-colors">Home</a></li>
                            <li><a href="#services" className="text-gray-400 hover:text-brand-red transition-colors">Services</a></li>
                            <li><a href="#about" className="text-gray-400 hover:text-brand-red transition-colors">About Us</a></li>
                            <li><a href="#contact" className="text-gray-400 hover:text-brand-red transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-bold mb-6">Services</h3>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-gray-400 hover:text-brand-red transition-colors">Wealth Planning</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-brand-red transition-colors">Investment Management</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-brand-red transition-colors">Retirement Strategies</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-brand-red transition-colors">Estate Planning</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-bold mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400">
                                <MapPin className="w-5 h-5 text-brand-red shrink-0 mt-1" />
                                <span>123 Financial District,<br />Business City, NY 10001</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Phone className="w-5 h-5 text-brand-red shrink-0" />
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Mail className="w-5 h-5 text-brand-red shrink-0" />
                                <span>contact@divdesh.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} DivDesh Wealth Management. All rights reserved.
                    </p>
                    <div className="flex space-x-6 text-sm text-gray-500">
                        <a href="#" className="hover:text-brand-red transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-brand-red transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
