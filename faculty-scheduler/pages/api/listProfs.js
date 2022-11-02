import { connectToDatabase } from "../../lib/mongodb";

export default async function handler(request, response) {
    
    // Connect to MongoDB
    const { database } = await connectToDatabase();
    const collection = database.collection("Professors");

    // Get all of the professors from MongoDB
    // insert any query parameters into the find() function
    const results = await collection.find({})
    .toArray();
    
    // Return the array of professors as JSON
    response.status(200).json(results);

}