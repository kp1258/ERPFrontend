import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";

const schema = yup.object().shape({
  name: yup.string().required("Nazwa materiału jest wymagana"),
});
const EditMaterialForm = (props) => {
  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      id: props.material.id,
      name: props.material.name,
    },
  });
  const onSubmit = (data) => {
    console.log(data);
    reset();
    props.changeVisibility();
  };
  return (
    <Container>
      <div class="d-flex justify-content-center">
        <Row>
          <Col>
            <Card>
              <Card.Header>Formularz edycji materiału</Card.Header>
              <Card.Body>
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <Form.Group>
                    <Form.Label>Nazwa</Form.Label>
                    <Form.Control
                      name="name"
                      type="text"
                      placeholder="Podaj nazwę materiału"
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

export default EditMaterialForm;
