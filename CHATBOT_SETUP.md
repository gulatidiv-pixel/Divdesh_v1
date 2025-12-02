# AI Chatbot Setup Guide

## Overview
Your website now includes an AI-powered chatbot that can answer questions about your financial services including Health Insurance, Term Insurance, ULIPs, Mutual Funds, PMS, and AIFs.

## Features
- 🤖 **GPT-4 Powered**: Uses OpenAI's GPT-4o-mini for intelligent responses
- 💬 **Floating Widget**: Beautiful, animated chat interface that doesn't interfere with your site
- 🎨 **Premium Design**: Smooth animations, gradient backgrounds, and modern UI
- ⚡ **Quick Questions**: Pre-defined questions to help users get started
- 📱 **Responsive**: Works perfectly on desktop and mobile devices

## Setup Instructions

### 1. Get an OpenAI API Key
1. Go to [OpenAI Platform](https://platform.openai.com/api-keys)
2. Sign up or log in to your account
3. Click "Create new secret key"
4. Copy the API key (it starts with `sk-`)

### 2. Configure Environment Variables

#### For Local Development:
1. Create a `.env` file in the root directory:
   ```bash
   cp .env.example .env
   ```

2. Open `.env` and add your OpenAI API key:
   ```
   OPENAI_API_KEY=sk-your-actual-api-key-here
   PORT=3000
   ```

#### For Render Deployment:
1. Go to your Render dashboard
2. Select your web service
3. Go to "Environment" tab
4. Add a new environment variable:
   - **Key**: `OPENAI_API_KEY`
   - **Value**: Your OpenAI API key (starts with `sk-`)
5. Click "Save Changes"
6. Render will automatically redeploy with the new environment variable

### 3. Test the Chatbot

#### Locally:
```bash
npm run build
node server.js
```
Then visit `http://localhost:3000` and click the chat button in the bottom-right corner.

#### On Render:
After deploying with the environment variable set, the chatbot will automatically work on your live site.

## Usage

Users can:
- Click the floating chat button in the bottom-right corner
- Ask questions about any of your financial services
- Get instant, intelligent responses powered by AI
- Use quick question buttons to get started

## Cost Considerations

The chatbot uses OpenAI's `gpt-4o-mini` model, which is very cost-effective:
- **Pricing**: ~$0.15 per 1M input tokens, ~$0.60 per 1M output tokens
- **Average cost per conversation**: Less than $0.01
- **Monthly estimate**: For 1,000 conversations/month ≈ $5-10

You can monitor your usage at: https://platform.openai.com/usage

## Customization

### Change the Model
In `server.js`, you can change the model:
```javascript
model: 'gpt-4o-mini', // Change to 'gpt-4o' for better quality (higher cost)
```

### Adjust Response Length
In `server.js`, modify `max_tokens`:
```javascript
max_tokens: 500, // Increase for longer responses
```

### Customize the System Prompt
Edit the `systemPrompt` in `server.js` to change how the AI responds.

### Modify the UI
Edit `src/components/Chatbot.jsx` to change colors, animations, or layout.

## Troubleshooting

### Chatbot shows error message
- **Check**: Is your OpenAI API key correctly set in environment variables?
- **Check**: Do you have credits in your OpenAI account?
- **Check**: Are there any errors in the browser console or server logs?

### Chatbot doesn't appear
- **Check**: Is the Chatbot component imported in `App.jsx`?
- **Check**: Are there any JavaScript errors in the browser console?

### Slow responses
- This is normal - AI responses can take 2-5 seconds
- Consider upgrading to `gpt-4o` for faster responses (slightly higher cost)

## Security Notes

- ✅ API key is stored securely in environment variables
- ✅ `.env` file is in `.gitignore` to prevent accidental commits
- ✅ API calls are made from the server, not the client
- ✅ No sensitive user data is sent to OpenAI

## Support

For issues or questions:
1. Check the browser console for errors
2. Check the server logs on Render
3. Verify your OpenAI API key is valid and has credits

---

**Built with ❤️ using React, Express, and OpenAI GPT-4**
