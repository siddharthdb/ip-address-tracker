import axios from "axios";
import { IPResult } from "../models";

export const getIPAddrDetails = async (ipaddr: string): Promise<IPResult | null>  => {
    const url = `https://geo.ipify.org/api/v2/country?apiKey=at_YNKeCskcDMJ5Zgcnh2JZszxqZEi8n&ipAddress=${ipaddr}`;

    const response = await axios.get(url);
    
    if (response.status === 200) {
        return response.data as IPResult;
    }

    return null;    
}