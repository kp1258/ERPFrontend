import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import UploadButton from "../Buttons/UploadButton";

const schema = yup.object().shape({
  name: yup.string().required("Nazwa jest wymagana"),
  dimensions: yup.string().required("Wymiary są wymagane"),
  category: yup
    .number()
    .positive("Wybór kategorii jest wymagany")
    .required("Wybór kategorii jest wymagany"),
});
const CreateStandardProductForm = () => {
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
              <Card.Header>
                Formularz tworzenia produktu standardowego
              </Card.Header>
              <Card.Body>
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <Form.Group>
                    <Form.Label>Nazwa</Form.Label>
                    <Form.Control
                      name="name"
                      type="text"
                      placeholder="Podaj nazwę produktu"
                      ref={register}
                    />
                    <div className="errorMessage">{errors.name?.message}</div>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Wymiary</Form.Label>
                    <Form.Control
                      name="dimensions"
                      type="text"
                      placeholder="Podaj wymiary produkty"
                      ref={register}
                    />
                    <div className="errorMessage">
                      {errors.dimensions?.message}
                    </div>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Kategoria</Form.Label>
                    <Form.Control name="category" as="select" ref={register}>
                      <option value={-1}>Wybierz kategorię</option>
                      <option value={1}>Nóż</option>
                    </Form.Control>
                    <div className="errorMessage">
                      {errors.category?.message}
                    </div>
                  </Form.Group>
                  <div className="mb-3">
                    {/* <Form.File id="formcheck-api-custom" custom>
                      <Form.File.Input isValid />
                      <Form.File.Label data-browse="Button text">
                        Zdjęcie produktu
                      </Form.File.Label>
                      <Form.Control.Feedback type="valid">
                        Poprawnie dodanu plik
                      </Form.Control.Feedback>
                    </Form.File> */}
                    <UploadButton limit={2} />
                  </div>
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

export default CreateStandardProductForm;
