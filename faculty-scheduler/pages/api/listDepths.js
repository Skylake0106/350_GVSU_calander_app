import { connectToDatabase } from "../../lib/mongodb";

export default async function handler(request, response) {
    
    // Connect to MongoDB
    const { database } = await connectToDatabase();
    const depths = database.collection("Depth");
    const professors = database.collection("Professors")

    // Get all of the professors from MongoDB
    // insert any query parameters into the find() function
    //find depths by professor and return for the professors page, currently grabs all classes where Zachary Kurmas has a depth of 1
    const results = await depths.find({Kurmas: 1})
    .toArray();

    // Return the array of professors as JSON
    response.status(200).json(results);
}