import { db } from "../db.connection.js"
import { nanoid } from "nanoid"

export const urlShortenController = async (req, res) =>{
    const {value} = res.locals.data
    const shortId = nanoid(8)
    try {
        await db.query(`INSERT INTO urls (shortUrl, url) VALUES ($1, $2)`, [shortId, value])
        res.send(typeof(shortId))
    } catch (error) {
        res.send(error)
    }
}