import React from "react";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";

const crop = [
  {
    name : 'Ginger'
  },
  {
    name : 'Apple'
  },
  {
    name : 'carrot'
  },
  {
    name : 'Ginger'
  },
  {
    name : 'Ginger'
  },
  {
    name : 'Ginger'
  },
  {
    name : 'Ginger'
  },
  {
    name : 'Ginger'
  },
  {
    name : 'Ginger'
  },
  {
    name : 'Ginger'
  },
  {
    name : 'Ginger'
  },
]

const Inventory = () => {

  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Bookings
          </span>
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
            <th>User Name</th>
            <th>Comapny Name</th>
            <th>Phone No.</th>
            <th>Email</th>
            <th>Service Name</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>

        </tbody>
      </Table>
    </>
  );
};

export default HOC(Inventory);
