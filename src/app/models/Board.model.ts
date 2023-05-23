import { List } from "./List.model";
import { User } from "./User.model";
import { Card } from "./Card.model";
import { Colors } from "./colors.model";

export interface Board {
    id: string;
    title: string;
    backgroundColor: Colors;
    members: User[];
    lists: List[];
    cards: Card[];
}
