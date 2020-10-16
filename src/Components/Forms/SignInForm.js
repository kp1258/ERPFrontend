import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import "./index.css";

const schema = yup.object().shape({
  login: yup.string().required("Login jest wymagany"),
  password: yup.string().required("Hasło jest wymagane"),
});

const SignInForm = () => {
  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <Container>
      <div class="d-flex justify-content-center">
        <Row>
          <Col>
            <Card>
              <Card.Header>Formularz logowania</Card.Header>
              <Card.Body>
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <Form.Group>
                    <Form.Label>Login</Form.Label>
                    <Form.Control
                      name="login"
                      type="text"
                      placeholder="Podaj login"
                      ref={register}
                    />
                    <div className="errorMessage">{errors.login?.message}</div>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Hasło</Form.Label>
                    <Form.Control
                      name="password"
                      type="password"
                      placeholder="Podaj hasło"
                      ref={register}
                    />
                    <div className="errorMessage">
                      {errors.password?.message}
                    </div>
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Zaloguj
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default SignInForm;
