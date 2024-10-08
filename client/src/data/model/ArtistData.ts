export interface ArtistData {
    artists: Artists
}

export interface Artists {
    artist: Artist[]
    "@attr": Attr
}

export interface Artist {
    name: string
    playcount: string
    listeners: string
    mbid: string
    url: string
    streamable: string
    image: Image[]
}

export interface Image {
    "#text": string
    size: string
}

export interface Attr {
    page: string
    perPage: string
    totalPages: string
    total: string
}
