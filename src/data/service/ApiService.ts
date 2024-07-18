import axios, {AxiosResponse} from 'axios'
import {TrackData} from "../model/TrackData";
import {ArtistTrackData} from "../model/ArtistTrackData";

export class ApiService {
    private static readonly baseurl = `https://ws.audioscrobbler.com/2.0/`
        private static readonly apiKey = `&api_key=543236aedb3b9365a792e39d4ac94ee3`


    getTopTracks = async (trackTag: string) : Promise<TrackData> => {
        const response: AxiosResponse = await axios.get( ApiService.baseurl +'?method=tag.gettoptracks&tag=' + trackTag +  ApiService.apiKey + '&format=json')
        return JSON.parse(response.data)
    }


    getTrackInfo = async (artist: string, trackName: string) : Promise<ArtistTrackData> => {
        const response: AxiosResponse = await axios.get( ApiService.baseurl + '?method=track.getInfo' + ApiService.apiKey + '&artist=' + artist + '&track=' + trackName + '&format=json')
        console.log(response.data)
        return JSON.parse(response.data)
    }
}
