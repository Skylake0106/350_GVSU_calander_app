import { connectToDatabase } from "../../lib/mongodb";

export default async function handler(request, response) {
    
    const { database } = await connectToDatabase();
    const collection = database.collection("Professors");

    const results = await collection.find({})
    .toArray();
    
    response.status(200).json(results);

}