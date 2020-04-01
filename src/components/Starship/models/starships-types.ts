import { Starship } from "../../../global-models";


export interface SarshipProps {
    data: Starship
}

export interface StarshipState {
    hidden: boolean;
}

export type StarshipAllProps = SarshipProps 