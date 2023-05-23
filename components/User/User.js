import { ProfilePicture, UserName } from "./StyledUser";

export default function User() {
  return (
    <>
      <ProfilePicture
        src="https://res.cloudinary.com/my-capstone-project/image/upload/v1684829895/cndqt5vyxdlukbn40iin.jpg"
        alt="profile picture"
        width={175}
        height={175}
        priority={true}
      />
      <UserName>Kevin Ketner</UserName>
    </>
  );
}
