import { UserType } from "./user.types";

export type LoginResponseType = {
    accessToken: string;
    user: UserType
}