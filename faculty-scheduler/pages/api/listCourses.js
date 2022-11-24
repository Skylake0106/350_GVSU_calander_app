import { connectToDatabase } from "../../lib/mongodb";

export default async function handler(request, response) {
    
    // Connect to MongoDB
    const { database } = await connectToDatabase();
    const collection = database.collection("Courses");

    // Get first 20 courses from MongoDB
    // insert any query parameters into the find() function
    const results = await collection.find({})
    .toArray();
    
    // Return the array of courses as JSON
    response.status(200).json(results);

}