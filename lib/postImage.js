export default async function postImage(imageData) {
  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDNAME}/upload`,
      {
        method: "POST",
        body: imageData,
      }
    );
    const json = await response.json();
    const imageUrl = json.secure_url;

    if (!response.ok) {
      console.error("Bad Response from Cloudinary");
    }
    return imageUrl;
  } catch (error) {
    console.error("An Cloudinary Error occurred");
  }
}
