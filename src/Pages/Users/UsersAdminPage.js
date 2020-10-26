import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { UserAdminCard } from "../../Components/Cards";
import { users } from "../../Utils/Data";

const UsersAdminPage = () => {
  return (
    <div>
      <Container fluid>
        <Col>
          <Row>
            {users.map((user) => (
              <UserAdminCard id={user.id} user={user} />
            ))}
          </Row>
        </Col>
      </Container>
    </div>
  );
};

export default UsersAdminPage;
