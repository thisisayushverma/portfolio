import {  NextApiRequest, NextApiResponse } from "next";

export async function GET(req:NextApiRequest,res:NextApiResponse) {
    try {
        const response = await fetch("https://programming-quotesapi.vercel.app/api/random");
        const data = await response.text();
        console.log(data);
        
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        
        res.status(500).json({ error: "Failed to fetch quote" });
    }
}
