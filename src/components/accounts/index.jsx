import React, { useEffect, useState } from "react";
import "./index.scss";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Accounts = () => {
  const [admin, setadmin] = useState({
    name: "",
    accountemail: "",
    password: "",
    re_password: "",
    phone: "",
    upload: "",
  });

  const [selectedValue, setSelectedValue] = useState("");
  const [modeltrue, setmodeltrue] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSelectChange = (event) => {
    const selectedOption = event.target.value;
    console.log("selectedOption", selectedOption);
    setSelectedValue(selectedOption);
    localStorage.setItem(selectedOption, JSON.stringify(admin)); // Store as string
  };

  useEffect(() => {
    let selectedOption = "";
    const storedOption = localStorage.getItem(selectedOption);
    if (storedOption) {
      setSelectedValue(storedOption);
      console.log("storedOption", storedOption);
      setadmin(JSON.parse(localStorage.getItem(storedOption))); // Parse the string to JSON
    }
  }, [admin]);

  // update the data
  const updatedata = () => {
    setadmin(admin);
    handleShow();
    setmodeltrue(!modeltrue);

    document.getElementById("name").value = "";
    document.getElementById("accountemail").value = "";
    document.getElementById("password").value = "";
    document.getElementById("re_password").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("upload").value = "";
  };

  return (
    <div className="container">
      <div className="row firstrow">
        <h5 class="tm-block-title d-inline-block justify-content-lg-start">
          List of Accounts
        </h5>
        <div className="d-flex justify-content-between ">
          <div className="leftcontainer">
            <div class="form-group mb-3" className="text-left ">
              <label for="name" className="">
                Accounts
              </label>
              <br />
              <select value={selectedValue} onChange={handleSelectChange}>
                <option value="">Select an option</option>
                <option value="admin">Admin</option>
                <option value="editor">Editor</option>
                <option value={"Merchant"}>Merchant</option>
                <option value={"Customer"}>Customer</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-between border-1">
        <div className="avatarcard text-lg-start">
          <div className="avatar text-lg-start">Change Avatar</div>

          <input
            id="upload"
            type="file"
            className="uploadfile"
            value={admin?.upload}
          />

          <button className="mt-2 text-lg-start"> Upload New Photo</button>
        </div>

        <div className="accountsettings">
          <label htmlFor="">Account Settings</label>
          <div className="d-flex justify-content-lg-between ">
            <div className="d-flex flex-column">
              <label htmlFor="">Account Name</label>
              <input
                id="name"
                type="text"
                className="inputfields"
                value={admin?.name}
                onChange={(e) =>
                  setadmin((prevState) => ({
                    ...prevState,
                    name: e.target.value,
                  }))
                }
              />
            </div>
            <div className="d-flex flex-column text-right">
              <label htmlFor="">Account Email</label>
              <input
                id="accountemail"
                type="email"
                className="inputfields"
                value={admin?.accountemail}
                onChange={(e) =>
                  setadmin((prevState) => ({
                    ...prevState,
                    accountemail: e.target.value,
                  }))
                }
              />
            </div>
          </div>
          <div className="d-flex justify-content-lg-between ">
            <div className="d-flex flex-column">
              <label htmlFor="">Password</label>
              <input
                id="password"
                type="password"
                className="inputfields"
                value={admin?.password}
                onChange={(e) =>
                  setadmin((prevState) => ({
                    ...prevState,
                    password: e.target.value,
                  }))
                }
              />
            </div>
            <div className="d-flex flex-column ">
              <label htmlFor="">Re-enter Password</label>
              <input
                id="re_password"
                className="inputfields"
                value={admin?.re_password}
                type="password"
                onChange={(e) =>
                  setadmin((prevState) => ({
                    ...prevState,
                    re_password: e.target.value,
                  }))
                }
              />
            </div>
          </div>
          <div className="d-flex justify-content-lg-between text-right ">
            <div className="d-flex flex-column">
              <label htmlFor="">Phone</label>
              <input
                id="phone"
                className="inputfields"
                value={admin?.phone}
                type="number"
                onChange={(e) => (prevState) => ({
                  ...prevState,
                  phone: e.target.value,
                })}
              />
            </div>
            <div className="d-flex flex-column">
              <button
                className="btn btn-primary btn-sm mt-4"
                onClick={updatedata}
              >
                UPDATE YOUR PROFILE
              </button>

              <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered={true}
              >
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <h3 className="mt-4">Success</h3>
                  <div>
                    <img src="success.png" width={"180px"} />
                  </div>
                  <Button variant="secondary" onClick={handleClose}>
                    <div className="text-centre">Close</div>
                  </Button>
                </div>
                <br />
                {/* </Modal.Footer> */}
              </Modal>
            </div>
          </div>
          <button className="mt-4 w-100">Delete Your Account</button>
        </div>
      </div>
    </div>
  );
};

export default Accounts;
