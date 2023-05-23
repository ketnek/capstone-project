export default async function patchData(dbData, id) {
  try {
    const response = await fetch(`/api/routes/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dbData),
    });

    if (!response.ok) {
      console.error("Bad Response");
    }
  } catch (error) {
    console.error("An Error occurred");
  }
}
