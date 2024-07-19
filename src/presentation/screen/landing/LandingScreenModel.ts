import {useEffect, useState} from "react";
import {ApiService} from "../../../data/service/ApiService";
import {TrackInfoUIMapper} from "./mapper/TrackInfoUIMapper";
import {LandingUITrackInfoCell} from "./model/LandingUITrackInfoCell";

interface LandingState {
    readonly artist: string
    readonly track: string
    readonly trackData?: LandingUITrackInfoCell
}

export default function LandingScreenModel(
    apiService: ApiService,
    uiTrackMapper: TrackInfoUIMapper
) {
    const [ state, setState] = useState<LandingState>({
        artist: "",
        track: ""
    })

    function onArtistSearchTextChange(changeEvent: React.ChangeEvent<HTMLInputElement>) {
        setState((prevState) => ({
            ...prevState,
            artist: changeEvent.target.value
        }))
    }

    function onTrackSearchTextChange(changeEvent: React.ChangeEvent<HTMLInputElement>) {
        setState((prevState) => ({
            ...prevState,
            track: changeEvent.target.value
        }))
    }

    function onSearchClick() {
        (async () => {
            try {
                let artistTrackData = await apiService.getTrackInfo(state.artist, state.track)
                console.log("API Response:", artistTrackData); // Log API response
                if (artistTrackData.track) {
                    const trackData = uiTrackMapper.toUITrackCell(artistTrackData);
                    console.log("Mapped Track Data:", trackData); // Log mapped data
                    setState((prevState) => ({
                        ...prevState,
                        trackData
                    }));
                } else {
                    console.error("No track data found in the response");
                }
            } catch (e) {
                console.error()
            }
        })();
    }

    useEffect(() => {
        console.log("State updated:", state);
    }, [state]);

    return {
        state,
        onArtistSearchTextChange,
        onTrackSearchTextChange,
        onSearchClick
    }
}
