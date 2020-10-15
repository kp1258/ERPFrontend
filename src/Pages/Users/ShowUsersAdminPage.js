import React from "react";
import UserInfoCard from "../../Components/Cards/UserInfoCard";
var users = [
  {
    id: 1,
    firstName: "Jan",
    lastName: "Kowalski",
    phoneNumber: "604134935",
    e_mail: "jan_kowalski@email.com",
    role: "Administrator",
    status: "Active",
  },
  {
    id: 2,
    firstName: "Anna",
    lastName: "Nowak",
    phoneNumber: "604134935",
    e_mail: "jan_kowalski@email.com",
    role: "Salesman",
    status: "Active",
  },
];
const ShowUsersAdminPage = () => {
  return (
    <div>
      {users.map((user) => (
        <UserInfoCard {...user} />
      ))}
    </div>
  );
};

export default ShowUsersAdminPage;
