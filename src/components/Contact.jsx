import { Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-brand-light relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="p-10 lg:p-16 bg-brand-dark text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2" />

                            <h2 className="text-3xl font-bold mb-6">Let&apos;s Discuss Your Future</h2>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                Ready to take control of your financial destiny? Schedule a complimentary consultation with one of our senior advisors today.
                            </p>

                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-brand-red font-semibold mb-1">Headquarters</h4>
                                    <p className="text-gray-300">123 Financial District, Business City, NY 10001</p>
                                </div>
                                <div>
                                    <h4 className="text-brand-red font-semibold mb-1">Email Us</h4>
                                    <p className="text-gray-300">contact@divdesh.com</p>
                                </div>
                                <div>
                                    <h4 className="text-brand-red font-semibold mb-1">Call Us</h4>
                                    <p className="text-gray-300">+1 (555) 123-4567</p>
                                </div>
                            </div>

                            <div className="mt-12">
                                <p className="text-sm text-gray-500">
                                    By contacting us, you agree to our privacy policy and terms of service.
                                </p>
                            </div>
                        </div>

                        <div className="p-10 lg:p-16">
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition-all"
                                            placeholder="John"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition-all"
                                            placeholder="Doe"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                    <textarea
                                        rows="4"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition-all"
                                        placeholder="How can we help you?"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-brand-red text-white font-bold py-4 rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-brand-red/20"
                                >
                                    Send Message
                                    <Send className="w-4 h-4" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
