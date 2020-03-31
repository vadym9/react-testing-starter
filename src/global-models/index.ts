export interface Episode {
    episode_id: number;
    title: string;
    title_japanese: string;
    title_romanji: string;
    aired: string;
    filler: boolean;
    recap: boolean;
    video_url: string;
    forum_url: string;
}

export interface People {
    name: string
    height: number
    mass: number
    hair_color: string
    skin_color: string
    eye_color: string
    birth_year: string
    gender: string
    homeworld: string
    films: string[]
    species: string[]
    vehicles: string[]
    starships: string[]
    created: string
    edited: string
    url: string
}

export interface PeopleCard {
    name: string
    gender: string
    height: number
    mass: number
    eye_color: string
    img: string
}

export interface Starship {
    name: string,
    model: string,
    manufacturer: string,
    cost_in_credits: number,
    length: number,
    max_atmosphering_speed: string,
    crew: number,
    passengers: number,
    cargo_capacity: number,
    consumables: number,
    hyperdrive_rating: number,
    MGLT: number,
    starship_class: number,
    pilots: [],
    films: string[],
    created: string,
    edited: string,
    url: string
}

export interface ResponseStarship {
    count: number;
    next: string;
    previous: string;
    results: Starship[]
}