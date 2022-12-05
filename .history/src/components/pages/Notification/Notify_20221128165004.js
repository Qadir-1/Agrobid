/** @format */

import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import HOC from "../../layout/HOC";

const Notify = () => {
  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            Add Notification
          </span>
        </div>
      </section>

      <Container style={{ color: "black", marginTop: "2%", width: "800px" }}>
        <Form>


          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
   
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default HOC(Notify);
