export interface LandingUITopTracksCell {
    readonly tracks: Tracks[]
}

export interface Tracks {
    readonly name: string
    readonly artist: Artist
    readonly duration: string
    readonly mbid: string
}

export interface Artist {
    name: string
    mbid: string
    url: string
}