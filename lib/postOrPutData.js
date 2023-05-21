export default async function postOrPutData(dbData, method) {
  try {
    const response = await fetch("/api/routes", {
      method: method,
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
