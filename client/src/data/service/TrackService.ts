import axios, {AxiosResponse} from 'axios';
import { Track } from '../model/TracksData';

const API_URL = 'http://localhost:3000/api/similar-tracks';

export class TrackService {
    fetchSimilarTracks = async (searchTerm: string): Promise<Track[]> => {
        try {
            const response: AxiosResponse = await axios.get<Track[]>(`${API_URL}?search=${encodeURIComponent(searchTerm)}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching similar tracks:', error);
            throw new Error('Failed to fetch similar tracks');
        }
    };
}