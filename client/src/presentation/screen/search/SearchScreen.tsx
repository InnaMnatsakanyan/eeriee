import React, {useState} from 'react';
import Header from "../../components/Header";
import SearchScreenModel from "./SearchScreenModel";
import { SimilarTracksUIMapper } from "../mappers/SimilarTracksUIMapper";
import styles from './SearchScreen.module.css';
import TrackPreview from "./../../components/TrackPreview/TrackPreview";
import {TrackService} from "../../../data/service/TrackService";
import {Track} from "../../../data/model/TracksData";
import TrackPlayer from "../../components/TrackPlayer/TrackPlayer";

export default function SearchScreen() {
    const uiSimilarTracksMapper = new SimilarTracksUIMapper();

    const { state, currentTrack , handlePlayTrack, handleClosePlayer, onTrackSearchTextChange, onTrackSearchClick, onKeyPress } = SearchScreenModel(new TrackService(), uiSimilarTracksMapper);
    const similarTracksState = state.similarTracksData;

    // const [currentTrack, setCurrentTrack] = useState<Track | null>(null);

    // const handlePlayTrack = (track: Track) => {
    //     setCurrentTrack(track); // Set the current track to play
    // };

    // const handleClosePlayer = () => {
    //     setCurrentTrack(null); // Close the player
    // };

    return (
        <div>
            <Header
                onTrackSearchClick={onTrackSearchClick}
                onTrackSearchTextChange={onTrackSearchTextChange}
                onKeyPress={onKeyPress}
                inputValue={state.track}
            />

            <div className={styles.similarTracksComponent}>
                {similarTracksState ?
                    <p className={styles.resultText}>Results for {state.track}</p>
                    : null
                }
                <div className={styles.similarTracksTotal}>
                    {similarTracksState ? similarTracksState.similarTracks.map((track, index) => (
                        <TrackPreview
                            track={track as Track}
                            onPlay={() => handlePlayTrack(track as Track)}
                        />
                    )) : null
                    }
                </div>

                {currentTrack && <TrackPlayer track={currentTrack} onClose={handleClosePlayer} />}
            </div>
        </div>
    );
}
