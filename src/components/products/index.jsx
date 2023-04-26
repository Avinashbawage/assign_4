import React, { useState, useEffect } from "react";
import "./index.scss";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  delMyStateCategory,
  delMyStateProduct,
  getProductsSuccess,
  getcategorySuccess,
} from "../../store/store";

const Delete = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-trash"
      viewBox="0 0 16 16"
    >
      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
      <path
        fillRule="evenodd"
        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
      />
    </svg>
  );
};

const Productcontainers = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedItems, setSelectedItems] = useState([]);

  const allproducts = useSelector((state) => state?.products);
  const category = useSelector((state) => state?.category);

  // On load Render
  useEffect(() => {
    if (!allproducts?.length) {
      axios
        .get("https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json")
        .then((response) => {
          let apidata = response?.data?.productsPage;
          dispatch(getProductsSuccess(apidata?.products));
          dispatch(getcategorySuccess(apidata?.categories));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  const handleCheckboxChange = (index) => {
    // Get the checkbox element by ID
    const checkbox = document.getElementById(`checkbox-${index}`);

    console.log("checkbox", checkbox);

    // Check if the checkbox is checked
    if (checkbox.checked) {
      // Add the item to selectedItems state
      setSelectedItems([...selectedItems, index]);
    } else {
      // Remove the item from selectedItems state
      setSelectedItems(selectedItems.filter((item) => item !== index));
    }
  };

  const deleteSelected = () => {
    // Create a copy of allproducts state
    const updatedProducts = [...allproducts];

    // Remove the selected items from the copy of allproducts state
    selectedItems
      .sort((a, b) => b - a)
      .forEach((index) => {
        updatedProducts.splice(index, 1);
      });

    // Update the allproducts state with the updated copy
    dispatch(delMyStateProduct(updatedProducts));

    // Clear the selectedItems state
    setSelectedItems([]);
  };

  // handle delte products
  const handleDelete = (index) => {
    const selectedProducts = allproducts[index];
    const filteredItems1 = allproducts.filter(function (item) {
      return item !== selectedProducts;
    });

    dispatch(delMyStateProduct(filteredItems1));
  };

  // delete the category items
  const handleDeleteCategory = (index) => {
    const selectedProducts = category[index];
    const filteredItems1 = category.filter(function (item) {
      return item !== selectedProducts;
    });

    dispatch(delMyStateCategory(filteredItems1));
  };

  // handleRowSelect

  /*   const handleRowSelect = (index) => {
    console.log("first", index);
  };
 */

  // navigate on click
  const handleclick = () => {
    navigate("/addproducts");
  };

  return (
    <div className="d-flex maincontainer">
      <div className="container_left">
        <table className="table text-light">
          <thead>
            <tr>
              <th scope="col">SL.NO.</th>
              <th scope="col">PRODUCT NAME</th>
              <th scope="col">UNIT SOLD</th>
              <th scope="col">IN STOCK</th>
              <th scope="col">EXPIRE DATE</th>
              <th scope="col">DEL</th>
            </tr>
          </thead>

          <tbody className="text-light">
            {allproducts && allproducts?.length
              ? allproducts.map((item, index) => {
                  return (
                    <tr className="text-light" key={item.name} id={index}>
                      <th>
                        <input
                          type="checkbox"
                          id={`checkbox-${index}`}
                          name="scales"
                          onChange={() => handleCheckboxChange(index)}
                        />
                      </th>
                      <th scope="row">{item.name}</th>
                      <td>{item.unitSold}</td>
                      <td>{item.stock}</td>
                      <td>{item.expireDate}</td>
                      <td
                        className="delete_icon"
                        onClick={() => handleDelete(index)}
                      >
                        <Delete />
                      </td>
                    </tr>
                  );
                })
              : null}
          </tbody>
        </table>
        <button className="w-25" onClick={() => handleclick()}>
          Add new product
        </button>
        <br />
        <br />
        <button className="btn btn-danger mt-3" onClick={deleteSelected}>
          Delete Selected
        </button>
        <br />
        <br />
      </div>

      {/* Product Categories */}
      <div className="container_right">
        <table className="table text-light">
          <thead>
            <tr>
              <th scope="col">Product Categories</th>
            </tr>
          </thead>
          <tbody className="text-light border-1">
            {category && category?.length
              ? category.map((item, index) => {
                  return (
                    <tr className="text-light">
                      <th scope="row d-flex">
                        {item}
                        <div onClick={() => handleDeleteCategory(index)}>
                          <Delete />
                        </div>
                      </th>
                    </tr>
                  );
                })
              : null}
          </tbody>
        </table>
        {/* Add New Product */}
        <button>Add new product</button>
      </div>
    </div>
  );
};

export default Productcontainers;
