import {LandingUITopTracksCell} from "../landing/model/LandingUITopTrackCell";
import {TopTracksData} from "../../../data/model/TopTracksData";

export class TopTracksUIMapper {
    toUITopTracksCell(data: TopTracksData) : LandingUITopTracksCell {
        return {
            tracks: data.tracks.track
        } as LandingUITopTracksCell;
    }
}