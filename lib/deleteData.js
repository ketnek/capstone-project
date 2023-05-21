export default async function deleteData(id) {
  try {
    const response = await fetch(`/api/routes/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      console.error("Bad Response");
    }
  } catch (error) {
    console.error("An Error occurred");
  }
}
