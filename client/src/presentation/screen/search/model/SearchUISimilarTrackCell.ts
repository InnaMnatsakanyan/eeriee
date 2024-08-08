export interface SearchUISimilarTrackCell {
    readonly tracks: SimilarTracks[]
}

export interface SimilarTracks {
    readonly name: string
    readonly artist: string
    readonly mbid: string
}