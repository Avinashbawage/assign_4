// store.js
import { legacy_createStore as createStore } from "redux";

// Initial state
const initialState = {
  products: [],
  category: [],
};

export const getProductsSuccess = (products) => ({
  type: "GET_PRODUCTS_SUCCESS",
  payload: products,
});

export const updateMyState = (products) => ({
  type: "UPDATE_MY_STATE",
  payload: products,
});

export const delMyStateProduct = (delproduct) => ({
  type: "DELETE_STATE_PROD",
  payload: delproduct,
});

export const getcategorySuccess = (category) => ({
  type: "GET_PRODUCTS_CATEGORY",
  payload: category,
});

export const delMyStateCategory = (category) => ({
  type: "DEL_PRODUCTS_CATEGORY",
  payload: category,
});

// Reducer function
const counterReducer = (state = initialState, action) => {
  console.log("action", action);
  switch (action.type) {
    case "GET_PRODUCTS_SUCCESS":
      return {
        ...state,
        products: action.payload,
      };
    case "UPDATE_MY_STATE":
      return {
        ...state,
        // Update the products property in the state with the data from the action payload
        products: [...state.products, action.payload],
      };
    case "DELETE_STATE_PROD":
      return {
        ...state,
        products: action.payload,
      };
    case "GET_PRODUCTS_CATEGORY":
      console.log("category", action);
      return {
        ...state,
        category: action.payload,
      };
    case "DEL_PRODUCTS_CATEGORY":
      console.log("category", action);
      return {
        ...state,
        category: action.payload,
      };
    default:
      return state;
  }
};

// Create Redux store
const store = createStore(
  counterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
