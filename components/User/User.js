import {
  TBody,
  TProp,
  Table,
  TValue,
  UserName,
  TableHeadline,
  ProfilePicture,
} from "./StyledUser";

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
      <Table>
        <TableHeadline>
          <tr>
            <th>Bike Details</th>
          </tr>
        </TableHeadline>
        <TBody>
          <tr>
            <TProp>Bike Name:</TProp>
            <TValue>Cube Aim Allroad</TValue>
          </tr>
          <tr>
            <TProp>Type:</TProp>
            <TValue>Hardtail MTB</TValue>
          </tr>
          <tr>
            <TProp>Bought:</TProp>
            <TValue>April 2023</TValue>
          </tr>
          <tr>
            <TProp>Mileage:</TProp>
            <TValue>100km</TValue>
          </tr>
          <tr>
            <TProp>Last Service:</TProp>
            <TValue>4/20/2023</TValue>
          </tr>
        </TBody>
      </Table>
    </>
  );
}
