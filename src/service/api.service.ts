import type {IReqResInResponse} from "../models/IReqResinResponse.ts";

const API_KEY = "pub_7e3dce3410c164b65ae4e57e17e00a2ebc71a7280640dc70c86501e12a94beb7"



export const getAllUsers = async (pg: string = '1'): Promise<IReqResInResponse> => {
    const response = await fetch(`https://reqres.in/api/users?page=${pg}`, {
        headers: {
            'x-api-key': API_KEY
        }
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
};