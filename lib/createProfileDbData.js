export default function createProfileDbData(userInput, imageUrl) {
  const dbData = {
    userName: "Kevin Ketner",
    bikeName: userInput.bikeName,
    bikeType: userInput.type,
    bought: userInput.bought,
    mileage: userInput.mileage,
    lastService: userInput.lastService,
    profileImg: imageUrl,
  };
  return dbData;
}
