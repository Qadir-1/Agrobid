/** @format */

import React from "react";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";
import { AiFillDelete } from "react-icons/ai";
import { Button, Form, Modal } from "react-bootstrap";

const crop = [
  {
    name: "Ginger",
  },
  {
    name: "Apple",
  },
  {
    name: "carrot",
  },
  {
    name: "Corn",
  },
  {
    name: "Peanut",
  },
  {
    name: "Wheat",
  },
  {
    name: "Rose",
  },
  {
    name: "Tomato",
  },
  {
    name: "Potato",
  },
  {
    name: "mango",
  },
  {
    name: "Veg",
  },
];

const Inventory = () => {

  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Bookings
          </span>
          <Button variant="outline-success">Add Crop</Button>
        </div>
      </section>

      <Table
        striped
        bordered
        hover
        style={{
          marginTop: "5%",
          scrollBehavior: "smooth",
          overflow: "scroll",
        }}
      >
        <thead>
          <tr>
            <th> Name</th>
            <th> Action</th>
          </tr>
        </thead>
        <tbody>
          {crop.map((i, index) => (
            <tr key={index}>
              <td> {i.name} </td>
              <td>
                <AiFillDelete color="red" cursor="pointer" />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default HOC(Inventory);
