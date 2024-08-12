import { Router } from 'express';
import { TrackController } from '../controllers/similarTracksController';

const router = Router();

router.get('/similar-tracks', TrackController.fetchSimilarTracks);

export default router;
