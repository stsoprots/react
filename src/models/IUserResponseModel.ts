import type IUser from "./IUser.ts";

export default interface IUserResponseModel {
    users: IUser[];
    total: number;
    skip: number;
    limit: number;
}