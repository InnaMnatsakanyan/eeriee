// @ts-ignore
import axios, {AxiosResponse} from 'axios'
import {TrackData} from "../model/TrackData";
import {ArtistData} from "../model/ArtistData";
// import {} from "../model/TrackData";
import {TopTracksData} from "../model/TopTracksData";

export class ApiService {
    private static readonly baseurl = `https://ws.audioscrobbler.com/2.0/`;
    private static readonly apiKey = `&api_key=543236aedb3b9365a792e39d4ac94ee3`;
    private static readonly format = `&format=json`;

    getTrackInfo = async (artist: string, trackName: string) : Promise<TrackData> => {
        try {
            const response: AxiosResponse = await axios.get( `${ApiService.baseurl}?method=track.getInfo${ApiService.apiKey}&artist=${artist}&track=${trackName + ApiService.format}`)
            console.log("API Response Data:", response.data);
            return response.data;
        } catch (error) {
            console.error("Error fetching track info:", error);
            throw error;
        }
    }

    // getTracks = async (trackName: string) : Promise<TracksData> => {
    //     try {
    //         const response: AxiosResponse = await axios.get( `${ApiService.baseurl}?method=track.search&track=${trackName}${ApiService.apiKey + ApiService.format}`)
    //         console.log("API Response Data:", response.data);
    //         return response.data;
    //     } catch (error) {
    //         console.error("Error fetching track info:", error);
    //         throw error;
    //     }
    // }

    getTopArtist = async () : Promise<ArtistData> => {
        try {
            const response: AxiosResponse = await axios.get( `${ApiService.baseurl}?method=chart.gettopartists${ApiService.apiKey + ApiService.format}`)
            console.log("API Response Data:", response.data);
            return response.data;
        } catch (error) {
            console.error("Error fetching track info:", error);
            throw error;
        }
    }

    getTopTracks = async () : Promise<TopTracksData> => {
        try {
            const response: AxiosResponse = await axios.get( `${ApiService.baseurl}?method=chart.gettoptracks${ApiService.apiKey + ApiService.format}`)
            console.log("API Response Data of Top Tracks:", response.data);
            return response.data;
        } catch (error) {
            console.error("Error fetching track info:", error);
            throw error;
        }
    }
}

