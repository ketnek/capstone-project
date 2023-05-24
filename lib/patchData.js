export default async function patchData(dbData, url, id) {
  try {
    const response = await fetch(`${url}${id}`, {
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
