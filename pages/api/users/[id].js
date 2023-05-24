import dbConnect from "@/db/connect";
import Profile from "@/db/models/Profile";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "PATCH") {
    try {
      await Profile.findByIdAndUpdate(id, {
        $set: request.body,
      });
      response.status(200).json({ status: `Route ${id} updated!` });
    } catch (error) {
      console.error(error);
      response.status(400).json({ error: error.message });
    }
  }
}
