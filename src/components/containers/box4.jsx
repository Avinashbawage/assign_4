import React from "react";

const Box4 = ({ notification }) => {
  return (
    <div className="box4">
      <label htmlFor="">Notification List</label>

      {notification.map((item) => {
        return (
          <div className="d-flex">
            <img
              src={item.pic}
              alt=""
              srcset=""
              width={80}
              height={80}
              // style={{ borderRadius: "50px" }}
            />
            <div>
              <p>{item.message}</p>
              <p>{item.time} ago.</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Box4;
