import { Request, Response } from 'express';
import { TrackService } from '../services/similarTracksService';

export class TrackController {
    static async fetchSimilarTracks(req: Request, res: Response): Promise<void> {
        const searchTerm = req.query.search as string || 'default';

        try {
            const tracks = await TrackService.getSimilarTracks(searchTerm);
            res.json(tracks);
        } catch (error) {
            console.error('Error in TrackController:', error);
            res.status(500).json({ error: 'Failed to fetch similar tracks' });
        }
    }
}
