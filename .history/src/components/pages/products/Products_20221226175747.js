/** @format */

import React, { useState , useEffect } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { useParams } from "react-router-dom";


const data = [
  {
    LotId : '1' , 
    Product : 'Tomato' , 
    Grade  : 'Good' , 
    Quantity : '500' , 
    Location : 'Delhi' , 
    Ep : '5,000' , 
    Date : '12/02/2200' ,
    Status : 'Pending',
    TimeLeft : "2hour's"
  }
]


const Products = () => {
  const { role } = useParams();
  const [modalShow, setModalShow] = React.useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  // Serach Bar
  const [query, setQuery] = useState("");

  const handlerChange = (e) => {
    setQuery(e.target.value);
  };

  const filter = data.filter(
    (i) =>
      i?.user?.toLowerCase().includes(query?.toLowerCase()) ||
      i?.Mobile2?.toLowerCase().includes(query?.toLowerCase())
  );


  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg-down"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit Status
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <select style={{ border: "1px solid black", padding: "5px" }}>
              <option>Change Status</option>
              <option>Pending</option>
              <option>Complete</option>
            </select>
            <br />
            <Button
              variant="outline-success"
              style={{ marginTop: "1%", borderRadius: "0" }}
            >
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    );
  }

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            {role} Bids
          </span>
        </div>
      </section>

      {role === "Supplier" ? (
        <div
          style={{
            marginTop: "2%",
            overflow: "auto",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p style={{ color: "black", fontSize: "1.5rem" }}>{role} Bid </p>
            <input
              type="search"
              style={{
                width: "300px",
                border: "1px solid black",
                color: "black",
                padding: "5px",
                height: "40px",
                fontSize: "18px",
              }}
            />
          </div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Lot Id</th>
                <th>Product</th>
                <th>Grade</th>
                <th>Quantity</th>
                <th>Location</th>
                <th>Expected Price</th>
                <th>Date</th>
                <th>Seller Name</th>
                <th>Status</th>
                <th>Time Left</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Tomato</td>
                <td>Good</td>
                <td>500</td>
                <td>Delhi</td>
                <td>???50,000</td>
                <td>12/02/2022 </td>
                <td>Abhishek </td>
                <td>Pending </td>
                <td>5 hours </td>
                <td style={{ display: "flex", gap: "10px" }}>
                  <AiFillDelete color="red" cursor={"pointer"} />
                  <AiFillEdit
                    color="blue"
                    cursor={"pointer"}
                    onClick={() => setModalShow(true)}
                  />
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default HOC(Products);
