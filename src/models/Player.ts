import { Card } from "./card";

export class Player {
    // todo: some sort of identifier
    name: string;
    cards: Array<Card>;
    points: number;
    // todo:
    hands: Array<Card>;
}
