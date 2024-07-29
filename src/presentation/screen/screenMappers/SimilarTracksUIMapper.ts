import {TracksData} from "../../../data/model/TracksData";
import {SearchUISimilarTrackCell} from "../search/model/SearchUISimilarTrackCell";

export class SimilarTracksUIMapper {
    toUISimilarTrackCell(data: TracksData) : SearchUISimilarTrackCell {
        return {
            tracks: data.results.trackmatches.track
        } as SearchUISimilarTrackCell;
    }
}