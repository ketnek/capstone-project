import dbConnect from "@/db/connect";
import Route from "@/db/models/Route";

export default async function handler(request, response) {
  await dbConnect();
  if (request.method === "POST") {
    try {
      const routeData = request.body;
      await Route.create(routeData);

      response.status(201).json({ status: "Route created" });
    } catch (error) {
      console.log(error);
      response.status(400).json({ error: error.message });
    }
  }
}
