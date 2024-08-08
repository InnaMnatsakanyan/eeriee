import {Image} from "../../../../../client/src/data/model/TrackData";

export interface LandingUITrackInfoCell {
    readonly name: string
    readonly duration: string
    readonly url: string
    readonly artistName: string
    readonly albumTitle: string
    readonly albumImage: Image
}