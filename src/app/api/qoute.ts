import { NextApiRequest, NextApiResponse } from "next";

export default async function quoteHandler(req:NextApiRequest,res:NextApiResponse) {
    try {
        const response = await fetch("https://programming-quotesapi.vercel.app/api/random");
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch quote" });
    }
}
