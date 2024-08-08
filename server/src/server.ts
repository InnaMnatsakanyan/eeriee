import express, { Request, Response } from 'express';
import {SimilarTracks} from "./types/Tracks";
import axios from 'axios';

const app = express();
const port = 3000;

app.get('/api/similar-tracks', async (req: Request, res: Response) : Promise<void> => {
    console.log('Endpoint /api/similar-tracks was hit');

    try {
        const response = await axios.get<{ results: SimilarTracks }>('https://api.jamendo.com/v3.0/tracks/?client_id=fc642ce2&search=believe', {});
        const data = response.data.results;
        console.log('API Response Data:', data);
        res.json(data);
    } catch (error) {
        console.error('API Error:', error);
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
});

app.get('/', (req: Request, res: Response) => {
    const html = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>API Link</title>
        </head>
        <body>
            <h1>API Link</h1>
            <div>
                <a href="/api/similar-tracks" target="_blank">http://localhost:3000/api/similar-tracks</a>
            </div>
        </body>
        </html>
    `;
    res.send(html);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
