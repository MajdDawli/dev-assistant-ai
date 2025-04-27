import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { askLLM } from './langchain';

interface QueryRequestBody {
    query: string;
}

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Basic route
app.get('/', (req: Request, res: Response) => {
  res.send('Server is running!');
});

app.post('/api/query', (req: Request, res: Response) => {
    try {
        const {query}: QueryRequestBody = req.body;
        if (!query) {
            res.status(400).json({ error: 'Query is required' });
            return;
        }
        askLLM(query)
            .then((response) => {
                res.json({ response });
            })
            .catch((error) => {
                console.error('Error:', error);
                res.status(500).json({ error: 'Internal server error' });
            });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
  });


// Start server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
