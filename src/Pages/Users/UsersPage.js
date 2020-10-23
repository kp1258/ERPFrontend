import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { UserInfoCard } from "../../Components/Cards";
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
const UsersPage = () => {
  return (
    <div>
      <Container fluid>
        <Col>
          <Row>
            {users.map((user) => (
              <UserInfoCard id={user.id} {...user} />
            ))}
          </Row>
        </Col>
      </Container>
    </div>
  );
};

export default UsersPage;
