import React from "react";

const Box5 = ({ orderslists }) => {
  return (
    <div>
      <div className="box5">
        <label className="orderlist"> Orders List</label>
        <div className="text-light">
          <table class="table text-light">
            <thead>
              <tr>
                <th scope="col">ORDER NO.</th>
                <th scope="col">STATUS</th>
                <th scope="col">LOCATION</th>
                <th scope="col">DISTANCE</th>
                <th scope="col">START DATE</th>
                <th scope="col">EST DELIVERY DUE</th>
              </tr>
            </thead>
            <tbody className="text-light">
              {orderslists.map((items) => {
                return (
                  <tr className="text-light">
                    <th scope="row">{items.orderNo}</th>
                    <th scope="row">{items.status}</th>
                    <th scope="row">{items.location}</th>
                    <th scope="row">{items.distance}</th>
                    <th scope="row">{items.startDate}</th>
                    <th scope="row">{items.deliveryDate}</th>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Box5;
