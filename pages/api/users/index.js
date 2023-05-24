import dbConnect from "@/db/connect";
import Profile from "@/db/models/Profile";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    try {
      const profiles = await Profile.find();
      return response.status(200).json(profiles);
    } catch (error) {
      console.error(error);
      response.status(400).json({ error: error.message });
    }
  }
}
