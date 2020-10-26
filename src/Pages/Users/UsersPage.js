import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { UserInfoCard } from "../../Components/Cards";
import { users } from "../../Utils/Data";

const UsersPage = () => {
  return (
    <div>
      <Container fluid>
        <Col>
          <Row>
            {users.map((user) => (
              <UserInfoCard key={user.id} {...user} />
            ))}
          </Row>
        </Col>
      </Container>
    </div>
  );
};

export default UsersPage;
