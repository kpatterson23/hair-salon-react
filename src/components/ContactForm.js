// This component isn't being used, but keeping just in case.
// Was replaced with AppointmentCalender.js

import { Button, Label, Col, FormGroup, Container, Row } from "reactstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { validateContactForm } from "../utils/validateContactForm";

const ContactForm = () => {
  const handleSubmit = (values, { resetFrom }) => {
    console.log("form values:", values);
    console.log("in JSON format:", JSON.stringify(values));
    resetFrom();
  };

  return (
    <Container>
      {/* Title Section */}
      <Row>
        <Col className="py-5 text-center">
          <h1>Appointments</h1>
        </Col>
      </Row>
      {/* Booking Form */}
      <Row className="pb-5">
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            phoneNum: "",
            email: "",
            agree: false,
            contactType: "By Phone",
            additional: "",
          }}
          onSubmit={handleSubmit}
          validate={validateContactForm}
        >
          <Form>
            <FormGroup row>
              <Label htmlFor="firstName" md="2">
                First Name
              </Label>
              <Col md="10">
                <Field
                  name="firstName"
                  placeholder="First Name"
                  className="form-control"
                />
                <ErrorMessage name="firstName">
                  {(msg) => <p className="text-danger">{msg}</p>}
                </ErrorMessage>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor="lastName" md="2">
                Last Name
              </Label>
              <Col md="10">
                <Field
                  name="lastName"
                  placeholder="Last Name"
                  className="form-control"
                />
                <ErrorMessage name="lastName">
                  {(msg) => <p className="text-danger">{msg}</p>}
                </ErrorMessage>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor="phoneNum" md="2">
                Phone
              </Label>
              <Col md="10">
                <Field
                  name="phoneNum"
                  placeholder="Phone"
                  className="form-control"
                />
                <ErrorMessage name="phoneNum">
                  {(msg) => <p className="text-danger">{msg}</p>}
                </ErrorMessage>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor="email" md="2">
                Email
              </Label>
              <Col md="10">
                <Field
                  name="email"
                  placeholder="Email"
                  type="email"
                  className="form-control"
                />
                <ErrorMessage name="email">
                  {(msg) => <p className="text-danger">{msg}</p>}
                </ErrorMessage>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label check md={{ size: 4, offset: 2 }}>
                <Field
                  name="agree"
                  type="checkbox"
                  className="form-check-input"
                />{" "}
                May we contact you?
              </Label>
              <Col md="4">
                <Field name="contactType" as="select" className="form-control">
                  <option>By Phone</option>
                  <option>By Email</option>
                </Field>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor="additional" md="2">
                Additional Info About Your Appointment
              </Label>
              <Col md="10">
                <Field
                  name="additional"
                  as="textarea"
                  rows="12"
                  className="form-control"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md={{ size: 10, offset: 2 }}>
                <Button type="submit" color="dark" className="bg-lg">
                  Book Now
                </Button>
              </Col>
            </FormGroup>
          </Form>
        </Formik>
      </Row>
    </Container>
  );
};

export default ContactForm;
