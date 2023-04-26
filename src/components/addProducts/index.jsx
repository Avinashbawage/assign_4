import React, { useState } from "react";
import { connect } from "react-redux";
import { updateMyState } from "../../store/store";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import ImageUploader from "./uploadImage";

const AddProducts = ({ myStatedata, updateMyState }) => {
  const [myState, setmyState] = useState({
    id: "",
    name: "",
    description: "",
    category: "",
    expirydate: "",
    stock: null,
    uploadFile: "",
    unitSold: "",
  });

  const [allproducts, setallproducts] = useState([]);
  const navigate = useNavigate();

  // Create an action creator
  const addprducts = () => {
    // allproducts.push(myState);
    // setallproducts((prev) => [...prev, myState]);
    updateMyState(myState);
    setmyState({
      id: "",
      name: "",
      description: "",
      category: "",
      expirydate: "",
      stock: null,
      uploadFile: "",
    });

    document.getElementById("name").value = "";
    document.getElementById("category").value = "";
    document.getElementById("stock").value = "";
    document.getElementById("myFile").value = "";

    navigate("/products");
  };

  return (
    <div className="container">
      <div className="row">
        <h5 class="tm-block-title d-inline-block justify-content-lg-start">
          Add Product
        </h5>
        <div className="d-flex justify-content-between">
          <div className="leftcontainer col-6">
            <div class="form-group mb-3" className="text-left">
              <label for="name">Product Name</label>
              <input
                id="name"
                name="name"
                type="text"
                className="form-control validate"
                onChange={(e) =>
                  setmyState((prevState) => ({
                    ...prevState,
                    name: e.target.value,
                  }))
                }
                required=""
              />
            </div>
            <br />
            <div className="d-flex flex-column">
              <label for="name" className="text-left">
                Description
              </label>
              <textarea
                name=""
                id=""
                cols="30"
                rows="6"
                onChange={(e) =>
                  setmyState((prevState) => ({
                    ...prevState,
                    description: e.target.value,
                  }))
                }
              ></textarea>
            </div>
            <br />
            <div className="d-flex ">
              <label for="name"> Category</label>
              &nbsp;&nbsp;
              <select
                name="category"
                id="category"
                value={myState.category} // Set the value to the state value, not e.target.value
                onChange={(e) =>
                  setmyState((prevState) => ({
                    ...prevState,
                    category: e.target.value,
                  }))
                }
              >
                <option value="">Category</option>
                <option value="New Arrival">New Arrival</option>
                <option value="Most Popular">Most Popular</option>
                <option value="Trending">Trending</option>
              </select>
            </div>
            <br />

            <div className="text-left">
              <label for="name" className="">
                Expire Date
              </label>
              &nbsp;&nbsp;
              <input
                type="date"
                id="start"
                name="trip-start"
                value="2018-07-22"
                min="2018-01-01"
                max="2018-12-31"
              />
            </div>
            <br />
            <div className="text-left">
              <label htmlFor="stock">Stocks:</label>
              <input
                id="stock"
                name="stock"
                type="number"
                className="form-control validate"
                onChange={(e) =>
                  setmyState((prevState) => ({
                    ...prevState,
                    stock: e.target.value,
                  }))
                }
              />
            </div>
          </div>

          <div className="rightcontainer">
            <div class=" ">
              <input
                type="file"
                id="myFile"
                name="filename"
                className="uploadfile"
                onChange={(e) =>
                  setmyState((prevState) => ({
                    ...prevState,
                    uploadFile: e.target.value,
                  }))
                }
              />
              <br />
              <br />
              <input type="submit" className="submit" />
            </div>
          </div>
        </div>
        {/* <div>{[myStatedata]}</div> */}
        <button className="mt-2" onClick={() => addprducts()}>
          Add Product Now
        </button>
        {/* <button onClick={() => updateMyState(allproducts)} className="mt-2">
          Click Here
        </button> */}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myStatedata: state.myState,
  };
};

// Define mapDispatchToProps to map the action dispatchers to props
const mapDispatchToProps = (dispatch) => {
  return {
    updateMyState: (myStatedata) => {
      dispatch(updateMyState(myStatedata));
    },
  };
};

// export default AddProducts;
export default connect(mapStateToProps, mapDispatchToProps)(AddProducts);
