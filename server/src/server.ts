import express, { Request, Response } from 'express';
import { TrackController } from './controllers/similarTracksController';

const app = express();
const port = 3000;

// app.use(cors());

app.get('/api/similar-tracks', TrackController.fetchSimilarTracks);

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
                <a href="/api/similar-tracks?search=believe" target="_blank">http://localhost:3000/api/similar-tracks?search=believe</a>
            </div>
        </body>
        </html>
    `;
    res.send(html);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
