import { CheckCircle } from 'lucide-react';

const Trust = () => {
    const benefits = [
        "Fiduciary Standard of Care",
        "Transparent Fee Structure",
        "Personalized Investment Strategies",
        "24/7 Portfolio Access",
        "Quarterly Performance Reviews",
        "Dedicated Financial Advisor"
    ];

    return (
        <section id="about" className="py-24 bg-brand-dark text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute right-0 top-0 w-96 h-96 bg-brand-red rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
                <div className="absolute left-0 bottom-0 w-96 h-96 bg-blue-900 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-brand-red font-semibold tracking-wider uppercase text-sm mb-2 block">Why Choose Us</span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            Trusted by Families for Generations
                        </h2>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            We believe that true wealth management goes beyond just numbers. It&apos;s about understanding your life, your goals, and your legacy. Our fiduciary commitment means your interests always come first.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-brand-red shrink-0" />
                                    <span className="text-gray-300">{benefit}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10 pt-10 border-t border-gray-800">
                            <div className="flex items-center gap-4">
                                <div className="flex -space-x-4">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="w-12 h-12 rounded-full border-2 border-brand-dark bg-gray-700 overflow-hidden">
                                            <img
                                                src={`https://randomuser.me/api/portraits/men/${i * 10}.jpg`}
                                                alt="Client"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <p className="font-bold text-white">Join 2,000+ Clients</p>
                                    <p className="text-sm text-gray-400">Trusting us with their future</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative rounded-2xl overflow-hidden border border-gray-700">
                            <img
                                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80"
                                alt="Team meeting"
                                className="w-full h-full object-cover opacity-80"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark to-transparent" />

                            <div className="absolute bottom-0 left-0 w-full p-8">
                                <blockquote className="text-xl font-medium text-white italic mb-4">
                                    &quot;DivDesh transformed how we look at our finances. We finally have clarity and peace of mind.&quot;
                                </blockquote>
                                <div>
                                    <p className="font-bold text-brand-red">Sarah & James Mitchell</p>
                                    <p className="text-sm text-gray-400">Clients since 2018</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Trust;
