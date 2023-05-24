import {
  TBody,
  TProp,
  Table,
  TValue,
  UserName,
  TableHeadline,
  ProfilePicture,
} from "./StyledUser";

export default function User({ profiles, refetchProfiles }) {
  const { profileImg, userName, bikeName, type, bought, mileage, lastService } =
    profiles[0];

  return (
    <>
      <ProfilePicture
        src={profileImg}
        alt="profile picture"
        width={175}
        height={175}
        priority={true}
      />
      <UserName>{userName}</UserName>
      <Table>
        <TableHeadline>
          <tr>
            <th>Bike Details</th>
          </tr>
        </TableHeadline>
        <TBody>
          <tr>
            <TProp>Bike Name:</TProp>
            <TValue>{bikeName}</TValue>
          </tr>
          <tr>
            <TProp>Type:</TProp>
            <TValue>{type}</TValue>
          </tr>
          <tr>
            <TProp>Bought:</TProp>
            <TValue>{bought}</TValue>
          </tr>
          <tr>
            <TProp>Mileage:</TProp>
            <TValue>{mileage}</TValue>
          </tr>
          <tr>
            <TProp>Last Service:</TProp>
            <TValue>{lastService}</TValue>
          </tr>
        </TBody>
      </Table>
    </>
  );
}
