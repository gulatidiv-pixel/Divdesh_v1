import { Shield, TrendingUp, PieChart, Briefcase, Landmark } from 'lucide-react';

export const servicesData = {
    "health-insurance": {
        title: "Health Insurance",
        icon: <Shield className="w-12 h-12 text-brand-red" />,
        intro: "Think of health insurance as your financial bodyguard. It steps in when medical bills try to knock you down.",
        sections: [
            {
                title: "Health Insurance 101",
                content: "Let's keep it simple. Health insurance pays your medical bills so you don't have to burn through your savings. You pay a small amount every year (premium), and if you get sick or injured, the insurance company covers the big costs. It's not just for when you're old; it's for anyone who wants to protect their bank account from surprise hospital visits."
            },
            {
                title: "Best Health Insurance Plans",
                content: "The 'best' plan isn't the most expensive one—it's the one that fits YOU. We look for plans with: \n• No Room Rent Limits (so you can pick a nice room)\n• High Claim Settlement Ratio (so they actually pay up)\n• Restoration Benefits (refills your cover if you use it all)\n• Minimal Waiting Periods (because who likes waiting?)"
            },
            {
                title: "Top Health Insurers",
                content: "We partner with the most reliable names in the game. Companies like HDFC Ergo, Niva Bupa, and Care Health Insurance are often on our leaderboard because they have a track record of being fair and fast with claims. But remember, the right insurer for your neighbor might not be the right one for you."
            },
            {
                title: "Health Insurance Checklist",
                content: "Before you buy, ask these questions:\n1. Does it cover pre-existing diseases after a short wait?\n2. Are there sub-limits on specific treatments?\n3. Is there a co-payment clause? (Avoid this if you can!)\n4. How wide is their network of cashless hospitals?"
            }
        ]
    },
    "term-insurance": {
        title: "Term Insurance",
        icon: <Shield className="w-12 h-12 text-brand-red" />,
        intro: "The purest form of love you can leave behind. It ensures your family's lifestyle doesn't change, even if you're not there.",
        sections: [
            {
                title: "Term Insurance 101",
                content: "Term insurance is pure protection. You pay a premium, and if something happens to you during the 'term' (say, the next 30 years), your family gets a large lump sum. If you survive the term, you get nothing back—and that's actually a GOOD thing! Because it means you're alive, and you paid a tiny cost for massive peace of mind."
            },
            {
                title: "Best Term Insurance Plans",
                content: "We recommend plans that are simple and robust. Look for:\n• Life Cover of at least 15-20x your annual income\n• Critical Illness Riders (extra money if you get a serious illness)\n• Waiver of Premium (stops your payments if you get disabled)\n• Claim Settlement Ratio above 98%"
            },
            {
                title: "Top Term Insurers",
                content: "For term life, trust is everything. You need a brand that will be around for decades. LIC, Tata AIA, HDFC Life, and ICICI Prudential are heavyweights here. We help you compare their premiums and claim rejection rates to find the sweet spot."
            },
            {
                title: "Term Insurance Checklist",
                content: "Don't sign until you check:\n1. Did I disclose ALL medical history? (Lying = No Claim)\n2. Is the cover amount enough to pay off loans AND support the family?\n3. Did I add the Married Women's Property (MWP) Act addendum? (Protects the money for your wife/kids from creditors)"
            }
        ]
    },
    "ulips": {
        title: "ULIPs",
        icon: <TrendingUp className="w-12 h-12 text-brand-red" />,
        intro: "Investment + Insurance in one package. A controversial favorite that has evolved into a powerful tax-saving tool.",
        sections: [
            {
                title: "ULIPs 101",
                content: "Unit Linked Insurance Plans (ULIPs) give you a bit of both worlds. Part of your money goes to life cover, and the rest is invested in the stock market (equity) or bonds (debt). Modern ULIPs are low-cost and offer great flexibility to switch between funds without tax implications."
            },
            {
                title: "Best ULIP Plans",
                content: "The new-age ULIPs are far better than the old ones. We look for plans with:\n• Zero Allocation Charges (so more money gets invested)\n• Return of Mortality Charges (you get your insurance cost back)\n• Wealth Boosters (loyalty additions from the insurer)\n• Flexibility to switch funds for free"
            },
            {
                title: "Top ULIP Providers",
                content: "Bajaj Allianz, HDFC Life, and SBI Life offer some of the most competitive ULIPs today. They offer a wide range of fund options—from aggressive mid-cap funds to safe bond funds—so you can ride the market waves how you want."
            },
            {
                title: "ULIP Checklist",
                content: "Watch out for:\n1. Lock-in period is 5 years—are you okay with that?\n2. What are the Fund Management Charges (FMC)?\n3. Is the life cover at least 10x your premium? (Crucial for tax benefits under Section 80C and 10(10D))"
            }
        ]
    },
    "mutual-funds": {
        title: "Mutual Funds",
        icon: <PieChart className="w-12 h-12 text-brand-red" />,
        intro: "The democratization of wealth. You don't need to be a Wall Street expert to grow your money like one.",
        sections: [
            {
                title: "Mutual Funds 101",
                content: "A mutual fund is like a potluck dinner. You and thousands of others put money into a pot. A professional chef (Fund Manager) uses that money to buy a buffet of stocks and bonds. You get a slice of the profits proportional to what you put in. It's the easiest way to diversify your risk."
            },
            {
                title: "Best Mutual Fund Plans",
                content: "There is no single 'best' fund, only the best fund for your goal. \n• For short term (1-3 yrs): Liquid or Debt Funds\n• For medium term (3-5 yrs): Hybrid or Balanced Advantage Funds\n• For long term (5+ yrs): Flexi-cap or Index Funds"
            },
            {
                title: "Top Fund Houses",
                content: "We work with established AMCs like SBI, ICICI Prudential, HDFC, Nippon India, and Axis. But we also keep an eye on agile performers like Quant and PPFAS that have delivered stellar alpha in recent years."
            },
            {
                title: "Mutual Fund Checklist",
                content: "Before investing:\n1. What is your time horizon? (Don't put rent money in stocks!)\n2. Direct vs Regular? (We help you understand the value of advice)\n3. Check the Expense Ratio (Lower is usually better)\n4. Look at Rolling Returns, not just trailing returns."
            }
        ]
    },
    "pms": {
        title: "PMS",
        icon: <Briefcase className="w-12 h-12 text-brand-red" />,
        intro: "Portfolio Management Services. For when you have a substantial portfolio and want a tailor-made suit, not off-the-rack.",
        sections: [
            {
                title: "PMS 101",
                content: "PMS is an investment service for High Net Worth Individuals (HNIs) with a minimum ticket size of ₹50 Lakhs. Unlike mutual funds where you own units, in PMS you own the actual stocks in your demat account. The Portfolio Manager takes concentrated bets to generate higher returns (alpha) than the market."
            },
            {
                title: "Best PMS Strategies",
                content: "Strategies vary wildly. Some focus on small-cap gems, others on large-cap compounders. We identify strategies that align with your risk appetite—whether you want 'Growth at Reasonable Price' (GARP) or 'Deep Value' investing."
            },
            {
                title: "Top PMS Providers",
                content: "Names like Marcellus, ASK, WhiteOak, and Motilal Oswal dominate this space. Each has a distinct philosophy. For example, some buy 'clean' companies with high governance, while others look for turnaround stories."
            },
            {
                title: "PMS Checklist",
                content: "Crucial checks:\n1. Fees: Fixed fee vs. Performance fee? (Performance fee is often better aligned)\n2. Exit Load: PMS usually has high exit loads for the first 1-3 years.\n3. Tax: You pay capital gains tax on every transaction the manager makes. Be prepared for the paperwork (we handle this for you!)."
            }
        ]
    },
    "aif": {
        title: "AIF",
        icon: <Landmark className="w-12 h-12 text-brand-red" />,
        intro: "Alternative Investment Funds. The playground for sophisticated investors looking beyond plain vanilla stocks and bonds.",
        sections: [
            {
                title: "AIF 101",
                content: "AIFs are for the big leagues (Minimum ₹1 Crore). They invest in things like Startups (Venture Capital), Infrastructure, Pre-IPO companies, or complex hedge fund strategies (Long/Short). It's high risk, high reward, and low liquidity."
            },
            {
                title: "Best AIF Categories",
                content: "• Category I: Venture Capital, SME Funds (Good for tax pass-through)\n• Category II: Private Equity, Debt Funds (The most common type)\n• Category III: Hedge Funds, Public Market Funds (For short-term trading strategies)"
            },
            {
                title: "Top AIF Managers",
                content: "We curate opportunities from top-tier managers like Kotak, IIFL, Avendus, and niche players focusing on specific themes like Real Estate or Venture Debt."
            },
            {
                title: "AIF Checklist",
                content: "This is serious business:\n1. Liquidity: Your money might be locked for 5-7 years.\n2. Risk: Startups can go to zero. Are you okay with that?\n3. Taxation: It's complex and varies by category. You need expert advice here."
            }
        ]
    }
};
