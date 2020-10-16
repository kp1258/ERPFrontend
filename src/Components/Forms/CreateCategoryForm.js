import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

const schema = yup.object().shape({
  name: yup.string().required("Nazwa kategorii jest wymagana"),
});
const CreateCategoryForm = () => {
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
              <Card.Header>Formularz dodawania kategorii produktów</Card.Header>
              <Card.Body>
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <Form.Group>
                    <Form.Label>Nazwa kategorii</Form.Label>
                    <Form.Control
                      name="name"
                      type="text"
                      placeholder="Podaj nazwę kategorii"
                      ref={register}
                    />
                    <div className="errorMessage">{errors.name?.message}</div>
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

export default CreateCategoryForm;
