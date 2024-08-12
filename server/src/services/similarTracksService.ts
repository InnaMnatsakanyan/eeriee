import axios from 'axios';
import { Track, SimilarTracks } from '../models/Tracks';
import {mapSimilarTracks} from "../mappers/similarTracksMapper";

export class TrackService {
    private static readonly BASE_URL = 'https://api.jamendo.com/v3.0/tracks/';
    private static readonly CLIENT_ID = 'fc642ce2';

    static async getSimilarTracks(searchTerm: string): Promise<Track[]> {
        try {
            const response = await axios.get<SimilarTracks>(`${this.BASE_URL}?client_id=${this.CLIENT_ID}&search=${encodeURIComponent(searchTerm)}`);
            const rawData = response.data.results;
            return rawData.map(mapSimilarTracks);
        } catch (error) {
            console.error('Error fetching similar tracks:', error);
            throw new Error('Failed to fetch similar tracks');
        }
    }
}
