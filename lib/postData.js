export default async function postData(dbData) {
  try {
    const response = await fetch("/api/routes", {
      method: "POST",
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
