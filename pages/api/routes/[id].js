import dbConnect from "@/db/connect";
import Route from "@/db/models/Route";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    try {
      const route = await Route.findById(id);
      response.status(200).json(route);
    } catch (error) {
      console.error(error);
      response.status(400).json({ error: error.message });
    }
  }

  if (request.method === "PATCH") {
    console.log("TEST");
    try {
      await Route.findByIdAndUpdate(id, {
        $set: request.body,
      });
      response.status(200).json({ status: `Route ${id} updated!` });
    } catch (error) {
      console.error(error);
      response.status(400).json({ error: error.message });
    }
  }

  if (request.method === "DELETE") {
    try {
      await Route.findByIdAndDelete(id);
      response.status(200).json({ status: `Route ${id} deleted!` });
    } catch (error) {
      console.error(error);
      response.status(400).json({ error: error.message });
    }
  }
}
