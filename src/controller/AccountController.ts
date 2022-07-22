import { Request, Response } from "express";

export async function getBalance(req:Request,res:Response){
    res.send('My Wallet Address - 0xfe94A38BC902A9E094F2a3bE369F33eEe6E57e60');
}