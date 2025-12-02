/* eslint-env node */
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000; // eslint-disable-line no-undef

// Middleware to parse JSON
app.use(express.json());

// Chat API endpoint
app.post('/api/chat', async (req, res) => {
    try {
        const { messages } = req.body;

        // Check if OpenAI API key is configured
        if (!process.env.OPENAI_API_KEY) { // eslint-disable-line no-undef
            return res.status(500).json({
                error: 'OpenAI API key not configured. Please contact support.'
            });
        }

        // System prompt with business context
        const systemPrompt = `You are a helpful financial advisor assistant for a financial planning and wealth management company. 
        
Our services include:

1. **Health Insurance**: Financial protection for medical expenses. We offer plans with no room rent limits, high claim settlement ratios, restoration benefits, and minimal waiting periods. Top insurers: HDFC Ergo, Niva Bupa, Care Health Insurance.

2. **Term Insurance**: Pure life protection. Recommended coverage is 15-20x annual income. We suggest plans with critical illness riders, waiver of premium, and claim settlement ratio above 98%. Top insurers: LIC, Tata AIA, HDFC Life, ICICI Prudential.

3. **ULIPs** (Unit Linked Insurance Plans): Combination of investment and insurance. Modern ULIPs offer zero allocation charges, return of mortality charges, wealth boosters, and flexibility to switch funds. Top providers: Bajaj Allianz, HDFC Life, SBI Life. Lock-in period is 5 years.

4. **Mutual Funds**: Professional money management for all investors. We recommend:
   - Short term (1-3 yrs): Liquid or Debt Funds
   - Medium term (3-5 yrs): Hybrid or Balanced Advantage Funds
   - Long term (5+ yrs): Flexi-cap or Index Funds
   Top fund houses: SBI, ICICI Prudential, HDFC, Nippon India, Axis, Quant, PPFAS.

5. **PMS** (Portfolio Management Services): For High Net Worth Individuals with minimum ₹50 Lakhs. You own actual stocks in your demat account. Top providers: Marcellus, ASK, WhiteOak, Motilal Oswal.

6. **AIF** (Alternative Investment Funds): For sophisticated investors with minimum ₹1 Crore. Includes Venture Capital, Private Equity, and Hedge Funds. Categories: I (VC, SME), II (PE, Debt), III (Hedge Funds). Top managers: Kotak, IIFL, Avendus.

Be friendly, informative, and concise. Use simple language. If asked about specific products, recommend scheduling a consultation for personalized advice. Always prioritize the customer's financial goals and risk tolerance.`;

        // Call OpenAI API
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}` // eslint-disable-line no-undef
            },
            body: JSON.stringify({
                model: 'gpt-4o-mini', // Using the cost-effective model
                messages: [
                    { role: 'system', content: systemPrompt },
                    ...messages
                ],
                temperature: 0.7,
                max_tokens: 500
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('OpenAI API error:', errorData);
            throw new Error('Failed to get response from OpenAI');
        }

        const data = await response.json();
        const assistantMessage = data.choices[0].message.content;

        res.json({ message: assistantMessage });
    } catch (error) {
        console.error('Chat API error:', error);
        res.status(500).json({
            error: 'Failed to process chat request. Please try again.'
        });
    }
});

app.use(express.static(path.join(__dirname, 'dist')));

// Catch-all route for SPA - must be last
app.use((req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
