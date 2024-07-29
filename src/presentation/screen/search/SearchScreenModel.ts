import {useEffect, useState} from "react";
import {ApiService} from "../../../data/service/ApiService";
import {SimilarTracksUIMapper} from "../screenMappers/SimilarTracksUIMapper";
import {SearchUISimilarTrackCell} from "./model/SearchUISimilarTrackCell";
import {useLocation} from "react-router-dom";

interface SearchState {
    readonly track: string
    readonly similarTracksData?: SearchUISimilarTrackCell
}

interface LocationState {
    searchInput: string;
}

export default function SearchScreenModel(
    apiService: ApiService,
    uiSimilarTrackMapper: SimilarTracksUIMapper,
) {

    const location = useLocation();
    const { searchInput } = location.state as LocationState;
    const [ state, setState] = useState<SearchState>({
        track: searchInput,
    })

    useEffect(() => {
        onTrackSearchClick();
    }, []);

    function onTrackSearchTextChange(changeEvent: React.ChangeEvent<HTMLInputElement>) {
        setState((prevState) => ({
            ...prevState,
            track: changeEvent.target.value
        }))
    }
    function onTrackSearchClick() {
        (async () => {
            try {
                let similarTrackData = await apiService.getTracks(state.track)
                console.log("API Response of Search Screen Similar Track:", similarTrackData); // Log API response
                if (similarTrackData.results) {
                    const similarTracksData = uiSimilarTrackMapper.toUISimilarTrackCell(similarTrackData);
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

    useEffect(() => {
        console.log("State updated of Search Screen:", state);
    }, [state]);

    return {
        state,
        onTrackSearchTextChange,
        onTrackSearchClick,
        onKeyPress
    }
}
