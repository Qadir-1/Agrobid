import React from "react";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";

const Discount = () => {


  return (
    <>
      {" "}
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Carts
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
            <th>UserName</th>
            <th>Company Name</th>
            <th>Pgone Number</th>
            <th> Email </th>
            <th> Service Name </th>
            <th> Service Price </th>
            <th> Total Price </th>
          </tr>
        </thead>
        <tbody>
          {data?.data?.map((i, index) => (
            <tr key={index}>
              <td>{i?.user?.Name}</td>
              <td>{i?.user?.companyName}</td>
              <td>{i?.user?.phoneNumber}</td>
              <td>{i?.user?.companyEmail}</td>
              <td>
                {i?.services?.map((i, index) => (
                  <ul key={index}>
                    <li style={{listStyleType : 'circle'}}> {i?.serviceId?.name}  </li>
                  </ul>
                ))}
              </td>
              <td>
                {i?.services?.map((i, index) => (
                  <ul key={index}>
                    <li style={{listStyleType : 'square'}}> {i?.serviceId?.price}  </li>
                  </ul>
                ))}
              </td>
              <td>
              ₹{i.totalPrice}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default HOC(Discount);
