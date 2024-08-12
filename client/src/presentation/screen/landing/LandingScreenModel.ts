import {useEffect, useState} from "react";
import {ApiService} from "../../../data/service/ApiService";
import {TopArtistUIMapper} from "../mappers/TopArtistUIMapper";
import {LandingUITopTracksCell} from "./model/LandingUITopTrackCell";
import {LandingUITopArtistCell} from "./model/LandingUITopArtistCell";
import { useNavigate } from "react-router-dom";
import {TopTracksUIMapper} from "../mappers/TopTracksUIMapper";

interface LandingState {
    readonly artist: string
    readonly track: string
    readonly topArtistData?: LandingUITopArtistCell
    readonly topTracksData?: LandingUITopTracksCell
}

export default function LandingScreenModel(
    apiService: ApiService,
    uiTopArtistMapper: TopArtistUIMapper,
    uiTopTracksMapper: TopTracksUIMapper
) {

    const [ state, setState] = useState<LandingState>({
        artist: "",
        track: ""
    })
    const navigate = useNavigate();


    useEffect(() => {
        getTopTracks();
        getTopArtist();
    }, []);

    async function getTopArtist() {
         try {
             let topArtistData = await apiService.getTopArtist()
             console.log("API Response Top Artist:", topArtistData); // Log API response
             const mappedArtistData = uiTopArtistMapper.toUIArtistCell(topArtistData);
             console.log("Mapped Data Top Artist:", mappedArtistData); // Log mapped data
             setState((prevState) => ({
                 ...prevState,
                 topArtistData: mappedArtistData
             }));
         } catch (e) {
             console.error()
         }
    }

    function onTrackSearchTextChange(changeEvent: React.ChangeEvent<HTMLInputElement>) {
        setState((prevState) => ({
            ...prevState,
            track: changeEvent.target.value
        }))
    }

    async function getTopTracks() {
        try {
            let topTracksData = await apiService.getTopTracks()
            console.log("API Response of Top Tracks:", topTracksData); // Log API response
            const mappedTopTrackData = uiTopTracksMapper.toUITopTracksCell(topTracksData);
            console.log("Mapped Data of Top Tracks:", mappedTopTrackData);
            setState((prevState) => ({
                ...prevState,
                 topTracksData: mappedTopTrackData
            }));
        } catch (e) {
            console.error()
        }
    }

    function onTrackSearchClick() {
        navigate('/search', { state: { searchInput: state.track } });
    }

    const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) =>{
        if( e.key === 'Enter' ){
            onTrackSearchClick();
        }
    };

    useEffect(() => {
        console.log("State updated:", state);
    }, [state]);

    return {
        state,
        // getTopArtist,
        onTrackSearchTextChange,
        onTrackSearchClick,
        onKeyPress
    }
}
