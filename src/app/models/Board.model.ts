import { User } from "./User.model";
import { Colors } from "./colors.model";

export interface Board {
    id: string;
    title: string;
    backgroundColor: Colors;
    members: User[];
}
