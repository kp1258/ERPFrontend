import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import UserAdminCard from "../../Components/Cards/UserAdminCard";
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
      <Container fluid>
        <Col>
          <Row>
            {users.map((user) => (
              <UserAdminCard id={user.id} {...user} />
            ))}
          </Row>
        </Col>
      </Container>
    </div>
  );
};

export default ShowUsersAdminPage;
