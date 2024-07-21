import express from 'express';
import { GoogleGenerativeAI } from '@google/generative-ai';
import cors from 'cors';

const app = express();
const apiKey = 'AIzaSyBFwb4V-OJrWNoJmBob26E4JCsVjvSQiUE';
const genAI = new GoogleGenerativeAI(apiKey);

// Middleware
app.use(cors());
app.use(express.json());

async function generateContent(prompt) {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();
    return text;
  } catch (error) {
    console.error('Error generating content:', error);
    return 'Sorry, there was an error generating the response.';
  }
}

app.post('/generate', async (req, res) => {
  const { prompt } = req.body;
  const responseText = await generateContent(prompt);
  res.json({ response: responseText });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
