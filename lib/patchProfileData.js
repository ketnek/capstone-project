export default async function patchProfileData(dbData, id) {
  try {
    const response = await fetch(`/api/users/${id}`, {
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
