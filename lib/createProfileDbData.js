export default function createProfileDbData(userInput, imageUrl) {
  const { bikeName, bikeType, bought, mileage, lastService } = userInput;

  const dbData = {
    userName: "Kevin Ketner",
    bikeName,
    bikeType,
    bought,
    mileage,
    lastService,
    profileImg: imageUrl,
  };
  return dbData;
}
