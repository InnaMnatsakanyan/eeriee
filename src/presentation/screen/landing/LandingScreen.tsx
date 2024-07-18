import LandingScreenModel from "./LandingScreenModel";
import {ApiService} from "../../../data/service/ApiService";
import {TrackInfoUIMapper} from "./mapper/TrackInfoUIMapper";
import TrackInfoCellView from "./TrackInfoCellView";

export default function LandingScreen() {
    const uiTrackInfoMapper = new TrackInfoUIMapper()

    const { state, onSearchClick, onTrackSearchTextChange, onArtistSearchTextChange } = LandingScreenModel(new ApiService(), uiTrackInfoMapper)
    const trackState = state.trackData

    return (
        <div className='weatherScreenStyle'>
            <input className='artistNameInput' type="text" placeholder='Artist name'
                   value={state.artist}
                   onChange={onArtistSearchTextChange}
            />
            <input className='trackNameInput' type="text" placeholder='Song name'
                   value={state.track}
                   onChange={onTrackSearchTextChange}
            />
            <button className='searchButton' onClick={onSearchClick}>Search</button>

            <div className='weatherAllData'>
                {trackState ?
                    <TrackInfoCellView
                        name={trackState.name}
                        duration={trackState.duration}
                    /> : null}
            </div>
        </div>
    )
}
