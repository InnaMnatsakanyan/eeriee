import {ArtistData} from "../../../data/model/ArtistData";
import {LandingUITopArtistCell} from "../landing/model/LandingUITopArtistCell";

export class TopArtistUIMapper {
    toUIArtistCell(data: ArtistData) : LandingUITopArtistCell {
        return {
            name: data.artists.artist[0].name,
            image: data.artists.artist[0].image[3]["#text"]
        } as LandingUITopArtistCell;
    }
}