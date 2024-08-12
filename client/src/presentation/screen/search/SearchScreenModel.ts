import {useEffect, useState} from "react";
import {TrackService} from "../../../data/service/TrackService";
import {SimilarTracksUIMapper} from "../mappers/SimilarTracksUIMapper";
import {SearchUISimilarTrackCell} from "./model/SearchUISimilarTrackCell";
import {useLocation} from "react-router-dom";
import {Track} from "../../../data/model/TracksData";

interface SearchState {
    readonly track: string
    readonly similarTracksData?: SearchUISimilarTrackCell
}

interface LocationState {
    searchInput: string;
}

export default function SearchScreenModel(
    trackService: TrackService,
    uiSimilarTrackMapper: SimilarTracksUIMapper,
) {

    const location = useLocation();
    const { searchInput } = location.state as LocationState;
    const [ state, setState] = useState<SearchState>({
        track: searchInput,
    })
    const [currentTrack, setCurrentTrack] = useState<Track | null>(null);

    useEffect(() => {
        onTrackSearchClick();
    }, []);

    useEffect(() => {
        console.log("State updated of Search Screen:", state);
    }, [state]);

    function onTrackSearchTextChange(changeEvent: React.ChangeEvent<HTMLInputElement>) {
        setState((prevState) => ({
            ...prevState,
            track: changeEvent.target.value
        }))
    }
    function onTrackSearchClick() {
        (async () => {
            try {
                let similarTrackData: Track[] = await trackService.fetchSimilarTracks(state.track)
                console.log("API Response of Search Screen Similar Track:", similarTrackData); // Log API response
                if (similarTrackData) {
                    const similarTracksData = uiSimilarTrackMapper.mapTracksData(similarTrackData);
                    console.log("Mapped Data of Search Screen Similar Track:", similarTracksData);
                    setState((prevState) => ({
                        ...prevState,
                        similarTracksData
                    }));
                } else {
                    console.error("No track data found in the response");
                }
            } catch (e) {
                console.error()
            }
        })();
    }

    const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) =>{
        if( e.key === 'Enter' ){
            onTrackSearchClick();
        }
    };

    const handlePlayTrack = (track: Track) => {
        setCurrentTrack(track); // Set the current track to play
    };

    const handleClosePlayer = () => {
        setCurrentTrack(null); // Close the player
    };

    return {
        state,
        currentTrack,
        onTrackSearchTextChange,
        onTrackSearchClick,
        onKeyPress,
        handlePlayTrack,
        handleClosePlayer
    }
}
