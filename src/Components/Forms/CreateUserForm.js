import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Form,
  FormControl,
  FormGroup,
  Card,
  Button,
  Col,
  Row,
  Container,
} from "react-bootstrap";
import "./index.css";

const schema = yup.object().shape({
  firstName: yup.string().required("Imie jest wymagane"),
  lastName: yup.string().required("Nazwisko jest wymagane"),
  login: yup.string().required("Login jest wymagany"),
  password: yup.string().required("Hasło jest wymagane"),
  phoneNumber: yup.string().required("Numer telefonu jest wymagany"),
  eMail: yup
    .string()
    .email("Niepoprawny adres E-Mail")
    .required("E-Mail jest wymagany"),
  role: yup
    .number()
    .positive("Wybór stanowiska jest wymagany")
    .required("Wybór stanowiska jest wymagany"),
});

const CreateUserForm = () => {
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
              <Card.Header>Formularz tworzenia pracownika</Card.Header>
              <Card.Body>
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <Form.Row>
                    <Col>
                      <Form.Group>
                        <Form.Label>Imię</Form.Label>
                        <Form.Control
                          name="firstName"
                          type="text"
                          placeholder="Podaj imię"
                          ref={register}
                        />
                        <div className="errorMessage">
                          {errors.firstName?.message}
                        </div>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group>
                        <Form.Label>Nazwisko</Form.Label>
                        <Form.Control
                          name="lastName"
                          type="text"
                          placeholder="Podaj nazwisko"
                          ref={register}
                        />
                        <div className="errorMessage">
                          {errors.lastName?.message}
                        </div>
                      </Form.Group>
                    </Col>
                  </Form.Row>
                  <Form.Row>
                    <Col>
                      <Form.Group>
                        <Form.Label>Login</Form.Label>
                        <Form.Control
                          name="login"
                          type="text"
                          placeholder="Podaj login"
                          ref={register}
                        />
                        <div className="errorMessage">
                          {errors.login?.message}
                        </div>
                      </Form.Group>
                    </Col>
                    <Col>
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
                    </Col>
                  </Form.Row>

                  <Form.Group>
                    <Form.Label>Numer telefonu</Form.Label>
                    <Form.Control
                      name="phoneNumber"
                      type="text"
                      placeholder="Podaj numer telefonu"
                      ref={register}
                    />
                    <div className="errorMessage">
                      {errors.phoneNumber?.message}
                    </div>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Adres E-Mail</Form.Label>
                    <Form.Control
                      name="eMail"
                      type="text"
                      placeholder="Podaj adres E-Mail"
                      ref={register}
                    />
                    <div className="errorMessage">{errors.eMail?.message}</div>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Stanowisko</Form.Label>
                    <Form.Control name="role" as="select" ref={register}>
                      <option value={-1}>Wybierz stanowisko</option>
                      <option value={1}>Administrator</option>
                    </Form.Control>
                    <div className="errorMessage">{errors.role?.message}</div>
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Dodaj
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

export default CreateUserForm;
