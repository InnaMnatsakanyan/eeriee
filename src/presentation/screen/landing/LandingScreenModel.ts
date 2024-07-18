import {useState} from "react";
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
                let artistTrackDataPromise = apiService.getTrackInfo(state.artist, state.track)
                let artistTrackData = await artistTrackDataPromise
                setState((prevState) => ({
                    ...prevState,
                    artist: prevState.artist,
                    track: prevState.track,
                    trackData: uiTrackMapper.toUITrackCell(artistTrackData)
                }))
            } catch (e) {
                console.error()
            }
        })();
    }

    return {
        state,
        onArtistSearchTextChange,
        onTrackSearchTextChange,
        onSearchClick
    }
}
