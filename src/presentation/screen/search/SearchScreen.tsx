import React from 'react';
import Header from "../../components/Header";
import SearchScreenModel from "./SearchScreenModel";
import { ApiService } from "../../../data/service/ApiService";
import { SimilarTracksUIMapper } from "../screenMappers/SimilarTracksUIMapper";
import styles from './SearchScreen.module.css';
import SimilarTracksCellView from "./SimilarTracksCellView";

export default function SearchScreen() {
    const uiSimilarTracksMapper = new SimilarTracksUIMapper();

    const { state, onTrackSearchTextChange, onTrackSearchClick, onKeyPress } = SearchScreenModel(new ApiService(), uiSimilarTracksMapper);
    const similarTracksState = state.similarTracksData;

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
                    {similarTracksState ? similarTracksState.tracks.map((track, index) => (
                        <SimilarTracksCellView
                            key={track.mbid || index}
                            name={track.name}
                            artist={track.artist}
                            mbid={track.mbid}
                        />
                    )) : null
                    }
                </div>
            </div>
        </div>
    );
}
